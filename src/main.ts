import { createApp } from 'vue'
import './index.scss'
import App from './App.vue'
import Button from '../packages/vv-ui/components/Button'
import Icon from '../packages/vv-ui/components/Icon'
import Tree from '../packages/vv-ui/components/Tree'
// import vvUi from '../build/vv-ui.mjs'
// import '../build/style.css'

createApp(App).use(Button).use(Icon).use(Tree).mount('#app')
