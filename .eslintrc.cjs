module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended' //生效prettier
  ],
  overrides: [],
  parser: 'vue-eslint-parser', // Use vue-eslint-parser to lint the <template> of .vue files:
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    // 关闭eslint对使用any类型的警告
    '@typescript-eslint/no-explicit-any': ['off'],
    // 关闭对使用require的警告
    '@typescript-eslint/no-var-requires': ['off'],
    // 总是允许try-catch的空行存在
    'no-empty': ['error', { allowEmptyCatch: true }]
  }
}
