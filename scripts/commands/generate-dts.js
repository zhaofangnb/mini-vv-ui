const path = require('path')
const fs = require('fs')
const fsExtra = require('fs-extra')
const logger = require('../shared/logger')

// 入口目录
const entryDir = path.resolve(__dirname, '../../packages/vv-ui/components/')
// 输出目录
const outputDir = path.resolve(__dirname, '../../build')

const generateIndexDts = buildDir => {
  const fileStr = `import { App } from 'vue';
                    declare function install(app: App): void
                    declare const _default: {
                        install: typeof install;
                        version: string;
                    };
                    export default _default;`
  fsExtra.outputFileSync(path.resolve(buildDir, 'index.d.ts'), fileStr, 'utf8')
}

exports.generateDts = () => {
  generateIndexDts(outputDir)

  const components = fs.readdirSync(entryDir).filter(name => {
    const componentDir = path.resolve(entryDir, name)
    const isDir = fs.lstatSync(componentDir).isDirectory()
    return isDir && fs.readdirSync(componentDir).includes('index.ts')
  })
  const srcDts = path.resolve(outputDir, 'index.d.ts')

  for (const name of components) {
    const desDts = path.resolve(outputDir, `${name}/index.d.ts`)
    fsExtra.outputFileSync(desDts, `123`, 'utf8')
    fs.copyFile(srcDts, desDts, err => {
      if (err) {
        logger.err(`拷贝组件${name}的ts类型文件失败！`)
      }
    })
  }
}
