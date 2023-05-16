<script lang="ts" setup>
import { StocksInfo } from "@/@core/types";
import { hexToRgb } from "@/@layouts/utils";
import { Ref } from "vue";
import { useTheme } from "vuetify/lib/framework.mjs";

const stocksInfos = inject("stocksInfos") as Ref<StocksInfo[]>;

const vuetifyTheme = useTheme();

const currentTheme = computed(() => {
  return vuetifyTheme.current.value.colors;
});

const stocksLoading = inject("stocksLoading") as Ref<boolean>;

const tableData = computed(() => {
  return stocksInfos.value.map((stockInfo) => {
    return {
      symbol: stockInfo.symbol,
      name: stockInfo.name,
      cumulativeReturn: (stockInfo.cumulativeReturn * 100)?.toFixed(2) + " %",
      annualizedReturn: (stockInfo.annualizedReturn * 100)?.toFixed(2) + " %",
      annualizedVolatility:
        (stockInfo.annualizedVolatility * 100)?.toFixed(2) + " %",
      maxDrawdown: (stockInfo.maxDrawdown * 100)?.toFixed(2) + " %",
      sharpeRatio: stockInfo.sharpeRatio?.toFixed(2),
      sortinoRatio: stockInfo.sortinoRatio?.toFixed(2),
      maxDailyReturn: (stockInfo.maxDailyReturn * 100)?.toFixed(2) + " %",
      minDailyReturn: (stockInfo.minDailyReturn * 100)?.toFixed(2) + " %",
      rawCumulativeReturn: stockInfo.cumulativeReturn,
      rawAnnualizedReturn: stockInfo.annualizedReturn,
      rawAnnualizedVolatility: stockInfo.annualizedVolatility,
      rawMaxDrawdown: stockInfo.maxDrawdown,
      rawSharpeRatio: stockInfo.sharpeRatio,
      rawSortinoRatio: stockInfo.sortinoRatio,
      rawMaxDailyReturn: stockInfo.maxDailyReturn,
      rawMinDailyReturn: stockInfo.minDailyReturn,
    };
  });
});

const interpolateColor = (col1: string, col2: string, vol: number) => {
  //interpolate color between red and green
  const red = hexToRgb(col1)?.split(",").map(Number);
  const green = hexToRgb(col2)?.split(",").map(Number);
  if (green && red) {
    const color = green.map((c, i) => {
      return Math.round(c + (red[i] - c) * vol);
    });
    return `rgb(${color})`;
  }
};
</script>

<template>
  <VCard :loading="stocksLoading">
    <VTable height="400" fixed-header>
      <thead>
        <tr>
          <th class="text-uppercase">Symbol</th>
          <th class="text-uppercase">Name</th>
          <th class="text-center text-no-wrap text-uppercase">
            Cumulative Return
          </th>
          <th class="text-center text-no-wrap text-uppercase">
            Annualized Return
          </th>
          <th class="text-center text-no-wrap text-uppercase">
            Annualized Volatility
          </th>
          <th class="text-center text-no-wrap text-uppercase">Max Drawdown</th>
          <th class="text-center text-no-wrap text-uppercase">Sharpe Ratio</th>
          <th class="text-center text-no-wrap text-uppercase">Sortino Ratio</th>
          <th class="text-center text-no-wrap text-uppercase">
            Min Daily Return
          </th>
          <th class="text-center text-no-wrap text-uppercase">
            Max Daily Return
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in tableData" :key="item.symbol">
          <td>
            {{ item.symbol }}
          </td>
          <td class="text-no-wrap">
            {{ item.name }}
          </td>
          <td
            v-if="!!item.rawCumulativeReturn"
            :class="[
              item.rawCumulativeReturn > 0 ? 'text-success' : 'text-error',
              'text-center',
              'text-no-wrap',
            ]"
          >
            <span>
              <VIcon
                size="30"
                :icon="
                  item.rawCumulativeReturn > 0 ? 'mdi-menu-up' : 'mdi-menu-down'
                "
              />
              {{ item.cumulativeReturn }}
            </span>
          </td>
          <td
            v-if="!!item.rawAnnualizedReturn"
            :class="[
              item.rawAnnualizedReturn > 0 ? 'text-success' : 'text-error',
              'text-center',
              'text-no-wrap',
            ]"
          >
            <span>
              <VIcon
                size="30"
                :icon="
                  item.rawAnnualizedReturn > 0 ? 'mdi-menu-up' : 'mdi-menu-down'
                "
              />
              {{ item.annualizedReturn }}
            </span>
          </td>
          <td class="text-center text-no-wrap">
            <span
              v-if="!!item.rawAnnualizedVolatility"
              :style="{
                color: interpolateColor(
                  currentTheme.error,
                  currentTheme.success,
                  item.rawAnnualizedVolatility * 2
                ),
              }"
            >
              {{ item.annualizedVolatility }}
            </span>
          </td>
          <td class="text-center text-no-wrap">
            <span
              v-if="!!item.rawMaxDrawdown"
              :style="{
                color: interpolateColor(
                  currentTheme.success,
                  currentTheme.error,
                  1 + item.rawMaxDrawdown
                ),
              }"
            >
              {{ item.maxDrawdown }}
            </span>
          </td>
          <td class="text-center text-no-wrap">
            <span
              v-if="!!item.rawSharpeRatio"
              :style="{
                color: interpolateColor(
                  currentTheme.success,
                  currentTheme.error,
                  item.rawSharpeRatio * 0.5
                ),
              }"
            >
              {{ item.sharpeRatio }}
            </span>
          </td>
          <td class="text-center text-no-wrap">
            <span
              v-if="!!item.rawSortinoRatio"
              :style="{
                color: interpolateColor(
                  currentTheme.success,
                  currentTheme.error,
                  item.rawSortinoRatio * 0.5
                ),
              }"
            >
              {{ item.sortinoRatio }}
            </span>
          </td>
          <td class="text-center text-no-wrap">
            <span
              v-if="!!item.rawMinDailyReturn"
              :style="{
                color: interpolateColor(
                  currentTheme.error,
                  currentTheme.success,
                  -item.rawMinDailyReturn * 10
                ),
              }"
            >
              {{ item.minDailyReturn }}
            </span>
          </td>
          <td class="text-center text-no-wrap">
            <span
              v-if="!!item.rawMaxDailyReturn"
              :style="{
                color: interpolateColor(
                  currentTheme.success,
                  currentTheme.error,
                  item.rawMaxDailyReturn * 10
                ),
              }"
            >
              {{ item.maxDailyReturn }}
            </span>
          </td>
        </tr>
      </tbody>
    </VTable>
  </VCard>
</template>
