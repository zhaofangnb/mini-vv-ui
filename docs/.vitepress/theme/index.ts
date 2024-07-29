import Theme from 'vitepress/theme'
import './style/index.scss'
import './style/custom.scss'

import 'vitepress-theme-demoblock/dist/theme/styles/index.css'
import Demo from 'vitepress-theme-demoblock/dist/client/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/dist/client/components/DemoBlock.vue'

import Button from '../../../packages/vv-ui/components/Button'
import ButtonGroup from '../../../packages/vv-ui/components/Button'
import Icon from '../../../packages/vv-ui/components/Icon'
import Space from '../../../packages/vv-ui/components/Space'
import Tree from '../../../packages/vv-ui/components/Tree'
import Checkbox from '../../../packages/vv-ui/components/CheckBox'
import CheckboxGroup from '../../../packages/vv-ui/components/CheckBox'
import CheckboxButton from '../../../packages/vv-ui/components/CheckBox'
import Link from '../../../packages/vv-ui/components/Link'
import Tab from '../../../packages/vv-ui/components/Tab'
import Tabs from '../../../packages/vv-ui/components/Tab'
import Input from '../../../packages/vv-ui/components/Input'
import Slider from '../../../packages/vv-ui/components/Slider'

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.use(Button)
    app.use(ButtonGroup)
    app.use(Icon)
    app.use(Space)
    app.use(Tree)
    app.use(Checkbox)
    app.use(CheckboxGroup)
    app.use(CheckboxButton)
    app.use(Link)
    app.use(Tab)
    app.use(Tabs)
    app.use(Input)
    app.use(Slider)
    app.component('Demo', Demo)
    app.component('DemoBlock', DemoBlock)
  }
}
