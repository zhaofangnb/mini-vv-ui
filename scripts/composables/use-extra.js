const extraComponentName = code => {
  const regexp = /app\.component\(((?<components>.*)\.name), (?<fileName>.*)\)/
  const groups = regexp.exec(code)?.groups
  if (groups?.components) {
    return groups.components
  }
}
const extraDirective = code => {
  const regexp = /app\.directive\('(?<directiveName>.*), ?(?<fileName>.*)\);/
  const groups = regexp.exec(code)?.groups
  if (groups?.fileName) {
    return groups.fileName
  }
}

const extraGlobalProperties = code => {
  const globalPropertiesReg = /app\.config\.globalProperties\.(?<serviceName>\$.*) = (?<serviceFileName>.*);/
  const provideReg = /app\.provide\((?<serviceName>.*)\..*, ?new? ?(?<instanceName>.*)\((?<param>.*)\);/gm
  const groups = globalPropertiesReg.exec(code)?.groups || provideReg.exec(code)
  if (groups?.serviceName) {
    return groups.serviceName
  }
}

const extraValue = code => {
  return extraComponentName(code) ?? extraDirective(code) ?? extraGlobalProperties(code)
}

const extraType = code => {
  const isDirective = /app\.directive/.test(code)
  const isComponent = /app\.component/.test(code)
  const isGlobalProperties = /app\.config\.globalProperties/.test(code)
  const isProvide = /app\.provide/.test(code)
  if (isDirective) {
    return 'directive'
  }
  if (isComponent) {
    return 'component'
  }
  if (isGlobalProperties || isProvide) {
    return 'service'
  }
}

exports.extra = extraValue
exports.extraType = extraType
exports.extraDirective = extraDirective
exports.extraComponentName = extraComponentName
exports.extraGlobalProperties = extraGlobalProperties
