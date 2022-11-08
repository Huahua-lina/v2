# v2

a demo

- 使用的 pnpm

## 分量导入

- pnpm build:demand
- 全量导入在此失效

## 全量导入

- pnpm build
- 需要将两个导出的文件合并

## 问题

- 发现 unocss 无法实现组件样式，
  - 将全部的组件的样式通通引入
- build.ts 中在 build 之前将 config.configFile = false
  - 否则全量打包为空
