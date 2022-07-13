import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'

// Bootstrap config
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import './app.scss'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Plugins
import ThemeSwitch from '@/plugins/theme-switch'
import ApiQuery from '@/plugins/api-query'

Vue.use(ThemeSwitch)
Vue.use(ApiQuery)

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
