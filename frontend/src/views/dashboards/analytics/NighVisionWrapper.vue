<script setup lang="ts">
import { NightVision } from "night-vision";
import { NightVisionProps } from "night-vision/dist/types";
import type { PropType } from "vue";

let chart = ref<NightVision>();

const props = defineProps({
  nvProps: {
    type: Object as PropType<NightVisionProps>,
    required: true,
  },
});

defineExpose({
  chart,
});

watch(
  () => props.nvProps,
  (val) => {
    if (val.config) chart.value!.config = val.config!;
    if (val.colors) chart.value!.colors = val.colors!;
    if (val.height) chart.value!.height = val.height!;
    if (val.width) chart.value!.width = val.width!;
    if (val.data) chart.value!.data = val.data!;
  }
);

onMounted(() => {
  chart.value = new NightVision("chart-container", {
    autoResize: true,
    ...props.nvProps,
  });
});
</script>

<template>
  <div style="width: 100%; height: 100%" id="chart-container"></div>
</template>
