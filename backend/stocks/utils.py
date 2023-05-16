from typing import Literal
import pandas as pd
import numpy as np

TRADING_DAYS = 252


class StocksInfoParser:

    def parse(self, dataframe: pd.DataFrame, timeperiod: Literal['1y', '5y', 'max']):

        lenght = self.get_length(dataframe)

        dataframe['timestamp_index'] = pd.to_datetime(dataframe['timestamp'])
        dataframe = dataframe.set_index('timestamp_index')
        dataframe.sort_values(by="timestamp_index",
                              ascending=True, inplace=True)

        def calculate_data(dataframe):

            cumulative_returns = self.get_cumulative_return(dataframe)
            annualized_return = self.get_annualized_return(dataframe)
            annualized_volatility = self.get_annualized_volatility(dataframe)

            return cumulative_returns, annualized_return, annualized_volatility
        # to show less data points we resample the data based on the timeperiod
        # but the calculations are based on the original data
        if timeperiod == 'max':
            cumulative_returns, annualized_return, annualized_volatility = calculate_data(
                dataframe)
        if timeperiod == '5y':
            cumulative_returns, annualized_return, annualized_volatility = calculate_data(
                dataframe.last("50M"))
        elif timeperiod == '1y':
            cumulative_returns, annualized_return, annualized_volatility = calculate_data(
                dataframe.last("12M"))

        return {
            "length": lenght,
            "data": self.get_json(dataframe),
            "cumulative_return": cumulative_returns,
            "annualized_return": annualized_return,
            "annualized_volatility": annualized_volatility
        }

    def get_cumulative_return(self, dataframe):
        # Calculate daily returns
        # Uses Rate of Change (ROC) to calculate daily returns
        daily_prices = dataframe['adjusted_close']
        daily_returns = daily_prices.pct_change()

        return ((1 + daily_returns).cumprod() - 1).iloc[-1]

    def get_annualized_return(self, dataframe):
        # Calculate the annualized return
        beginning_value = dataframe.iloc[0]['adjusted_close']
        ending_value = dataframe.iloc[-1]['adjusted_close']
        # Assuming 252 trading days per year
        num_years = len(dataframe) / TRADING_DAYS
        return ((ending_value / beginning_value) ** (1 / num_years)) - 1

    def get_annualized_volatility(self, dataframe):
        # Calculate daily returns
        daily_returns = dataframe['adjusted_close'].pct_change()

        # Calculate annualized volatility
        annualized_volatility = daily_returns.std() * np.sqrt(TRADING_DAYS)

        return annualized_volatility

    def get_json(self, dataframe):
        return dataframe.to_dict(orient='records')

    def get_length(self, dataframe):
        return len(dataframe)
