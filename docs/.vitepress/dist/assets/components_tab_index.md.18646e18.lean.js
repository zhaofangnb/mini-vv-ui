import { V as y, _ as f, c as _, a as d, w as A, b as s, d as l, r as T, o as V } from './app.2ba2cf25.js'
const { defineComponent: v } = y,
  E = v({
    name: 'component-doc',
    components: {
      'render-demo-0': (function () {
        const { createTextVNode: a, resolveComponent: n, withCtx: o, createVNode: t, openBlock: i, createBlock: C } = y
        function p(e, F) {
          const D = n('VTab'),
            u = n('VTabs')
          return (
            i(),
            C(
              u,
              { modelValue: e.activeTab, 'onUpdate:modelValue': F[0] || (F[0] = m => (e.activeTab = m)) },
              {
                default: o(() => [
                  t(D, { id: 'tab1', title: 'Tab1' }, { default: o(() => [a('Tab1')]), _: 1 }),
                  t(D, { id: 'tab2', title: 'Tab2' }, { default: o(() => [a('Tab2')]), _: 1 })
                ]),
                _: 1
              },
              8,
              ['modelValue']
            )
          )
        }
        const { defineComponent: c, ref: r } = y,
          b = c({
            setup() {
              return { activeTab: r('tab1') }
            }
          })
        return { render: p, ...b }
      })(),
      'render-demo-1': (function () {
        const { createTextVNode: a, resolveComponent: n, withCtx: o, createVNode: t, openBlock: i, createBlock: C } = y
        function p(e, F) {
          const D = n('VTab'),
            u = n('VTabs')
          return (
            i(),
            C(
              u,
              {
                modelValue: e.activeTab,
                'onUpdate:modelValue': F[0] || (F[0] = m => (e.activeTab = m)),
                closable: '',
                addable: ''
              },
              {
                default: o(() => [
                  t(D, { id: 'tab1', title: 'Tab1' }, { default: o(() => [a('Tab1')]), _: 1 }),
                  t(D, { id: 'tab2', title: 'Tab2' }, { default: o(() => [a('Tab2')]), _: 1 })
                ]),
                _: 1
              },
              8,
              ['modelValue']
            )
          )
        }
        const { defineComponent: c, ref: r } = y,
          b = c({
            setup() {
              return { activeTab: r('tab1') }
            }
          })
        return { render: p, ...b }
      })()
    }
  }),
  $ = JSON.parse(
    '{"title":"Tabs 页签","description":"","frontmatter":{},"headers":[{"level":2,"title":"基础使用","slug":"基础使用","link":"#基础使用","children":[]},{"level":2,"title":"新增和关闭标签","slug":"新增和关闭标签","link":"#新增和关闭标签","children":[]}],"relativePath":"components/tab/index.md","lastUpdated":1679974029000}'
  )
