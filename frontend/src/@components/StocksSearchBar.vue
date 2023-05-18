<script setup lang="ts">
import { Ref } from "vue";
import { SymbolInfo } from "@core/types";
import Fuse from "fuse.js";

const DEFAULT_AUTOCOMPLETE_ITEMS_PER_PAGE = 10;

const stocks = inject("stocks") as Ref<SymbolInfo[]>;
const symbols = inject("symbols") as Ref<string[]>;

const search = ref("");

let fuse = computed(() => {
  return new Fuse(symbols.value, {
    keys: ["symbol", "name"],
    threshold: 0.9,
    shouldSort: true,
  });
});

const perPage = ref(DEFAULT_AUTOCOMPLETE_ITEMS_PER_PAGE);

const page = ref(1);

const filteredSymbols = computed(() => {
  if (!search.value) return symbols.value.slice(0, perPage.value * page.value);
  return fuse.value
    .search(search.value)
    .map((r) => r.item)
    .slice(0, perPage.value * page.value);
});

const onIntersect = () => {
  page.value++;
};

const onFocused = () => {
  search.value = "";
  page.value = 1;
};

const onSearch = () => {
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
        v-model:search="search"
        rounded
        prepend-inner-icon="mdi-magnify"
        density="comfortable"
        class="flex-wrap"
        :style="{ maxWidth: 'auto', minWidth: '200px' }"
        chips
        no-filter
        :items="filteredSymbols"
        closable-chips
        return-object
        multiple
        autocomplete="off"
        @update:focused="onFocused"
        @update:search="onSearch"
        :menu-props="{
          minHeight: 'auto',
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
          <div key="xxxxxxxxxxx" v-intersect="onIntersect"></div>
        </template>
      </VAutocomplete>
    </VRow>
  </VCol>
</template>
