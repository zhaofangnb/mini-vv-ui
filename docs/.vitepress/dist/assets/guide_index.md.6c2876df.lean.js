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
  d = i('', 4)
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
