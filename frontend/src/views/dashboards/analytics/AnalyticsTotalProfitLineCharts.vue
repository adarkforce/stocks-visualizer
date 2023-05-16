<script setup lang="ts">
import { StocksInfo } from "@/@core/types";
import { Ref } from "vue";
import { useTheme } from "vuetify";
import NightVisionWrapper from "./NighVisionWrapper.vue";
import { Data, NightVisionProps, Overlay, Pane } from "night-vision/dist/types";
import moment from "moment";
import { randomHexColor } from "@/@core/utils";

const vuetifyTheme = useTheme();

const currentTheme = computed(() => {
  return vuetifyTheme.current.value.colors;
});

const stocksLoading = inject("stocksLoading") as Ref<boolean>;

const stocksInfos = inject("stocksInfos") as Ref<StocksInfo[]>;

const timeperiod = inject("timeperiod") as Ref<"1y" | "5y" | "max">;

const selectVal = ref<any>(timeperiod.value);

const chartContainer = ref<any>(null);

const chartRef = ref<any>(null);

watchEffect(() => {
  timeperiod.value = selectVal.value.toLocaleLowerCase() as "1y" | "5y" | "max";
});

const stocksColors = computed(() => {
  return stocksInfos.value.map(() =>
    vuetifyTheme.current.value.dark
      ? randomHexColor(100)
      : randomHexColor(0, 155)
  );
});

const parsedStocksInfos = computed<Data>(() => {
  const minLength = Math.min(
    ...stocksInfos.value.map((stockInfo) => stockInfo.data.length)
  );
  const trimmedData = stocksInfos.value.map((stockInfo) => {
    stockInfo.data.slice(
      stockInfo.data.length - minLength,
      stockInfo.data.length
    );

    return stockInfo;
  });

  const data = trimmedData.map(({ data }) =>
    data.map((point) => {
      return [
        moment(point.timestamp, "YYYY-MM-DD").valueOf(),
        Math.trunc(point.adjClose * 100) / 100,
      ];
    })
  );

  const panes: Pane[] = [
    {
      id: 0,
      uuid: "main",
      overlays: trimmedData.map((s, i) => {
        return {
          name: s.symbol,
          type: "Spline",
          data: data[i],
          main: false,
          props: {
            color: stocksColors.value[i],
            lineWidth: 1,
          } as Object,
        } as Overlay;
      }),
      settings: {
        scales: {
          A: {
            precision: 2,
          },
        },
      },
    },
  ];

  return {
    indexBased: true,
    panes: panes,
  };
});

const chartOptions = computed<NightVisionProps>(() => ({
  autoResize: true,
  data: parsedStocksInfos.value,
  colors: {
    back: currentTheme.value.surface,
    grid: currentTheme.value["grey-200"],
    textLG: currentTheme.value["on-surface"],
    llBack: currentTheme.value["grey-200"],
  },
}));

const updateRange = () => {
  if (!chartRef.value || !chartRef.value.chart || !parsedStocksInfos.value)
    return;
  const maxLenght = parsedStocksInfos.value.panes[0]?.overlays[0]?.data?.length;
  if (!maxLenght) return;

  let y = 1;
  if (timeperiod.value === "5y") y = 5;
  else if (timeperiod.value === "max") {
    y = 1000;
  }

  if (maxLenght > 0) {
    chartRef.value.chart!.range = [Math.max(0, maxLenght - 252 * y), maxLenght];
  }
};

watch(
  chartOptions,
  () => {
    updateRange();
  },
  {
    flush: "post",
  }
);
</script>

<template>
  <div>
    <VCard ref="chartContainer" :loading="stocksLoading">
      <VCardTitle class="d-flex align-center">
        <span class="text-h5">Stocks Chart</span>

        <span style="margin: 20px">
          <VSelect v-model="selectVal" :items="['1y', '5y', 'Max']" />
        </span>
      </VCardTitle>
      <VCardText>
        <NightVisionWrapper
          ref="chartRef"
          :nvProps="chartOptions"
        ></NightVisionWrapper>
      </VCardText>
    </VCard>
  </div>
</template>
