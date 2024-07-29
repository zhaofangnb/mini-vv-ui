import { V as d, _ as C, c as A, a as F, w as y, b as l, d as s, e as f, r as i, o as k } from './app.2ba2cf25.js'
const { defineComponent: v } = d,
  h = v({
    name: 'component-doc',
    components: {
      'render-demo-0': (function () {
        const { createTextVNode: t, resolveComponent: a, withCtx: e, createVNode: n, openBlock: r, createBlock: c } = d
        function p(b, B) {
          const o = a('v-link'),
            u = a('v-space')
          return (
            r(),
            c(u, null, {
              default: e(() => [
                n(o, { href: 'http://www.baidu.com' }, { default: e(() => [t('跳转')]), _: 1 }),
                n(o, { underline: !1 }, { default: e(() => [t('不跳转,无下划')]), _: 1 }),
                n(o, { icon: 'edit' }, { default: e(() => [t('带图标')]), _: 1 }),
                n(o, { type: 'primary' }, { default: e(() => [t('普通')]), _: 1 }),
                n(o, { type: 'success' }, { default: e(() => [t('成功')]), _: 1 }),
                n(o, { type: 'warning' }, { default: e(() => [t('警告')]), _: 1 }),
                n(o, { type: 'info' }, { default: e(() => [t('信息')]), _: 1 }),
                n(o, { type: 'danger' }, { default: e(() => [t('危险')]), _: 1 }),
                n(o, { type: 'default' }, { default: e(() => [t('默认')]), _: 1 }),
                n(o, { disabled: '' }, { default: e(() => [t('禁用')]), _: 1 }),
                n(o, { underline: !1, disabled: '' }, { default: e(() => [t('禁用')]), _: 1 })
              ]),
              _: 1
            })
          )
        }
        return { render: p, ...{} }
      })()
    }
  }),
  w = JSON.parse(
    '{"title":"VLink 链接","description":"","frontmatter":{},"headers":[{"level":2,"title":"基本用法","slug":"基本用法","link":"#基本用法","children":[]},{"level":2,"title":"VLink Attributes","slug":"vlink-attributes","link":"#vlink-attributes","children":[]}],"relativePath":"components/link/index.md","lastUpdated":1679315375000}'
  ),
  E = l(
    'h1',
    { id: 'vlink-链接', tabindex: '-1' },
    [s('VLink 链接 '), l('a', { class: 'header-anchor', href: '#vlink-链接', 'aria-hidden': 'true' }, '#')],
    -1
  ),
  g = l(
    'h2',
    { id: '基本用法', tabindex: '-1' },
    [s('基本用法 '), l('a', { class: 'header-anchor', href: '#基本用法', 'aria-hidden': 'true' }, '#')],
    -1
  ),
  _ = l(
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
            l('span', { style: { color: '#A6ACCD' } }, '    '),
            l('span', { style: { color: '#89DDFF' } }, '<'),
            l('span', { style: { color: '#F07178' } }, 'v-link'),
            l('span', { style: { color: '#89DDFF' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, 'href'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'http://www.baidu.com'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, '>'),
            l('span', { style: { color: '#A6ACCD' } }, '跳转'),
            l('span', { style: { color: '#89DDFF' } }, '</'),
            l('span', { style: { color: '#F07178' } }, 'v-link'),
            l('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#A6ACCD' } }, '    '),
            l('span', { style: { color: '#89DDFF' } }, '<'),
            l('span', { style: { color: '#F07178' } }, 'v-link'),
            l('span', { style: { color: '#89DDFF' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, ':underline'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'false'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, '>'),
            l('span', { style: { color: '#A6ACCD' } }, '不跳转,无下划'),
            l('span', { style: { color: '#89DDFF' } }, '</'),
            l('span', { style: { color: '#F07178' } }, 'v-link'),
            l('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#A6ACCD' } }, '    '),
            l('span', { style: { color: '#89DDFF' } }, '<'),
            l('span', { style: { color: '#F07178' } }, 'v-link'),
            l('span', { style: { color: '#89DDFF' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, 'icon'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'edit'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, '>'),
            l('span', { style: { color: '#A6ACCD' } }, '带图标'),
            l('span', { style: { color: '#89DDFF' } }, '</'),
            l('span', { style: { color: '#F07178' } }, 'v-link'),
            l('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#A6ACCD' } }, '    '),
            l('span', { style: { color: '#89DDFF' } }, '<'),
            l('span', { style: { color: '#F07178' } }, 'v-link'),
            l('span', { style: { color: '#89DDFF' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, 'type'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'primary'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, '>'),
            l('span', { style: { color: '#A6ACCD' } }, '普通'),
            l('span', { style: { color: '#89DDFF' } }, '</'),
            l('span', { style: { color: '#F07178' } }, 'v-link'),
            l('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#A6ACCD' } }, '    '),
            l('span', { style: { color: '#89DDFF' } }, '<'),
            l('span', { style: { color: '#F07178' } }, 'v-link'),
            l('span', { style: { color: '#89DDFF' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, 'type'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'success'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, '>'),
            l('span', { style: { color: '#A6ACCD' } }, '成功'),
            l('span', { style: { color: '#89DDFF' } }, '</'),
            l('span', { style: { color: '#F07178' } }, 'v-link'),
            l('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#A6ACCD' } }, '    '),
            l('span', { style: { color: '#89DDFF' } }, '<'),
            l('span', { style: { color: '#F07178' } }, 'v-link'),
            l('span', { style: { color: '#89DDFF' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, 'type'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'warning'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, '>'),
            l('span', { style: { color: '#A6ACCD' } }, '警告'),
            l('span', { style: { color: '#89DDFF' } }, '</'),
            l('span', { style: { color: '#F07178' } }, 'v-link'),
            l('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#A6ACCD' } }, '    '),
            l('span', { style: { color: '#89DDFF' } }, '<'),
            l('span', { style: { color: '#F07178' } }, 'v-link'),
            l('span', { style: { color: '#89DDFF' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, 'type'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'info'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, '>'),
            l('span', { style: { color: '#A6ACCD' } }, '信息'),
            l('span', { style: { color: '#89DDFF' } }, '</'),
            l('span', { style: { color: '#F07178' } }, 'v-link'),
            l('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#A6ACCD' } }, '    '),
            l('span', { style: { color: '#89DDFF' } }, '<'),
            l('span', { style: { color: '#F07178' } }, 'v-link'),
            l('span', { style: { color: '#89DDFF' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, 'type'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'danger'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, '>'),
            l('span', { style: { color: '#A6ACCD' } }, '危险'),
            l('span', { style: { color: '#89DDFF' } }, '</'),
            l('span', { style: { color: '#F07178' } }, 'v-link'),
            l('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#A6ACCD' } }, '    '),
            l('span', { style: { color: '#89DDFF' } }, '<'),
            l('span', { style: { color: '#F07178' } }, 'v-link'),
            l('span', { style: { color: '#89DDFF' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, 'type'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'default'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, '>'),
            l('span', { style: { color: '#A6ACCD' } }, '默认'),
            l('span', { style: { color: '#89DDFF' } }, '</'),
            l('span', { style: { color: '#F07178' } }, 'v-link'),
            l('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#A6ACCD' } }, '    '),
            l('span', { style: { color: '#89DDFF' } }, '<'),
            l('span', { style: { color: '#F07178' } }, 'v-link'),
            l('span', { style: { color: '#89DDFF' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, 'disabled'),
            l('span', { style: { color: '#89DDFF' } }, '>'),
            l('span', { style: { color: '#A6ACCD' } }, '禁用'),
            l('span', { style: { color: '#89DDFF' } }, '</'),
            l('span', { style: { color: '#F07178' } }, 'v-link'),
            l('span', { style: { color: '#89DDFF' } }, '>')
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#A6ACCD' } }, '    '),
            l('span', { style: { color: '#89DDFF' } }, '<'),
            l('span', { style: { color: '#F07178' } }, 'v-link'),
            l('span', { style: { color: '#89DDFF' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, ':underline'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'false'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, 'disabled'),
            l('span', { style: { color: '#89DDFF' } }, '>'),
            l('span', { style: { color: '#A6ACCD' } }, '禁用'),
            l('span', { style: { color: '#89DDFF' } }, '</'),
            l('span', { style: { color: '#F07178' } }, 'v-link'),
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
          l('span', { class: 'line' })
        ])
      ])
    ],
    -1
  ),
  x = f(
    `<h2 id="vlink-attributes" tabindex="-1">VLink Attributes <a class="header-anchor" href="#vlink-attributes" aria-hidden="true">#</a></h2><table><thead><tr><th style="text-align:left;">属性名</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认</th><th style="text-align:left;">说明</th><th style="text-align:left;">跳转 Demo</th></tr></thead><tbody><tr><td style="text-align:left;">type</td><td style="text-align:left;"><a href="#VLinkType">VLinkType</a></td><td style="text-align:left;">default</td><td style="text-align:left;">类型</td><td style="text-align:left;"><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">基本用法</a></td></tr><tr><td style="text-align:left;">href</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">undefied</td><td style="text-align:left;">原生属性href</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">underline</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">true</td><td style="text-align:left;">下划线</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">disabled</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">false</td><td style="text-align:left;">是否禁用</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">icon</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"></td><td style="text-align:left;">系统自带图标</td><td style="text-align:left;"></td></tr></tbody></table><h4 id="vlinktype" tabindex="-1">VLinkType <a class="header-anchor" href="#vlinktype" aria-hidden="true">#</a></h4><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">VLinkType</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">primary</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">success</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">info</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">warning</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">danger</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">default</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre></div>`,
    4
  )
function m(t, a, e, n, r, c) {
  const p = i('render-demo-0'),
    D = i('demo')
  return (
    k(),
    A('div', null, [
      E,
      g,
      F(
        D,
        {
          customClass: 'undefined',
          sourceCode: `<template>
    <v-space>
    <v-link href="http://www.baidu.com">跳转</v-link>
    <v-link :underline="false">不跳转,无下划</v-link>
    <v-link icon="edit">带图标</v-link>
    <v-link type="primary">普通</v-link>
    <v-link type="success">成功</v-link>
    <v-link type="warning">警告</v-link>
    <v-link type="info">信息</v-link>
    <v-link type="danger">危险</v-link>
    <v-link type="default">默认</v-link>
    <v-link disabled>禁用</v-link>
    <v-link :underline="false" disabled>禁用</v-link>
    </v-space>
</template>
`
        },
        { highlight: y(() => [_]), default: y(() => [F(p)]), _: 1 }
      ),
      x
    ])
  )
}
const N = C(h, [['render', m]])
export { w as __pageData, N as default }
