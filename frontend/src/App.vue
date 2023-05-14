<script setup lang="ts">
import StocksDataProvider from './@core/providers/StocksDataProvider.vue'
</script>

<template>
  <VApp>
    <VLayout class="layout-wrapper layout-nav-type-vertical">
      <StocksDataProvider>
        <RouterView />
      </StocksDataProvider>
    </VLayout>
  </VApp>
</template>
