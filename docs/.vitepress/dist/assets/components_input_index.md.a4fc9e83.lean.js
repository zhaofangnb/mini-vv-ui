import { V as u, _ as V, c as _, a as d, w as m, b as l, d as s, r as v, o as g } from './app.2ba2cf25.js'
const { defineComponent: B } = u,
  I = B({
    name: 'component-doc',
    components: {
      'render-demo-0': (function () {
        const { resolveComponent: a, createVNode: p, withCtx: F, openBlock: C, createBlock: i } = u
        function A(o, e) {
          const t = a('VInput'),
            r = a('VSpace')
          return (
            C(),
            i(r, null, {
              default: F(() => [
                p(t, { modelValue: o.value, 'onUpdate:modelValue': e[0] || (e[0] = c => (o.value = c)) }, null, 8, [
                  'modelValue'
                ])
              ]),
              _: 1
            })
          )
        }
        const { defineComponent: D, ref: n } = u,
          y = D({
            setup() {
              return { value: n('') }
            }
          })
        return { render: A, ...y }
      })(),
      'render-demo-1': (function () {
        const { resolveComponent: a, createVNode: p, withCtx: F, openBlock: C, createBlock: i } = u
        function A(o, e) {
          const t = a('VInput'),
            r = a('VSpace')
          return (
            C(),
            i(r, null, {
              default: F(() => [
                p(
                  t,
                  {
                    modelValue: o.value,
                    'onUpdate:modelValue': e[0] || (e[0] = c => (o.value = c)),
                    disabled: '',
                    placeholder: '请输入'
                  },
                  null,
                  8,
                  ['modelValue']
                )
              ]),
              _: 1
            })
          )
        }
        const { defineComponent: D, ref: n } = u,
          y = D({
            setup() {
              return { value: n('') }
            }
          })
        return { render: A, ...y }
      })(),
      'render-demo-2': (function () {
        const { resolveComponent: a, createVNode: p, withCtx: F, openBlock: C, createBlock: i } = u
        function A(o, e) {
          const t = a('VInput'),
            r = a('VSpace')
          return (
            C(),
            i(r, null, {
              default: F(() => [
                p(
                  t,
                  {
                    modelValue: o.value,
                    'onUpdate:modelValue': e[0] || (e[0] = c => (o.value = c)),
                    placeholder: '请输入',
                    allowClear: ''
                  },
                  null,
                  8,
                  ['modelValue']
                )
              ]),
              _: 1
            })
          )
        }
        const { defineComponent: D, ref: n } = u,
          y = D({
            setup() {
              return { value: n('') }
            }
          })
        return { render: A, ...y }
      })(),
      'render-demo-3': (function () {
        const { resolveComponent: a, createVNode: p, withCtx: F, openBlock: C, createBlock: i } = u
        function A(o, e) {
          const t = a('VInput'),
            r = a('VSpace')
          return (
            C(),
            i(
              r,
              { direction: 'vertical' },
              {
                default: F(() => [
                  p(
                    t,
                    {
                      modelValue: o.value1,
                      'onUpdate:modelValue': e[0] || (e[0] = c => (o.value1 = c)),
                      size: 'small',
                      placeholder: '请输入',
                      allowClear: !0
                    },
                    null,
                    8,
                    ['modelValue']
                  ),
                  p(
                    t,
                    {
                      modelValue: o.value2,
                      'onUpdate:modelValue': e[1] || (e[1] = c => (o.value2 = c)),
                      size: 'medium',
                      placeholder: '请输入',
                      allowClear: !0
                    },
                    null,
                    8,
                    ['modelValue']
                  ),
                  p(
                    t,
                    {
                      modelValue: o.value3,
                      'onUpdate:modelValue': e[2] || (e[2] = c => (o.value3 = c)),
                      size: 'large',
                      placeholder: '请输入',
                      allowClear: !0
                    },
                    null,
                    8,
                    ['modelValue']
                  )
                ]),
                _: 1
              }
            )
          )
        }
        const { defineComponent: D, ref: n } = u,
          y = D({
            setup() {
              const o = n(''),
                e = n(''),
                t = n('')
              return { value1: o, value2: e, value3: t }
            }
          })
        return { render: A, ...y }
      })(),
      'render-demo-4': (function () {
        const { resolveComponent: a, createVNode: p, withCtx: F, openBlock: C, createBlock: i } = u
        function A(o, e) {
          const t = a('VIcon'),
            r = a('VInput'),
            c = a('VSpace')
          return (
            C(),
            i(c, null, {
              default: F(() => [
                p(
                  r,
                  {
                    modelValue: o.value,
                    'onUpdate:modelValue': e[0] || (e[0] = h => (o.value = h)),
                    placeholder: '请输入'
                  },
                  { suffix: F(() => [p(t, { name: 'search' })]), _: 1 },
                  8,
                  ['modelValue']
                )
              ]),
              _: 1
            })
          )
        }
        const { defineComponent: D, ref: n } = u,
          y = D({
            setup() {
              return { value: n('') }
            }
          })
        return { render: A, ...y }
      })(),
      'render-demo-5': (function () {
        const { resolveComponent: a, createVNode: p, withCtx: F, openBlock: C, createBlock: i } = u
        function A(o, e) {
          const t = a('VInput'),
            r = a('VSpace')
          return (
            C(),
            i(r, null, {
              default: F(() => [
                p(
                  t,
                  {
                    modelValue: o.value,
                    'onUpdate:modelValue': e[0] || (e[0] = c => (o.value = c)),
                    placeholder: '请输入',
                    onClear: o.handleClear,
                    onFocus: o.handleFocus,
                    onBlur: o.handleBlur,
                    onPressEnter: o.pressEnter,
                    allowClear: ''
                  },
                  null,
                  8,
                  ['modelValue', 'onClear', 'onFocus', 'onBlur', 'onPressEnter']
                )
              ]),
              _: 1
            })
          )
        }
        const { defineComponent: D, ref: n } = u,
          y = D({
            setup() {
              return {
                value: n(''),
                handleInput: (f, E) => {
                  console.log(f, E.target.value)
                },
                handleClear: f => {
                  console.log('清空')
                },
                handleFocus: f => {
                  f.target.focus(), console.log('focus', f)
                },
                handleBlur: f => {
                  f.target.blur(), console.log('blur', f)
                },
                pressEnter: f => {
                  console.log('pressEnter', f)
                }
              }
            }
          })
        return { render: A, ...y }
      })()
    }
  }),
  G = JSON.parse(
    '{"title":"输入框 VInput","description":"","frontmatter":{},"headers":[{"level":2,"title":"基本用法","slug":"基本用法","link":"#基本用法","children":[]},{"level":2,"title":"输入框禁用","slug":"输入框禁用","link":"#输入框禁用","children":[]},{"level":2,"title":"输入一键清空","slug":"输入一键清空","link":"#输入一键清空","children":[]},{"level":2,"title":"输入框尺寸","slug":"输入框尺寸","link":"#输入框尺寸","children":[]},{"level":2,"title":"带图标的输入框","slug":"带图标的输入框","link":"#带图标的输入框","children":[]},{"level":2,"title":"输入响应事件","slug":"输入响应事件","link":"#输入响应事件","children":[]}],"relativePath":"components/input/index.md","lastUpdated":1679996563000}'
  ),
  x = l(
    'h1',
    { id: '输入框-vinput', tabindex: '-1' },
    [s('输入框 VInput '), l('a', { class: 'header-anchor', href: '#输入框-vinput', 'aria-hidden': 'true' }, '#')],
    -1
  ),
  k = l(
    'h2',
    { id: '基本用法', tabindex: '-1' },
    [s('基本用法 '), l('a', { class: 'header-anchor', href: '#基本用法', 'aria-hidden': 'true' }, '#')],
    -1
  ),
  S = l(
    'div',
    { class: 'language-vue' },
    [
      l('pre', { 'v-pre': '', class: 'shiki material-theme-palenight', tabindex: '0' }, [
        l('code', null, [
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#89DDFF' } }, '<'),
            l('span', { style: { color: '#F07178' } }, 'template'),
            l('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#A6ACCD' } }, '    '),
            l('span', { style: { color: '#89DDFF' } }, '<'),
            l('span', { style: { color: '#F07178' } }, 'VSpace'),
            l('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#A6ACCD' } }, '        '),
            l('span', { style: { color: '#89DDFF' } }, '<'),
            l('span', { style: { color: '#F07178' } }, 'VInput'),
            l('span', { style: { color: '#89DDFF' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, 'v-model'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'value'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, '></'),
            l('span', { style: { color: '#F07178' } }, 'VInput'),
            l('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#A6ACCD' } }, '    '),
            l('span', { style: { color: '#89DDFF' } }, '</'),
            l('span', { style: { color: '#F07178' } }, 'VSpace'),
            l('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#89DDFF' } }, '</'),
            l('span', { style: { color: '#F07178' } }, 'template'),
            l('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#89DDFF' } }, '<'),
            l('span', { style: { color: '#F07178' } }, 'script'),
            l('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#89DDFF', 'font-style': 'italic' } }, 'import'),
            l('span', { style: { color: '#A6ACCD' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '{'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#A6ACCD' } }, 'defineComponent'),
            l('span', { style: { color: '#89DDFF' } }, ','),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#A6ACCD' } }, 'ref'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '}'),
            l('span', { style: { color: '#A6ACCD' } }, ' '),
            l('span', { style: { color: '#89DDFF', 'font-style': 'italic' } }, 'from'),
            l('span', { style: { color: '#A6ACCD' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#C3E88D' } }, 'vue'),
            l('span', { style: { color: '#89DDFF' } }, "'")
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#89DDFF', 'font-style': 'italic' } }, 'export'),
            l('span', { style: { color: '#A6ACCD' } }, ' '),
            l('span', { style: { color: '#89DDFF', 'font-style': 'italic' } }, 'default'),
            l('span', { style: { color: '#A6ACCD' } }, ' '),
            l('span', { style: { color: '#82AAFF' } }, 'defineComponent'),
            l('span', { style: { color: '#A6ACCD' } }, ' ('),
            l('span', { style: { color: '#89DDFF' } }, '{')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#A6ACCD' } }, '    '),
            l('span', { style: { color: '#F07178' } }, 'setup'),
            l('span', { style: { color: '#A6ACCD' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '()'),
            l('span', { style: { color: '#A6ACCD' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '{')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '        '),
            l('span', { style: { color: '#C792EA' } }, 'const'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#A6ACCD' } }, 'value'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#82AAFF' } }, 'ref'),
            l('span', { style: { color: '#F07178' } }, '('),
            l('span', { style: { color: '#89DDFF' } }, "''"),
            l('span', { style: { color: '#F07178' } }, ')')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '        '),
            l('span', { style: { color: '#89DDFF', 'font-style': 'italic' } }, 'return'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '{')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '            '),
            l('span', { style: { color: '#A6ACCD' } }, 'value')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '        '),
            l('span', { style: { color: '#89DDFF' } }, '}')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '    '),
            l('span', { style: { color: '#89DDFF' } }, '}')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#89DDFF' } }, '}'),
            l('span', { style: { color: '#A6ACCD' } }, ')')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#89DDFF' } }, '</'),
            l('span', { style: { color: '#F07178' } }, 'script'),
            l('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          l('span', { class: 'line' })
        ])
      ])
    ],
    -1
  ),
  w = l(
    'h2',
    { id: '输入框禁用', tabindex: '-1' },
    [s('输入框禁用 '), l('a', { class: 'header-anchor', href: '#输入框禁用', 'aria-hidden': 'true' }, '#')],
    -1
  ),
  b = l(
    'div',
    { class: 'language-vue' },
    [
      l('pre', { 'v-pre': '', class: 'shiki material-theme-palenight', tabindex: '0' }, [
        l('code', null, [
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#89DDFF' } }, '<'),
            l('span', { style: { color: '#F07178' } }, 'template'),
            l('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#A6ACCD' } }, '    '),
            l('span', { style: { color: '#89DDFF' } }, '<'),
            l('span', { style: { color: '#F07178' } }, 'VSpace'),
            l('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#A6ACCD' } }, '        '),
            l('span', { style: { color: '#89DDFF' } }, '<'),
            l('span', { style: { color: '#F07178' } }, 'VInput'),
            l('span', { style: { color: '#89DDFF' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, 'v-model'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'value'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, 'disabled'),
            l('span', { style: { color: '#89DDFF' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, 'placeholder'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, '请输入'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, '></'),
            l('span', { style: { color: '#F07178' } }, 'VInput'),
            l('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#A6ACCD' } }, '    '),
            l('span', { style: { color: '#89DDFF' } }, '</'),
            l('span', { style: { color: '#F07178' } }, 'VSpace'),
            l('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#89DDFF' } }, '</'),
            l('span', { style: { color: '#F07178' } }, 'template'),
            l('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#89DDFF' } }, '<'),
            l('span', { style: { color: '#F07178' } }, 'script'),
            l('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#89DDFF', 'font-style': 'italic' } }, 'import'),
            l('span', { style: { color: '#A6ACCD' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '{'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#A6ACCD' } }, 'defineComponent'),
            l('span', { style: { color: '#89DDFF' } }, ','),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#A6ACCD' } }, 'ref'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '}'),
            l('span', { style: { color: '#A6ACCD' } }, ' '),
            l('span', { style: { color: '#89DDFF', 'font-style': 'italic' } }, 'from'),
            l('span', { style: { color: '#A6ACCD' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#C3E88D' } }, 'vue'),
            l('span', { style: { color: '#89DDFF' } }, "'")
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#89DDFF', 'font-style': 'italic' } }, 'export'),
            l('span', { style: { color: '#A6ACCD' } }, ' '),
            l('span', { style: { color: '#89DDFF', 'font-style': 'italic' } }, 'default'),
            l('span', { style: { color: '#A6ACCD' } }, ' '),
            l('span', { style: { color: '#82AAFF' } }, 'defineComponent'),
            l('span', { style: { color: '#A6ACCD' } }, ' ('),
            l('span', { style: { color: '#89DDFF' } }, '{')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#A6ACCD' } }, '    '),
            l('span', { style: { color: '#F07178' } }, 'setup'),
            l('span', { style: { color: '#A6ACCD' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '()'),
            l('span', { style: { color: '#A6ACCD' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '{')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '        '),
            l('span', { style: { color: '#C792EA' } }, 'const'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#A6ACCD' } }, 'value'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#82AAFF' } }, 'ref'),
            l('span', { style: { color: '#F07178' } }, '('),
            l('span', { style: { color: '#89DDFF' } }, "''"),
            l('span', { style: { color: '#F07178' } }, ')')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '        '),
            l('span', { style: { color: '#89DDFF', 'font-style': 'italic' } }, 'return'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '{')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '            '),
            l('span', { style: { color: '#A6ACCD' } }, 'value')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '        '),
            l('span', { style: { color: '#89DDFF' } }, '}')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '    '),
            l('span', { style: { color: '#89DDFF' } }, '}')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#89DDFF' } }, '}'),
            l('span', { style: { color: '#A6ACCD' } }, ')')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#89DDFF' } }, '</'),
            l('span', { style: { color: '#F07178' } }, 'script'),
            l('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          l('span', { class: 'line' })
        ])
      ])
    ],
    -1
  ),
  N = l(
    'h2',
    { id: '输入一键清空', tabindex: '-1' },
    [s('输入一键清空 '), l('a', { class: 'header-anchor', href: '#输入一键清空', 'aria-hidden': 'true' }, '#')],
    -1
  ),
  z = l(
    'div',
    { class: 'language-vue' },
    [
      l('pre', { 'v-pre': '', class: 'shiki material-theme-palenight', tabindex: '0' }, [
        l('code', null, [
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#89DDFF' } }, '<'),
            l('span', { style: { color: '#F07178' } }, 'template'),
            l('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#A6ACCD' } }, '    '),
            l('span', { style: { color: '#89DDFF' } }, '<'),
            l('span', { style: { color: '#F07178' } }, 'VSpace'),
            l('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#A6ACCD' } }, '        '),
            l('span', { style: { color: '#89DDFF' } }, '<'),
            l('span', { style: { color: '#F07178' } }, 'VInput'),
            l('span', { style: { color: '#89DDFF' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, 'v-model'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'value'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, '  '),
            l('span', { style: { color: '#C792EA' } }, 'placeholder'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, '请输入'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, 'allowClear'),
            l('span', { style: { color: '#89DDFF' } }, '></'),
            l('span', { style: { color: '#F07178' } }, 'VInput'),
            l('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#A6ACCD' } }, '    '),
            l('span', { style: { color: '#89DDFF' } }, '</'),
            l('span', { style: { color: '#F07178' } }, 'VSpace'),
            l('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#89DDFF' } }, '</'),
            l('span', { style: { color: '#F07178' } }, 'template'),
            l('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#89DDFF' } }, '<'),
            l('span', { style: { color: '#F07178' } }, 'script'),
            l('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#89DDFF', 'font-style': 'italic' } }, 'import'),
            l('span', { style: { color: '#A6ACCD' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '{'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#A6ACCD' } }, 'defineComponent'),
            l('span', { style: { color: '#89DDFF' } }, ','),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#A6ACCD' } }, 'ref'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '}'),
            l('span', { style: { color: '#A6ACCD' } }, ' '),
            l('span', { style: { color: '#89DDFF', 'font-style': 'italic' } }, 'from'),
            l('span', { style: { color: '#A6ACCD' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#C3E88D' } }, 'vue'),
            l('span', { style: { color: '#89DDFF' } }, "'")
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#89DDFF', 'font-style': 'italic' } }, 'export'),
            l('span', { style: { color: '#A6ACCD' } }, ' '),
            l('span', { style: { color: '#89DDFF', 'font-style': 'italic' } }, 'default'),
            l('span', { style: { color: '#A6ACCD' } }, ' '),
            l('span', { style: { color: '#82AAFF' } }, 'defineComponent'),
            l('span', { style: { color: '#A6ACCD' } }, ' ('),
            l('span', { style: { color: '#89DDFF' } }, '{')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#A6ACCD' } }, '    '),
            l('span', { style: { color: '#F07178' } }, 'setup'),
            l('span', { style: { color: '#A6ACCD' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '()'),
            l('span', { style: { color: '#A6ACCD' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '{')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '        '),
            l('span', { style: { color: '#C792EA' } }, 'const'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#A6ACCD' } }, 'value'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#82AAFF' } }, 'ref'),
            l('span', { style: { color: '#F07178' } }, '('),
            l('span', { style: { color: '#89DDFF' } }, "''"),
            l('span', { style: { color: '#F07178' } }, ')')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '        '),
            l('span', { style: { color: '#89DDFF', 'font-style': 'italic' } }, 'return'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '{')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '            '),
            l('span', { style: { color: '#A6ACCD' } }, 'value')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '        '),
            l('span', { style: { color: '#89DDFF' } }, '}')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '    '),
            l('span', { style: { color: '#89DDFF' } }, '}')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#89DDFF' } }, '}'),
            l('span', { style: { color: '#A6ACCD' } }, ')')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#89DDFF' } }, '</'),
            l('span', { style: { color: '#F07178' } }, 'script'),
            l('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          l('span', { class: 'line' })
        ])
      ])
    ],
    -1
  ),
  U = l(
    'h2',
    { id: '输入框尺寸', tabindex: '-1' },
    [s('输入框尺寸 '), l('a', { class: 'header-anchor', href: '#输入框尺寸', 'aria-hidden': 'true' }, '#')],
    -1
  ),
  $ = l(
    'div',
    { class: 'language-vue' },
    [
      l('pre', { 'v-pre': '', class: 'shiki material-theme-palenight', tabindex: '0' }, [
        l('code', null, [
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#89DDFF' } }, '<'),
            l('span', { style: { color: '#F07178' } }, 'template'),
            l('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#A6ACCD' } }, '    '),
            l('span', { style: { color: '#89DDFF' } }, '<'),
            l('span', { style: { color: '#F07178' } }, 'VSpace'),
            l('span', { style: { color: '#89DDFF' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, 'direction'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'vertical'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#A6ACCD' } }, '        '),
            l('span', { style: { color: '#89DDFF' } }, '<'),
            l('span', { style: { color: '#F07178' } }, 'VInput'),
            l('span', { style: { color: '#89DDFF' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, 'v-model'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'value1'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, 'size'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'small'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, 'placeholder'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, '请输入'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, ':allowClear'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'true'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, '></'),
            l('span', { style: { color: '#F07178' } }, 'VInput'),
            l('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#A6ACCD' } }, '        '),
            l('span', { style: { color: '#89DDFF' } }, '<'),
            l('span', { style: { color: '#F07178' } }, 'VInput'),
            l('span', { style: { color: '#89DDFF' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, 'v-model'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'value2'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, 'size'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'medium'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, 'placeholder'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, '请输入'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, ':allowClear'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'true'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, '></'),
            l('span', { style: { color: '#F07178' } }, 'VInput'),
            l('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#A6ACCD' } }, '        '),
            l('span', { style: { color: '#89DDFF' } }, '<'),
            l('span', { style: { color: '#F07178' } }, 'VInput'),
            l('span', { style: { color: '#89DDFF' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, 'v-model'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'value3'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, 'size'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'large'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, 'placeholder'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, '请输入'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, ':allowClear'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'true'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, '></'),
            l('span', { style: { color: '#F07178' } }, 'VInput'),
            l('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#A6ACCD' } }, '    '),
            l('span', { style: { color: '#89DDFF' } }, '</'),
            l('span', { style: { color: '#F07178' } }, 'VSpace'),
            l('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#89DDFF' } }, '</'),
            l('span', { style: { color: '#F07178' } }, 'template'),
            l('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#89DDFF' } }, '<'),
            l('span', { style: { color: '#F07178' } }, 'script'),
            l('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#89DDFF', 'font-style': 'italic' } }, 'import'),
            l('span', { style: { color: '#A6ACCD' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '{'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#A6ACCD' } }, 'defineComponent'),
            l('span', { style: { color: '#89DDFF' } }, ','),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#A6ACCD' } }, 'ref'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '}'),
            l('span', { style: { color: '#A6ACCD' } }, ' '),
            l('span', { style: { color: '#89DDFF', 'font-style': 'italic' } }, 'from'),
            l('span', { style: { color: '#A6ACCD' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#C3E88D' } }, 'vue'),
            l('span', { style: { color: '#89DDFF' } }, "'")
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#89DDFF', 'font-style': 'italic' } }, 'export'),
            l('span', { style: { color: '#A6ACCD' } }, ' '),
            l('span', { style: { color: '#89DDFF', 'font-style': 'italic' } }, 'default'),
            l('span', { style: { color: '#A6ACCD' } }, ' '),
            l('span', { style: { color: '#82AAFF' } }, 'defineComponent'),
            l('span', { style: { color: '#A6ACCD' } }, ' ('),
            l('span', { style: { color: '#89DDFF' } }, '{')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#A6ACCD' } }, '    '),
            l('span', { style: { color: '#F07178' } }, 'setup'),
            l('span', { style: { color: '#A6ACCD' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '()'),
            l('span', { style: { color: '#A6ACCD' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '{')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '        '),
            l('span', { style: { color: '#C792EA' } }, 'const'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#A6ACCD' } }, 'value1'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#82AAFF' } }, 'ref'),
            l('span', { style: { color: '#F07178' } }, '('),
            l('span', { style: { color: '#89DDFF' } }, "''"),
            l('span', { style: { color: '#F07178' } }, ')')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '        '),
            l('span', { style: { color: '#C792EA' } }, 'const'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#A6ACCD' } }, 'value2'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#82AAFF' } }, 'ref'),
            l('span', { style: { color: '#F07178' } }, '('),
            l('span', { style: { color: '#89DDFF' } }, "''"),
            l('span', { style: { color: '#F07178' } }, ')')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '        '),
            l('span', { style: { color: '#C792EA' } }, 'const'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#A6ACCD' } }, 'value3'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#82AAFF' } }, 'ref'),
            l('span', { style: { color: '#F07178' } }, '('),
            l('span', { style: { color: '#89DDFF' } }, "''"),
            l('span', { style: { color: '#F07178' } }, ')')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '        '),
            l('span', { style: { color: '#89DDFF', 'font-style': 'italic' } }, 'return'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '{')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '            '),
            l('span', { style: { color: '#A6ACCD' } }, 'value1'),
            l('span', { style: { color: '#89DDFF' } }, ',')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '            '),
            l('span', { style: { color: '#A6ACCD' } }, 'value2'),
            l('span', { style: { color: '#89DDFF' } }, ',')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '            '),
            l('span', { style: { color: '#A6ACCD' } }, 'value3')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '        '),
            l('span', { style: { color: '#89DDFF' } }, '}')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '    '),
            l('span', { style: { color: '#89DDFF' } }, '}')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#89DDFF' } }, '}'),
            l('span', { style: { color: '#A6ACCD' } }, ')')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#89DDFF' } }, '</'),
            l('span', { style: { color: '#F07178' } }, 'script'),
            l('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          l('span', { class: 'line' })
        ])
      ])
    ],
    -1
  ),
  P = l(
    'h2',
    { id: '带图标的输入框', tabindex: '-1' },
    [s('带图标的输入框 '), l('a', { class: 'header-anchor', href: '#带图标的输入框', 'aria-hidden': 'true' }, '#')],
    -1
  ),
  J = l(
    'div',
    { class: 'language-vue' },
    [
      l('pre', { 'v-pre': '', class: 'shiki material-theme-palenight', tabindex: '0' }, [
        l('code', null, [
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#89DDFF' } }, '<'),
            l('span', { style: { color: '#F07178' } }, 'template'),
            l('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#A6ACCD' } }, '    '),
            l('span', { style: { color: '#89DDFF' } }, '<'),
            l('span', { style: { color: '#F07178' } }, 'VSpace'),
            l('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#A6ACCD' } }, '        '),
            l('span', { style: { color: '#89DDFF' } }, '<'),
            l('span', { style: { color: '#F07178' } }, 'VInput'),
            l('span', { style: { color: '#89DDFF' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, 'v-model'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'value'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, 'placeholder'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, '请输入'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#A6ACCD' } }, '            '),
            l('span', { style: { color: '#89DDFF' } }, '<'),
            l('span', { style: { color: '#F07178' } }, 'template'),
            l('span', { style: { color: '#A6ACCD' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '#'),
            l('span', { style: { color: '#C792EA' } }, 'suffix'),
            l('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#A6ACCD' } }, '                '),
            l('span', { style: { color: '#89DDFF' } }, '<'),
            l('span', { style: { color: '#F07178' } }, 'VIcon'),
            l('span', { style: { color: '#89DDFF' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, 'name'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'search'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, ' />')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#A6ACCD' } }, '            '),
            l('span', { style: { color: '#89DDFF' } }, '</'),
            l('span', { style: { color: '#F07178' } }, 'template'),
            l('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#A6ACCD' } }, '        '),
            l('span', { style: { color: '#89DDFF' } }, '</'),
            l('span', { style: { color: '#F07178' } }, 'VInput'),
            l('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#A6ACCD' } }, '    '),
            l('span', { style: { color: '#89DDFF' } }, '</'),
            l('span', { style: { color: '#F07178' } }, 'VSpace'),
            l('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#89DDFF' } }, '</'),
            l('span', { style: { color: '#F07178' } }, 'template'),
            l('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#89DDFF' } }, '<'),
            l('span', { style: { color: '#F07178' } }, 'script'),
            l('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#89DDFF', 'font-style': 'italic' } }, 'import'),
            l('span', { style: { color: '#A6ACCD' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '{'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#A6ACCD' } }, 'defineComponent'),
            l('span', { style: { color: '#89DDFF' } }, ','),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#A6ACCD' } }, 'ref'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '}'),
            l('span', { style: { color: '#A6ACCD' } }, ' '),
            l('span', { style: { color: '#89DDFF', 'font-style': 'italic' } }, 'from'),
            l('span', { style: { color: '#A6ACCD' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#C3E88D' } }, 'vue'),
            l('span', { style: { color: '#89DDFF' } }, "'")
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#89DDFF', 'font-style': 'italic' } }, 'export'),
            l('span', { style: { color: '#A6ACCD' } }, ' '),
            l('span', { style: { color: '#89DDFF', 'font-style': 'italic' } }, 'default'),
            l('span', { style: { color: '#A6ACCD' } }, ' '),
            l('span', { style: { color: '#82AAFF' } }, 'defineComponent'),
            l('span', { style: { color: '#A6ACCD' } }, ' ('),
            l('span', { style: { color: '#89DDFF' } }, '{')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#A6ACCD' } }, '    '),
            l('span', { style: { color: '#F07178' } }, 'setup'),
            l('span', { style: { color: '#A6ACCD' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '()'),
            l('span', { style: { color: '#A6ACCD' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '{')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '        '),
            l('span', { style: { color: '#C792EA' } }, 'const'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#A6ACCD' } }, 'value'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#82AAFF' } }, 'ref'),
            l('span', { style: { color: '#F07178' } }, '('),
            l('span', { style: { color: '#89DDFF' } }, "''"),
            l('span', { style: { color: '#F07178' } }, ')')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '        '),
            l('span', { style: { color: '#89DDFF', 'font-style': 'italic' } }, 'return'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '{')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '            '),
            l('span', { style: { color: '#A6ACCD' } }, 'value')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '        '),
            l('span', { style: { color: '#89DDFF' } }, '}')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '    '),
            l('span', { style: { color: '#89DDFF' } }, '}')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#89DDFF' } }, '}'),
            l('span', { style: { color: '#A6ACCD' } }, ')')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#89DDFF' } }, '</'),
            l('span', { style: { color: '#F07178' } }, 'script'),
            l('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          l('span', { class: 'line' })
        ])
      ])
    ],
    -1
  ),
  O = l(
    'h2',
    { id: '输入响应事件', tabindex: '-1' },
    [s('输入响应事件 '), l('a', { class: 'header-anchor', href: '#输入响应事件', 'aria-hidden': 'true' }, '#')],
    -1
  ),
  T = l(
    'div',
    { class: 'language-vue' },
    [
      l('pre', { 'v-pre': '', class: 'shiki material-theme-palenight', tabindex: '0' }, [
        l('code', null, [
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#89DDFF' } }, '<'),
            l('span', { style: { color: '#F07178' } }, 'template'),
            l('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#A6ACCD' } }, '    '),
            l('span', { style: { color: '#89DDFF' } }, '<'),
            l('span', { style: { color: '#F07178' } }, 'VSpace'),
            l('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#A6ACCD' } }, '        '),
            l('span', { style: { color: '#89DDFF' } }, '<'),
            l('span', { style: { color: '#F07178' } }, 'VInput'),
            l('span', { style: { color: '#89DDFF' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, 'v-model'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'value'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, 'placeholder'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, '请输入'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, '   '),
            l('span', { style: { color: '#C792EA' } }, '@clear'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'handleClear'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, '  '),
            l('span', { style: { color: '#C792EA' } }, '@focus'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'handleFocus'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, '@blur'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'handleBlur'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, '@pressEnter'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'pressEnter'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, 'allowClear'),
            l('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#A6ACCD' } }, '        '),
            l('span', { style: { color: '#89DDFF' } }, '</'),
            l('span', { style: { color: '#F07178' } }, 'VInput'),
            l('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#A6ACCD' } }, '    '),
            l('span', { style: { color: '#89DDFF' } }, '</'),
            l('span', { style: { color: '#F07178' } }, 'VSpace'),
            l('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#89DDFF' } }, '</'),
            l('span', { style: { color: '#F07178' } }, 'template'),
            l('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#89DDFF' } }, '<'),
            l('span', { style: { color: '#F07178' } }, 'script'),
            l('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#89DDFF', 'font-style': 'italic' } }, 'import'),
            l('span', { style: { color: '#A6ACCD' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '{'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#A6ACCD' } }, 'defineComponent'),
            l('span', { style: { color: '#89DDFF' } }, ','),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#A6ACCD' } }, 'ref'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '}'),
            l('span', { style: { color: '#A6ACCD' } }, ' '),
            l('span', { style: { color: '#89DDFF', 'font-style': 'italic' } }, 'from'),
            l('span', { style: { color: '#A6ACCD' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#C3E88D' } }, 'vue'),
            l('span', { style: { color: '#89DDFF' } }, "'")
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#89DDFF', 'font-style': 'italic' } }, 'export'),
            l('span', { style: { color: '#A6ACCD' } }, ' '),
            l('span', { style: { color: '#89DDFF', 'font-style': 'italic' } }, 'default'),
            l('span', { style: { color: '#A6ACCD' } }, ' '),
            l('span', { style: { color: '#82AAFF' } }, 'defineComponent'),
            l('span', { style: { color: '#A6ACCD' } }, ' ('),
            l('span', { style: { color: '#89DDFF' } }, '{')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#A6ACCD' } }, '    '),
            l('span', { style: { color: '#F07178' } }, 'setup'),
            l('span', { style: { color: '#A6ACCD' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '()'),
            l('span', { style: { color: '#A6ACCD' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '{')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '        '),
            l('span', { style: { color: '#C792EA' } }, 'const'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#A6ACCD' } }, 'value'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#82AAFF' } }, 'ref'),
            l('span', { style: { color: '#F07178' } }, '('),
            l('span', { style: { color: '#89DDFF' } }, "''"),
            l('span', { style: { color: '#F07178' } }, ')')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '        '),
            l('span', { style: { color: '#C792EA' } }, 'const'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#A6ACCD' } }, 'handleInput'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '('),
            l('span', { style: { color: '#A6ACCD', 'font-style': 'italic' } }, 'value'),
            l('span', { style: { color: '#89DDFF' } }, ','),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#A6ACCD', 'font-style': 'italic' } }, 'e'),
            l('span', { style: { color: '#89DDFF' } }, ')'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, '=>'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '{')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '            '),
            l('span', { style: { color: '#A6ACCD' } }, 'console'),
            l('span', { style: { color: '#89DDFF' } }, '.'),
            l('span', { style: { color: '#82AAFF' } }, 'log'),
            l('span', { style: { color: '#F07178' } }, '('),
            l('span', { style: { color: '#A6ACCD' } }, 'value'),
            l('span', { style: { color: '#89DDFF' } }, ','),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#A6ACCD' } }, 'e'),
            l('span', { style: { color: '#89DDFF' } }, '.'),
            l('span', { style: { color: '#A6ACCD' } }, 'target'),
            l('span', { style: { color: '#89DDFF' } }, '.'),
            l('span', { style: { color: '#A6ACCD' } }, 'value'),
            l('span', { style: { color: '#F07178' } }, ')')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '        '),
            l('span', { style: { color: '#89DDFF' } }, '}')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '        '),
            l('span', { style: { color: '#C792EA' } }, 'const'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#A6ACCD' } }, 'handleClear'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '('),
            l('span', { style: { color: '#A6ACCD', 'font-style': 'italic' } }, 'value'),
            l('span', { style: { color: '#89DDFF' } }, ')'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, '=>'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '{')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '            '),
            l('span', { style: { color: '#A6ACCD' } }, 'console'),
            l('span', { style: { color: '#89DDFF' } }, '.'),
            l('span', { style: { color: '#82AAFF' } }, 'log'),
            l('span', { style: { color: '#F07178' } }, '('),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#C3E88D' } }, '清空'),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#F07178' } }, ')')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '        '),
            l('span', { style: { color: '#89DDFF' } }, '}')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '        '),
            l('span', { style: { color: '#C792EA' } }, 'const'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#A6ACCD' } }, 'handleFocus'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '('),
            l('span', { style: { color: '#A6ACCD', 'font-style': 'italic' } }, 'e'),
            l('span', { style: { color: '#89DDFF' } }, ')'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, '=>'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '{')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '            '),
            l('span', { style: { color: '#A6ACCD' } }, 'e'),
            l('span', { style: { color: '#89DDFF' } }, '.'),
            l('span', { style: { color: '#A6ACCD' } }, 'target'),
            l('span', { style: { color: '#89DDFF' } }, '.'),
            l('span', { style: { color: '#82AAFF' } }, 'focus'),
            l('span', { style: { color: '#F07178' } }, '()')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '            '),
            l('span', { style: { color: '#A6ACCD' } }, 'console'),
            l('span', { style: { color: '#89DDFF' } }, '.'),
            l('span', { style: { color: '#82AAFF' } }, 'log'),
            l('span', { style: { color: '#F07178' } }, '('),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#C3E88D' } }, 'focus'),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#89DDFF' } }, ','),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#A6ACCD' } }, 'e'),
            l('span', { style: { color: '#F07178' } }, ')')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '        '),
            l('span', { style: { color: '#89DDFF' } }, '}')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '        '),
            l('span', { style: { color: '#C792EA' } }, 'const'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#A6ACCD' } }, 'handleBlur'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '('),
            l('span', { style: { color: '#A6ACCD', 'font-style': 'italic' } }, 'e'),
            l('span', { style: { color: '#89DDFF' } }, ')'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, '=>'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '{')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '            '),
            l('span', { style: { color: '#A6ACCD' } }, 'e'),
            l('span', { style: { color: '#89DDFF' } }, '.'),
            l('span', { style: { color: '#A6ACCD' } }, 'target'),
            l('span', { style: { color: '#89DDFF' } }, '.'),
            l('span', { style: { color: '#82AAFF' } }, 'blur'),
            l('span', { style: { color: '#F07178' } }, '()')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '            '),
            l('span', { style: { color: '#A6ACCD' } }, 'console'),
            l('span', { style: { color: '#89DDFF' } }, '.'),
            l('span', { style: { color: '#82AAFF' } }, 'log'),
            l('span', { style: { color: '#F07178' } }, '('),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#C3E88D' } }, 'blur'),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#89DDFF' } }, ','),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#A6ACCD' } }, 'e'),
            l('span', { style: { color: '#F07178' } }, ')')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '        '),
            l('span', { style: { color: '#89DDFF' } }, '}')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '        '),
            l('span', { style: { color: '#C792EA' } }, 'const'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#A6ACCD' } }, 'pressEnter'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '('),
            l('span', { style: { color: '#A6ACCD', 'font-style': 'italic' } }, 'e'),
            l('span', { style: { color: '#89DDFF' } }, ')'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, '=>'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '{')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '            '),
            l('span', { style: { color: '#A6ACCD' } }, 'console'),
            l('span', { style: { color: '#89DDFF' } }, '.'),
            l('span', { style: { color: '#82AAFF' } }, 'log'),
            l('span', { style: { color: '#F07178' } }, '('),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#C3E88D' } }, 'pressEnter'),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#89DDFF' } }, ','),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#A6ACCD' } }, 'e'),
            l('span', { style: { color: '#F07178' } }, ')')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '        '),
            l('span', { style: { color: '#89DDFF' } }, '}')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '        '),
            l('span', { style: { color: '#89DDFF', 'font-style': 'italic' } }, 'return'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '{')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '            '),
            l('span', { style: { color: '#A6ACCD' } }, 'value'),
            l('span', { style: { color: '#89DDFF' } }, ',')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '            '),
            l('span', { style: { color: '#A6ACCD' } }, 'handleInput'),
            l('span', { style: { color: '#89DDFF' } }, ',')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '            '),
            l('span', { style: { color: '#A6ACCD' } }, 'handleClear'),
            l('span', { style: { color: '#89DDFF' } }, ',')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '            '),
            l('span', { style: { color: '#A6ACCD' } }, 'handleFocus'),
            l('span', { style: { color: '#89DDFF' } }, ',')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '            '),
            l('span', { style: { color: '#A6ACCD' } }, 'handleBlur'),
            l('span', { style: { color: '#89DDFF' } }, ',')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '            '),
            l('span', { style: { color: '#A6ACCD' } }, 'pressEnter')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '        '),
            l('span', { style: { color: '#89DDFF' } }, '}')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '    '),
            l('span', { style: { color: '#89DDFF' } }, '}')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#89DDFF' } }, '}'),
            l('span', { style: { color: '#A6ACCD' } }, ')')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#89DDFF' } }, '</'),
            l('span', { style: { color: '#F07178' } }, 'script'),
            l('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          l('span', { class: 'line' })
        ])
      ])
    ],
    -1
  )
