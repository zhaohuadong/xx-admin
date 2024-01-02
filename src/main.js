import { createApp } from 'vue'
import '@/assets/styles/index.scss' // global css

import App from './App'
import store from './store'
import piniaPluginPersist from 'pinia-plugin-persist'
import router from './router'
import directive from './directive'
import plugins from './plugins'
import dayjs from 'dayjs'

import './permission'

import { parseTime, resetForm } from '@/utils/common'

store.use(piniaPluginPersist)

const app = createApp(App)

window.dayjs = dayjs
// 全局方法挂载
app.config.globalProperties.parseTime = parseTime
app.config.globalProperties.resetForm = resetForm

app.use(router)
app.use(store)
app.use(plugins)

directive(app)

app.mount('#app')
