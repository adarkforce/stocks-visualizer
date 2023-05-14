<script setup lang="ts">
import { StocksInfo } from "@/@core/types";
import { hexToRgb } from "@layouts/utils";
import { Ref } from "vue";
import VueApexCharts from "vue3-apexcharts";
import { useTheme } from "vuetify";

const vuetifyTheme = useTheme();

const currentTheme = computed(() => {
  return vuetifyTheme.current.value.colors;
});
const variableTheme = computed(() => {
  return vuetifyTheme.current.value.variables;
});

const stocksInfos = inject("stocksInfos") as Ref<StocksInfo[]>;

const timeperiod = inject("timeperiod") as Ref<"1y" | "5y" | "max">;

const selectVal = ref<any>(timeperiod.value);

watchEffect(() => {
  timeperiod.value = selectVal.value.toLocaleLowerCase() as "1y" | "5y" | "max";
});

const parsedStocksInfos = computed(() => {
  const minLength = Math.min(
    ...stocksInfos.value.map((stockInfo) => stockInfo.data.length)
  );
  return stocksInfos.value.map((stockInfo) => {
    return {
      name: stockInfo.symbol,
      data: stockInfo.data
        .slice(stockInfo.data.length - minLength, stockInfo.data.length)
        .map((d) => ({ x: d.timestamp, y: d.adjClose })),
    };
  });
});

const chartOptions = computed(() => {
  return {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: true },
      zoom: {
        enabled: true,
        type: "x",
        autoScaleYaxis: true,
      },
      foreColor: currentTheme.value["on-surface"],
    },
    legend: {
      labels: {
        useSeriesColors: true,
      },
    },
    responsive: [
      {
        breakpoint: 10000,
        options: {
          chart: { height: 500 },
        },
      },
      {
        breakpoint: 1000,
        options: {
          chart: { height: "auto" },
        },
      },
    ],
    tooltip: {
      enabled: true,
      shared: true,
      fixed: {
        enabled: false,
        position: "topRight",
        offsetX: 20,
        offsetY: 20,
      },

      theme: vuetifyTheme.current.value.dark ? "dark" : "light",
      y: {
        formatter: function (val: number, data: any) {
          const { series, seriesIndex, dataPointIndex, w } = data;
          if (
            seriesIndex === undefined ||
            dataPointIndex === undefined ||
            series[seriesIndex] === undefined ||
            series[seriesIndex][dataPointIndex] === undefined
          )
            return "";
          const pctChange = Number(
            ((series[seriesIndex][dataPointIndex] - series[seriesIndex][0]) /
              series[seriesIndex][0]) *
              100
          );
          return (
            "$" +
            val.toFixed(2) +
            " " +
            (pctChange > 0 ? "+" : "") +
            pctChange.toFixed(2) +
            "%"
          );
        },
      },
    },
    grid: {
      borderColor: `rgba(${hexToRgb(
        String(variableTheme.value["border-color"])
      )},${variableTheme.value["border-opacity"]})`,
      strokeDashArray: 6,
      xaxis: {
        lines: { show: false },
        type: "numeric",
        labels: { show: true },
      },
      yaxis: {
        lines: { show: true },
        type: "numeric",
      },
      padding: {
        top: -10,
        left: -7,
        right: 5,
        bottom: 5,
      },
    },
    stroke: {
      width: 3,
      lineCap: "butt",
      curve: "smooth",
    },
    markers: {
      size: 6,
      offsetY: 4,
      offsetX: 0,
      strokeWidth: 3,
      colors: ["transparent"],
      strokeColors: "transparent",
      discrete: [
        {
          size: 5.5,
          seriesIndex: 0,
          strokeColors: currentTheme.value.primary,
          colors: currentTheme.value.surface,
        },
      ],
      hover: { size: 7 },
    },
    xaxis: {
      labels: { show: true },
      axisBorder: { show: true },
      type: "datetime",
    },
    yaxis: {
      labels: {
        show: true,
        formatter: (value: string) => {
          return Number(value).toFixed(2);
        },
        style: {
          colors: currentTheme.value["on-surface"],
        },
      },
      tooltip: {
        enabled: true,
        offsetX: 0,
      },
      axisBorder: { show: true },
    },
    noData: {
      text: "No data available.",
      align: "center",
      verticalAlign: "middle",
      offsetX: 0,
      offsetY: 0,
      style: {
        color: currentTheme.value["on-surface"],
        fontSize: "14px",
      },
    },
  };
});
</script>

<template>
  <VCard>
    <VCardTitle class="d-flex align-center">
      <span class="text-h5">Stocks Chart</span>

      <span style="margin: 20px">
        <VSelect v-model="selectVal" :items="['1y', '5y', 'Max']" />
      </span>
    </VCardTitle>

    <VCardText>
      <VueApexCharts
        type="line"
        :options="chartOptions"
        :series="parsedStocksInfos"
      />
    </VCardText>
  </VCard>
</template>
