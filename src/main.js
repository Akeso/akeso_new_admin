import Vue from 'vue'
import VCharts from 'v-charts'
import VeLine from 'v-charts/lib/line.common'

import Cookies from 'js-cookie'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import i18n from './lang' // Internationalization
import '@/icons' // icon
import '@/permission' // permission control

import eventBus from '@/utils/event_bus.js'

import htmlToPdf from '@/utils/htmlToPdf'
import htmlToPdfObj from '@/utils/htmlToPdfObj'

Vue.prototype.eventBus = eventBus.eventBus

Vue.use(htmlToPdf)
Vue.use(htmlToPdfObj)
Vue.component(VeLine.name, VeLine)

Vue.use(ElementUI, {
  size: Cookies.get('size') || 'medium', // set element-ui default size
  i18n: (key, value) => i18n.t(key, value)
})
Vue.use(VCharts)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
})
