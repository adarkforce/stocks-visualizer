from django.http import HttpResponse, HttpRequest, HttpResponseBadRequest
import simplejson
from stocks.types import Timespan
from stocks.utils import StocksInfoParser
from stocks.env import ALPHA_VANTAGE_API_KEY
import pandas as pd
from django.views.decorators.cache import cache_page
from django.core.cache import cache
from urllib.parse import unquote, quote

# cache.clear()


@cache_page(60 * 60 * 24)
def stocks_list(request: HttpRequest):
    dataframe = pd.read_csv(
        f'https://www.alphavantage.co/query?function=LISTING_STATUS&apikey={ALPHA_VANTAGE_API_KEY}')

    return HttpResponse(simplejson.dumps(dataframe.to_dict(orient='records'), ignore_nan=True), content_type="application/json")


@cache_page(60 * 60 * 24)
def stocks_infos(request: HttpRequest):
    stock = request.GET.get('stock')
    stock = unquote(stock)
    timeperiod: Timespan = request.GET.get('timeperiod')
    if timeperiod is None:
        timeperiod = 'max'
    if stock is None:
        return HttpResponseBadRequest('stock is required')
    req_str = f'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&outputsize=full&datatype=csv&symbol={quote(stock)}&apikey={ALPHA_VANTAGE_API_KEY}'
    dataframe = pd.read_csv(req_str)
    parser = StocksInfoParser()

    responseObj = parser.parse(dataframe, timeperiod)
    return HttpResponse(simplejson.dumps((responseObj), ignore_nan=True), content_type="application/json")
