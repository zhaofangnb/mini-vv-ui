import { _ as t, c as n, b as s, d as l, t as a, e as i, o } from './app.2ba2cf25.js'
const y = JSON.parse(
    '{"title":"指南","titleTemplate":"Direction","description":"","frontmatter":{"title":"指南","titleTemplate":"Direction"},"headers":[{"level":2,"title":"指南页","slug":"指南页","link":"#指南页","children":[]},{"level":2,"title":"开发规范","slug":"开发规范","link":"#开发规范","children":[]}],"relativePath":"guide/index.md","lastUpdated":1678356153000}'
  ),
  p = { name: 'guide/index.md' },
  r = { id: '【-frontmatter-title-——-frontmatter-titletemplate-】', tabindex: '-1' },
  c = s(
    'a',
    { class: 'header-anchor', href: '#【-frontmatter-title-——-frontmatter-titletemplate-】', 'aria-hidden': 'true' },
    '#',
    -1
  ),
  d = i(
    `<h2 id="指南页" tabindex="-1">指南页 <a class="header-anchor" href="#指南页" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;"> mini-vv-ui 组件库的技术栈:</span></span>
<span class="line"><span style="color:#A6ACCD;">    Vite</span></span>
<span class="line"><span style="color:#A6ACCD;">    Vue3</span></span>
<span class="line"><span style="color:#A6ACCD;">    JSX</span></span>
<span class="line"><span style="color:#A6ACCD;">    VitePress</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="开发规范" tabindex="-1">开发规范 <a class="header-anchor" href="#开发规范" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">1. Vitest 单元测试</span></span>
<span class="line"><span style="color:#A6ACCD;">2. Eslint 代码格式规范</span></span>
<span class="line"><span style="color:#A6ACCD;">3. CommitLint 代码提交规范</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,
    4
  )
function h(e, C, _, m, A, u) {
  return (
    o(),
    n('div', null, [
      s('h1', r, [l('【' + a(e.$frontmatter.title) + ' —— ' + a(e.$frontmatter.titleTemplate) + '】 ', 1), c]),
      d
    ])
  )
}
const D = t(p, [['render', h]])
export { y as __pageData, D as default }
