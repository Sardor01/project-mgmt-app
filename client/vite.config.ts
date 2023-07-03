/// <reference types="vitest" />

import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import VueRouter from 'unplugin-vue-router/vite'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import UnoCSS from 'unocss/vite'

export default defineConfig({
  resolve: {
    alias: {
      '~': resolve(__dirname, 'src'),
    },
  },
  plugins: [
    VueRouter(),
    Vue({
      script: {
        defineModel: true,
        propsDestructure: true,
      },
    }),
    AutoImport({
      imports: [
        'vue',
        VueRouterAutoImports,
        { 'vee-validate': ['useField', 'useFieldArray', 'useForm'] },
        { '@urql/vue': ['useQuery', 'useMutation'] },
        { '@vee-validate/yup': ['toTypedSchema'] },
      ],
      include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/],
      vueTemplate: true,
    }),
    Components(),
    UnoCSS(),
  ],
  test: {
    environment: 'jsdom',
  },
})
