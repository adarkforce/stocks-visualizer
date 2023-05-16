from typing import Literal
import pandas as pd
import numpy as np
from stocks.types import Timespan

TRADING_DAYS = 252


class StocksInfoParser:

    def parse(self, dataframe: pd.DataFrame, timeperiod: Timespan):

        dataframe['timestamp_index'] = pd.to_datetime(dataframe['timestamp'])
        dataframe = dataframe.set_index('timestamp_index')
        dataframe.sort_values(by="timestamp_index",
                              ascending=True, inplace=True)

        if timeperiod == 'max':
            sortino_ratio, sharpe_ratio, cumulative_returns, \
                annualized_volatility, annualized_return, max_drawdown, \
                max_daily_return, min_daily_return = self.calculate_data(
                    dataframe)
        elif timeperiod == '5y':
            sortino_ratio, sharpe_ratio, cumulative_returns,\
                annualized_volatility, annualized_return, max_drawdown,\
                max_daily_return, min_daily_return = self.calculate_data(
                    dataframe.last("50M"))
        elif timeperiod == '1y':
            sortino_ratio, sharpe_ratio, cumulative_returns, \
                annualized_volatility, annualized_return, max_drawdown, \
                max_daily_return, min_daily_return = self.calculate_data(
                    dataframe.last("12M"))

        return {
            "length": len(dataframe),
            "data": dataframe.to_dict(orient='records'),
            "cumulative_return": cumulative_returns,
            "annualized_return": annualized_return,
            "annualized_volatility": annualized_volatility,
            "sharpe_ratio": sharpe_ratio,
            "sortino_ratio": sortino_ratio,
            "max_drawdown": max_drawdown,
            "max_daily_return": max_daily_return,
            "min_daily_return": min_daily_return
        }

    def calculate_data(self, dataframe: pd.DataFrame):
        daily_returns = dataframe['adjusted_close'].pct_change()

        negative_returns = daily_returns[daily_returns < 0]
        downside_deviation = np.sqrt((negative_returns ** 2).mean())
        annualized_downside_deviation = downside_deviation * \
            np.sqrt(TRADING_DAYS)

        beginning_value = dataframe.iloc[0]['adjusted_close']
        ending_value = dataframe.iloc[-1]['adjusted_close']

        num_years = len(dataframe) / TRADING_DAYS
        annualized_return = ((ending_value / beginning_value) **
                             (1 / num_years)) - 1

        annualized_volatility = daily_returns.std() * np.sqrt(TRADING_DAYS)

        sortino_ratio = annualized_return / annualized_downside_deviation

        cumulative_returns = ((1 + daily_returns).cumprod() - 1)

        cum_max = cumulative_returns.cummax()

        max_drawdown = (cumulative_returns - cum_max).min()

        sharpe_ratio = annualized_return / annualized_volatility

        cumulative_returns = cumulative_returns.iloc[-1]

        max_daily_return = daily_returns.max()

        min_daily_return = daily_returns.min()

        return sortino_ratio, sharpe_ratio, cumulative_returns, annualized_volatility, \
            annualized_return, max_drawdown, max_daily_return, min_daily_return
