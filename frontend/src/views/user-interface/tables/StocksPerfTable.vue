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
      cumulativeReturn: (stockInfo.cumulativeReturn * 100).toFixed(2) + " %",
      annualizedReturn: (stockInfo.annualizedReturn * 100).toFixed(2) + " %",
      annualizedVolatility:
        (stockInfo.annualizedVolatility * 100).toFixed(2) + " %",
      rawCumulativeReturn: stockInfo.cumulativeReturn,
      rawAnnualizedReturn: stockInfo.annualizedReturn,
      rawAnnualizedVolatility: stockInfo.annualizedVolatility,
    };
  });
});

const getVolatilityColor = (vol: number) => {
  //interpolate color between red and green
  const red = hexToRgb(currentTheme.value.error)?.split(",").map(Number);
  const green = hexToRgb(currentTheme.value.success)?.split(",").map(Number);
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
          <th class="text-center text-uppercase">Cumulative Return</th>
          <th class="text-center text-uppercase">Annualized Return</th>
          <th class="text-center text-uppercase">Annualized Volatility</th>
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
              :style="{
                color: getVolatilityColor(item.rawAnnualizedVolatility),
              }"
            >
              {{ item.annualizedVolatility }}
            </span>
          </td>
        </tr>
      </tbody>
    </VTable>
  </VCard>
</template>
