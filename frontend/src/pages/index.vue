<script setup lang="ts">
import AnalyticsTotalProfitLineCharts from '@/views/dashboards/analytics/AnalyticsTotalProfitLineCharts.vue'
import TableFixedHeader from '@/views/user-interface/tables/StocksPerfTable.vue'
</script>

<template>
  <VRow class="match-height">
    <VCol cols="12">
      <AnalyticsTotalProfitLineCharts />
    </VCol>

    <VCol cols="12">
      <VCard title="Stocks Data">
        <TableFixedHeader />
      </VCard>
    </VCol>
  </VRow>
</template>
