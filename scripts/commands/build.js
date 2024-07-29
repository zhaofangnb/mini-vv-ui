// const path = require('path')
// const fs = require('fs')
// const { defineConfig, build } = require('vite')
// const vue = require('@vitejs/plugin-vue')
// const vueJsx = require('@vitejs/plugin-vue-jsx')
// const fsExtra = require('fs-extra')
// const util = require('util')
// const { version } = require('../../package.json')

import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'
import { defineConfig, build } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import fsExtra from 'fs-extra'
import util from 'util'
const version = process.env.npm_package_version
const __dirname = path.dirname(fileURLToPath(import.meta.url))

// const { execSync } = require('child_process')
// const logger = require('../shared/logger')
// const { generateDts } = require('./generate-dts')
// const { buildGlobalDTSStart, buildComponents, buildComponentItem, buildGlobalDTSEnd } = require('../template/dts')

// 用promise包装fs.copyFile()方法
const copyFilePromise = util.promisify(fs.copyFile)
// 批量拷贝文件
const copyFiles = (src, dest, files) => {
  return Promise.all(
    files.map(f => {
      return copyFilePromise(path.join(src, f), path.join(dest, f))
    })
  )
}

const rootDir = path.resolve(__dirname, '../../')
// 入口目录
const entryDir = path.resolve(__dirname, '../../packages/vv-ui/components/')
// 输出目录
const outputDir = path.resolve(__dirname, '../../build')

// 基础配置
const baseConfig = defineConfig({
  configFile: false,
  publicDir: false,
  plugins: [vue(), vueJsx()]
})

const rollupOptions = {
  // 确保外部化处理那些你不想打包进库的依赖
  external: ['vue', 'vue-router'],
  output: {
    // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
    globals: {
      vue: 'Vue'
    }
  }
}

// 生成package.json
const createPackageJson = name => {
  const fileJsonStr = `{
        "name": "${name ? name : 'mini-vv-ui'}",
        "version": "${version}",
        "main": "${name ? 'index.umd.js' : 'mini-vv-ui.umd.js'}",
        "module": "${name ? 'index.js' : 'mini-vv-ui.js'}",
        "style": "style.css",
        "types": "${name ? `../types/${name}/index.d.ts` : ''}",
        "author": "lucky-zhaofang",
        "description": "${name ? 'mini-vv-ui-' + `${name}` : 'mini-vv-ui'}",
        "license": "MIT"
    }`
  if (name) {
    // 写入对应单个组件的package.json
    fsExtra.outputFile(path.resolve(outputDir, `${name}/package.json`), fileJsonStr, 'utf8')
  } else {
    // 写入全量的package.json
    fsExtra.outputFile(path.resolve(outputDir, 'package.json'), fileJsonStr, 'utf8')
  }
}

// 单组件按需构建W
const buildSingle = async name => {
  await build(
    defineConfig({
      ...baseConfig,
      build: {
        rollupOptions,
        lib: {
          entry: path.resolve(entryDir, name),
          name: 'index',
          fileName: 'index',
          formats: ['es', 'umd']
        },
        outDir: path.resolve(outputDir, name)
      }
    })
  )
  createPackageJson(name)
}

// 全量组件构建
const buildAll = async () => {
  await build(
    defineConfig({
      ...baseConfig,
      build: {
        rollupOptions,
        lib: {
          entry: path.resolve(entryDir, 'vv-ui.ts'),
          name: 'mini-vv-ui',
          fileName: 'mini-vv-ui',
          formats: ['es', 'umd']
        },
        outDir: outputDir
      }
    })
  )

  createPackageJson()
  copyFiles(rootDir, outputDir, ['README.md'])
    .then(() => {
      console.log('README.md写入成功')
    })
    .catch(err => {
      console.log(err)
    })
}

const buildLib = async () => {
  await buildAll()

  //遍历组件目录 按需打包
  fs.readdirSync(entryDir)
    .filter(name => {
      const componentDir = path.resolve(entryDir, name)
      const isDir = fs.lstatSync(componentDir).isDirectory()
      // 只要目录不要文件，且目录里面包含index.ts文件
      return isDir && fs.readdirSync(componentDir).includes('index.ts')
    })
    .forEach(async name => {
      await buildSingle(name)
    })

  // 生成 global.d.ts
  // try {
  //   execSync(`yarn run  build:dts`)
  // } catch {}

  // logger.success('准备生成 global.d.ts')
  // const template = `
  // ${buildGlobalDTSStart()}
  // ${buildGlobalDTSEnd()}
  // `
  // fs.writeFileSync('./buid/global.d.ts', template)

  // logger.success('准备生成 index.d.ts')
  // fs.writeFileSync(
  //   './build/index.d.ts',
  //   `export * from './types/vv-ui';
  //     import _default from './types/vv-ui';
  //     export default _default;`
  // )
  // generateDts()
}
buildLib()
