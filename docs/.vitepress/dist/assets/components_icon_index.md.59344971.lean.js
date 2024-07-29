import { V as m, _ as h, c as E, a as D, w as y, b as e, d as s, e as _, r as C, o as A } from './app.2ba2cf25.js'
const { defineComponent: x } = m,
  V = x({
    name: 'component-doc',
    components: {
      'render-demo-0': (function () {
        const { resolveComponent: l, createVNode: o, withCtx: t, openBlock: a, createElementBlock: c } = m,
          r = { style: { padding: '10px 0' } }
        function p(d, i) {
          const n = l('VIcon'),
            u = l('VSpace')
          return (
            a(),
            c('div', r, [
              o(
                u,
                { size: 'small' },
                { default: t(() => [o(n, { name: 'search', size: 20 }), o(n, { name: 'edit', size: 25 })]), _: 1 }
              )
            ])
          )
        }
        return { render: p, ...{} }
      })(),
      'render-demo-1': (function () {
        const { resolveComponent: l, createVNode: o, openBlock: t, createElementBlock: a } = m,
          c = { style: { padding: '10px 0' } }
        function r(F, d) {
          const i = l('VIcon')
          return t(), a('div', c, [o(i, { name: 'https://vitejs.dev/logo.svg', size: 20 })])
        }
        return { render: r, ...{} }
      })(),
      'render-demo-2': (function () {
        const { resolveComponent: l, createVNode: o, withCtx: t, openBlock: a, createElementBlock: c } = m,
          r = { style: { padding: '10px 0' } }
        function p(d, i) {
          const n = l('VIcon'),
            u = l('VSpace')
          return (
            a(),
            c('div', r, [
              o(
                u,
                { size: 'small' },
                { default: t(() => [o(n, { name: 'search', size: '20px' }), o(n, { name: 'upload', size: 20 })]), _: 1 }
              )
            ])
          )
        }
        return { render: p, ...{} }
      })(),
      'render-demo-3': (function () {
        const { resolveComponent: l, createVNode: o, withCtx: t, openBlock: a, createElementBlock: c } = m,
          r = { style: { padding: '10px 0' } }
        function p(d, i) {
          const n = l('VIcon'),
            u = l('VSpace')
          return (
            a(),
            c('div', r, [
              o(
                u,
                { size: 'small' },
                {
                  default: t(() => [
                    o(n, { name: 'search', size: '20px', color: '#5e7ce0' }),
                    o(n, { name: 'delete', size: 20, color: 'red' })
                  ]),
                  _: 1
                }
              )
            ])
          )
        }
        return { render: p, ...{} }
      })()
    }
  }),
  J = JSON.parse(
    '{"title":"VIcon 图标","description":"","frontmatter":{},"headers":[{"level":2,"title":"使用方法","slug":"使用方法","link":"#使用方法","children":[]},{"level":2,"title":"图标大小","slug":"图标大小","link":"#图标大小","children":[]},{"level":2,"title":"图标颜色","slug":"图标颜色","link":"#图标颜色","children":[]},{"level":2,"title":"VIcon Attributes","slug":"vicon-attributes","link":"#vicon-attributes","children":[]}],"relativePath":"components/icon/index.md","lastUpdated":1678863431000}'
  ),
  g = e(
    'h1',
    { id: 'vicon-图标', tabindex: '-1' },
    [s('VIcon 图标 '), e('a', { class: 'header-anchor', href: '#vicon-图标', 'aria-hidden': 'true' }, '#')],
    -1
  ),
  v = e(
    'h2',
    { id: '使用方法', tabindex: '-1' },
    [s('使用方法 '), e('a', { class: 'header-anchor', href: '#使用方法', 'aria-hidden': 'true' }, '#')],
    -1
  ),
  f = e('p', null, '1.使用 name 属性来显示系统自定义图标。', -1),
  B = e(
    'div',
    { class: 'language-vue' },
    [
      e('pre', { 'v-pre': '', class: 'shiki material-theme-palenight', tabindex: '0' }, [
        e('code', null, [
          e('span', { class: 'line' }, [
            e('span', { style: { color: '#89DDFF' } }, '<'),
            e('span', { style: { color: '#F07178' } }, 'template'),
            e('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          e('span', { class: 'line' }, [
            e('span', { style: { color: '#A6ACCD' } }, '  '),
            e('span', { style: { color: '#89DDFF' } }, '<'),
            e('span', { style: { color: '#F07178' } }, 'div'),
            e('span', { style: { color: '#89DDFF' } }, ' '),
            e('span', { style: { color: '#C792EA' } }, 'style'),
            e('span', { style: { color: '#89DDFF' } }, '='),
            e('span', { style: { color: '#89DDFF' } }, '"'),
            e('span', { style: { color: '#C3E88D' } }, 'padding: 10px 0;'),
            e('span', { style: { color: '#89DDFF' } }, '"'),
            e('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          e('span', { class: 'line' }, [
            e('span', { style: { color: '#A6ACCD' } }, '   '),
            e('span', { style: { color: '#89DDFF' } }, '<'),
            e('span', { style: { color: '#F07178' } }, 'VSpace'),
            e('span', { style: { color: '#89DDFF' } }, ' '),
            e('span', { style: { color: '#C792EA' } }, 'size'),
            e('span', { style: { color: '#89DDFF' } }, '='),
            e('span', { style: { color: '#89DDFF' } }, '"'),
            e('span', { style: { color: '#C3E88D' } }, 'small'),
            e('span', { style: { color: '#89DDFF' } }, '"'),
            e('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          e('span', { class: 'line' }, [
            e('span', { style: { color: '#A6ACCD' } }, '    '),
            e('span', { style: { color: '#89DDFF' } }, '<'),
            e('span', { style: { color: '#F07178' } }, 'VIcon'),
            e('span', { style: { color: '#89DDFF' } }, ' '),
            e('span', { style: { color: '#C792EA' } }, 'name'),
            e('span', { style: { color: '#89DDFF' } }, '='),
            e('span', { style: { color: '#89DDFF' } }, '"'),
            e('span', { style: { color: '#C3E88D' } }, 'search'),
            e('span', { style: { color: '#89DDFF' } }, '"'),
            e('span', { style: { color: '#89DDFF' } }, ' '),
            e('span', { style: { color: '#C792EA' } }, ':size'),
            e('span', { style: { color: '#89DDFF' } }, '='),
            e('span', { style: { color: '#89DDFF' } }, '"'),
            e('span', { style: { color: '#C3E88D' } }, '20'),
            e('span', { style: { color: '#89DDFF' } }, '"'),
            e('span', { style: { color: '#89DDFF' } }, '></'),
            e('span', { style: { color: '#F07178' } }, 'VIcon'),
            e('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          e('span', { class: 'line' }, [
            e('span', { style: { color: '#A6ACCD' } }, '    '),
            e('span', { style: { color: '#89DDFF' } }, '<'),
            e('span', { style: { color: '#F07178' } }, 'VIcon'),
            e('span', { style: { color: '#89DDFF' } }, ' '),
            e('span', { style: { color: '#C792EA' } }, 'name'),
            e('span', { style: { color: '#89DDFF' } }, '='),
            e('span', { style: { color: '#89DDFF' } }, '"'),
            e('span', { style: { color: '#C3E88D' } }, 'edit'),
            e('span', { style: { color: '#89DDFF' } }, '"'),
            e('span', { style: { color: '#89DDFF' } }, ' '),
            e('span', { style: { color: '#C792EA' } }, ':size'),
            e('span', { style: { color: '#89DDFF' } }, '='),
            e('span', { style: { color: '#89DDFF' } }, '"'),
            e('span', { style: { color: '#C3E88D' } }, '25'),
            e('span', { style: { color: '#89DDFF' } }, '"'),
            e('span', { style: { color: '#89DDFF' } }, '></'),
            e('span', { style: { color: '#F07178' } }, 'VIcon'),
            e('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          e('span', { class: 'line' }, [
            e('span', { style: { color: '#A6ACCD' } }, '    '),
            e('span', { style: { color: '#89DDFF' } }, '</'),
            e('span', { style: { color: '#F07178' } }, 'VSpace'),
            e('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          e('span', { class: 'line' }, [
            e('span', { style: { color: '#A6ACCD' } }, '  '),
            e('span', { style: { color: '#89DDFF' } }, '</'),
            e('span', { style: { color: '#F07178' } }, 'div'),
            e('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          e('span', { class: 'line' }, [
            e('span', { style: { color: '#89DDFF' } }, '</'),
            e('span', { style: { color: '#F07178' } }, 'template'),
            e('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          e('span', { class: 'line' })
        ])
      ])
    ],
    -1
  ),
  I = e('p', null, '2.使用在线资源来显示图标。', -1),
  z = e(
    'div',
    { class: 'language-vue' },
    [
      e('pre', { 'v-pre': '', class: 'shiki material-theme-palenight', tabindex: '0' }, [
        e('code', null, [
          e('span', { class: 'line' }, [
            e('span', { style: { color: '#89DDFF' } }, '<'),
            e('span', { style: { color: '#F07178' } }, 'template'),
            e('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          e('span', { class: 'line' }, [
            e('span', { style: { color: '#A6ACCD' } }, '  '),
            e('span', { style: { color: '#89DDFF' } }, '<'),
            e('span', { style: { color: '#F07178' } }, 'div'),
            e('span', { style: { color: '#89DDFF' } }, ' '),
            e('span', { style: { color: '#C792EA' } }, 'style'),
            e('span', { style: { color: '#89DDFF' } }, '='),
            e('span', { style: { color: '#89DDFF' } }, '"'),
            e('span', { style: { color: '#C3E88D' } }, 'padding: 10px 0;'),
            e('span', { style: { color: '#89DDFF' } }, '"'),
            e('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          e('span', { class: 'line' }, [
            e('span', { style: { color: '#A6ACCD' } }, '    '),
            e('span', { style: { color: '#89DDFF' } }, '<'),
            e('span', { style: { color: '#F07178' } }, 'VIcon'),
            e('span', { style: { color: '#89DDFF' } }, ' '),
            e('span', { style: { color: '#C792EA' } }, 'name'),
            e('span', { style: { color: '#89DDFF' } }, '='),
            e('span', { style: { color: '#89DDFF' } }, '"'),
            e('span', { style: { color: '#C3E88D' } }, 'https://vitejs.dev/logo.svg'),
            e('span', { style: { color: '#89DDFF' } }, '"'),
            e('span', { style: { color: '#89DDFF' } }, ' '),
            e('span', { style: { color: '#C792EA' } }, ':size'),
            e('span', { style: { color: '#89DDFF' } }, '='),
            e('span', { style: { color: '#89DDFF' } }, '"'),
            e('span', { style: { color: '#C3E88D' } }, '20'),
            e('span', { style: { color: '#89DDFF' } }, '"'),
            e('span', { style: { color: '#89DDFF' } }, '></'),
            e('span', { style: { color: '#F07178' } }, 'VIcon'),
            e('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          e('span', { class: 'line' }, [
            e('span', { style: { color: '#A6ACCD' } }, '  '),
            e('span', { style: { color: '#89DDFF' } }, '</'),
            e('span', { style: { color: '#F07178' } }, 'div'),
            e('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          e('span', { class: 'line' }, [
            e('span', { style: { color: '#89DDFF' } }, '</'),
            e('span', { style: { color: '#F07178' } }, 'template'),
            e('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          e('span', { class: 'line' })
        ])
      ])
    ],
    -1
  ),
  k = e(
    'h2',
    { id: '图标大小', tabindex: '-1' },
    [s('图标大小 '), e('a', { class: 'header-anchor', href: '#图标大小', 'aria-hidden': 'true' }, '#')],
    -1
  ),
  b = e(
    'div',
    { class: 'language-vue' },
    [
      e('pre', { 'v-pre': '', class: 'shiki material-theme-palenight', tabindex: '0' }, [
        e('code', null, [
          e('span', { class: 'line' }, [
            e('span', { style: { color: '#89DDFF' } }, '<'),
            e('span', { style: { color: '#F07178' } }, 'template'),
            e('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          e('span', { class: 'line' }, [
            e('span', { style: { color: '#A6ACCD' } }, '  '),
            e('span', { style: { color: '#89DDFF' } }, '<'),
            e('span', { style: { color: '#F07178' } }, 'div'),
            e('span', { style: { color: '#89DDFF' } }, ' '),
            e('span', { style: { color: '#C792EA' } }, 'style'),
            e('span', { style: { color: '#89DDFF' } }, '='),
            e('span', { style: { color: '#89DDFF' } }, '"'),
            e('span', { style: { color: '#C3E88D' } }, 'padding: 10px 0;'),
            e('span', { style: { color: '#89DDFF' } }, '"'),
            e('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          e('span', { class: 'line' }, [
            e('span', { style: { color: '#A6ACCD' } }, '   '),
            e('span', { style: { color: '#89DDFF' } }, '<'),
            e('span', { style: { color: '#F07178' } }, 'VSpace'),
            e('span', { style: { color: '#89DDFF' } }, ' '),
            e('span', { style: { color: '#C792EA' } }, 'size'),
            e('span', { style: { color: '#89DDFF' } }, '='),
            e('span', { style: { color: '#89DDFF' } }, '"'),
            e('span', { style: { color: '#C3E88D' } }, 'small'),
            e('span', { style: { color: '#89DDFF' } }, '"'),
            e('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          e('span', { class: 'line' }, [
            e('span', { style: { color: '#A6ACCD' } }, '    '),
            e('span', { style: { color: '#89DDFF' } }, '<'),
            e('span', { style: { color: '#F07178' } }, 'VIcon'),
            e('span', { style: { color: '#89DDFF' } }, ' '),
            e('span', { style: { color: '#C792EA' } }, 'name'),
            e('span', { style: { color: '#89DDFF' } }, '='),
            e('span', { style: { color: '#89DDFF' } }, '"'),
            e('span', { style: { color: '#C3E88D' } }, 'search'),
            e('span', { style: { color: '#89DDFF' } }, '"'),
            e('span', { style: { color: '#89DDFF' } }, ' '),
            e('span', { style: { color: '#C792EA' } }, 'size'),
            e('span', { style: { color: '#89DDFF' } }, '='),
            e('span', { style: { color: '#89DDFF' } }, '"'),
            e('span', { style: { color: '#C3E88D' } }, '20px'),
            e('span', { style: { color: '#89DDFF' } }, '"'),
            e('span', { style: { color: '#89DDFF' } }, '></'),
            e('span', { style: { color: '#F07178' } }, 'VIcon'),
            e('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          e('span', { class: 'line' }, [
            e('span', { style: { color: '#A6ACCD' } }, '    '),
            e('span', { style: { color: '#89DDFF' } }, '<'),
            e('span', { style: { color: '#F07178' } }, 'VIcon'),
            e('span', { style: { color: '#89DDFF' } }, ' '),
            e('span', { style: { color: '#C792EA' } }, 'name'),
            e('span', { style: { color: '#89DDFF' } }, '='),
            e('span', { style: { color: '#89DDFF' } }, '"'),
            e('span', { style: { color: '#C3E88D' } }, 'upload'),
            e('span', { style: { color: '#89DDFF' } }, '"'),
            e('span', { style: { color: '#89DDFF' } }, ' '),
            e('span', { style: { color: '#C792EA' } }, ':size'),
            e('span', { style: { color: '#89DDFF' } }, '='),
            e('span', { style: { color: '#89DDFF' } }, '"'),
            e('span', { style: { color: '#C3E88D' } }, '20'),
            e('span', { style: { color: '#89DDFF' } }, '"'),
            e('span', { style: { color: '#89DDFF' } }, '></'),
            e('span', { style: { color: '#F07178' } }, 'VIcon'),
            e('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          e('span', { class: 'line' }, [
            e('span', { style: { color: '#A6ACCD' } }, '    '),
            e('span', { style: { color: '#89DDFF' } }, '</'),
            e('span', { style: { color: '#F07178' } }, 'VSpace'),
            e('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          e('span', { class: 'line' }, [
            e('span', { style: { color: '#A6ACCD' } }, '  '),
            e('span', { style: { color: '#89DDFF' } }, '</'),
            e('span', { style: { color: '#F07178' } }, 'div'),
            e('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          e('span', { class: 'line' }, [
            e('span', { style: { color: '#89DDFF' } }, '</'),
            e('span', { style: { color: '#F07178' } }, 'template'),
            e('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          e('span', { class: 'line' })
        ])
      ])
    ],
    -1
  ),
  S = e(
    'h2',
    { id: '图标颜色', tabindex: '-1' },
    [s('图标颜色 '), e('a', { class: 'header-anchor', href: '#图标颜色', 'aria-hidden': 'true' }, '#')],
    -1
  ),
  N = e(
    'div',
    { class: 'language-vue' },
    [
      e('pre', { 'v-pre': '', class: 'shiki material-theme-palenight', tabindex: '0' }, [
        e('code', null, [
          e('span', { class: 'line' }, [
            e('span', { style: { color: '#89DDFF' } }, '<'),
            e('span', { style: { color: '#F07178' } }, 'template'),
            e('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          e('span', { class: 'line' }, [
            e('span', { style: { color: '#A6ACCD' } }, '  '),
            e('span', { style: { color: '#89DDFF' } }, '<'),
            e('span', { style: { color: '#F07178' } }, 'div'),
            e('span', { style: { color: '#89DDFF' } }, ' '),
            e('span', { style: { color: '#C792EA' } }, 'style'),
            e('span', { style: { color: '#89DDFF' } }, '='),
            e('span', { style: { color: '#89DDFF' } }, '"'),
            e('span', { style: { color: '#C3E88D' } }, 'padding: 10px 0;'),
            e('span', { style: { color: '#89DDFF' } }, '"'),
            e('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          e('span', { class: 'line' }, [
            e('span', { style: { color: '#A6ACCD' } }, '   '),
            e('span', { style: { color: '#89DDFF' } }, '<'),
            e('span', { style: { color: '#F07178' } }, 'VSpace'),
            e('span', { style: { color: '#89DDFF' } }, ' '),
            e('span', { style: { color: '#C792EA' } }, 'size'),
            e('span', { style: { color: '#89DDFF' } }, '='),
            e('span', { style: { color: '#89DDFF' } }, '"'),
            e('span', { style: { color: '#C3E88D' } }, 'small'),
            e('span', { style: { color: '#89DDFF' } }, '"'),
            e('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          e('span', { class: 'line' }, [
            e('span', { style: { color: '#A6ACCD' } }, '    '),
            e('span', { style: { color: '#89DDFF' } }, '<'),
            e('span', { style: { color: '#F07178' } }, 'VIcon'),
            e('span', { style: { color: '#89DDFF' } }, ' '),
            e('span', { style: { color: '#C792EA' } }, 'name'),
            e('span', { style: { color: '#89DDFF' } }, '='),
            e('span', { style: { color: '#89DDFF' } }, '"'),
            e('span', { style: { color: '#C3E88D' } }, 'search'),
            e('span', { style: { color: '#89DDFF' } }, '"'),
            e('span', { style: { color: '#89DDFF' } }, ' '),
            e('span', { style: { color: '#C792EA' } }, 'size'),
            e('span', { style: { color: '#89DDFF' } }, '='),
            e('span', { style: { color: '#89DDFF' } }, '"'),
            e('span', { style: { color: '#C3E88D' } }, '20px'),
            e('span', { style: { color: '#89DDFF' } }, '"'),
            e('span', { style: { color: '#89DDFF' } }, ' '),
            e('span', { style: { color: '#C792EA' } }, 'color'),
            e('span', { style: { color: '#89DDFF' } }, '='),
            e('span', { style: { color: '#89DDFF' } }, '"'),
            e('span', { style: { color: '#C3E88D' } }, '#5e7ce0'),
            e('span', { style: { color: '#89DDFF' } }, '"'),
            e('span', { style: { color: '#89DDFF' } }, '></'),
            e('span', { style: { color: '#F07178' } }, 'VIcon'),
            e('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          e('span', { class: 'line' }, [
            e('span', { style: { color: '#A6ACCD' } }, '    '),
            e('span', { style: { color: '#89DDFF' } }, '<'),
            e('span', { style: { color: '#F07178' } }, 'VIcon'),
            e('span', { style: { color: '#89DDFF' } }, ' '),
            e('span', { style: { color: '#C792EA' } }, 'name'),
            e('span', { style: { color: '#89DDFF' } }, '='),
            e('span', { style: { color: '#89DDFF' } }, '"'),
            e('span', { style: { color: '#C3E88D' } }, 'delete'),
            e('span', { style: { color: '#89DDFF' } }, '"'),
            e('span', { style: { color: '#89DDFF' } }, ' '),
            e('span', { style: { color: '#C792EA' } }, ':size'),
            e('span', { style: { color: '#89DDFF' } }, '='),
            e('span', { style: { color: '#89DDFF' } }, '"'),
            e('span', { style: { color: '#C3E88D' } }, '20'),
            e('span', { style: { color: '#89DDFF' } }, '"'),
            e('span', { style: { color: '#89DDFF' } }, ' '),
            e('span', { style: { color: '#C792EA' } }, 'color'),
            e('span', { style: { color: '#89DDFF' } }, '='),
            e('span', { style: { color: '#89DDFF' } }, '"'),
            e('span', { style: { color: '#C3E88D' } }, 'red'),
            e('span', { style: { color: '#89DDFF' } }, '"'),
            e('span', { style: { color: '#89DDFF' } }, '></'),
            e('span', { style: { color: '#F07178' } }, 'VIcon'),
            e('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          e('span', { class: 'line' }, [
            e('span', { style: { color: '#A6ACCD' } }, '    '),
            e('span', { style: { color: '#89DDFF' } }, '</'),
            e('span', { style: { color: '#F07178' } }, 'VSpace'),
            e('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          e('span', { class: 'line' }, [
            e('span', { style: { color: '#A6ACCD' } }, '  '),
            e('span', { style: { color: '#89DDFF' } }, '</'),
            e('span', { style: { color: '#F07178' } }, 'div'),
            e('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          e('span', { class: 'line' }, [
            e('span', { style: { color: '#89DDFF' } }, '</'),
            e('span', { style: { color: '#F07178' } }, 'template'),
            e('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          e('span', { class: 'line' })
        ])
      ])
    ],
    -1
  ),
  w = _(
    '<h2 id="vicon-attributes" tabindex="-1">VIcon Attributes <a class="header-anchor" href="#vicon-attributes" aria-hidden="true">#</a></h2><table><thead><tr><th style="text-align:left;">属性名</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认</th><th style="text-align:left;">说明</th><th style="text-align:left;">跳转 Demo</th></tr></thead><tbody><tr><td style="text-align:left;">name</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"></td><td style="text-align:left;">系统自定义图标</td><td style="text-align:left;"><a href="#%E4%BD%BF%E7%94%A8%E6%96%B9%E6%B3%95">使用方法</a></td></tr><tr><td style="text-align:left;">size</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"></td><td style="text-align:left;">图标大小</td><td style="text-align:left;"><a href="#%E5%9B%BE%E6%A0%87%E5%A4%A7%E5%B0%8F">图标大小</a></td></tr><tr><td style="text-align:left;">color</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"></td><td style="text-align:left;">图标颜色</td><td style="text-align:left;"><a href="#%E5%9B%BE%E6%A0%87%E9%A2%9C%E8%89%B2">图标颜色</a></td></tr></tbody></table>',
    2
  )
function $(l, o, t, a, c, r) {
  const p = C('render-demo-0'),
    F = C('demo'),
    d = C('render-demo-1'),
    i = C('render-demo-2'),
    n = C('render-demo-3')
  return (
    A(),
    E('div', null, [
      g,
      v,
      f,
      D(
        F,
        {
          customClass: 'undefined',
          sourceCode: `<template>
  <div style="padding: 10px 0;">
   <VSpace size="small">
    <VIcon name="search" :size="20"></VIcon>
    <VIcon name="edit" :size="25"></VIcon>
    </VSpace>
  </div>
</template>
`
        },
        { highlight: y(() => [B]), default: y(() => [D(p)]), _: 1 }
      ),
      I,
      D(
        F,
        {
          customClass: 'undefined',
          sourceCode: `<template>
  <div style="padding: 10px 0;">
    <VIcon name="https://vitejs.dev/logo.svg" :size="20"></VIcon>
  </div>
</template>
`
        },
        { highlight: y(() => [z]), default: y(() => [D(d)]), _: 1 }
      ),
      k,
      D(
        F,
        {
          customClass: 'undefined',
          sourceCode: `<template>
  <div style="padding: 10px 0;">
   <VSpace size="small">
    <VIcon name="search" size="20px"></VIcon>
    <VIcon name="upload" :size="20"></VIcon>
    </VSpace>
  </div>
</template>
`
        },
        { highlight: y(() => [b]), default: y(() => [D(i)]), _: 1 }
      ),
      S,
      D(
        F,
        {
          customClass: 'undefined',
          sourceCode: `<template>
  <div style="padding: 10px 0;">
   <VSpace size="small">
    <VIcon name="search" size="20px" color="#5e7ce0"></VIcon>
    <VIcon name="delete" :size="20" color="red"></VIcon>
    </VSpace>
  </div>
</template>
`
        },
        { highlight: y(() => [N]), default: y(() => [D(n)]), _: 1 }
      ),
      w
    ])
  )
}
const O = h(V, [['render', $]])
export { J as __pageData, O as default }
