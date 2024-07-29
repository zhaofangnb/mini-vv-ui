import { V as h, _ as A, c as m, a as i, w as F, b as e, d as t, e as _, r as C, o as E } from './app.2ba2cf25.js'
const { defineComponent: x } = h,
  B = x({
    name: 'component-doc',
    components: {
      'render-demo-0': (function () {
        const { createTextVNode: l, resolveComponent: o, withCtx: s, createVNode: n, openBlock: c, createBlock: r } = h
        function p(u, d) {
          const a = o('VButton'),
            y = o('VSpace')
          return (
            c(),
            r(y, null, {
              default: s(() => [
                n(a, { type: 'primary' }, { default: s(() => [l('hello')]), _: 1 }),
                l(' textNode '),
                n(a, { type: 'primary' }, { default: s(() => [l('world')]), _: 1 })
              ]),
              _: 1
            })
          )
        }
        return { render: p, ...{} }
      })(),
      'render-demo-1': (function () {
        const { createTextVNode: l, resolveComponent: o, withCtx: s, createVNode: n, openBlock: c, createBlock: r } = h
        function p(u, d) {
          const a = o('VButton'),
            y = o('VSpace')
          return (
            c(),
            r(
              y,
              { direction: 'vertical' },
              {
                default: s(() => [
                  n(a, { type: 'primary' }, { default: s(() => [l('按钮一')]), _: 1 }),
                  n(a, { type: 'primary' }, { default: s(() => [l('按钮二')]), _: 1 })
                ]),
                _: 1
              }
            )
          )
        }
        return { render: p, ...{} }
      })(),
      'render-demo-2': (function () {
        const { createTextVNode: l, resolveComponent: o, withCtx: s, createVNode: n, openBlock: c, createBlock: r } = h
        function p(u, d) {
          const a = o('VButton'),
            y = o('VSpace')
          return (
            c(),
            r(
              y,
              { size: 'medium' },
              {
                default: s(() => [
                  n(a, { type: 'primary' }, { default: s(() => [l('按钮一')]), _: 1 }),
                  n(a, { type: 'primary' }, { default: s(() => [l('按钮二')]), _: 1 })
                ]),
                _: 1
              }
            )
          )
        }
        return { render: p, ...{} }
      })()
    }
  }),
  J = JSON.parse(
    '{"title":"VSpace 间距","description":"","frontmatter":{},"headers":[{"level":2,"title":"基本用法","slug":"基本用法","link":"#基本用法","children":[]},{"level":2,"title":"垂直间距","slug":"垂直间距","link":"#垂直间距","children":[]},{"level":2,"title":"间距大小","slug":"间距大小","link":"#间距大小","children":[]},{"level":2,"title":"VSpace Attributes","slug":"vspace-attributes","link":"#vspace-attributes","children":[]},{"level":2,"title":"VIcon Attributes","slug":"vicon-attributes","link":"#vicon-attributes","children":[{"level":3,"title":"direction","slug":"direction","link":"#direction","children":[]},{"level":3,"title":"size","slug":"size","link":"#size","children":[]},{"level":3,"title":"align","slug":"align","link":"#align","children":[]}]}],"relativePath":"components/space/index.md","lastUpdated":1678863431000}'
  ),
  f = e(
    'h1',
    { id: 'vspace-间距', tabindex: '-1' },
    [t('VSpace 间距 '), e('a', { class: 'header-anchor', href: '#vspace-间距', 'aria-hidden': 'true' }, '#')],
    -1
  ),
  g = e(
    'h2',
    { id: '基本用法', tabindex: '-1' },
    [t('基本用法 '), e('a', { class: 'header-anchor', href: '#基本用法', 'aria-hidden': 'true' }, '#')],
    -1
  ),
  V = e('p', null, '默认水平排列', -1),
  v = e(
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
          t(`
`),
          e('span', { class: 'line' }, [
            e('span', { style: { color: '#A6ACCD' } }, '  '),
            e('span', { style: { color: '#89DDFF' } }, '<'),
            e('span', { style: { color: '#F07178' } }, 'VSpace'),
            e('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          t(`
`),
          e('span', { class: 'line' }, [
            e('span', { style: { color: '#A6ACCD' } }, '    '),
            e('span', { style: { color: '#89DDFF' } }, '<'),
            e('span', { style: { color: '#F07178' } }, 'VButton'),
            e('span', { style: { color: '#89DDFF' } }, ' '),
            e('span', { style: { color: '#C792EA' } }, 'type'),
            e('span', { style: { color: '#89DDFF' } }, '='),
            e('span', { style: { color: '#89DDFF' } }, '"'),
            e('span', { style: { color: '#C3E88D' } }, 'primary'),
            e('span', { style: { color: '#89DDFF' } }, '"'),
            e('span', { style: { color: '#89DDFF' } }, '>'),
            e('span', { style: { color: '#A6ACCD' } }, 'hello'),
            e('span', { style: { color: '#89DDFF' } }, '</'),
            e('span', { style: { color: '#F07178' } }, 'VButton'),
            e('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          t(`
`),
          e('span', { class: 'line' }, [e('span', { style: { color: '#A6ACCD' } }, '    textNode')]),
          t(`
`),
          e('span', { class: 'line' }, [
            e('span', { style: { color: '#A6ACCD' } }, '    '),
            e('span', { style: { color: '#89DDFF' } }, '<'),
            e('span', { style: { color: '#F07178' } }, 'VButton'),
            e('span', { style: { color: '#89DDFF' } }, ' '),
            e('span', { style: { color: '#C792EA' } }, 'type'),
            e('span', { style: { color: '#89DDFF' } }, '='),
            e('span', { style: { color: '#89DDFF' } }, '"'),
            e('span', { style: { color: '#C3E88D' } }, 'primary'),
            e('span', { style: { color: '#89DDFF' } }, '"'),
            e('span', { style: { color: '#89DDFF' } }, '>'),
            e('span', { style: { color: '#A6ACCD' } }, 'world'),
            e('span', { style: { color: '#89DDFF' } }, '</'),
            e('span', { style: { color: '#F07178' } }, 'VButton'),
            e('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          t(`
`),
          e('span', { class: 'line' }, [
            e('span', { style: { color: '#A6ACCD' } }, '  '),
            e('span', { style: { color: '#89DDFF' } }, '</'),
            e('span', { style: { color: '#F07178' } }, 'VSpace'),
            e('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          t(`
`),
          e('span', { class: 'line' }, [
            e('span', { style: { color: '#89DDFF' } }, '</'),
            e('span', { style: { color: '#F07178' } }, 'template'),
            e('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          t(`
`),
          e('span', { class: 'line' })
        ])
      ])
    ],
    -1
  ),
  b = e(
    'h2',
    { id: '垂直间距', tabindex: '-1' },
    [t('垂直间距 '), e('a', { class: 'header-anchor', href: '#垂直间距', 'aria-hidden': 'true' }, '#')],
    -1
  ),
  k = e('p', null, '可以设置垂直方向排列的间距', -1),
  S = e(
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
          t(`
`),
          e('span', { class: 'line' }, [
            e('span', { style: { color: '#A6ACCD' } }, '  '),
            e('span', { style: { color: '#89DDFF' } }, '<'),
            e('span', { style: { color: '#F07178' } }, 'VSpace'),
            e('span', { style: { color: '#89DDFF' } }, ' '),
            e('span', { style: { color: '#C792EA' } }, 'direction'),
            e('span', { style: { color: '#89DDFF' } }, '='),
            e('span', { style: { color: '#89DDFF' } }, '"'),
            e('span', { style: { color: '#C3E88D' } }, 'vertical'),
            e('span', { style: { color: '#89DDFF' } }, '"'),
            e('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          t(`
`),
          e('span', { class: 'line' }, [
            e('span', { style: { color: '#A6ACCD' } }, '    '),
            e('span', { style: { color: '#89DDFF' } }, '<'),
            e('span', { style: { color: '#F07178' } }, 'VButton'),
            e('span', { style: { color: '#89DDFF' } }, ' '),
            e('span', { style: { color: '#C792EA' } }, 'type'),
            e('span', { style: { color: '#89DDFF' } }, '='),
            e('span', { style: { color: '#89DDFF' } }, '"'),
            e('span', { style: { color: '#C3E88D' } }, 'primary'),
            e('span', { style: { color: '#89DDFF' } }, '"'),
            e('span', { style: { color: '#89DDFF' } }, '>'),
            e('span', { style: { color: '#A6ACCD' } }, '按钮一'),
            e('span', { style: { color: '#89DDFF' } }, '</'),
            e('span', { style: { color: '#F07178' } }, 'VButton'),
            e('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          t(`
`),
          e('span', { class: 'line' }, [
            e('span', { style: { color: '#A6ACCD' } }, '    '),
            e('span', { style: { color: '#89DDFF' } }, '<'),
            e('span', { style: { color: '#F07178' } }, 'VButton'),
            e('span', { style: { color: '#89DDFF' } }, ' '),
            e('span', { style: { color: '#C792EA' } }, 'type'),
            e('span', { style: { color: '#89DDFF' } }, '='),
            e('span', { style: { color: '#89DDFF' } }, '"'),
            e('span', { style: { color: '#C3E88D' } }, 'primary'),
            e('span', { style: { color: '#89DDFF' } }, '"'),
            e('span', { style: { color: '#89DDFF' } }, '>'),
            e('span', { style: { color: '#A6ACCD' } }, '按钮二'),
            e('span', { style: { color: '#89DDFF' } }, '</'),
            e('span', { style: { color: '#F07178' } }, 'VButton'),
            e('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          t(`
`),
          e('span', { class: 'line' }, [
            e('span', { style: { color: '#A6ACCD' } }, '  '),
            e('span', { style: { color: '#89DDFF' } }, '</'),
            e('span', { style: { color: '#F07178' } }, 'VSpace'),
            e('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          t(`
`),
          e('span', { class: 'line' }, [
            e('span', { style: { color: '#89DDFF' } }, '</'),
            e('span', { style: { color: '#F07178' } }, 'template'),
            e('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          t(`
`),
          e('span', { class: 'line' })
        ])
      ])
    ],
    -1
  ),
  N = e(
    'h2',
    { id: '间距大小', tabindex: '-1' },
    [t('间距大小 '), e('a', { class: 'header-anchor', href: '#间距大小', 'aria-hidden': 'true' }, '#')],
    -1
  ),
  z = e(
    'p',
    null,
    '包含 4 个间距大小，mini-4px, small-8px(默认), medium-16px, large-24px, 也支持传数字来自定义间距大小',
    -1
  ),
  w = e(
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
          t(`
`),
          e('span', { class: 'line' }, [
            e('span', { style: { color: '#A6ACCD' } }, '  '),
            e('span', { style: { color: '#89DDFF' } }, '<'),
            e('span', { style: { color: '#F07178' } }, 'VSpace'),
            e('span', { style: { color: '#89DDFF' } }, ' '),
            e('span', { style: { color: '#C792EA' } }, 'size'),
            e('span', { style: { color: '#89DDFF' } }, '='),
            e('span', { style: { color: '#89DDFF' } }, '"'),
            e('span', { style: { color: '#C3E88D' } }, 'medium'),
            e('span', { style: { color: '#89DDFF' } }, '"'),
            e('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          t(`
`),
          e('span', { class: 'line' }, [
            e('span', { style: { color: '#A6ACCD' } }, '    '),
            e('span', { style: { color: '#89DDFF' } }, '<'),
            e('span', { style: { color: '#F07178' } }, 'VButton'),
            e('span', { style: { color: '#89DDFF' } }, ' '),
            e('span', { style: { color: '#C792EA' } }, 'type'),
            e('span', { style: { color: '#89DDFF' } }, '='),
            e('span', { style: { color: '#89DDFF' } }, '"'),
            e('span', { style: { color: '#C3E88D' } }, 'primary'),
            e('span', { style: { color: '#89DDFF' } }, '"'),
            e('span', { style: { color: '#89DDFF' } }, '>'),
            e('span', { style: { color: '#A6ACCD' } }, '按钮一'),
            e('span', { style: { color: '#89DDFF' } }, '</'),
            e('span', { style: { color: '#F07178' } }, 'VButton'),
            e('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          t(`
`),
          e('span', { class: 'line' }, [
            e('span', { style: { color: '#A6ACCD' } }, '    '),
            e('span', { style: { color: '#89DDFF' } }, '<'),
            e('span', { style: { color: '#F07178' } }, 'VButton'),
            e('span', { style: { color: '#89DDFF' } }, ' '),
            e('span', { style: { color: '#C792EA' } }, 'type'),
            e('span', { style: { color: '#89DDFF' } }, '='),
            e('span', { style: { color: '#89DDFF' } }, '"'),
            e('span', { style: { color: '#C3E88D' } }, 'primary'),
            e('span', { style: { color: '#89DDFF' } }, '"'),
            e('span', { style: { color: '#89DDFF' } }, '>'),
            e('span', { style: { color: '#A6ACCD' } }, '按钮二'),
            e('span', { style: { color: '#89DDFF' } }, '</'),
            e('span', { style: { color: '#F07178' } }, 'VButton'),
            e('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          t(`
`),
          e('span', { class: 'line' }, [
            e('span', { style: { color: '#A6ACCD' } }, '  '),
            e('span', { style: { color: '#89DDFF' } }, '</'),
            e('span', { style: { color: '#F07178' } }, 'VSpace'),
            e('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          t(`
`),
          e('span', { class: 'line' }, [
            e('span', { style: { color: '#89DDFF' } }, '</'),
            e('span', { style: { color: '#F07178' } }, 'template'),
            e('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          t(`
`),
          e('span', { class: 'line' })
        ])
      ])
    ],
    -1
  ),
  T = _(
    `<h2 id="vspace-attributes" tabindex="-1">VSpace Attributes <a class="header-anchor" href="#vspace-attributes" aria-hidden="true">#</a></h2><h2 id="vicon-attributes" tabindex="-1">VIcon Attributes <a class="header-anchor" href="#vicon-attributes" aria-hidden="true">#</a></h2><table><thead><tr><th style="text-align:left;">属性名</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认</th><th style="text-align:left;">说明</th><th style="text-align:left;">跳转 Demo</th></tr></thead><tbody><tr><td style="text-align:left;">direction</td><td style="text-align:left;"><a href="#direction">direction</a></td><td style="text-align:left;"></td><td style="text-align:left;"></td><td style="text-align:left;"><a href="#%E4%BD%BF%E7%94%A8%E6%96%B9%E6%B3%95">使用方法</a></td></tr><tr><td style="text-align:left;">size</td><td style="text-align:left;"><a href="#size">size</a></td><td style="text-align:left;"></td><td style="text-align:left;">间距大小</td><td style="text-align:left;"><a href="#%E9%97%B4%E8%B7%9D%E5%A4%A7%E5%B0%8F">间距大小</a></td></tr><tr><td style="text-align:left;">align</td><td style="text-align:left;"><a href="#align">align</a></td><td style="text-align:left;"></td><td style="text-align:left;">排列方式</td><td style="text-align:left;"><a href="#%E6%8E%92%E5%88%97%E6%96%B9%E5%BC%8F">排列方式</a></td></tr><tr><td style="text-align:left;">wrap</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;"></td><td style="text-align:left;">是否换行</td><td style="text-align:left;"><a href="#%E6%8E%92%E5%88%97%E6%96%B9%E5%BC%8F">排列方式</a></td></tr><tr><td style="text-align:left;">fill</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;"></td><td style="text-align:left;">flex填充</td><td style="text-align:left;"><a href="#flex%E5%A1%AB%E5%85%85">flex填充</a></td></tr></tbody></table><h3 id="direction" tabindex="-1">direction <a class="header-anchor" href="#direction" aria-hidden="true">#</a></h3><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">direction</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">horizontal</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vertical</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre></div><h3 id="size" tabindex="-1">size <a class="header-anchor" href="#size" aria-hidden="true">#</a></h3><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">size</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">mini</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">small</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">medium</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">large</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre></div><h3 id="align" tabindex="-1">align <a class="header-anchor" href="#align" aria-hidden="true">#</a></h3><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">align</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">start</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">end</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">center</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">baseline</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre></div>`,
    9
  )
function $(l, o, s, n, c, r) {
  const p = C('render-demo-0'),
    D = C('demo'),
    u = C('render-demo-1'),
    d = C('render-demo-2')
  return (
    E(),
    m('div', null, [
      f,
      g,
      V,
      i(
        D,
        {
          customClass: 'undefined',
          sourceCode: `<template>
  <VSpace>
    <VButton type="primary">hello</VButton>
    textNode
    <VButton type="primary">world</VButton>
  </VSpace>
</template>
`
        },
        { highlight: F(() => [v]), default: F(() => [i(p)]), _: 1 }
      ),
      b,
      k,
      i(
        D,
        {
          customClass: 'undefined',
          sourceCode: `<template>
  <VSpace direction="vertical">
    <VButton type="primary">按钮一</VButton>
    <VButton type="primary">按钮二</VButton>
  </VSpace>
</template>
`
        },
        { highlight: F(() => [S]), default: F(() => [i(u)]), _: 1 }
      ),
      N,
      z,
      i(
        D,
        {
          customClass: 'undefined',
          sourceCode: `<template>
  <VSpace size="medium">
    <VButton type="primary">按钮一</VButton>
    <VButton type="primary">按钮二</VButton>
  </VSpace>
</template>
`
        },
        { highlight: F(() => [w]), default: F(() => [i(d)]), _: 1 }
      ),
      T
    ])
  )
}
const O = A(B, [['render', $]])
export { J as __pageData, O as default }
