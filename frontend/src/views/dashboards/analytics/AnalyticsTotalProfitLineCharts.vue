<script setup lang="ts">
import { StocksInfo } from "@/@core/types";
import { Ref } from "vue";
import { useTheme } from "vuetify";
import NightVisionWrapper from "./NighVisionWrapper.vue";
import { Data, NightVisionProps, Overlay, Pane } from "night-vision/dist/types";
import moment from "moment";
import { breakpointsVuetify } from "@vueuse/core";
const vuetifyTheme = useTheme();

const currentTheme = computed(() => {
  return vuetifyTheme.current.value.colors;
});

const stocksLoading = inject("stocksLoading") as Ref<boolean>;

const stocksInfos = inject("stocksInfos") as Ref<StocksInfo[]>;

const timeperiod = inject("timeperiod") as Ref<"1y" | "5y" | "max">;

const selectVal = ref<any>(timeperiod.value);

const chartContainer = ref<any>(null);

watchEffect(() => {
  timeperiod.value = selectVal.value.toLocaleLowerCase() as "1y" | "5y" | "max";
});

const bpoints = useBreakpoints(breakpointsVuetify);

const smallScreen = bpoints.smaller("sm");

const randomHexColor = (min: number, max: number = 255) => {
  // Generate random RGB values within the range of min-max

  const red = Math.floor(Math.random() * (max - min)) + min;
  const green = Math.floor(Math.random() * (max - min)) + min;
  const blue = Math.floor(Math.random() * (max - min)) + min;

  // Convert the RGB values to a hex color
  const hexColor = `#${((1 << 24) | (red << 16) | (green << 8) | blue)
    .toString(16)
    .slice(1)}`;

  return hexColor;
};

const parsedStocksInfos = computed<Data>(() => {
  const minLength = Math.min(
    ...stocksInfos.value.map((stockInfo) => stockInfo.data.length)
  );
  const trimmedData = stocksInfos.value.map((stockInfo) => {
    return stockInfo.data.slice(stockInfo.data.length - minLength);
  });

  const data = stocksInfos.value.map(({ data }) =>
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
        const candlestickColor = vuetifyTheme.current.value.dark
          ? randomHexColor(100)
          : randomHexColor(0, 155);
        return {
          name: stocksInfos.value[i].symbol,
          type: "Spline",
          data: data[i],
          main: false,
          props: {
            color: candlestickColor,
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
    textLG: currentTheme.value["grey-50"],
    llBack: currentTheme.value["grey-400"],
    volDw: "#29595555",
    volUp: "#5ba38d3f",
    wickDw: "#0c5b3b88",
    wickUp: "#41a35088",
  },
}));
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
        <NightVisionWrapper :nvProps="chartOptions"></NightVisionWrapper>
      </VCardText>
    </VCard>
  </div>
</template>
