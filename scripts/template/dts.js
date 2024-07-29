exports.buildGlobalDTSStart = () => {
  return `
  export{}
  declare module '@vue/runtime-core' {`
}
exports.buildComponents = componentString => {
  return `
    export interface GlobalComponents{
        ${componentString}
    }`
}

exports.buildComponentItem = (componentName, key = '') => {
  return `V${componentName}: typeof import('./types/vv-ui')['${key || componentName}']`
}

exports.buildGlobalDTSEnd = () => {
  return `
}`
}
