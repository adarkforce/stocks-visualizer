<script setup lang="ts">
import { Ref } from "vue";
import { SymbolInfo } from "@core/types";

const stocks = inject("stocks") as Ref<string[]>;
const symbols = inject("symbols") as Ref<string[]>;

const perPage = ref(10);

const page = ref(1);

const filteredSymbols = computed(() => {
  return symbols.value.slice(0, page.value * perPage.value);
});

const onIntersect = () => {
  page.value++;
};

const onFocused = () => {
  page.value = 1;
};
</script>

<template>
  <VCol>
    <VRow>
      <VAutocomplete
        name="search"
        label="Search Stocks"
        v-model:model-value="stocks"
        rounded
        prepend-inner-icon="mdi-magnify"
        density="comfortable"
        class="flex-wrap"
        :style="{ maxWidth: 'auto', minWidth: '200px' }"
        chips
        :items="filteredSymbols"
        closable-chips
        filter-keys="raw.symbol"
        multiple
        autocomplete="off"
        @update:focused="onFocused"
        :menu-props="{
          maxHeight: '300px',
        }"
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
          ></VListItem>
        </template>
        <template v-slot:append-item>
          <VListItem
            key="sfg"
            height="100"
            v-intersect="onIntersect"
            class="p-4"
          >
          </VListItem>
        </template>
      </VAutocomplete>
    </VRow>
  </VCol>
</template>
