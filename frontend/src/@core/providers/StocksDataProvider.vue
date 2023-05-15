<script setup lang="ts">
import axios from "axios";
import { provide, ref, watchEffect } from "vue";
import { StocksInfo, SymbolInfo } from "../types";
import { STOCKS_SYMBOLS } from "./data";

const symbols = ref<SymbolInfo[]>([]);

const initialStocks = localStorage.getItem("initialStocks")
  ? JSON.parse(localStorage.getItem("initialStocks")!)
  : ["AAPL", "GOOG", "MSFT"];

const stocks = ref<SymbolInfo[]>([]);

const timeperiod = ref<"1y" | "5y" | "max">("1y");

const stocksInfos = ref<StocksInfo[]>([]);

const loading = ref<boolean>(false);

const stocksLut = computed(() => {
  const lut: any = {};
  stocks.value.forEach((stock) => {
    lut[stock.symbol] = stock;
  });
  return lut;
});

const getStockInfo = async (stock: string, timeperiod: "1y" | "5y" | "max") => {
  try {
    const resp = await axios.get(`${process.env.BACKEND_URL}/stocks/infos/`, {
      params: {
        stock,
        timeperiod,
      },
    });
    const data = resp.data;
    const stockInfo: StocksInfo = {
      symbol: stock,
      data: data.data.map((d: any) => {
        return {
          timestamp: d.timestamp,
          open: d.open,
          high: d.high,
          low: d.low,
          close: d.close,
          volume: d.volume,
          adjClose: d.adjusted_close,
        };
      }),
      cumulativeReturn: data.cumulative_return,
      annualizedReturn: data.annualized_return,
      annualizedVolatility: data.annualized_volatility,
      name: stocksLut.value[stock].name,
    };
    return stockInfo;
  } catch (err) {
    console.log(err);
  }
};

const getStocksList = async () => {
  return STOCKS_SYMBOLS;
};

watchEffect(async () => {
  const newStocksInfos: StocksInfo[] = [];
  const promises: any[] = [];
  loading.value = true;

  stocks.value.forEach((stock) => {
    promises.push(
      (async () => {
        const stockInfo = await getStockInfo(stock.symbol, timeperiod.value);
        if (stockInfo) {
          newStocksInfos.push(stockInfo);
        }
      })()
    );
  });

  try {
    await Promise.all(promises);
  } catch (err) {
    console.log(err);
  } finally {
    loading.value = false;
  }

  stocksInfos.value = newStocksInfos;
});

watchEffect(() => {
  localStorage.setItem(
    "initialStocks",
    JSON.stringify(stocks.value.map((s) => s.symbol))
  );
});

onBeforeMount(() => {
  getStocksList().then((data) => {
    symbols.value = data;
    stocks.value = data.filter(
      (d: any) => initialStocks.indexOf(d.symbol) !== -1
    );
  });
});

provide("stocksInfos", stocksInfos);
provide("stocks", stocks);
provide("symbols", symbols);
provide("timeperiod", timeperiod);
provide("stocksLoading", loading);
</script>

<template>
  <slot></slot>
</template>
