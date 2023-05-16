<script setup lang="ts">
import { NightVision } from "night-vision";
import { NightVisionProps } from "night-vision/dist/types";
import { c } from "unimport/dist/types-43c63a16";
import type { PropType } from "vue";

let chart: NightVision | null = null;

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
    chart!.config = val.config!;

    chart!.colors = val.colors!;
    if (val.height) chart!.height = val.height!;
    if (val.width) chart!.width = val.width!;

    if (
      chart!.data?.panes[0]?.overlays?.length &&
      chart!.data?.panes[0]?.overlays?.length >
        val.data!.panes[0].overlays.length
    ) {
      chart!.data.panes[0].overlays[0].data =
        val.data!.panes[0].overlays[0].data;
      chart!.data = val.data!;
      chart!.fullReset();
    } else {
      chart!.data = val.data!;
      chart!.update("full");
    }

  },
  { deep: true }
);

onMounted(() => {
  try {
    chart = new NightVision("chart-container", {
      autoResize: true,
      ...props.nvProps,
    });
  } catch (e) {
    console.log(e);
  }
});
</script>

<template>
  <div style="width: 100%; height: 100%" id="chart-container"></div>
</template>
