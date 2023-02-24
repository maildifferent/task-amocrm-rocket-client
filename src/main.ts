import { createApp } from 'vue'

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

import AppMain from './AppMain.vue'

const app = createApp(AppMain)
app.use(Antd)
app.mount('#app')
