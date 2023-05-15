<script setup lang="ts">
import type { ThemeSwitcherTheme } from "@layouts/types";
import { useTheme } from "vuetify";

const props = defineProps<{
  themes: ThemeSwitcherTheme[];
}>();

const vuetifyTheme = useTheme();
const {
  state: currentTheme,
  next: getNextThemeName,
  index: currentThemeIndex,
} = useCycleList(
  props.themes.map((t) => t.name),
  { initialValue: vuetifyTheme.global.name.value }
);
const changeTheme = () => {
  vuetifyTheme.global.name.value = getNextThemeName();
};

onBeforeMount(() => {
  const mm = window.matchMedia("(prefers-color-scheme: dark)");
  if (mm.matches) {
    vuetifyTheme.global.name.value = "dark";
  } else {
    vuetifyTheme.global.name.value = "light";
  }
});

const getThemeIcon = computedWithControl(vuetifyTheme.global.name, () => {
  const nextThemeIndex =
    currentThemeIndex.value + 1 === props.themes.length
      ? 0
      : currentThemeIndex.value + 1;

  return props.themes[nextThemeIndex].icon;
});

watch(vuetifyTheme.global.name, (val) => {
  currentTheme.value = val;
});
</script>

<template>
  <VBtn icon variant="text" color="default" size="small" @click="changeTheme">
    <VIcon :icon="getThemeIcon" size="24" />
  </VBtn>
</template>