const h = s(
    'h1',
    { id: 'tabs-页签', tabindex: '-1' },
    [l('Tabs 页签 '), s('a', { class: 'header-anchor', href: '#tabs-页签', 'aria-hidden': 'true' }, '#')],
    -1
  ),
  B = s(
    'h2',
    { id: '基础使用', tabindex: '-1' },
    [l('基础使用 '), s('a', { class: 'header-anchor', href: '#基础使用', 'aria-hidden': 'true' }, '#')],
    -1
  ),
  x = s(
    'div',
    { class: 'language-vue' },
    [
      s('pre', { 'v-pre': '', class: 'shiki material-theme-palenight', tabindex: '0' }, [
        s('code', null, [
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#89DDFF' } }, '<'),
            s('span', { style: { color: '#F07178' } }, 'template'),
            s('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#A6ACCD' } }, '    '),
            s('span', { style: { color: '#89DDFF' } }, '<'),
            s('span', { style: { color: '#F07178' } }, 'VTabs'),
            s('span', { style: { color: '#89DDFF' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, 'v-model'),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#C3E88D' } }, 'activeTab'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#A6ACCD' } }, '        '),
            s('span', { style: { color: '#89DDFF' } }, '<'),
            s('span', { style: { color: '#F07178' } }, 'VTab'),
            s('span', { style: { color: '#89DDFF' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, 'id'),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#C3E88D' } }, 'tab1'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#89DDFF' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, 'title'),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#C3E88D' } }, 'Tab1'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
            s('span', { style: { color: '#A6ACCD' } }, 'Tab1'),
            s('span', { style: { color: '#89DDFF' } }, '</'),
            s('span', { style: { color: '#F07178' } }, 'VTab'),
            s('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#A6ACCD' } }, '        '),
            s('span', { style: { color: '#89DDFF' } }, '<'),
            s('span', { style: { color: '#F07178' } }, 'VTab'),
            s('span', { style: { color: '#89DDFF' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, 'id'),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#C3E88D' } }, 'tab2'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#89DDFF' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, 'title'),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#C3E88D' } }, 'Tab2'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
            s('span', { style: { color: '#A6ACCD' } }, 'Tab2'),
            s('span', { style: { color: '#89DDFF' } }, '</'),
            s('span', { style: { color: '#F07178' } }, 'VTab'),
            s('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#A6ACCD' } }, '    '),
            s('span', { style: { color: '#89DDFF' } }, '</'),
            s('span', { style: { color: '#F07178' } }, 'VTabs'),
            s('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#89DDFF' } }, '</'),
            s('span', { style: { color: '#F07178' } }, 'template'),
            s('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#89DDFF' } }, '<'),
            s('span', { style: { color: '#F07178' } }, 'script'),
            s('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#89DDFF', 'font-style': 'italic' } }, 'import'),
            s('span', { style: { color: '#A6ACCD' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, '{'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#A6ACCD' } }, 'defineComponent'),
            s('span', { style: { color: '#89DDFF' } }, ','),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#A6ACCD' } }, 'ref'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, '}'),
            s('span', { style: { color: '#A6ACCD' } }, ' '),
            s('span', { style: { color: '#89DDFF', 'font-style': 'italic' } }, 'from'),
            s('span', { style: { color: '#A6ACCD' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#C3E88D' } }, 'vue'),
            s('span', { style: { color: '#89DDFF' } }, "'")
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#89DDFF', 'font-style': 'italic' } }, 'export'),
            s('span', { style: { color: '#A6ACCD' } }, ' '),
            s('span', { style: { color: '#89DDFF', 'font-style': 'italic' } }, 'default'),
            s('span', { style: { color: '#A6ACCD' } }, ' '),
            s('span', { style: { color: '#82AAFF' } }, 'defineComponent'),
            s('span', { style: { color: '#A6ACCD' } }, '('),
            s('span', { style: { color: '#89DDFF' } }, '{')
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#A6ACCD' } }, '    '),
            s('span', { style: { color: '#F07178' } }, 'setup'),
            s('span', { style: { color: '#A6ACCD' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, '()'),
            s('span', { style: { color: '#A6ACCD' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, '{')
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '        '),
            s('span', { style: { color: '#C792EA' } }, 'const'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#A6ACCD' } }, 'activeTab'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#82AAFF' } }, 'ref'),
            s('span', { style: { color: '#F07178' } }, '('),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#C3E88D' } }, 'tab1'),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#F07178' } }, ')')
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '        '),
            s('span', { style: { color: '#89DDFF', 'font-style': 'italic' } }, 'return'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, '{')
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '            '),
            s('span', { style: { color: '#A6ACCD' } }, 'activeTab')
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '        '),
            s('span', { style: { color: '#89DDFF' } }, '}')
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '    '),
            s('span', { style: { color: '#89DDFF' } }, '}')
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#89DDFF' } }, '}'),
            s('span', { style: { color: '#A6ACCD' } }, ')')
          ]),
          l(`
`),
          s('span', { class: 'line' }),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#89DDFF' } }, '</'),
            s('span', { style: { color: '#F07178' } }, 'script'),
            s('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#89DDFF' } }, '<'),
            s('span', { style: { color: '#F07178' } }, 'style'),
            s('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#89DDFF' } }, '.'),
            s('span', { style: { color: '#FFCB6B' } }, 'vp-doc'),
            s('span', { style: { color: '#A6ACCD' } }, ' '),
            s('span', { style: { color: '#FFCB6B' } }, 'li'),
            s('span', { style: { color: '#A6ACCD' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, '+'),
            s('span', { style: { color: '#A6ACCD' } }, ' '),
            s('span', { style: { color: '#FFCB6B' } }, 'li'),
            s('span', { style: { color: '#A6ACCD' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, '{')
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#A6ACCD' } }, '  '),
            s('span', { style: { color: '#B2CCD6' } }, 'margin-top'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#A6ACCD' } }, ' '),
            s('span', { style: { color: '#F78C6C' } }, '0'),
            s('span', { style: { color: '#89DDFF' } }, ';')
          ]),
          l(`
`),
          s('span', { class: 'line' }, [s('span', { style: { color: '#89DDFF' } }, '}')]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#89DDFF' } }, '</'),
            s('span', { style: { color: '#F07178' } }, 'style'),
            s('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          l(`
`),
          s('span', { class: 'line' })
        ])
      ])
    ],
    -1
  ),
  g = s(
    'h2',
    { id: '新增和关闭标签', tabindex: '-1' },
    [l('新增和关闭标签 '), s('a', { class: 'header-anchor', href: '#新增和关闭标签', 'aria-hidden': 'true' }, '#')],
    -1
  ),
  k = s(
    'div',
    { class: 'language-vue' },
    [
      s('pre', { 'v-pre': '', class: 'shiki material-theme-palenight', tabindex: '0' }, [
        s('code', null, [
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#89DDFF' } }, '<'),
            s('span', { style: { color: '#F07178' } }, 'template'),
            s('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#A6ACCD' } }, '    '),
            s('span', { style: { color: '#89DDFF' } }, '<'),
            s('span', { style: { color: '#F07178' } }, 'VTabs'),
            s('span', { style: { color: '#89DDFF' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, 'v-model'),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#C3E88D' } }, 'activeTab'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#89DDFF' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, 'closable'),
            s('span', { style: { color: '#89DDFF' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, 'addable'),
            s('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#A6ACCD' } }, '        '),
            s('span', { style: { color: '#89DDFF' } }, '<'),
            s('span', { style: { color: '#F07178' } }, 'VTab'),
            s('span', { style: { color: '#89DDFF' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, 'id'),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#C3E88D' } }, 'tab1'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#89DDFF' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, 'title'),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#C3E88D' } }, 'Tab1'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
            s('span', { style: { color: '#A6ACCD' } }, 'Tab1'),
            s('span', { style: { color: '#89DDFF' } }, '</'),
            s('span', { style: { color: '#F07178' } }, 'VTab'),
            s('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#A6ACCD' } }, '        '),
            s('span', { style: { color: '#89DDFF' } }, '<'),
            s('span', { style: { color: '#F07178' } }, 'VTab'),
            s('span', { style: { color: '#89DDFF' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, 'id'),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#C3E88D' } }, 'tab2'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#89DDFF' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, 'title'),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#C3E88D' } }, 'Tab2'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
            s('span', { style: { color: '#A6ACCD' } }, 'Tab2'),
            s('span', { style: { color: '#89DDFF' } }, '</'),
            s('span', { style: { color: '#F07178' } }, 'VTab'),
            s('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#A6ACCD' } }, '    '),
            s('span', { style: { color: '#89DDFF' } }, '</'),
            s('span', { style: { color: '#F07178' } }, 'VTabs'),
            s('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#89DDFF' } }, '</'),
            s('span', { style: { color: '#F07178' } }, 'template'),
            s('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#89DDFF' } }, '<'),
            s('span', { style: { color: '#F07178' } }, 'script'),
            s('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#89DDFF', 'font-style': 'italic' } }, 'import'),
            s('span', { style: { color: '#A6ACCD' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, '{'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#A6ACCD' } }, 'defineComponent'),
            s('span', { style: { color: '#89DDFF' } }, ','),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#A6ACCD' } }, 'ref'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, '}'),
            s('span', { style: { color: '#A6ACCD' } }, ' '),
            s('span', { style: { color: '#89DDFF', 'font-style': 'italic' } }, 'from'),
            s('span', { style: { color: '#A6ACCD' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#C3E88D' } }, 'vue'),
            s('span', { style: { color: '#89DDFF' } }, "'")
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#89DDFF', 'font-style': 'italic' } }, 'export'),
            s('span', { style: { color: '#A6ACCD' } }, ' '),
            s('span', { style: { color: '#89DDFF', 'font-style': 'italic' } }, 'default'),
            s('span', { style: { color: '#A6ACCD' } }, ' '),
            s('span', { style: { color: '#82AAFF' } }, 'defineComponent'),
            s('span', { style: { color: '#A6ACCD' } }, '('),
            s('span', { style: { color: '#89DDFF' } }, '{')
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#A6ACCD' } }, '    '),
            s('span', { style: { color: '#F07178' } }, 'setup'),
            s('span', { style: { color: '#A6ACCD' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, '()'),
            s('span', { style: { color: '#A6ACCD' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, '{')
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '        '),
            s('span', { style: { color: '#C792EA' } }, 'const'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#A6ACCD' } }, 'activeTab'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#82AAFF' } }, 'ref'),
            s('span', { style: { color: '#F07178' } }, '('),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#C3E88D' } }, 'tab1'),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#F07178' } }, ')')
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '        '),
            s('span', { style: { color: '#89DDFF', 'font-style': 'italic' } }, 'return'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, '{')
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '            '),
            s('span', { style: { color: '#A6ACCD' } }, 'activeTab')
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '        '),
            s('span', { style: { color: '#89DDFF' } }, '}')
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '    '),
            s('span', { style: { color: '#89DDFF' } }, '}')
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#89DDFF' } }, '}'),
            s('span', { style: { color: '#A6ACCD' } }, ')')
          ]),
          l(`
`),
          s('span', { class: 'line' }),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#89DDFF' } }, '</'),
            s('span', { style: { color: '#F07178' } }, 'script'),
            s('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#89DDFF' } }, '<'),
            s('span', { style: { color: '#F07178' } }, 'style'),
            s('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#89DDFF' } }, '.'),
            s('span', { style: { color: '#FFCB6B' } }, 'vp-doc'),
            s('span', { style: { color: '#A6ACCD' } }, ' '),
            s('span', { style: { color: '#FFCB6B' } }, 'li'),
            s('span', { style: { color: '#A6ACCD' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, '+'),
            s('span', { style: { color: '#A6ACCD' } }, ' '),
            s('span', { style: { color: '#FFCB6B' } }, 'li'),
            s('span', { style: { color: '#A6ACCD' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, '{')
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#A6ACCD' } }, '  '),
            s('span', { style: { color: '#B2CCD6' } }, 'margin-top'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#A6ACCD' } }, ' '),
            s('span', { style: { color: '#F78C6C' } }, '0'),
            s('span', { style: { color: '#89DDFF' } }, ';')
          ]),
          l(`
`),
          s('span', { class: 'line' }, [s('span', { style: { color: '#89DDFF' } }, '}')]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#89DDFF' } }, '</'),
            s('span', { style: { color: '#F07178' } }, 'style'),
            s('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          l(`
`),
          s('span', { class: 'line' })
        ])
      ])
    ],
    -1
  )
function N(a, n, o, t, i, C) {
  const p = T('render-demo-0'),
    c = T('demo'),
    r = T('render-demo-1')
  return (
    V(),
    _('div', null, [
      h,
      B,
      d(
        c,
        {
          customClass: 'undefined',
          sourceCode: `<template>
    <VTabs v-model="activeTab">
        <VTab id="tab1" title="Tab1">Tab1</VTab>
        <VTab id="tab2" title="Tab2">Tab2</VTab>
    </VTabs>
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
    setup () {
        const activeTab = ref('tab1')
        return {
            activeTab
        }
    }
})

<\/script>
<style>
.vp-doc li + li {
  margin-top: 0;
}
</style>
`
        },
        { highlight: A(() => [x]), default: A(() => [d(p)]), _: 1 }
      ),
      g,
      d(
        c,
        {
          customClass: 'undefined',
          sourceCode: `<template>
    <VTabs v-model="activeTab" closable addable>
        <VTab id="tab1" title="Tab1">Tab1</VTab>
        <VTab id="tab2" title="Tab2">Tab2</VTab>
    </VTabs>
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
    setup () {
        const activeTab = ref('tab1')
        return {
            activeTab
        }
    }
})

<\/script>
<style>
.vp-doc li + li {
  margin-top: 0;
}
</style>
`
        },
        { highlight: A(() => [k]), default: A(() => [d(r)]), _: 1 }
      )
    ])
  )
}
const U = f(E, [['render', N]])
export { $ as __pageData, U as default }
