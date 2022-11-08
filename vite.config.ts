/// <reference types="vitest" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJSX from '@vitejs/plugin-vue-jsx'
import dts from 'vite-plugin-dts'
import libCss from 'vite-plugin-libcss'
// import UnoCssConfig from './src/config/unocss'
// import libCss from 'vite-plugin-libcss'
export default defineConfig({
  root: './',
  plugins: [
    dts({
      outputDir: 'NaUI/',
      staticImport: true,
      insertTypesEntry: true
    }),
    vue(),
    vueJSX({})
    // UnoCssConfig()
  ],
  // 增加构建时别名
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm-bundler.js'
    }
  },
  server: {
    hmr: {
      overlay: false
    }
  },
  build: {
    // cssCodeSplit: true, // css代码分离
    rollupOptions: {
      // input: './src/components/index.ts',
      external: ['vue', 'vue-router'], // 不需要打包的库处理
      output: {
        // 用于 umd/iffe包中，全局中的某个模块在组件库中交什么
        globals: {
          vue: 'Vue'
        }
      }
    },

    sourcemap: true, // 单独生成 sourceMap
    minify: true, // 混淆，工具 terset esbuild
    outDir: 'NaUI',
    lib: {
      entry: './src/components/index.ts',
      name: 'NaUI',
      fileName: 'NaUI',
      // 导出模块格式
      formats: ['es']
    }
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    transformMode: {
      web: [/.[tj]sx$/]
    }
  }
})
