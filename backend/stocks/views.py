from typing import Literal
from django.http import HttpResponse, HttpRequest, HttpResponseBadRequest
import simplejson
from stocks.utils import annualized_return, annualized_volatility, cumulative_returns
from stocks.env import ALPHA_VANTAGE_API_KEY
import pandas as pd
from django.views.decorators.cache import cache_page
from django.core.cache import cache

# cache.clear()


@cache_page(60 * 60 * 24)
def stocks_list(request: HttpRequest):
    dataframe = pd.read_csv(
        f'https://www.alphavantage.co/query?function=LISTING_STATUS&apikey={ALPHA_VANTAGE_API_KEY}')

    return HttpResponse(simplejson.dumps(dataframe.to_dict(orient='records'), ignore_nan=True), content_type="application/json")


class StocksInfoParser:

    def parse(self, dataframe, timeperiod: Literal['1y', '5y', 'max']):

        lenght = self.get_length(dataframe)

        dataframe['timestamp_index'] = pd.to_datetime(dataframe['timestamp'])
        dataframe = dataframe.set_index('timestamp_index')
        dataframe.sort_values(by="timestamp_index",
                              ascending=True, inplace=True)
        dataframe.dropna(inplace=True)

        cumulative_returns = self.get_cumulative_return(dataframe)
        annualized_return = self.get_annualized_return(dataframe)
        annualized_volatility = self.get_annualized_volatility(dataframe)

        if timeperiod == 'max':
            dataframe = self.get_yearly_data(dataframe)
        if timeperiod == '5y':
            dataframe = dataframe.last("50M")
            dataframe = self.get_monthly_data(dataframe)
        elif timeperiod == '1y':
            dataframe = dataframe.last("12M")
            dataframe = self.get_weekly_data(dataframe)
        else:
            dataframe = self.get_weekly_data(dataframe)
        dataframe.dropna(inplace=True)
        return {
            "length": lenght,
            "data": self.get_json(dataframe),
            "cumulative_return": cumulative_returns,
            "annualized_return": annualized_return,
            "annualized_volatility": annualized_volatility
        }

    def get_yearly_data(self, dataframe):
        return dataframe.resample('Y').last()

    def get_monthly_data(self, dataframe):
        return dataframe.resample('M').last()

    def get_cumulative_return(self, dataframe):
        return cumulative_returns(dataframe).iloc[-1]

    def get_annualized_return(self, dataframe):
        return annualized_return(dataframe)

    def get_annualized_volatility(self, dataframe):
        return annualized_volatility(dataframe)

    def get_weekly_data(self, dataframe):
        return dataframe.resample('W').last()

    def get_json(self, dataframe):
        return dataframe.to_dict(orient='records')

    def get_length(self, dataframe):
        return len(dataframe)


@cache_page(60 * 60 * 24)
def stocks_infos(request: HttpRequest):
    stock = request.GET.get('stock')
    timeperiod = request.GET.get('timeperiod')
    if timeperiod is None:
        timeperiod = 'max'
    if stock is None:
        return HttpResponseBadRequest('stock is required')
    req_str = f'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&outputsize=full&datatype=csv&symbol={stock}&apikey={ALPHA_VANTAGE_API_KEY}'
    dataframe = pd.read_csv(req_str)
    parser = StocksInfoParser()

    responseObj = parser.parse(dataframe, timeperiod)
    return HttpResponse(simplejson.dumps((responseObj), ignore_nan=True), content_type="application/json")
