import { V as b, _ as g, c as x, a as f, w as E, b as l, d as s, e as k, r as v, o as B } from './app.2ba2cf25.js'
const { defineComponent: V } = b,
  _ = V({
    name: 'component-doc',
    components: {
      'render-demo-0': (function () {
        const { resolveComponent: D, createVNode: p, withCtx: F, openBlock: u, createBlock: d } = b
        function i(o, e) {
          const r = D('v-checkbox'),
            c = D('v-space')
          return (
            u(),
            d(
              c,
              { direction: 'vertical' },
              {
                default: F(() => [
                  p(
                    r,
                    {
                      label: 'Checked',
                      isShowTitle: !1,
                      modelValue: o.checked,
                      'onUpdate:modelValue': e[0] || (e[0] = t => (o.checked = t)),
                      onChange: o.handleChange
                    },
                    null,
                    8,
                    ['modelValue', 'onChange']
                  ),
                  p(
                    r,
                    {
                      label: 'Custom title',
                      isShowTitle: !0,
                      title: 'my title',
                      modelValue: o.checked2,
                      'onUpdate:modelValue': e[1] || (e[1] = t => (o.checked2 = t))
                    },
                    null,
                    8,
                    ['modelValue']
                  ),
                  p(
                    r,
                    {
                      label: 'No Animation',
                      isShowTitle: !1,
                      showAnimation: !1,
                      modelValue: o.checked3,
                      'onUpdate:modelValue': e[2] || (e[2] = t => (o.checked3 = t))
                    },
                    null,
                    8,
                    ['modelValue']
                  ),
                  p(
                    r,
                    {
                      label: 'Disabled',
                      isShowTitle: !1,
                      modelValue: o.checked4,
                      'onUpdate:modelValue': e[3] || (e[3] = t => (o.checked4 = t)),
                      disabled: ''
                    },
                    null,
                    8,
                    ['modelValue']
                  ),
                  p(
                    r,
                    {
                      label: 'Half-checked',
                      isShowTitle: !1,
                      'half-checked': o.halfCheck,
                      modelValue: o.allCheck,
                      'onUpdate:modelValue': e[4] || (e[4] = t => (o.allCheck = t))
                    },
                    null,
                    8,
                    ['half-checked', 'modelValue']
                  ),
                  p(
                    r,
                    {
                      label: 'Custom color',
                      isShowTitle: !1,
                      modelValue: o.customCheck,
                      'onUpdate:modelValue': e[5] || (e[5] = t => (o.customCheck = t)),
                      color: 'RGB(255, 193, 7)'
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
        const { defineComponent: y, ref: a } = b,
          C = y({
            setup() {
              const o = a(!1),
                e = a(!1),
                r = a(!0),
                c = a(!0),
                t = a(!0),
                A = a(!1),
                h = a(!0)
              return {
                checked: o,
                checked2: e,
                checked3: r,
                checked4: c,
                halfCheck: t,
                allCheck: A,
                customCheck: h,
                handleChange: n => {
                  console.log(o.value, n)
                }
              }
            }
          })
        return { render: i, ...C }
      })(),
      'render-demo-1': (function () {
        const { resolveComponent: D, createVNode: p, withCtx: F, openBlock: u, createBlock: d } = b
        function i(o, e) {
          const r = D('v-checkbox-group'),
            c = D('v-space')
          return (
            u(),
            d(
              c,
              { direction: 'vertical' },
              {
                default: F(() => [
                  p(
                    r,
                    {
                      modelValue: o.value1,
                      'onUpdate:modelValue': e[0] || (e[0] = t => (o.value1 = t)),
                      options: o.options1,
                      direction: 'row'
                    },
                    null,
                    8,
                    ['modelValue', 'options']
                  ),
                  p(
                    r,
                    {
                      modelValue: o.value2,
                      'onUpdate:modelValue': e[1] || (e[1] = t => (o.value2 = t)),
                      options: o.options2,
                      direction: 'row'
                    },
                    null,
                    8,
                    ['modelValue', 'options']
                  )
                ]),
                _: 1
              }
            )
          )
        }
        const { defineComponent: y, ref: a } = b,
          C = y({
            setup() {
              const o = a([{ name: 'data1', value: '2', id: 2 }]),
                e = a([
                  { name: 'data1', disabled: !0, value: '1', id: 1 },
                  { name: 'data2', value: '2', id: 2 },
                  { name: 'data3', value: '3', id: 3 }
                ]),
                r = a(['data1', 'data2']),
                c = a(['data1', 'data2', 'data3', 'data4', 'data5'])
              return { value1: o, options1: e, value2: r, options2: c }
            }
          })
        return { render: i, ...C }
      })(),
      'render-demo-2': (function () {
        const {
          renderList: D,
          Fragment: p,
          openBlock: F,
          createElementBlock: u,
          resolveComponent: d,
          createBlock: i,
          withCtx: y,
          createVNode: a
        } = b
        function C(c, t) {
          const A = d('v-checkbox-button'),
            h = d('v-checkbox-group'),
            m = d('v-space')
          return (
            F(),
            i(m, null, {
              default: y(() => [
                a(
                  h,
                  {
                    modelValue: c.buttonValues1,
                    'onUpdate:modelValue': t[0] || (t[0] = n => (c.buttonValues1 = n)),
                    size: 'small',
                    direction: 'column'
                  },
                  {
                    default: y(() => [
                      (F(!0),
                      u(
                        p,
                        null,
                        D(
                          c.buttonOptions1,
                          n => (
                            F(),
                            i(A, { label: n.label, value: n.value, key: n.value, disabled: n.disabled }, null, 8, [
                              'label',
                              'value',
                              'disabled'
                            ])
                          )
                        ),
                        128
                      ))
                    ]),
                    _: 1
                  },
                  8,
                  ['modelValue']
                ),
                a(
                  h,
                  {
                    modelValue: c.buttonValues2,
                    'onUpdate:modelValue': t[1] || (t[1] = n => (c.buttonValues2 = n)),
                    size: 'medium',
                    direction: 'column'
                  },
                  {
                    default: y(() => [
                      (F(!0),
                      u(
                        p,
                        null,
                        D(
                          c.buttonOptions2,
                          n => (
                            F(),
                            i(A, { label: n.label, value: n.value, key: n.value, disabled: n.disabled }, null, 8, [
                              'label',
                              'value',
                              'disabled'
                            ])
                          )
                        ),
                        128
                      ))
                    ]),
                    _: 1
                  },
                  8,
                  ['modelValue']
                ),
                a(
                  h,
                  {
                    modelValue: c.buttonValues3,
                    'onUpdate:modelValue': t[2] || (t[2] = n => (c.buttonValues3 = n)),
                    size: 'large',
                    direction: 'column'
                  },
                  {
                    default: y(() => [
                      (F(!0),
                      u(
                        p,
                        null,
                        D(
                          c.buttonOptions3,
                          n => (
                            F(),
                            i(A, { label: n.label, value: n.value, key: n.value, disabled: n.disabled }, null, 8, [
                              'label',
                              'value',
                              'disabled'
                            ])
                          )
                        ),
                        128
                      ))
                    ]),
                    _: 1
                  },
                  8,
                  ['modelValue']
                )
              ]),
              _: 1
            })
          )
        }
        const { defineComponent: o, ref: e } = b,
          r = o({
            setup() {
              const c = e([
                  { label: '选项1', value: 2, id: 1, title: '自定义title1' },
                  { label: '选项2', value: 3, id: 2, title: '自定义title2' },
                  { label: '选项3', value: 4, id: 3, title: '自定义title3' }
                ]),
                t = e([
                  { label: '选项1', value: 2, disabled: !0, id: 1, title: '自定义title1' },
                  { label: '选项2', value: 3, id: 2, title: '自定义title2' },
                  { label: '选项3', value: 4, id: 3, title: '自定义title3' }
                ]),
                A = e([
                  { label: '选项1', value: 2, id: 1, title: '自定义title1' },
                  { label: '选项2', value: 3, id: 2, title: '自定义title2' },
                  { label: '选项3', value: 4, id: 3, title: '自定义title3' }
                ]),
                h = e([]),
                m = e([2]),
                n = e([4])
              return {
                buttonOptions1: c,
                buttonOptions2: t,
                buttonOptions3: A,
                buttonValues1: h,
                buttonValues2: m,
                buttonValues3: n
              }
            }
          })
        return { render: C, ...r }
      })()
    }
  }),
  R = JSON.parse(
    '{"title":"VCheckbox 复选框","description":"","frontmatter":{},"headers":[{"level":2,"title":"基本用法","slug":"基本用法","link":"#基本用法","children":[]},{"level":2,"title":"CheckGroup","slug":"checkgroup","link":"#checkgroup","children":[]},{"level":2,"title":"按钮样式","slug":"按钮样式","link":"#按钮样式","children":[]},{"level":2,"title":"Common Attributes","slug":"common-attributes","link":"#common-attributes","children":[]},{"level":2,"title":"VCheckbox","slug":"vcheckbox","link":"#vcheckbox","children":[]},{"level":2,"title":"VCheckboxGroup","slug":"vcheckboxgroup","link":"#vcheckboxgroup","children":[]},{"level":2,"title":"VCheckboxButton","slug":"vcheckboxbutton","link":"#vcheckboxbutton","children":[{"level":3,"title":"size","slug":"size","link":"#size","children":[]},{"level":3,"title":"direction","slug":"direction","link":"#direction","children":[]}]},{"level":2,"title":"事件","slug":"事件","link":"#事件","children":[]}],"relativePath":"components/checkbox/index.md","lastUpdated":1678863431000}'
  ),
  w = l(
    'h1',
    { id: 'vcheckbox-复选框', tabindex: '-1' },
    [s('VCheckbox 复选框 '), l('a', { class: 'header-anchor', href: '#vcheckbox-复选框', 'aria-hidden': 'true' }, '#')],
    -1
  ),
  O = l(
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
            l('span', { style: { color: '#F07178' } }, 'v-space'),
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
            l('span', { style: { color: '#F07178' } }, 'v-checkbox'),
            l('span', { style: { color: '#89DDFF' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, 'label'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'Checked'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, '  '),
            l('span', { style: { color: '#C792EA' } }, ':isShowTitle'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'false'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, 'v-model'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'checked'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, '@change'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'handleChange'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, ' />')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#A6ACCD' } }, '        '),
            l('span', { style: { color: '#89DDFF' } }, '<'),
            l('span', { style: { color: '#F07178' } }, 'v-checkbox'),
            l('span', { style: { color: '#89DDFF' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, 'label'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'Custom title'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, ':isShowTitle'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'true'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, 'title'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'my title'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, 'v-model'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'checked2'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, ' />')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#A6ACCD' } }, '        '),
            l('span', { style: { color: '#89DDFF' } }, '<'),
            l('span', { style: { color: '#F07178' } }, 'v-checkbox'),
            l('span', { style: { color: '#89DDFF' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, 'label'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'No Animation'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, ':isShowTitle'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'false'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, '  '),
            l('span', { style: { color: '#C792EA' } }, ':showAnimation'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'false'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, 'v-model'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'checked3'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, ' />')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#A6ACCD' } }, '        '),
            l('span', { style: { color: '#89DDFF' } }, '<'),
            l('span', { style: { color: '#F07178' } }, 'v-checkbox'),
            l('span', { style: { color: '#89DDFF' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, 'label'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'Disabled'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, '  '),
            l('span', { style: { color: '#C792EA' } }, ':isShowTitle'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'false'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, 'v-model'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'checked4'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, '  '),
            l('span', { style: { color: '#C792EA' } }, 'disabled'),
            l('span', { style: { color: '#89DDFF' } }, ' />')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#A6ACCD' } }, '        '),
            l('span', { style: { color: '#89DDFF' } }, '<'),
            l('span', { style: { color: '#F07178' } }, 'v-checkbox'),
            l('span', { style: { color: '#89DDFF' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, 'label'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'Half-checked'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, ':isShowTitle'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'false'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, ':half-checked'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'halfCheck'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, 'v-model'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'allCheck'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, '  />')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#A6ACCD' } }, '        '),
            l('span', { style: { color: '#89DDFF' } }, '<'),
            l('span', { style: { color: '#F07178' } }, 'v-checkbox'),
            l('span', { style: { color: '#89DDFF' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, 'label'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'Custom color'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, ':isShowTitle'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'false'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, 'v-model'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'customCheck'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, 'color'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'RGB(255, 193, 7)'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, ' />')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#A6ACCD' } }, '    '),
            l('span', { style: { color: '#89DDFF' } }, '</'),
            l('span', { style: { color: '#F07178' } }, 'v-space'),
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
          l('span', { class: 'line' }),
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
          l('span', { class: 'line' }),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#89DDFF', 'font-style': 'italic' } }, 'export'),
            l('span', { style: { color: '#A6ACCD' } }, ' '),
            l('span', { style: { color: '#89DDFF', 'font-style': 'italic' } }, 'default'),
            l('span', { style: { color: '#A6ACCD' } }, ' '),
            l('span', { style: { color: '#82AAFF' } }, 'defineComponent'),
            l('span', { style: { color: '#A6ACCD' } }, '('),
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
            l('span', { style: { color: '#A6ACCD' } }, 'checked'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#82AAFF' } }, 'ref'),
            l('span', { style: { color: '#F07178' } }, '('),
            l('span', { style: { color: '#FF9CAC' } }, 'false'),
            l('span', { style: { color: '#F07178' } }, ')')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '        '),
            l('span', { style: { color: '#C792EA' } }, 'const'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#A6ACCD' } }, 'checked2'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#82AAFF' } }, 'ref'),
            l('span', { style: { color: '#F07178' } }, '('),
            l('span', { style: { color: '#FF9CAC' } }, 'false'),
            l('span', { style: { color: '#F07178' } }, ')')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '        '),
            l('span', { style: { color: '#C792EA' } }, 'const'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#A6ACCD' } }, 'checked3'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#82AAFF' } }, 'ref'),
            l('span', { style: { color: '#F07178' } }, '('),
            l('span', { style: { color: '#FF9CAC' } }, 'true'),
            l('span', { style: { color: '#F07178' } }, ')')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '        '),
            l('span', { style: { color: '#C792EA' } }, 'const'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#A6ACCD' } }, 'checked4'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#82AAFF' } }, 'ref'),
            l('span', { style: { color: '#F07178' } }, '('),
            l('span', { style: { color: '#FF9CAC' } }, 'true'),
            l('span', { style: { color: '#F07178' } }, ')')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '        '),
            l('span', { style: { color: '#C792EA' } }, 'const'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#A6ACCD' } }, 'halfCheck'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#82AAFF' } }, 'ref'),
            l('span', { style: { color: '#F07178' } }, '('),
            l('span', { style: { color: '#FF9CAC' } }, 'true'),
            l('span', { style: { color: '#F07178' } }, ')')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '        '),
            l('span', { style: { color: '#C792EA' } }, 'const'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#A6ACCD' } }, 'allCheck'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#82AAFF' } }, 'ref'),
            l('span', { style: { color: '#F07178' } }, '('),
            l('span', { style: { color: '#FF9CAC' } }, 'false'),
            l('span', { style: { color: '#F07178' } }, ')')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '        '),
            l('span', { style: { color: '#C792EA' } }, 'const'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#A6ACCD' } }, 'customCheck'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#82AAFF' } }, 'ref'),
            l('span', { style: { color: '#F07178' } }, '('),
            l('span', { style: { color: '#FF9CAC' } }, 'true'),
            l('span', { style: { color: '#F07178' } }, ')')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '        '),
            l('span', { style: { color: '#C792EA' } }, 'const'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#A6ACCD' } }, 'handleChange'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '('),
            l('span', { style: { color: '#A6ACCD', 'font-style': 'italic' } }, 'val'),
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
            l('span', { style: { color: '#A6ACCD' } }, 'checked'),
            l('span', { style: { color: '#89DDFF' } }, '.'),
            l('span', { style: { color: '#A6ACCD' } }, 'value'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, ','),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#A6ACCD' } }, 'val'),
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
            l('span', { style: { color: '#A6ACCD' } }, 'checked'),
            l('span', { style: { color: '#89DDFF' } }, ',')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '            '),
            l('span', { style: { color: '#A6ACCD' } }, 'checked2'),
            l('span', { style: { color: '#89DDFF' } }, ',')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '            '),
            l('span', { style: { color: '#A6ACCD' } }, 'checked3'),
            l('span', { style: { color: '#89DDFF' } }, ',')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '            '),
            l('span', { style: { color: '#A6ACCD' } }, 'checked4'),
            l('span', { style: { color: '#89DDFF' } }, ',')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '            '),
            l('span', { style: { color: '#A6ACCD' } }, 'halfCheck'),
            l('span', { style: { color: '#89DDFF' } }, ',')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '            '),
            l('span', { style: { color: '#A6ACCD' } }, 'allCheck'),
            l('span', { style: { color: '#89DDFF' } }, ',')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '            '),
            l('span', { style: { color: '#A6ACCD' } }, 'customCheck'),
            l('span', { style: { color: '#89DDFF' } }, ',')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '            '),
            l('span', { style: { color: '#A6ACCD' } }, 'handleChange')
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
  T = l(
    'h2',
    { id: 'checkgroup', tabindex: '-1' },
    [s('CheckGroup '), l('a', { class: 'header-anchor', href: '#checkgroup', 'aria-hidden': 'true' }, '#')],
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
            l('span', { style: { color: '#F07178' } }, 'v-space'),
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
            l('span', { style: { color: '#F07178' } }, 'v-checkbox-group'),
            l('span', { style: { color: '#89DDFF' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, 'v-model'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'value1'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, ':options'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'options1'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, 'direction'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'row'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, ' />')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#A6ACCD' } }, '        '),
            l('span', { style: { color: '#89DDFF' } }, '<'),
            l('span', { style: { color: '#F07178' } }, 'v-checkbox-group'),
            l('span', { style: { color: '#89DDFF' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, 'v-model'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'value2'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, ':options'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'options2'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, 'direction'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'row'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, ' />')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#A6ACCD' } }, '    '),
            l('span', { style: { color: '#89DDFF' } }, '</'),
            l('span', { style: { color: '#F07178' } }, 'v-space'),
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
            l('span', { style: { color: '#A6ACCD' } }, '('),
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
            l('span', { style: { color: '#F07178' } }, '(['),
            l('span', { style: { color: '#89DDFF' } }, '{'),
            l('span', { style: { color: '#F07178' } }, 'name'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#C3E88D' } }, 'data1'),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#89DDFF' } }, ','),
            l('span', { style: { color: '#F07178' } }, ' value'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#C3E88D' } }, '2'),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#89DDFF' } }, ','),
            l('span', { style: { color: '#F07178' } }, ' id'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#F78C6C' } }, '2'),
            l('span', { style: { color: '#89DDFF' } }, '}'),
            l('span', { style: { color: '#F07178' } }, '])')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '        '),
            l('span', { style: { color: '#C792EA' } }, 'const'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#A6ACCD' } }, 'options1'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#82AAFF' } }, 'ref'),
            l('span', { style: { color: '#F07178' } }, '([')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '            '),
            l('span', { style: { color: '#89DDFF' } }, '{'),
            l('span', { style: { color: '#F07178' } }, ' name'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#C3E88D' } }, 'data1'),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#89DDFF' } }, ','),
            l('span', { style: { color: '#F07178' } }, ' disabled'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#FF9CAC' } }, 'true'),
            l('span', { style: { color: '#89DDFF' } }, ','),
            l('span', { style: { color: '#F07178' } }, ' value'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#C3E88D' } }, '1'),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#89DDFF' } }, ','),
            l('span', { style: { color: '#F07178' } }, ' id'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#F78C6C' } }, '1'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '},')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '            '),
            l('span', { style: { color: '#89DDFF' } }, '{'),
            l('span', { style: { color: '#F07178' } }, ' name'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#C3E88D' } }, 'data2'),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#89DDFF' } }, ','),
            l('span', { style: { color: '#F07178' } }, ' value'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#C3E88D' } }, '2'),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#89DDFF' } }, ','),
            l('span', { style: { color: '#F07178' } }, ' id'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#F78C6C' } }, '2'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '},')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '            '),
            l('span', { style: { color: '#89DDFF' } }, '{'),
            l('span', { style: { color: '#F07178' } }, ' name'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#C3E88D' } }, 'data3'),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#89DDFF' } }, ','),
            l('span', { style: { color: '#F07178' } }, ' value'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#C3E88D' } }, '3'),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#89DDFF' } }, ','),
            l('span', { style: { color: '#F07178' } }, ' id'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#F78C6C' } }, '3'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '}')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [l('span', { style: { color: '#F07178' } }, '        ])')]),
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
            l('span', { style: { color: '#F07178' } }, '(['),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#C3E88D' } }, 'data1'),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#89DDFF' } }, ','),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#C3E88D' } }, 'data2'),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#F07178' } }, '])')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '        '),
            l('span', { style: { color: '#C792EA' } }, 'const'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#A6ACCD' } }, 'options2'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#82AAFF' } }, 'ref'),
            l('span', { style: { color: '#F07178' } }, '(['),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#C3E88D' } }, 'data1'),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#89DDFF' } }, ','),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#C3E88D' } }, 'data2'),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#89DDFF' } }, ','),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#C3E88D' } }, 'data3'),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#89DDFF' } }, ','),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#C3E88D' } }, 'data4'),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#89DDFF' } }, ','),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#C3E88D' } }, 'data5'),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#F07178' } }, '])')
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
            l('span', { style: { color: '#A6ACCD' } }, 'options1'),
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
            l('span', { style: { color: '#A6ACCD' } }, 'options2')
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
    { id: '按钮样式', tabindex: '-1' },
    [s('按钮样式 '), l('a', { class: 'header-anchor', href: '#按钮样式', 'aria-hidden': 'true' }, '#')],
    -1
  ),
  U = l(
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
            l('span', { style: { color: '#F07178' } }, 'v-space'),
            l('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#A6ACCD' } }, '        '),
            l('span', { style: { color: '#89DDFF' } }, '<'),
            l('span', { style: { color: '#F07178' } }, 'v-checkbox-group'),
            l('span', { style: { color: '#89DDFF' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, 'v-model'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'buttonValues1'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, 'size'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'small'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, 'direction'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'column'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#A6ACCD' } }, '            '),
            l('span', { style: { color: '#89DDFF' } }, '<'),
            l('span', { style: { color: '#F07178' } }, 'v-checkbox-button')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#89DDFF' } }, '                '),
            l('span', { style: { color: '#C792EA' } }, 'v-for'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'item in buttonOptions1'),
            l('span', { style: { color: '#89DDFF' } }, '"')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#89DDFF' } }, '                '),
            l('span', { style: { color: '#C792EA' } }, ':label'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'item.label'),
            l('span', { style: { color: '#89DDFF' } }, '"')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#89DDFF' } }, '                '),
            l('span', { style: { color: '#C792EA' } }, ':value'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'item.value'),
            l('span', { style: { color: '#89DDFF' } }, '"')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#89DDFF' } }, '                '),
            l('span', { style: { color: '#C792EA' } }, ':key'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'item.value'),
            l('span', { style: { color: '#89DDFF' } }, '"')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#89DDFF' } }, '                '),
            l('span', { style: { color: '#C792EA' } }, ':disabled'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'item.disabled'),
            l('span', { style: { color: '#89DDFF' } }, '"')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [l('span', { style: { color: '#89DDFF' } }, '                >')]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#A6ACCD' } }, '            '),
            l('span', { style: { color: '#89DDFF' } }, '</'),
            l('span', { style: { color: '#F07178' } }, 'v-checkbox-button'),
            l('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#A6ACCD' } }, '        '),
            l('span', { style: { color: '#89DDFF' } }, '</'),
            l('span', { style: { color: '#F07178' } }, 'v-checkbox-group'),
            l('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#A6ACCD' } }, '        '),
            l('span', { style: { color: '#89DDFF' } }, '<'),
            l('span', { style: { color: '#F07178' } }, 'v-checkbox-group'),
            l('span', { style: { color: '#89DDFF' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, 'v-model'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'buttonValues2'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, 'size'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'medium'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, 'direction'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'column'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#A6ACCD' } }, '            '),
            l('span', { style: { color: '#89DDFF' } }, '<'),
            l('span', { style: { color: '#F07178' } }, 'v-checkbox-button')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#89DDFF' } }, '                '),
            l('span', { style: { color: '#C792EA' } }, 'v-for'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'item in buttonOptions2'),
            l('span', { style: { color: '#89DDFF' } }, '"')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#89DDFF' } }, '                '),
            l('span', { style: { color: '#C792EA' } }, ':label'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'item.label'),
            l('span', { style: { color: '#89DDFF' } }, '"')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#89DDFF' } }, '                '),
            l('span', { style: { color: '#C792EA' } }, ':value'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'item.value'),
            l('span', { style: { color: '#89DDFF' } }, '"')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#89DDFF' } }, '                '),
            l('span', { style: { color: '#C792EA' } }, ':key'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'item.value'),
            l('span', { style: { color: '#89DDFF' } }, '"')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#89DDFF' } }, '                '),
            l('span', { style: { color: '#C792EA' } }, ':disabled'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'item.disabled'),
            l('span', { style: { color: '#89DDFF' } }, '"')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [l('span', { style: { color: '#89DDFF' } }, '                >')]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#A6ACCD' } }, '            '),
            l('span', { style: { color: '#89DDFF' } }, '</'),
            l('span', { style: { color: '#F07178' } }, 'v-checkbox-button'),
            l('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#A6ACCD' } }, '        '),
            l('span', { style: { color: '#89DDFF' } }, '</'),
            l('span', { style: { color: '#F07178' } }, 'v-checkbox-group'),
            l('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#A6ACCD' } }, '        '),
            l('span', { style: { color: '#89DDFF' } }, '<'),
            l('span', { style: { color: '#F07178' } }, 'v-checkbox-group'),
            l('span', { style: { color: '#89DDFF' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, 'v-model'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'buttonValues3'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, 'size'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'large'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, 'direction'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'column'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#A6ACCD' } }, '            '),
            l('span', { style: { color: '#89DDFF' } }, '<'),
            l('span', { style: { color: '#F07178' } }, 'v-checkbox-button')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#89DDFF' } }, '                '),
            l('span', { style: { color: '#C792EA' } }, 'v-for'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'item in buttonOptions3'),
            l('span', { style: { color: '#89DDFF' } }, '"')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#89DDFF' } }, '                '),
            l('span', { style: { color: '#C792EA' } }, ':label'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'item.label'),
            l('span', { style: { color: '#89DDFF' } }, '"')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#89DDFF' } }, '                '),
            l('span', { style: { color: '#C792EA' } }, ':value'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'item.value'),
            l('span', { style: { color: '#89DDFF' } }, '"')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#89DDFF' } }, '                '),
            l('span', { style: { color: '#C792EA' } }, ':key'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'item.value'),
            l('span', { style: { color: '#89DDFF' } }, '"')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#89DDFF' } }, '                '),
            l('span', { style: { color: '#C792EA' } }, ':disabled'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'item.disabled'),
            l('span', { style: { color: '#89DDFF' } }, '"')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [l('span', { style: { color: '#89DDFF' } }, '                >')]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#A6ACCD' } }, '            '),
            l('span', { style: { color: '#89DDFF' } }, '</'),
            l('span', { style: { color: '#F07178' } }, 'v-checkbox-button'),
            l('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#A6ACCD' } }, '        '),
            l('span', { style: { color: '#89DDFF' } }, '</'),
            l('span', { style: { color: '#F07178' } }, 'v-checkbox-group'),
            l('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#A6ACCD' } }, '    '),
            l('span', { style: { color: '#89DDFF' } }, '</'),
            l('span', { style: { color: '#F07178' } }, 'v-space'),
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
            l('span', { style: { color: '#A6ACCD' } }, '('),
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
            l('span', { style: { color: '#A6ACCD' } }, 'buttonOptions1'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#82AAFF' } }, 'ref'),
            l('span', { style: { color: '#F07178' } }, '([')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '            '),
            l('span', { style: { color: '#89DDFF' } }, '{'),
            l('span', { style: { color: '#F07178' } }, ' label'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#C3E88D' } }, '选项1'),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#89DDFF' } }, ','),
            l('span', { style: { color: '#F07178' } }, ' value'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#F78C6C' } }, '2'),
            l('span', { style: { color: '#89DDFF' } }, ','),
            l('span', { style: { color: '#F07178' } }, ' id'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#F78C6C' } }, '1'),
            l('span', { style: { color: '#89DDFF' } }, ','),
            l('span', { style: { color: '#F07178' } }, ' title'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#C3E88D' } }, '自定义title1'),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '},')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '            '),
            l('span', { style: { color: '#89DDFF' } }, '{'),
            l('span', { style: { color: '#F07178' } }, ' label'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#C3E88D' } }, '选项2'),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#89DDFF' } }, ','),
            l('span', { style: { color: '#F07178' } }, ' value'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#F78C6C' } }, '3'),
            l('span', { style: { color: '#89DDFF' } }, ','),
            l('span', { style: { color: '#F07178' } }, ' id'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#F78C6C' } }, '2'),
            l('span', { style: { color: '#89DDFF' } }, ','),
            l('span', { style: { color: '#F07178' } }, ' title'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#C3E88D' } }, '自定义title2'),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '},')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '            '),
            l('span', { style: { color: '#89DDFF' } }, '{'),
            l('span', { style: { color: '#F07178' } }, ' label'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#C3E88D' } }, '选项3'),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#89DDFF' } }, ','),
            l('span', { style: { color: '#F07178' } }, ' value'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#F78C6C' } }, '4'),
            l('span', { style: { color: '#89DDFF' } }, ','),
            l('span', { style: { color: '#F07178' } }, ' id'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#F78C6C' } }, '3'),
            l('span', { style: { color: '#89DDFF' } }, ','),
            l('span', { style: { color: '#F07178' } }, ' title'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#C3E88D' } }, '自定义title3'),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '},')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '        ])'),
            l('span', { style: { color: '#89DDFF' } }, ';')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '        '),
            l('span', { style: { color: '#C792EA' } }, 'const'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#A6ACCD' } }, 'buttonOptions2'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#82AAFF' } }, 'ref'),
            l('span', { style: { color: '#F07178' } }, '([')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '            '),
            l('span', { style: { color: '#89DDFF' } }, '{'),
            l('span', { style: { color: '#F07178' } }, ' label'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#C3E88D' } }, '选项1'),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#89DDFF' } }, ','),
            l('span', { style: { color: '#F07178' } }, ' value'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#F78C6C' } }, '2'),
            l('span', { style: { color: '#89DDFF' } }, ','),
            l('span', { style: { color: '#F07178' } }, ' disabled'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#FF9CAC' } }, 'true'),
            l('span', { style: { color: '#89DDFF' } }, ','),
            l('span', { style: { color: '#F07178' } }, '  id'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#F78C6C' } }, '1'),
            l('span', { style: { color: '#89DDFF' } }, ','),
            l('span', { style: { color: '#F07178' } }, ' title'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#C3E88D' } }, '自定义title1'),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '},')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '            '),
            l('span', { style: { color: '#89DDFF' } }, '{'),
            l('span', { style: { color: '#F07178' } }, ' label'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#C3E88D' } }, '选项2'),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#89DDFF' } }, ','),
            l('span', { style: { color: '#F07178' } }, ' value'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#F78C6C' } }, '3'),
            l('span', { style: { color: '#89DDFF' } }, ','),
            l('span', { style: { color: '#F07178' } }, ' id'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#F78C6C' } }, '2'),
            l('span', { style: { color: '#89DDFF' } }, ','),
            l('span', { style: { color: '#F07178' } }, ' title'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#C3E88D' } }, '自定义title2'),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '},')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '            '),
            l('span', { style: { color: '#89DDFF' } }, '{'),
            l('span', { style: { color: '#F07178' } }, ' label'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#C3E88D' } }, '选项3'),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#89DDFF' } }, ','),
            l('span', { style: { color: '#F07178' } }, ' value'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#F78C6C' } }, '4'),
            l('span', { style: { color: '#89DDFF' } }, ','),
            l('span', { style: { color: '#F07178' } }, ' id'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#F78C6C' } }, '3'),
            l('span', { style: { color: '#89DDFF' } }, ','),
            l('span', { style: { color: '#F07178' } }, ' title'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#C3E88D' } }, '自定义title3'),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '},')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '        ])'),
            l('span', { style: { color: '#89DDFF' } }, ';')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '        '),
            l('span', { style: { color: '#C792EA' } }, 'const'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#A6ACCD' } }, 'buttonOptions3'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#82AAFF' } }, 'ref'),
            l('span', { style: { color: '#F07178' } }, '([')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '            '),
            l('span', { style: { color: '#89DDFF' } }, '{'),
            l('span', { style: { color: '#F07178' } }, ' label'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#C3E88D' } }, '选项1'),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#89DDFF' } }, ','),
            l('span', { style: { color: '#F07178' } }, ' value'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#F78C6C' } }, '2'),
            l('span', { style: { color: '#89DDFF' } }, ','),
            l('span', { style: { color: '#F07178' } }, ' id'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#F78C6C' } }, '1'),
            l('span', { style: { color: '#89DDFF' } }, ','),
            l('span', { style: { color: '#F07178' } }, ' title'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#C3E88D' } }, '自定义title1'),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '},')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '            '),
            l('span', { style: { color: '#89DDFF' } }, '{'),
            l('span', { style: { color: '#F07178' } }, ' label'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#C3E88D' } }, '选项2'),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#89DDFF' } }, ','),
            l('span', { style: { color: '#F07178' } }, ' value'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#F78C6C' } }, '3'),
            l('span', { style: { color: '#89DDFF' } }, ','),
            l('span', { style: { color: '#F07178' } }, ' id'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#F78C6C' } }, '2'),
            l('span', { style: { color: '#89DDFF' } }, ','),
            l('span', { style: { color: '#F07178' } }, ' title'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#C3E88D' } }, '自定义title2'),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '},')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '            '),
            l('span', { style: { color: '#89DDFF' } }, '{'),
            l('span', { style: { color: '#F07178' } }, ' label'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#C3E88D' } }, '选项3'),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#89DDFF' } }, ','),
            l('span', { style: { color: '#F07178' } }, ' value'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#F78C6C' } }, '4'),
            l('span', { style: { color: '#89DDFF' } }, ','),
            l('span', { style: { color: '#F07178' } }, ' id'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#F78C6C' } }, '3'),
            l('span', { style: { color: '#89DDFF' } }, ','),
            l('span', { style: { color: '#F07178' } }, ' title'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#C3E88D' } }, '自定义title3'),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '},')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '        ])'),
            l('span', { style: { color: '#89DDFF' } }, ';')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '         '),
            l('span', { style: { color: '#C792EA' } }, 'const'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#A6ACCD' } }, 'buttonValues1'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#82AAFF' } }, 'ref'),
            l('span', { style: { color: '#F07178' } }, '([])'),
            l('span', { style: { color: '#89DDFF' } }, ';')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '         '),
            l('span', { style: { color: '#C792EA' } }, 'const'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#A6ACCD' } }, 'buttonValues2'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#82AAFF' } }, 'ref'),
            l('span', { style: { color: '#F07178' } }, '(['),
            l('span', { style: { color: '#F78C6C' } }, '2'),
            l('span', { style: { color: '#F07178' } }, '])'),
            l('span', { style: { color: '#89DDFF' } }, ';')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '         '),
            l('span', { style: { color: '#C792EA' } }, 'const'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#A6ACCD' } }, 'buttonValues3'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#82AAFF' } }, 'ref'),
            l('span', { style: { color: '#F07178' } }, '(['),
            l('span', { style: { color: '#F78C6C' } }, '4'),
            l('span', { style: { color: '#F07178' } }, '])'),
            l('span', { style: { color: '#89DDFF' } }, ';')
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
            l('span', { style: { color: '#A6ACCD' } }, 'buttonOptions1'),
            l('span', { style: { color: '#89DDFF' } }, ',')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '            '),
            l('span', { style: { color: '#A6ACCD' } }, 'buttonOptions2'),
            l('span', { style: { color: '#89DDFF' } }, ',')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '            '),
            l('span', { style: { color: '#A6ACCD' } }, 'buttonOptions3'),
            l('span', { style: { color: '#89DDFF' } }, ',')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '            '),
            l('span', { style: { color: '#A6ACCD' } }, 'buttonValues1'),
            l('span', { style: { color: '#89DDFF' } }, ',')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '            '),
            l('span', { style: { color: '#A6ACCD' } }, 'buttonValues2'),
            l('span', { style: { color: '#89DDFF' } }, ',')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '            '),
            l('span', { style: { color: '#A6ACCD' } }, 'buttonValues3')
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
  G = k(
    `<h2 id="common-attributes" tabindex="-1">Common Attributes <a class="header-anchor" href="#common-attributes" aria-hidden="true">#</a></h2><table><thead><tr><th style="text-align:left;">属性名</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认</th><th style="text-align:left;">说明</th><th style="text-align:left;">跳转 Demo</th></tr></thead><tbody><tr><td style="text-align:left;">name</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"></td><td style="text-align:left;">原生属性</td><td style="text-align:left;"><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">基本用法</a></td></tr><tr><td style="text-align:left;">size</td><td style="text-align:left;"><a href="#size">size</a></td><td style="text-align:left;"></td><td style="text-align:left;">复选框大小</td><td style="text-align:left;"><a href="#%E6%8C%89%E9%92%AE%E6%A0%B7%E5%BC%8F">复选框大小</a></td></tr><tr><td style="text-align:left;">isShowTitle</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;"></td><td style="text-align:left;">是否显示title提示</td><td style="text-align:left;"><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">是否显示title提示</a></td></tr><tr><td style="text-align:left;">title</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"></td><td style="text-align:left;">自定义title提示内容</td><td style="text-align:left;"><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">title提示</a></td></tr><tr><td style="text-align:left;">color</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"></td><td style="text-align:left;">复选框颜色</td><td style="text-align:left;"><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">复选框颜色</a></td></tr><tr><td style="text-align:left;">showAnimation</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;"></td><td style="text-align:left;">展示动画</td><td style="text-align:left;"><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">展示动画</a></td></tr><tr><td style="text-align:left;">disabled</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;"></td><td style="text-align:left;">禁用</td><td style="text-align:left;"><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">禁用</a></td></tr><tr><td style="text-align:left;">halfChecked</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;"></td><td style="text-align:left;">半选中状态</td><td style="text-align:left;"><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">半选中状态</a></td></tr></tbody></table><h2 id="vcheckbox" tabindex="-1">VCheckbox <a class="header-anchor" href="#vcheckbox" aria-hidden="true">#</a></h2><table><thead><tr><th style="text-align:left;">属性名</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认</th><th style="text-align:left;">说明</th><th style="text-align:left;">跳转 Demo</th></tr></thead><tbody><tr><td style="text-align:left;">checked</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;"></td><td style="text-align:left;">选择状态</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">value</td><td style="text-align:left;"><code>string/number</code></td><td style="text-align:left;"></td><td style="text-align:left;">选中状态的值</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">label</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"></td><td style="text-align:left;">显示标签</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">border</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;"></td><td style="text-align:left;">是否有边框</td><td style="text-align:left;"></td></tr></tbody></table><h2 id="vcheckboxgroup" tabindex="-1">VCheckboxGroup <a class="header-anchor" href="#vcheckboxgroup" aria-hidden="true">#</a></h2><table><thead><tr><th style="text-align:left;">属性名</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认</th><th style="text-align:left;">说明</th><th style="text-align:left;">跳转 Demo</th></tr></thead><tbody><tr><td style="text-align:left;">direction</td><td style="text-align:left;"><a href="#direction">direction</a></td><td style="text-align:left;"></td><td style="text-align:left;">显示方向</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">itemWidth</td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;"></td><td style="text-align:left;">每一项 checkbox 的宽度(px)</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">options</td><td style="text-align:left;"><code>array</code></td><td style="text-align:left;"></td><td style="text-align:left;">复选框选项数组</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">max</td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;"></td><td style="text-align:left;">可被勾选的最大数量</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">textColor</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"></td><td style="text-align:left;">按钮形态被选中的字体样式</td><td style="text-align:left;"></td></tr></tbody></table><h2 id="vcheckboxbutton" tabindex="-1">VCheckboxButton <a class="header-anchor" href="#vcheckboxbutton" aria-hidden="true">#</a></h2><table><thead><tr><th style="text-align:left;">属性名</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认</th><th style="text-align:left;">说明</th><th style="text-align:left;">跳转 Demo</th></tr></thead></table><h3 id="size" tabindex="-1">size <a class="header-anchor" href="#size" aria-hidden="true">#</a></h3><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">size</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">small</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">medium</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">large</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre></div><h3 id="direction" tabindex="-1">direction <a class="header-anchor" href="#direction" aria-hidden="true">#</a></h3><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">direction</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">row</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">column</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre></div><h2 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-hidden="true">#</a></h2><table><thead><tr><th style="text-align:left;">事件</th><th style="text-align:left;">说明</th><th style="text-align:left;">跳转Demo</th></tr></thead><tbody><tr><td style="text-align:left;">change</td><td style="text-align:left;">checkbox改变的事件</td><td style="text-align:left;"></td></tr></tbody></table>`,
    14
  )
function $(D, p, F, u, d, i) {
  const y = v('render-demo-0'),
    a = v('demo'),
    C = v('render-demo-1'),
    o = v('render-demo-2')
  return (
    B(),
    x('div', null, [
      w,
      O,
      f(
        a,
        {
          customClass: 'undefined',
          sourceCode: `<template>
    <v-space direction="vertical">
        <v-checkbox label="Checked"  :isShowTitle="false" v-model="checked" @change="handleChange" />
        <v-checkbox label="Custom title" :isShowTitle="true" title="my title" v-model="checked2" />
        <v-checkbox label="No Animation" :isShowTitle="false"  :showAnimation="false" v-model="checked3" />
        <v-checkbox label="Disabled"  :isShowTitle="false" v-model="checked4"  disabled />
        <v-checkbox label="Half-checked" :isShowTitle="false" :half-checked="halfCheck" v-model="allCheck"  />
        <v-checkbox label="Custom color" :isShowTitle="false" v-model="customCheck" color="RGB(255, 193, 7)" />
    </v-space>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
    setup () {
        const checked = ref(false)
        const checked2 = ref(false)
        const checked3 = ref(true)
        const checked4 = ref(true)
        const halfCheck = ref(true)
        const allCheck = ref(false)
        const customCheck = ref(true)
        const handleChange = (val) => {
            console.log(checked.value , val)
        }
        return {
            checked,
            checked2,
            checked3,
            checked4,
            halfCheck,
            allCheck,
            customCheck,
            handleChange
        }
    }
})
<\/script>
`
        },
        { highlight: E(() => [S]), default: E(() => [f(y)]), _: 1 }
      ),
      T,
      f(
        a,
        {
          customClass: 'undefined',
          sourceCode: `<template>
    <v-space direction="vertical">
        <v-checkbox-group v-model="value1" :options="options1" direction="row" />
        <v-checkbox-group v-model="value2" :options="options2" direction="row" />
    </v-space>
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
    setup () {
        const value1 = ref([{name: 'data1', value: '2', id: 2}])
        const options1 = ref([
            { name: 'data1', disabled: true, value: '1', id: 1 },
            { name: 'data2', value: '2', id: 2 },
            { name: 'data3', value: '3', id: 3 }
        ])
        const value2 = ref(['data1', 'data2'])
        const options2 = ref(['data1', 'data2', 'data3', 'data4', 'data5'])
        return {
            value1,
            options1,
            value2,
            options2
        }
    }
})
<\/script>
`
        },
        { highlight: E(() => [z]), default: E(() => [f(C)]), _: 1 }
      ),
      N,
      f(
        a,
        {
          customClass: 'undefined',
          sourceCode: `<template>
    <v-space>
        <v-checkbox-group v-model="buttonValues1" size="small" direction="column">
            <v-checkbox-button
                v-for="item in buttonOptions1"
                :label="item.label"
                :value="item.value"
                :key="item.value"
                :disabled="item.disabled"
                >
            </v-checkbox-button>
        </v-checkbox-group>
        <v-checkbox-group v-model="buttonValues2" size="medium" direction="column">
            <v-checkbox-button
                v-for="item in buttonOptions2"
                :label="item.label"
                :value="item.value"
                :key="item.value"
                :disabled="item.disabled"
                >
            </v-checkbox-button>
        </v-checkbox-group>
        <v-checkbox-group v-model="buttonValues3" size="large" direction="column">
            <v-checkbox-button
                v-for="item in buttonOptions3"
                :label="item.label"
                :value="item.value"
                :key="item.value"
                :disabled="item.disabled"
                >
            </v-checkbox-button>
        </v-checkbox-group>
    </v-space>
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
    setup () {
        const buttonOptions1 = ref([
            { label: '选项1', value: 2, id: 1, title: '自定义title1' },
            { label: '选项2', value: 3, id: 2, title: '自定义title2' },
            { label: '选项3', value: 4, id: 3, title: '自定义title3' },
        ]);
        const buttonOptions2 = ref([
            { label: '选项1', value: 2, disabled: true,  id: 1, title: '自定义title1' },
            { label: '选项2', value: 3, id: 2, title: '自定义title2' },
            { label: '选项3', value: 4, id: 3, title: '自定义title3' },
        ]);
        const buttonOptions3 = ref([
            { label: '选项1', value: 2, id: 1, title: '自定义title1' },
            { label: '选项2', value: 3, id: 2, title: '自定义title2' },
            { label: '选项3', value: 4, id: 3, title: '自定义title3' },
        ]);
         const buttonValues1 = ref([]);
         const buttonValues2 = ref([2]);
         const buttonValues3 = ref([4]);
        return {
            buttonOptions1,
            buttonOptions2,
            buttonOptions3,
            buttonValues1,
            buttonValues2,
            buttonValues3
        }
    }
})
<\/script>
`
        },
        { highlight: E(() => [U]), default: E(() => [f(o)]), _: 1 }
      ),
      G
    ])
  )
}
const L = g(_, [['render', $]])
export { R as __pageData, L as default }
