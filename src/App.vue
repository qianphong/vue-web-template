<script setup lang="ts">
import { type GlobalThemeOverrides, dateZhCN, zhCN } from 'naive-ui'
const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColorHover: '#186DED',
    primaryColor: '#186DED',
    primaryColorPressed: '#186DED',
  },
}
</script>

<template>
  <NConfigProvider
    :theme-overrides="themeOverrides"
    :locale="zhCN"
    :date-locale="dateZhCN"
  >
    <n-message-provider>
      <n-dialog-provider>
        <RouterView />
      </n-dialog-provider>
    </n-message-provider>
  </NConfigProvider>
</template>
