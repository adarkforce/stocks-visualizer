<script setup lang="ts">
import { Ref } from 'vue'
import { SymbolInfo } from '../types'

const stocks = inject('stocks') as Ref<string[]>
const seachText = ref('')
const symbols = inject('symbols') as Ref<string[]>
</script>

<template>
  <VCol class="mt-10">
    <VRow>
      <VAutocomplete
        name="search"
        label="Search Stocks"
        v-model:search="seachText"
        v-model:model-value="stocks"
        rounded
        prepend-inner-icon="mdi-magnify"
        density="comfortable"
        class="flex-wrap"
        :style="{ maxWidth: 'auto', minWidth: '200px' }"
        chips
        :items="symbols"
        closable-chips
        filter-keys="raw.symbol"
        multiple
        :menu-props="{ maxHeight: '300px' }"
      >
        <template v-slot:chip="{ props, item }">
          <VChip
            :key="((item as any).raw as SymbolInfo).symbol"
            v-bind="props"
            :text="((item as any).raw as SymbolInfo).symbol"
          ></VChip>
        </template>

        <template v-slot:item="{ props, item }">
          <VListItem
            :key="((item as any).raw as SymbolInfo).symbol"
            v-bind="props"
            :title="((item as any).raw as SymbolInfo).symbol"
            :subtitle="((item as any).raw as SymbolInfo).name"
          ></VListItem> </template
      ></VAutocomplete>
    </VRow>
  </VCol>
</template>
