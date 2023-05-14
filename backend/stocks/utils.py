import pandas as pd
import talib
import numpy as np

TRADING_DAYS = 252


def cumulative_returns(dataframe):
    # Calculate daily returns
    # Uses Rate of Change (ROC) to calculate daily returns
    daily_prices = dataframe['adjusted_close']
    daily_returns = daily_prices.pct_change()

    return (1 + daily_returns).cumprod() - 1


def annualized_return(dataframe):

    # Calculate the annualized return
    beginning_value = dataframe.iloc[0]['adjusted_close']
    ending_value = dataframe.iloc[-1]['adjusted_close']
    # Assuming 252 trading days per year
    num_years = len(dataframe) / TRADING_DAYS
    return ((ending_value / beginning_value) ** (1 / num_years)) - 1


def annualized_volatility(datarame):
    # Calculate daily returns
    # Uses Rate of Change (ROC) to calculate daily returns
    daily_returns = talib.ROC(datarame['adjusted_close'], timeperiod=1)

    # Calculate annualized volatility
    annualized_volatility = daily_returns.std() * np.sqrt(TRADING_DAYS)

    return annualized_volatility
