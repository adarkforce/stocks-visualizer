<script setup lang="ts">
import AnalyticsTotalProfitLineCharts from "@components/AnalyticsTotalProfitLineCharts.vue";
import TableFixedHeader from "@components/StocksPerfTable.vue";
</script>

<template>
  <VRow class="match-height">
    <VCol cols="12">
      <AnalyticsTotalProfitLineCharts />
    </VCol>

    <VCol cols="12">
      <VCard title="Stocks Performance">
        <TableFixedHeader />
      </VCard>
    </VCol>
  </VRow>
</template>
