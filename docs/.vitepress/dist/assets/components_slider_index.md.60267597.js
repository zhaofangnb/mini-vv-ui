import { V as r, _ as C, c as A, a as i, w as u, b as s, d as l, r as m, o as V } from './app.2ba2cf25.js'
const { defineComponent: f } = r,
  _ = f({
    name: 'component-doc',
    components: {
      'render-demo-0': (function () {
        const { resolveComponent: c, openBlock: p, createBlock: F } = r
        function y(o, n) {
          const t = c('V-Slider')
          return (
            p(),
            F(
              t,
              {
                min: o.minValue,
                max: o.maxValue,
                modelValue: o.inputValue,
                'onUpdate:modelValue': n[0] || (n[0] = d => (o.inputValue = d))
              },
              null,
              8,
              ['min', 'max', 'modelValue']
            )
          )
        }
        const { defineComponent: D, ref: e } = r,
          a = D({
            setup() {
              const o = e(12),
                n = e(0),
                t = e(20)
              return { inputValue: o, maxValue: t, minValue: n }
            }
          })
        return { render: y, ...a }
      })()
    }
  }),
  S = JSON.parse(
    '{"title":"VSlider 滑块","description":"","frontmatter":{},"headers":[],"relativePath":"components/slider/index.md","lastUpdated":null}'
  ),
  x = s(
    'h1',
    { id: 'vslider-滑块', tabindex: '-1' },
    [l('VSlider 滑块 '), s('a', { class: 'header-anchor', href: '#vslider-滑块', 'aria-hidden': 'true' }, '#')],
    -1
  ),
  h = s(
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
            s('span', { style: { color: '#F07178' } }, 'V-Slider'),
            s('span', { style: { color: '#89DDFF' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, ':min'),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#C3E88D' } }, 'minValue'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#89DDFF' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, ':max'),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#C3E88D' } }, 'maxValue'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#89DDFF' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, 'v-model'),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#C3E88D' } }, 'inputValue'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#89DDFF' } }, '></'),
            s('span', { style: { color: '#F07178' } }, 'V-Slider'),
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
            s('span', { style: { color: '#A6ACCD' } }, ' ('),
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
            s('span', { style: { color: '#F07178' } }, '         '),
            s('span', { style: { color: '#C792EA' } }, 'const'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#A6ACCD' } }, 'inputValue'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#82AAFF' } }, 'ref'),
            s('span', { style: { color: '#F07178' } }, '('),
            s('span', { style: { color: '#F78C6C' } }, '12'),
            s('span', { style: { color: '#F07178' } }, ')'),
            s('span', { style: { color: '#89DDFF' } }, ';')
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '         '),
            s('span', { style: { color: '#C792EA' } }, 'const'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#A6ACCD' } }, 'minValue'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#82AAFF' } }, 'ref'),
            s('span', { style: { color: '#F07178' } }, '('),
            s('span', { style: { color: '#F78C6C' } }, '0'),
            s('span', { style: { color: '#F07178' } }, ')'),
            s('span', { style: { color: '#89DDFF' } }, ';')
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '         '),
            s('span', { style: { color: '#C792EA' } }, 'const'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#A6ACCD' } }, 'maxValue'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#82AAFF' } }, 'ref'),
            s('span', { style: { color: '#F07178' } }, '('),
            s('span', { style: { color: '#F78C6C' } }, '20'),
            s('span', { style: { color: '#F07178' } }, ')'),
            s('span', { style: { color: '#89DDFF' } }, ';')
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '         '),
            s('span', { style: { color: '#89DDFF', 'font-style': 'italic' } }, 'return'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, '{')
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '            '),
            s('span', { style: { color: '#A6ACCD' } }, 'inputValue'),
            s('span', { style: { color: '#89DDFF' } }, ',')
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '            '),
            s('span', { style: { color: '#A6ACCD' } }, 'maxValue'),
            s('span', { style: { color: '#89DDFF' } }, ',')
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '            '),
            s('span', { style: { color: '#A6ACCD' } }, 'minValue'),
            s('span', { style: { color: '#89DDFF' } }, ',')
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '        '),
            s('span', { style: { color: '#89DDFF' } }, '};')
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
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#89DDFF' } }, '</'),
            s('span', { style: { color: '#F07178' } }, 'script'),
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
function E(c, p, F, y, D, e) {
  const a = m('render-demo-0'),
    o = m('demo')
  return (
    V(),
    A('div', null, [
      x,
      i(
        o,
        {
          customClass: 'undefined',
          sourceCode: `<template>
    <V-Slider :min="minValue" :max="maxValue" v-model="inputValue"></V-Slider>
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent ({
    setup () {
         const inputValue = ref(12);
         const minValue = ref(0);
         const maxValue = ref(20);
         return {
            inputValue,
            maxValue,
            minValue,
        };
    }
})
<\/script>
`
        },
        { highlight: u(() => [h]), default: u(() => [i(a)]), _: 1 }
      )
    ])
  )
}
const k = C(_, [['render', E]])
export { S as __pageData, k as default }
