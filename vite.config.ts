import { resolve } from 'path'
import { defineConfig, loadEnv } from 'vite'
import Vue from '@vitejs/plugin-vue'
import VueMacros from 'unplugin-vue-macros/vite'
import UnoCSS from 'unocss/vite'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import WebConfig from 'vite-plugin-web-config'
// import Visualizer from 'rollup-plugin-visualizer'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  return {
    base: env.VITE_PUBLIC_PATH || './',
    plugins: [
      VueMacros({
        plugins: {
          vue: Vue(),
        },
      }),
      UnoCSS(),
      Pages({ exclude: ['**/components/**', '**/**/*.ts'] }),
      Layouts(),
      AutoImport({
        imports: ['vue', 'vue-router', '@vueuse/core'],
        dts: 'types/auto-imports.d.ts',
        resolvers: [NaiveUiResolver()],
      }),
      Components({
        resolvers: [NaiveUiResolver()],
        directoryAsNamespace: true,
        dts: 'types/components.d.ts',
      }),
      WebConfig(),
      // Visualizer({
      //   filename: './node_modules/.cache/visualizer/stats.html',
      //   open: true,
      //   gzipSize: true,
      //   brotliSize: true,
      // }),
    ],
    resolve: {
      alias: {
        '@': `${resolve(__dirname, './src')}`,
        '#': `${resolve(__dirname, './types')}`,
      },
    },
  }
})
