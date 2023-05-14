<script lang="ts" setup>
import { StocksInfo } from '@/@core/types'
import { Ref } from 'vue'

const stocksInfos = inject('stocksInfos') as Ref<StocksInfo[]>

const tableData = computed(() => {
  return stocksInfos.value.map(stockInfo => {
    return {
      symbol: stockInfo.symbol,
      cumulativeReturn: (stockInfo.cumulativeReturn * 100).toFixed(2) + ' %',
      annualizedReturn: (stockInfo.annualizedReturn * 100).toFixed(2) + ' %',
      annualizedVolatility: stockInfo.annualizedVolatility.toFixed(2),
      rawCumulativeReturn: stockInfo.cumulativeReturn,
      rawAnnualizedReturn: stockInfo.annualizedReturn,
      rawAnnualizedVolatility: stockInfo.annualizedVolatility,
    }
  })
})
</script>

<template>
  <VTable
    height="250"
    fixed-header
  >
    <thead>
      <tr>
        <th class="text-uppercase">Symbol</th>
        <th class="text-center text-uppercase">Cumulative Return</th>
        <th class="text-center text-uppercase">Annualized Return</th>
        <th class="text-center text-uppercase">Annualized Volatility</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in tableData"
        :key="item.symbol"
      >
        <td>
          {{ item.symbol }}
        </td>
        <td :class="[item.rawCumulativeReturn > 0 ? 'text-success' : 'text-error', 'text-center', 'text-no-wrap']">
          <span>
            <VIcon
              size="30"
              :icon="item.rawCumulativeReturn > 0 ? 'mdi-menu-up' : 'mdi-menu-down'"
            />
            {{ item.cumulativeReturn }}
          </span>
        </td>
        <td :class="[item.rawAnnualizedReturn > 0 ? 'text-success' : 'text-error', 'text-center', 'text-no-wrap']">
          <span>
            <VIcon
              size="30"
              :icon="item.rawAnnualizedReturn > 0 ? 'mdi-menu-up' : 'mdi-menu-down'"
            />
            {{ item.annualizedReturn }}
          </span>
        </td>
        <td class="text-center text-no-wrap">
          <span> {{ item.annualizedVolatility }} </span>
        </td>
      </tr>
    </tbody>
  </VTable>
</template>
