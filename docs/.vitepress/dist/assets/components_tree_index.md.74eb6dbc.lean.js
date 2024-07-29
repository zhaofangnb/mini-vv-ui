import { V as D, _ as T, c as M, a as d, w as C, b as l, d as s, e as N, r as A, o as H } from './app.2ba2cf25.js'
const { defineComponent: S } = D,
  P = S({
    name: 'component-doc',
    components: {
      'render-demo-0': (function () {
        const { resolveComponent: o, openBlock: n, createBlock: y } = D
        function a(e, F) {
          const t = o('VTree')
          return n(), y(t, { data: e.data, checkable: '' }, null, 8, ['data'])
        }
        const { ref: c, defineComponent: i } = D,
          p = i({
            setup() {
              return {
                data: c([
                  { label: '一级1', id: '一级1' },
                  {
                    label: '一级2',
                    id: '一级2',
                    expanded: !0,
                    checked: !0,
                    children: [
                      { label: '二级2-1', id: '二级2-1' },
                      {
                        label: '二级2-2',
                        id: '二级2-2',
                        expanded: !0,
                        children: [
                          { label: '三级2-2-1', id: '三级2-2-1' },
                          { label: '三级2-2-2', id: '三级2-2-2' }
                        ]
                      }
                    ]
                  },
                  {
                    label: '一级3',
                    id: '一级3',
                    children: [
                      { label: '二级3-1', id: '二级3-1' },
                      { label: '二级3-2', id: '二级3-2' }
                    ]
                  },
                  { label: '一级4', id: '一级4' }
                ])
              }
            }
          })
        return { render: a, ...p }
      })(),
      'render-demo-1': (function () {
        const {
            openBlock: o,
            createElementBlock: n,
            createCommentVNode: y,
            createElementVNode: a,
            normalizeStyle: c,
            toDisplayString: i,
            createTextVNode: p,
            resolveComponent: e,
            withCtx: F,
            createBlock: t
          } = D,
          u = { key: 0, class: 'v-tree-node__indent' },
          E = ['onClick'],
          f = [
            a(
              'path',
              {
                d: 'M857.70558 495.009024 397.943314 27.513634c-7.132444-7.251148-18.794042-7.350408-26.048259-0.216941-7.253194 7.132444-7.350408 18.795065-0.216941 26.048259l446.952518 454.470749L365.856525 960.591855c-7.192819 7.192819-7.192819 18.85544 0 26.048259 3.596921 3.596921 8.311293 5.39487 13.024641 5.39487s9.42772-1.798972 13.024641-5.39487L857.596086 520.949836C864.747973 513.797949 864.796068 502.219239 857.70558 495.009024z'
              },
              null,
              -1
            )
          ],
          m = [
            a(
              'path',
              {
                'fill-rule': 'evenodd',
                d: 'M3.75 1.5a.25.25 0 00-.25.25v11.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25V6H9.75A1.75 1.75 0 018 4.25V1.5H3.75zm5.75.56v2.19c0 .138.112.25.25.25h2.19L9.5 2.06zM2 1.75C2 .784 2.784 0 3.75 0h5.086c.464 0 .909.184 1.237.513l3.414 3.414c.329.328.513.773.513 1.237v8.086A1.75 1.75 0 0112.25 15h-8.5A1.75 1.75 0 012 13.25V1.75z'
              },
              null,
              -1
            )
          ],
          b = {
            key: 1,
            id: 'octicon_file-directory-fill_16',
            viewBox: '0 0 16 16',
            width: '16',
            height: '16',
            fill: '#54aeff',
            style: { display: 'inline-block', 'margin-right': '8px' }
          },
          _ = [
            a(
              'path',
              {
                d: 'M1.75 1A1.75 1.75 0 000 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0016 13.25v-8.5A1.75 1.75 0 0014.25 3H7.5a.25.25 0 01-.2-.1l-.9-1.2C6.07 1.26 5.55 1 5 1H1.75z'
              },
              null,
              -1
            )
          ],
          g = {
            key: 2,
            title: 'modified',
            viewBox: '0 0 16 16',
            width: '16',
            height: '16',
            fill: '#9a6700',
            style: { position: 'absolute', right: '0', 'margin-right': '8px' }
          },
          v = [
            a(
              'path',
              {
                'fill-rule': 'evenodd',
                d: 'M2.75 2.5h10.5a.25.25 0 01.25.25v10.5a.25.25 0 01-.25.25H2.75a.25.25 0 01-.25-.25V2.75a.25.25 0 01.25-.25zM13.25 1H2.75A1.75 1.75 0 001 2.75v10.5c0 .966.784 1.75 1.75 1.75h10.5A1.75 1.75 0 0015 13.25V2.75A1.75 1.75 0 0013.25 1zM8 10a2 2 0 100-4 2 2 0 000 4z'
              },
              null,
              -1
            )
          ]
        function x(h, Z) {
          const V = e('VTree')
          return (
            o(),
            t(
              V,
              { data: h.data },
              {
                icon: F(({ nodeData: r, toggleNode: L }) => [
                  r.isLeaf
                    ? (o(), n('span', u))
                    : (o(),
                      n(
                        'span',
                        {
                          key: 1,
                          onClick: w => {
                            w.stopPropagation(), L(r)
                          }
                        },
                        [
                          (o(),
                          n(
                            'svg',
                            {
                              style: c({
                                transform: r.expanded ? 'rotate(90deg)' : '',
                                display: 'inline-block',
                                margin: '0 5px',
                                cursor: 'pointer'
                              }),
                              viewBox: '0 0 1024 1024',
                              width: '12',
                              height: '12'
                            },
                            f,
                            4
                          ))
                        ],
                        8,
                        E
                      ))
                ]),
                content: F(r => [
                  r.isLeaf
                    ? (o(),
                      n(
                        'svg',
                        {
                          key: 0,
                          style: c([{ 'margin-right': '8px' }, { display: 'inline-block' }]),
                          id: 'octicon_file_16',
                          viewBox: '0 0 16 16',
                          width: '16',
                          height: '16',
                          fill: '#57606a'
                        },
                        m
                      ))
                    : (o(), n('svg', b, _)),
                  p(' ' + i(r.label) + ' ', 1),
                  r.isLeaf ? (o(), n('svg', g, v)) : y('', !0)
                ]),
                _: 1
              },
              8,
              ['data']
            )
          )
        }
        const { ref: z, defineComponent: k } = D,
          B = k({
            setup() {
              return {
                data: z([
                  { label: '一级1', id: '一级1' },
                  {
                    label: '一级2',
                    id: '一级2',
                    expanded: !0,
                    children: [
                      { label: '二级2-1', id: '二级2-1' },
                      {
                        label: '二级2-2',
                        id: '二级2-2',
                        expanded: !0,
                        children: [
                          { label: '三级2-2-1', id: '三级2-2-1' },
                          { label: '三级2-2-2', id: '三级2-2-2' }
                        ]
                      }
                    ]
                  },
                  {
                    label: '一级3',
                    id: '一级3',
                    children: [
                      { label: '二级3-1', id: '二级3-1' },
                      { label: '二级3-2', id: '二级3-2' }
                    ]
                  },
                  { label: '一级4', id: '一级4' }
                ])
              }
            }
          })
        return { render: x, ...B }
      })(),
      'render-demo-2': (function () {
        const { resolveComponent: o, openBlock: n, createBlock: y } = D
        function a(e, F) {
          const t = o('VTree')
          return n(), y(t, { data: e.data, onLazyLoad: e.lazyLoad }, null, 8, ['data', 'onLazyLoad'])
        }
        const { defineComponent: c, ref: i } = D,
          p = c({
            setup() {
              return {
                data: i([
                  {
                    id: 'node-1',
                    label: 'node-1',
                    children: [
                      { id: 'node-1-1', label: 'node 1-1', isLeaf: !1 },
                      { id: 'node 1-2', label: 'node 1-2' }
                    ]
                  },
                  { id: 'node-2', label: 'node 2', isLeaf: !1 }
                ]),
                lazyLoad: (t, u) => {
                  setTimeout(() => {
                    u({
                      treeItems: [
                        {
                          label: 'lazy node 1',
                          expanded: !0,
                          children: [
                            { id: 'lazy node 1-1', label: 'lazy node 1-1' },
                            { id: 'lazy node 1-2', label: 'lazy node 1-2' }
                          ]
                        },
                        { id: 'lazy node 2', label: 'lazy node 2' }
                      ],
                      node: t
                    })
                  }, 1e3)
                }
              }
            }
          })
        return { render: a, ...p }
      })()
    }
  }),
  sl = JSON.parse(
    '{"title":"VTree 树","description":"","frontmatter":{},"headers":[{"level":2,"title":"基础用法","slug":"基础用法","link":"#基础用法","children":[]},{"level":2,"title":"自定义图标以及label","slug":"自定义图标以及label","link":"#自定义图标以及label","children":[]},{"level":2,"title":"节点懒加载","slug":"节点懒加载","link":"#节点懒加载","children":[]},{"level":2,"title":"VTree Attributes","slug":"vtree-attributes","link":"#vtree-attributes","children":[]}],"relativePath":"components/tree/index.md","lastUpdated":1678863431000}'
  ),
  $ = l(
    'h1',
    { id: 'vtree-树', tabindex: '-1' },
    [s('VTree 树 '), l('a', { class: 'header-anchor', href: '#vtree-树', 'aria-hidden': 'true' }, '#')],
    -1
  ),
  I = l(
    'h2',
    { id: '基础用法', tabindex: '-1' },
    [s('基础用法 '), l('a', { class: 'header-anchor', href: '#基础用法', 'aria-hidden': 'true' }, '#')],
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
            l('span', { style: { color: '#89DDFF' } }, '<'),
            l('span', { style: { color: '#F07178' } }, 'VTree'),
            l('span', { style: { color: '#89DDFF' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, ':data'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'data'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, 'checkable'),
            l('span', { style: { color: '#89DDFF' } }, '></'),
            l('span', { style: { color: '#F07178' } }, 'VTree'),
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
            l('span', { style: { color: '#A6ACCD' } }, 'ref'),
            l('span', { style: { color: '#89DDFF' } }, ','),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#A6ACCD' } }, 'defineComponent'),
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
            l('span', { style: { color: '#A6ACCD' } }, '  '),
            l('span', { style: { color: '#F07178' } }, 'setup'),
            l('span', { style: { color: '#89DDFF' } }, '()'),
            l('span', { style: { color: '#A6ACCD' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '{')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '    '),
            l('span', { style: { color: '#C792EA' } }, 'const'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#A6ACCD' } }, 'data'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#82AAFF' } }, 'ref'),
            l('span', { style: { color: '#F07178' } }, '([')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '        '),
            l('span', { style: { color: '#89DDFF' } }, '{')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '          label'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#C3E88D' } }, '一级1'),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#89DDFF' } }, ',')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '          id'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#C3E88D' } }, '一级1'),
            l('span', { style: { color: '#89DDFF' } }, "'")
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '        '),
            l('span', { style: { color: '#89DDFF' } }, '},')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '        '),
            l('span', { style: { color: '#89DDFF' } }, '{')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '          label'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#C3E88D' } }, '一级2'),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#89DDFF' } }, ',')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '          id'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#C3E88D' } }, '一级2'),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#89DDFF' } }, ',')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '          expanded'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#FF9CAC' } }, 'true'),
            l('span', { style: { color: '#89DDFF' } }, ',')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '          checked'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#FF9CAC' } }, 'true'),
            l('span', { style: { color: '#89DDFF' } }, ',')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '          children'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' [')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '            '),
            l('span', { style: { color: '#89DDFF' } }, '{')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '              label'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#C3E88D' } }, '二级2-1'),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#89DDFF' } }, ',')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '              id'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#C3E88D' } }, '二级2-1'),
            l('span', { style: { color: '#89DDFF' } }, "'")
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '            '),
            l('span', { style: { color: '#89DDFF' } }, '},')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '            '),
            l('span', { style: { color: '#89DDFF' } }, '{')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '              label'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#C3E88D' } }, '二级2-2'),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#89DDFF' } }, ',')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '              id'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#C3E88D' } }, '二级2-2'),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#89DDFF' } }, ',')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '              expanded'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#FF9CAC' } }, 'true'),
            l('span', { style: { color: '#89DDFF' } }, ',')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '              children'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' [')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '                '),
            l('span', { style: { color: '#89DDFF' } }, '{')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '                  label'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#C3E88D' } }, '三级2-2-1'),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#89DDFF' } }, ',')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '                  id'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#C3E88D' } }, '三级2-2-1'),
            l('span', { style: { color: '#89DDFF' } }, "'")
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '                '),
            l('span', { style: { color: '#89DDFF' } }, '},')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '                '),
            l('span', { style: { color: '#89DDFF' } }, '{')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '                  label'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#C3E88D' } }, '三级2-2-2'),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#89DDFF' } }, ',')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '                  id'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#C3E88D' } }, '三级2-2-2'),
            l('span', { style: { color: '#89DDFF' } }, "'")
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '                '),
            l('span', { style: { color: '#89DDFF' } }, '}')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [l('span', { style: { color: '#F07178' } }, '              ]')]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '            '),
            l('span', { style: { color: '#89DDFF' } }, '}')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [l('span', { style: { color: '#F07178' } }, '          ]')]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '        '),
            l('span', { style: { color: '#89DDFF' } }, '},')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '        '),
            l('span', { style: { color: '#89DDFF' } }, '{')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '          label'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#C3E88D' } }, '一级3'),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#89DDFF' } }, ',')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '          id'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#C3E88D' } }, '一级3'),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#89DDFF' } }, ',')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '          children'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' [')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '            '),
            l('span', { style: { color: '#89DDFF' } }, '{')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '              label'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#C3E88D' } }, '二级3-1'),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#89DDFF' } }, ',')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '              id'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#C3E88D' } }, '二级3-1'),
            l('span', { style: { color: '#89DDFF' } }, "'")
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '            '),
            l('span', { style: { color: '#89DDFF' } }, '},')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '            '),
            l('span', { style: { color: '#89DDFF' } }, '{')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '              label'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#C3E88D' } }, '二级3-2'),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#89DDFF' } }, ',')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '              id'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#C3E88D' } }, '二级3-2'),
            l('span', { style: { color: '#89DDFF' } }, "'")
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '            '),
            l('span', { style: { color: '#89DDFF' } }, '}')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [l('span', { style: { color: '#F07178' } }, '          ]')]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '        '),
            l('span', { style: { color: '#89DDFF' } }, '},')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '        '),
            l('span', { style: { color: '#89DDFF' } }, '{')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '          label'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#C3E88D' } }, '一级4'),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#89DDFF' } }, ',')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '          id'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#C3E88D' } }, '一级4'),
            l('span', { style: { color: '#89DDFF' } }, "'")
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '        '),
            l('span', { style: { color: '#89DDFF' } }, '}')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [l('span', { style: { color: '#F07178' } }, '      ])')]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '    '),
            l('span', { style: { color: '#89DDFF', 'font-style': 'italic' } }, 'return'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '{')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '        '),
            l('span', { style: { color: '#A6ACCD' } }, 'data')
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
            l('span', { style: { color: '#F07178' } }, '  '),
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
          l('span', { class: 'line' }, [l('span', { style: { color: '#A6ACCD' } }, '     ')]),
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
    { id: '自定义图标以及label', tabindex: '-1' },
    [
      s('自定义图标以及label '),
      l('a', { class: 'header-anchor', href: '#自定义图标以及label', 'aria-hidden': 'true' }, '#')
    ],
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
            l('span', { style: { color: '#89DDFF' } }, '<'),
            l('span', { style: { color: '#F07178' } }, 'VTree'),
            l('span', { style: { color: '#89DDFF' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, ':data'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#C3E88D' } }, 'data'),
            l('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#A6ACCD' } }, '  '),
            l('span', { style: { color: '#89DDFF' } }, '<'),
            l('span', { style: { color: '#F07178' } }, 'template'),
            l('span', { style: { color: '#A6ACCD' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '#'),
            l('span', { style: { color: '#C792EA' } }, 'icon'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, '{'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#A6ACCD' } }, 'nodeData'),
            l('span', { style: { color: '#89DDFF' } }, ','),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#A6ACCD' } }, 'toggleNode'),
            l('span', { style: { color: '#89DDFF' } }, '}'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#A6ACCD' } }, '      '),
            l('span', { style: { color: '#89DDFF' } }, '<'),
            l('span', { style: { color: '#F07178' } }, 'span'),
            l('span', { style: { color: '#89DDFF' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, 'v-if'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'nodeData.isLeaf'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, 'class'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'v-tree-node__indent'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, '></'),
            l('span', { style: { color: '#F07178' } }, 'span'),
            l('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#A6ACCD' } }, '          '),
            l('span', { style: { color: '#89DDFF' } }, '<'),
            l('span', { style: { color: '#F07178' } }, 'span'),
            l('span', { style: { color: '#89DDFF' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, 'v-else'),
            l('span', { style: { color: '#89DDFF' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, '@click'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, '(event) => {')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#C3E88D' } }, '              event.stopPropagation();')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#C3E88D' } }, '              toggleNode(nodeData);')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#C3E88D' } }, '            }'),
            l('span', { style: { color: '#89DDFF' } }, '"')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [l('span', { style: { color: '#89DDFF' } }, '          >')]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#A6ACCD' } }, '            '),
            l('span', { style: { color: '#89DDFF' } }, '<'),
            l('span', { style: { color: '#F07178' } }, 'svg'),
            l('span', { style: { color: '#89DDFF' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, ':style'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, '{')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l(
              'span',
              { style: { color: '#C3E88D' } },
              "                transform: nodeData.expanded ? 'rotate(90deg)': '',"
            )
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#C3E88D' } }, "                display: 'inline-block',")
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#C3E88D' } }, "                margin: '0 5px',")
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#C3E88D' } }, "                cursor: 'pointer'")
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#C3E88D' } }, '              }'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, 'viewBox'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, '0 0 1024 1024'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, 'width'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, '12'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, 'height'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, '12'),
            l('span', { style: { color: '#89DDFF' } }, '"')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [l('span', { style: { color: '#89DDFF' } }, '            >')]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#A6ACCD' } }, '              '),
            l('span', { style: { color: '#89DDFF' } }, '<'),
            l('span', { style: { color: '#F07178' } }, 'path'),
            l('span', { style: { color: '#A6ACCD' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, 'd'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l(
              'span',
              { style: { color: '#C3E88D' } },
              'M857.70558 495.009024 397.943314 27.513634c-7.132444-7.251148-18.794042-7.350408-26.048259-0.216941-7.253194 7.132444-7.350408 18.795065-0.216941 26.048259l446.952518 454.470749L365.856525 960.591855c-7.192819 7.192819-7.192819 18.85544 0 26.048259 3.596921 3.596921 8.311293 5.39487 13.024641 5.39487s9.42772-1.798972 13.024641-5.39487L857.596086 520.949836C864.747973 513.797949 864.796068 502.219239 857.70558 495.009024z'
            ),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, '></'),
            l('span', { style: { color: '#F07178' } }, 'path'),
            l('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#A6ACCD' } }, '            '),
            l('span', { style: { color: '#89DDFF' } }, '</'),
            l('span', { style: { color: '#F07178' } }, 'svg'),
            l('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#A6ACCD' } }, '          '),
            l('span', { style: { color: '#89DDFF' } }, '</'),
            l('span', { style: { color: '#F07178' } }, 'span'),
            l('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#A6ACCD' } }, '  '),
            l('span', { style: { color: '#89DDFF' } }, '</'),
            l('span', { style: { color: '#F07178' } }, 'template'),
            l('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#A6ACCD' } }, '  '),
            l('span', { style: { color: '#89DDFF' } }, '<'),
            l('span', { style: { color: '#F07178' } }, 'template'),
            l('span', { style: { color: '#A6ACCD' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '#'),
            l('span', { style: { color: '#C792EA' } }, 'content'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#A6ACCD' } }, 'treeNode'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#A6ACCD' } }, '          '),
            l('span', { style: { color: '#89DDFF' } }, '<'),
            l('span', { style: { color: '#F07178' } }, 'svg'),
            l('span', { style: { color: '#A6ACCD' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, 'style'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'margin-right: 8px;'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#A6ACCD' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, 'v-if'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'treeNode.isLeaf'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#A6ACCD' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, 'id'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'octicon_file_16'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#A6ACCD' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, 'viewBox'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, '0 0 16 16'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#A6ACCD' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, 'width'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, '16'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#A6ACCD' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, 'height'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, '16'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#A6ACCD' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, 'fill'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, '#57606a'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#A6ACCD' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, 'style'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'display:inline-block'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, '><'),
            l('span', { style: { color: '#F07178' } }, 'path'),
            l('span', { style: { color: '#A6ACCD' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, 'fill-rule'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'evenodd'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#A6ACCD' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, 'd'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l(
              'span',
              { style: { color: '#C3E88D' } },
              'M3.75 1.5a.25.25 0 00-.25.25v11.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25V6H9.75A1.75 1.75 0 018 4.25V1.5H3.75zm5.75.56v2.19c0 .138.112.25.25.25h2.19L9.5 2.06zM2 1.75C2 .784 2.784 0 3.75 0h5.086c.464 0 .909.184 1.237.513l3.414 3.414c.329.328.513.773.513 1.237v8.086A1.75 1.75 0 0112.25 15h-8.5A1.75 1.75 0 012 13.25V1.75z'
            ),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, '></'),
            l('span', { style: { color: '#F07178' } }, 'path'),
            l('span', { style: { color: '#89DDFF' } }, '></'),
            l('span', { style: { color: '#F07178' } }, 'svg'),
            l('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#A6ACCD' } }, '          '),
            l('span', { style: { color: '#89DDFF' } }, '<'),
            l('span', { style: { color: '#F07178' } }, 'svg'),
            l('span', { style: { color: '#A6ACCD' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, 'v-else'),
            l('span', { style: { color: '#A6ACCD' } }, '  '),
            l('span', { style: { color: '#C792EA' } }, 'id'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'octicon_file-directory-fill_16'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#A6ACCD' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, 'viewBox'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, '0 0 16 16'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#A6ACCD' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, 'width'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, '16'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#A6ACCD' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, 'height'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, '16'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#A6ACCD' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, 'fill'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, '#54aeff'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#A6ACCD' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, 'style'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'display:inline-block; margin-right: 8px;'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, '><'),
            l('span', { style: { color: '#F07178' } }, 'path'),
            l('span', { style: { color: '#A6ACCD' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, 'd'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l(
              'span',
              { style: { color: '#C3E88D' } },
              'M1.75 1A1.75 1.75 0 000 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0016 13.25v-8.5A1.75 1.75 0 0014.25 3H7.5a.25.25 0 01-.2-.1l-.9-1.2C6.07 1.26 5.55 1 5 1H1.75z'
            ),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, '></'),
            l('span', { style: { color: '#F07178' } }, 'path'),
            l('span', { style: { color: '#89DDFF' } }, '></'),
            l('span', { style: { color: '#F07178' } }, 'svg'),
            l('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [l('span', { style: { color: '#A6ACCD' } }, '          {{treeNode.label}}')]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#A6ACCD' } }, '          '),
            l('span', { style: { color: '#89DDFF' } }, '<'),
            l('span', { style: { color: '#F07178' } }, 'svg'),
            l('span', { style: { color: '#A6ACCD' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, 'v-if'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'treeNode.isLeaf'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#A6ACCD' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, 'title'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'modified'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#A6ACCD' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, 'viewBox'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, '0 0 16 16'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#A6ACCD' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, 'width'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, '16'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#A6ACCD' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, 'height'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, '16'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#A6ACCD' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, 'fill'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, '#9a6700'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#A6ACCD' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, 'style'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'position: absolute; right: 0; margin-right: 8px;'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#A6ACCD' } }, '            '),
            l('span', { style: { color: '#89DDFF' } }, '<'),
            l('span', { style: { color: '#F07178' } }, 'path'),
            l('span', { style: { color: '#A6ACCD' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, 'fill-rule'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'evenodd'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#A6ACCD' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, 'd'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l(
              'span',
              { style: { color: '#C3E88D' } },
              'M2.75 2.5h10.5a.25.25 0 01.25.25v10.5a.25.25 0 01-.25.25H2.75a.25.25 0 01-.25-.25V2.75a.25.25 0 01.25-.25zM13.25 1H2.75A1.75 1.75 0 001 2.75v10.5c0 .966.784 1.75 1.75 1.75h10.5A1.75 1.75 0 0015 13.25V2.75A1.75 1.75 0 0013.25 1zM8 10a2 2 0 100-4 2 2 0 000 4z'
            ),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, '></'),
            l('span', { style: { color: '#F07178' } }, 'path'),
            l('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#A6ACCD' } }, '          '),
            l('span', { style: { color: '#89DDFF' } }, '</'),
            l('span', { style: { color: '#F07178' } }, 'svg'),
            l('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#A6ACCD' } }, '        '),
            l('span', { style: { color: '#89DDFF' } }, '</'),
            l('span', { style: { color: '#F07178' } }, 'template'),
            l('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#89DDFF' } }, '</'),
            l('span', { style: { color: '#F07178' } }, 'VTree'),
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
            l('span', { style: { color: '#A6ACCD' } }, 'ref'),
            l('span', { style: { color: '#89DDFF' } }, ','),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#A6ACCD' } }, 'defineComponent'),
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
            l('span', { style: { color: '#A6ACCD' } }, '  '),
            l('span', { style: { color: '#F07178' } }, 'setup'),
            l('span', { style: { color: '#89DDFF' } }, '()'),
            l('span', { style: { color: '#A6ACCD' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '{')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '    '),
            l('span', { style: { color: '#C792EA' } }, 'const'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#A6ACCD' } }, 'data'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#82AAFF' } }, 'ref'),
            l('span', { style: { color: '#F07178' } }, '([')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '        '),
            l('span', { style: { color: '#89DDFF' } }, '{')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '          label'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#C3E88D' } }, '一级1'),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#89DDFF' } }, ',')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '          id'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#C3E88D' } }, '一级1'),
            l('span', { style: { color: '#89DDFF' } }, "'")
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '        '),
            l('span', { style: { color: '#89DDFF' } }, '},')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '        '),
            l('span', { style: { color: '#89DDFF' } }, '{')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '          label'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#C3E88D' } }, '一级2'),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#89DDFF' } }, ',')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '          id'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#C3E88D' } }, '一级2'),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#89DDFF' } }, ',')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '          expanded'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#FF9CAC' } }, 'true'),
            l('span', { style: { color: '#89DDFF' } }, ',')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '          children'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' [')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '            '),
            l('span', { style: { color: '#89DDFF' } }, '{')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '              label'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#C3E88D' } }, '二级2-1'),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#89DDFF' } }, ',')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '              id'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#C3E88D' } }, '二级2-1'),
            l('span', { style: { color: '#89DDFF' } }, "'")
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '            '),
            l('span', { style: { color: '#89DDFF' } }, '},')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '            '),
            l('span', { style: { color: '#89DDFF' } }, '{')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '              label'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#C3E88D' } }, '二级2-2'),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#89DDFF' } }, ',')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '              id'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#C3E88D' } }, '二级2-2'),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#89DDFF' } }, ',')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '              expanded'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#FF9CAC' } }, 'true'),
            l('span', { style: { color: '#89DDFF' } }, ',')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '              children'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' [')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '                '),
            l('span', { style: { color: '#89DDFF' } }, '{')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '                  label'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#C3E88D' } }, '三级2-2-1'),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#89DDFF' } }, ',')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '                  id'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#C3E88D' } }, '三级2-2-1'),
            l('span', { style: { color: '#89DDFF' } }, "'")
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '                '),
            l('span', { style: { color: '#89DDFF' } }, '},')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '                '),
            l('span', { style: { color: '#89DDFF' } }, '{')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '                  label'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#C3E88D' } }, '三级2-2-2'),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#89DDFF' } }, ',')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '                  id'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#C3E88D' } }, '三级2-2-2'),
            l('span', { style: { color: '#89DDFF' } }, "'")
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '                '),
            l('span', { style: { color: '#89DDFF' } }, '}')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [l('span', { style: { color: '#F07178' } }, '              ]')]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '            '),
            l('span', { style: { color: '#89DDFF' } }, '}')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [l('span', { style: { color: '#F07178' } }, '          ]')]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '        '),
            l('span', { style: { color: '#89DDFF' } }, '},')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '        '),
            l('span', { style: { color: '#89DDFF' } }, '{')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '          label'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#C3E88D' } }, '一级3'),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#89DDFF' } }, ',')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '          id'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#C3E88D' } }, '一级3'),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#89DDFF' } }, ',')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '          children'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' [')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '            '),
            l('span', { style: { color: '#89DDFF' } }, '{')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '              label'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#C3E88D' } }, '二级3-1'),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#89DDFF' } }, ',')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '              id'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#C3E88D' } }, '二级3-1'),
            l('span', { style: { color: '#89DDFF' } }, "'")
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '            '),
            l('span', { style: { color: '#89DDFF' } }, '},')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '            '),
            l('span', { style: { color: '#89DDFF' } }, '{')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '              label'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#C3E88D' } }, '二级3-2'),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#89DDFF' } }, ',')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '              id'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#C3E88D' } }, '二级3-2'),
            l('span', { style: { color: '#89DDFF' } }, "'")
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '            '),
            l('span', { style: { color: '#89DDFF' } }, '}')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [l('span', { style: { color: '#F07178' } }, '          ]')]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '        '),
            l('span', { style: { color: '#89DDFF' } }, '},')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '        '),
            l('span', { style: { color: '#89DDFF' } }, '{')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '          label'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#C3E88D' } }, '一级4'),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#89DDFF' } }, ',')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '          id'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#C3E88D' } }, '一级4'),
            l('span', { style: { color: '#89DDFF' } }, "'")
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '        '),
            l('span', { style: { color: '#89DDFF' } }, '}')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [l('span', { style: { color: '#F07178' } }, '      ])')]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '    '),
            l('span', { style: { color: '#89DDFF', 'font-style': 'italic' } }, 'return'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '{')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '        '),
            l('span', { style: { color: '#A6ACCD' } }, 'data')
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
            l('span', { style: { color: '#F07178' } }, '  '),
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
          l('span', { class: 'line' }, [l('span', { style: { color: '#A6ACCD' } }, '     ')]),
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
  j = l(
    'h2',
    { id: '节点懒加载', tabindex: '-1' },
    [s('节点懒加载 '), l('a', { class: 'header-anchor', href: '#节点懒加载', 'aria-hidden': 'true' }, '#')],
    -1
  ),
  q = l('p', null, 'isLeaf: false 非叶子节点可懒加载数据', -1),
  G = l(
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
            l('span', { style: { color: '#A6ACCD' } }, '  '),
            l('span', { style: { color: '#89DDFF' } }, '<'),
            l('span', { style: { color: '#F07178' } }, 'VTree'),
            l('span', { style: { color: '#89DDFF' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, ':data'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'data'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, '@lazy-load'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'lazyLoad'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, '></'),
            l('span', { style: { color: '#F07178' } }, 'VTree'),
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
            l('span', { style: { color: '#A6ACCD' } }, '  '),
            l('span', { style: { color: '#F07178' } }, 'setup'),
            l('span', { style: { color: '#A6ACCD' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '()'),
            l('span', { style: { color: '#A6ACCD' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '{')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '     '),
            l('span', { style: { color: '#C792EA' } }, 'const'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#A6ACCD' } }, 'data'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#82AAFF' } }, 'ref'),
            l('span', { style: { color: '#F07178' } }, '([')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '      '),
            l('span', { style: { color: '#89DDFF' } }, '{')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '        id'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#C3E88D' } }, 'node-1'),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#89DDFF' } }, ',')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '        label'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#C3E88D' } }, 'node-1'),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#89DDFF' } }, ',')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '        children'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' [')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '          '),
            l('span', { style: { color: '#89DDFF' } }, '{')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '            id'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#C3E88D' } }, 'node-1-1'),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#89DDFF' } }, ',')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '            label'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#C3E88D' } }, 'node 1-1'),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#89DDFF' } }, ',')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '            isLeaf'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#FF9CAC' } }, 'false'),
            l('span', { style: { color: '#89DDFF' } }, ',')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '          '),
            l('span', { style: { color: '#89DDFF' } }, '},')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '          '),
            l('span', { style: { color: '#89DDFF' } }, '{'),
            l('span', { style: { color: '#F07178' } }, ' ')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '            id'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#C3E88D' } }, 'node 1-2'),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#89DDFF' } }, ',')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '            label'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#C3E88D' } }, 'node 1-2'),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#89DDFF' } }, ',')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '          '),
            l('span', { style: { color: '#89DDFF' } }, '},')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '        ]'),
            l('span', { style: { color: '#89DDFF' } }, ',')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '      '),
            l('span', { style: { color: '#89DDFF' } }, '},')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '      '),
            l('span', { style: { color: '#89DDFF' } }, '{'),
            l('span', { style: { color: '#F07178' } }, ' ')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '        id'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#C3E88D' } }, 'node-2'),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#89DDFF' } }, ',')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '        label'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#C3E88D' } }, 'node 2'),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#89DDFF' } }, ',')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '        isLeaf'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#FF9CAC' } }, 'false')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '      '),
            l('span', { style: { color: '#89DDFF' } }, '},')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '    ])'),
            l('span', { style: { color: '#89DDFF' } }, ';')
          ]),
          s(`
`),
          l('span', { class: 'line' }),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '    '),
            l('span', { style: { color: '#C792EA' } }, 'const'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#A6ACCD' } }, 'lazyLoad'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '('),
            l('span', { style: { color: '#A6ACCD', 'font-style': 'italic' } }, 'node'),
            l('span', { style: { color: '#89DDFF' } }, ','),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#A6ACCD', 'font-style': 'italic' } }, 'callback'),
            l('span', { style: { color: '#89DDFF' } }, ')'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, '=>'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '{')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '      '),
            l('span', { style: { color: '#82AAFF' } }, 'setTimeout'),
            l('span', { style: { color: '#F07178' } }, '('),
            l('span', { style: { color: '#89DDFF' } }, '()'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, '=>'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '{')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '        '),
            l('span', { style: { color: '#C792EA' } }, 'const'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#A6ACCD' } }, 'data'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#F07178' } }, ' [')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '          '),
            l('span', { style: { color: '#89DDFF' } }, '{')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '            label'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#C3E88D' } }, 'lazy node 1'),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#89DDFF' } }, ',')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '            expanded'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#FF9CAC' } }, 'true'),
            l('span', { style: { color: '#89DDFF' } }, ',')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '            children'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' [')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '              '),
            l('span', { style: { color: '#89DDFF' } }, '{')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '                id'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#C3E88D' } }, 'lazy node 1-1'),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#89DDFF' } }, ',')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '                label'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#C3E88D' } }, 'lazy node 1-1'),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#89DDFF' } }, ',')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '              '),
            l('span', { style: { color: '#89DDFF' } }, '},')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '              '),
            l('span', { style: { color: '#89DDFF' } }, '{')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '                id'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#C3E88D' } }, 'lazy node 1-2'),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#89DDFF' } }, ',')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '                label'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#C3E88D' } }, 'lazy node 1-2'),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#89DDFF' } }, ',')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '              '),
            l('span', { style: { color: '#89DDFF' } }, '},')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '            ]'),
            l('span', { style: { color: '#89DDFF' } }, ',')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '          '),
            l('span', { style: { color: '#89DDFF' } }, '},')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '          '),
            l('span', { style: { color: '#89DDFF' } }, '{')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '            id'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#C3E88D' } }, 'lazy node 2'),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#89DDFF' } }, ',')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '            label'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#C3E88D' } }, 'lazy node 2'),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#89DDFF' } }, ',')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '          '),
            l('span', { style: { color: '#89DDFF' } }, '},')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '        ]'),
            l('span', { style: { color: '#89DDFF' } }, ';')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '        '),
            l('span', { style: { color: '#82AAFF' } }, 'callback'),
            l('span', { style: { color: '#F07178' } }, '('),
            l('span', { style: { color: '#89DDFF' } }, '{')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '          treeItems'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#A6ACCD' } }, 'data'),
            l('span', { style: { color: '#89DDFF' } }, ',')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '          '),
            l('span', { style: { color: '#A6ACCD' } }, 'node'),
            l('span', { style: { color: '#89DDFF' } }, ',')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '        '),
            l('span', { style: { color: '#89DDFF' } }, '}'),
            l('span', { style: { color: '#F07178' } }, ')'),
            l('span', { style: { color: '#89DDFF' } }, ';')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '      '),
            l('span', { style: { color: '#89DDFF' } }, '},'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#F78C6C' } }, '1000'),
            l('span', { style: { color: '#F07178' } }, ')'),
            l('span', { style: { color: '#89DDFF' } }, ';')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '    '),
            l('span', { style: { color: '#89DDFF' } }, '};')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '    '),
            l('span', { style: { color: '#89DDFF', 'font-style': 'italic' } }, 'return'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '{')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '      '),
            l('span', { style: { color: '#A6ACCD' } }, 'data'),
            l('span', { style: { color: '#89DDFF' } }, ',')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '      '),
            l('span', { style: { color: '#A6ACCD' } }, 'lazyLoad')
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
            l('span', { style: { color: '#F07178' } }, '  '),
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
  K = N(
    '<h2 id="vtree-attributes" tabindex="-1">VTree Attributes <a class="header-anchor" href="#vtree-attributes" aria-hidden="true">#</a></h2><table><thead><tr><th style="text-align:left;">属性名</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认</th><th style="text-align:left;">说明</th><th style="text-align:left;">跳转 Demo</th></tr></thead><tbody><tr><td style="text-align:left;">data</td><td style="text-align:left;"><code>array</code></td><td style="text-align:left;"></td><td style="text-align:left;"></td><td style="text-align:left;"><a href="#%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95">数据</a></td></tr><tr><td style="text-align:left;">checkable</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;"></td><td style="text-align:left;">是否可选</td><td style="text-align:left;"><a href="#%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95">是否可选</a></td></tr><tr><td style="text-align:left;">lineable</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;"></td><td style="text-align:left;">显示连线</td><td style="text-align:left;"><a href="#%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95">显示连线</a></td></tr></tbody></table>',
    2
  )
