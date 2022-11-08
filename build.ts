// 按需引入，为每个文件都分配好一个package.json
import * as fs from 'fs'
import * as fsExtra from 'fs-extra'
import * as path from 'path'
import config from './vite.config'
const __dirname = path.resolve()
import { build, InlineConfig, defineConfig, UserConfig } from 'vite'
async function Start() {
  const buildAll = async () => {
    const srcDir = path.resolve(__dirname, 'src/components')
    // @ts-ignore
    const out: string = (config as UserConfig).build.outDir
    fs.readdirSync(srcDir)
      .filter((name) => {
        const componentDir = path.resolve(srcDir, name)
        const isDir = fs.lstatSync(componentDir).isDirectory()
        return isDir && fs.readdirSync(componentDir).includes('index.ts')
      })
      .forEach(async (name) => {
        const outDir = path.resolve(out, name)
        const custom = {
          lib: {
            entry: path.resolve(srcDir, name + '/index.ts'),
            name, // 导出模块名
            fileName: name,
            formats: ['es', 'umd']
          },
          outDir
        }
        // ;(config as UserConfig).root = '../'
        // @ts-ignore
        // config.build.cssCodeSplit = false
        const tempConfig = { ...config } as UserConfig
        // @ts-ignore
        tempConfig.build = { ...tempConfig.build, ...custom }
        await build(defineConfig(tempConfig) as InlineConfig)
        fsExtra.outputFile(
          path.resolve(outDir, `package.json`),
          `{
            "name": "NaUI/${name}",
            "main": "index.umd.js",
            "module": "index.umd.js"
          }`,
          `utf-8`
        )
      })
  }

  ;(config as InlineConfig).configFile = false
  await build(defineConfig(config as UserConfig) as InlineConfig)

  await buildAll()
}
Start()