function j(a, p, F, C, i, A) {
  const D = v('render-demo-0'),
    n = v('demo'),
    y = v('render-demo-1'),
    o = v('render-demo-2'),
    e = v('render-demo-3'),
    t = v('render-demo-4'),
    r = v('render-demo-5')
  return (
    g(),
    _('div', null, [
      x,
      k,
      d(
        n,
        {
          customClass: 'undefined',
          sourceCode: `<template>
    <VSpace>
        <VInput v-model="value"></VInput>
    </VSpace>
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent ({
    setup () {
        const value = ref('')
        return {
            value
        }
    }
})
<\/script>
`
        },
        { highlight: m(() => [S]), default: m(() => [d(D)]), _: 1 }
      ),
      w,
      d(
        n,
        {
          customClass: 'undefined',
          sourceCode: `<template>
    <VSpace>
        <VInput v-model="value" disabled placeholder="请输入"></VInput>
    </VSpace>
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent ({
    setup () {
        const value = ref('')
        return {
            value
        }
    }
})
<\/script>
`
        },
        { highlight: m(() => [b]), default: m(() => [d(y)]), _: 1 }
      ),
      N,
      d(
        n,
        {
          customClass: 'undefined',
          sourceCode: `<template>
    <VSpace>
        <VInput v-model="value"  placeholder="请输入" allowClear></VInput>
    </VSpace>
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent ({
    setup () {
        const value = ref('')
        return {
            value
        }
    }
})
<\/script>
`
        },
        { highlight: m(() => [z]), default: m(() => [d(o)]), _: 1 }
      ),
      U,
      d(
        n,
        {
          customClass: 'undefined',
          sourceCode: `<template>
    <VSpace direction="vertical">
        <VInput v-model="value1" size="small" placeholder="请输入" :allowClear="true"></VInput>
        <VInput v-model="value2" size="medium" placeholder="请输入" :allowClear="true"></VInput>
        <VInput v-model="value3" size="large" placeholder="请输入" :allowClear="true"></VInput>
    </VSpace>
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent ({
    setup () {
        const value1 = ref('')
        const value2 = ref('')
        const value3 = ref('')
        return {
            value1,
            value2,
            value3
        }
    }
})
<\/script>
`
        },
        { highlight: m(() => [$]), default: m(() => [d(e)]), _: 1 }
      ),
      P,
      d(
        n,
        {
          customClass: 'undefined',
          sourceCode: `<template>
    <VSpace>
        <VInput v-model="value" placeholder="请输入">
            <template #suffix>
                <VIcon name="search" />
            </template>
        </VInput>
    </VSpace>
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent ({
    setup () {
        const value = ref('')
        return {
            value
        }
    }
})
<\/script>
`
        },
        { highlight: m(() => [J]), default: m(() => [d(t)]), _: 1 }
      ),
      O,
      d(
        n,
        {
          customClass: 'undefined',
          sourceCode: `<template>
    <VSpace>
        <VInput v-model="value" placeholder="请输入"   @clear="handleClear"  @focus="handleFocus" @blur="handleBlur" @pressEnter="pressEnter" allowClear>
        </VInput>
    </VSpace>
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent ({
    setup () {
        const value = ref('')
        const handleInput = (value, e) => {
            console.log(value, e.target.value)
        }
        const handleClear = (value) => {
            console.log('清空')
        }
        const handleFocus = (e) => {
            e.target.focus()
            console.log('focus', e)
        }
        const handleBlur = (e) => {
            e.target.blur()
            console.log('blur', e)
        }
        const pressEnter = (e) => {
            console.log('pressEnter', e)
        }
        return {
            value,
            handleInput,
            handleClear,
            handleFocus,
            handleBlur,
            pressEnter
        }
    }
})
<\/script>
`
        },
        { highlight: m(() => [T]), default: m(() => [d(r)]), _: 1 }
      )
    ])
  )
}
const H = V(I, [['render', j]])
export { G as __pageData, H as default }
