<script lang="ts" setup>
import { VerticalNavLayout } from '@layouts'

// Components
import NavbarThemeSwitcher from '@/layouts/components/NavbarThemeSwitcher.vue'
</script>

<template>
  <VerticalNavLayout>
    <!-- 👉 navbar -->
    <template #navbar>
      <StocksSearchBar />

      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        style="color: inherit"
      >
        <VIcon
          class="ms-6 me-4"
          icon="mdi-github"
        />
      </a>
      <NavbarThemeSwitcher />
    </template>

    <!-- 👉 Pages -->
    <div class="layout-page-content">
      <RouterView />
    </div>

    <!-- 👉 Footer -->
    <template #footer> </template>
  </VerticalNavLayout>
</template>
<style lang="scss">
.app-bar-search {
  .v-input__control {
    width: 236px;
  }

  .v-field__outline__start {
    border-radius: 28px 0 0 28px !important;
    flex-basis: 20px !important;
  }

  .v-field__outline__end {
    border-radius: 0 28px 28px 0 !important;
  }
}
</style>
