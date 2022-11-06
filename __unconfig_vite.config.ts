let __unconfig_data
const __unconfig_stub = function (data = {}) {
  __unconfig_data = data
}
__unconfig_stub.default = (data = {}) => {
  __unconfig_data = data
}
/// <reference types="vitest" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJSX from '@vitejs/plugin-vue-jsx'
import UnoCssConfig from './src/config/unocss'
const __unconfig_default = defineConfig({
  plugins: [vue(), vueJSX({}), UnoCssConfig()],
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
    cssCodeSplit: true, // css代码分离
    rollupOptions: {
      external: ['vue', 'vue-router'], // 不需要打包的库处理
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    },
    minify: false,
    outDir: 'DemoDist',
    lib: {
      entry: './src/components/entry.ts',
      name: 'DemoDist',
      fileName: 'DemoDist',
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

if (typeof __unconfig_default === 'function') __unconfig_default(...[{ command: 'serve', mode: 'development' }])
export default __unconfig_data