function Q(o, n, y, a, c, i) {
  const p = A('render-demo-0'),
    e = A('demo'),
    F = A('render-demo-1'),
    t = A('render-demo-2')
  return (
    H(),
    M('div', null, [
      $,
      I,
      d(
        e,
        {
          customClass: 'undefined',
          sourceCode: `<template>
<VTree :data="data" checkable></VTree>
</template>

<script>
import {ref, defineComponent } from 'vue'
export default defineComponent({
  setup() {
    const data = ref([
        {
          label: '一级1',
          id: '一级1'
        },
        {
          label: '一级2',
          id: '一级2',
          expanded: true,
          checked: true,
          children: [
            {
              label: '二级2-1',
              id: '二级2-1'
            },
            {
              label: '二级2-2',
              id: '二级2-2',
              expanded: true,
              children: [
                {
                  label: '三级2-2-1',
                  id: '三级2-2-1'
                },
                {
                  label: '三级2-2-2',
                  id: '三级2-2-2'
                }
              ]
            }
          ]
        },
        {
          label: '一级3',
          id: '一级3',
          children: [
            {
              label: '二级3-1',
              id: '二级3-1'
            },
            {
              label: '二级3-2',
              id: '二级3-2'
            }
          ]
        },
        {
          label: '一级4',
          id: '一级4'
        }
      ])
    return {
        data
    }
  }
})
     
<\/script>
`
        },
        { highlight: C(() => [J]), default: C(() => [d(p)]), _: 1 }
      ),
      O,
      d(
        e,
        {
          customClass: 'undefined',
          sourceCode: `<template>
<VTree :data=data>
  <template #icon="{ nodeData, toggleNode}">
      <span v-if="nodeData.isLeaf" class="v-tree-node__indent"></span>
          <span v-else @click="(event) => {
              event.stopPropagation();
              toggleNode(nodeData);
            }"
          >
            <svg :style="{
                transform: nodeData.expanded ? 'rotate(90deg)': '',
                display: 'inline-block',
                margin: '0 5px',
                cursor: 'pointer'
              }" viewBox="0 0 1024 1024" width="12" height="12"
            >
              <path d="M857.70558 495.009024 397.943314 27.513634c-7.132444-7.251148-18.794042-7.350408-26.048259-0.216941-7.253194 7.132444-7.350408 18.795065-0.216941 26.048259l446.952518 454.470749L365.856525 960.591855c-7.192819 7.192819-7.192819 18.85544 0 26.048259 3.596921 3.596921 8.311293 5.39487 13.024641 5.39487s9.42772-1.798972 13.024641-5.39487L857.596086 520.949836C864.747973 513.797949 864.796068 502.219239 857.70558 495.009024z"></path>
            </svg>
          </span>
  </template>
  <template #content="treeNode">
          <svg style="margin-right: 8px;" v-if="treeNode.isLeaf" id="octicon_file_16" viewBox="0 0 16 16" width="16" height="16" fill="#57606a" style="display:inline-block"><path fill-rule="evenodd" d="M3.75 1.5a.25.25 0 00-.25.25v11.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25V6H9.75A1.75 1.75 0 018 4.25V1.5H3.75zm5.75.56v2.19c0 .138.112.25.25.25h2.19L9.5 2.06zM2 1.75C2 .784 2.784 0 3.75 0h5.086c.464 0 .909.184 1.237.513l3.414 3.414c.329.328.513.773.513 1.237v8.086A1.75 1.75 0 0112.25 15h-8.5A1.75 1.75 0 012 13.25V1.75z"></path></svg>
          <svg v-else  id="octicon_file-directory-fill_16" viewBox="0 0 16 16" width="16" height="16" fill="#54aeff" style="display:inline-block; margin-right: 8px;"><path d="M1.75 1A1.75 1.75 0 000 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0016 13.25v-8.5A1.75 1.75 0 0014.25 3H7.5a.25.25 0 01-.2-.1l-.9-1.2C6.07 1.26 5.55 1 5 1H1.75z"></path></svg>
          {{treeNode.label}}
          <svg v-if="treeNode.isLeaf" title="modified" viewBox="0 0 16 16" width="16" height="16" fill="#9a6700" style="position: absolute; right: 0; margin-right: 8px;">
            <path fill-rule="evenodd" d="M2.75 2.5h10.5a.25.25 0 01.25.25v10.5a.25.25 0 01-.25.25H2.75a.25.25 0 01-.25-.25V2.75a.25.25 0 01.25-.25zM13.25 1H2.75A1.75 1.75 0 001 2.75v10.5c0 .966.784 1.75 1.75 1.75h10.5A1.75 1.75 0 0015 13.25V2.75A1.75 1.75 0 0013.25 1zM8 10a2 2 0 100-4 2 2 0 000 4z"></path>
          </svg>
        </template>
</VTree>
</template>
<script>
import {ref, defineComponent } from 'vue'
export default defineComponent({
  setup() {
    const data = ref([
        {
          label: '一级1',
          id: '一级1'
        },
        {
          label: '一级2',
          id: '一级2',
          expanded: true,
          children: [
            {
              label: '二级2-1',
              id: '二级2-1'
            },
            {
              label: '二级2-2',
              id: '二级2-2',
              expanded: true,
              children: [
                {
                  label: '三级2-2-1',
                  id: '三级2-2-1'
                },
                {
                  label: '三级2-2-2',
                  id: '三级2-2-2'
                }
              ]
            }
          ]
        },
        {
          label: '一级3',
          id: '一级3',
          children: [
            {
              label: '二级3-1',
              id: '二级3-1'
            },
            {
              label: '二级3-2',
              id: '二级3-2'
            }
          ]
        },
        {
          label: '一级4',
          id: '一级4'
        }
      ])
    return {
        data
    }
  }
})
     
<\/script>
`
        },
        { highlight: C(() => [U]), default: C(() => [d(F)]), _: 1 }
      ),
      j,
      q,
      d(
        e,
        {
          customClass: 'undefined',
          sourceCode: `<template>
  <VTree :data="data" @lazy-load="lazyLoad"></VTree>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
     const data = ref([
      {
        id: 'node-1',
        label: 'node-1',
        children: [
          {
            id: 'node-1-1',
            label: 'node 1-1',
            isLeaf: false,
          },
          { 
            id: 'node 1-2',
            label: 'node 1-2',
          },
        ],
      },
      { 
        id: 'node-2',
        label: 'node 2',
        isLeaf: false
      },
    ]);

    const lazyLoad = (node, callback) => {
      setTimeout(() => {
        const data = [
          {
            label: 'lazy node 1',
            expanded: true,
            children: [
              {
                id: 'lazy node 1-1',
                label: 'lazy node 1-1',
              },
              {
                id: 'lazy node 1-2',
                label: 'lazy node 1-2',
              },
            ],
          },
          {
            id: 'lazy node 2',
            label: 'lazy node 2',
          },
        ];
        callback({
          treeItems: data,
          node,
        });
      }, 1000);
    };
    return {
      data,
      lazyLoad
    }
  }
})
<\/script>
`
        },
        { highlight: C(() => [G]), default: C(() => [d(t)]), _: 1 }
      ),
      K
    ])
  )
}
const ol = T(P, [['render', Q]])
export { sl as __pageData, ol as default }
