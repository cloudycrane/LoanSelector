// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import Vuex from 'vuex'
// import VueAxios from 'vue-axios'
// import axios from 'axios'
import qs from 'qs'

// import 'normalize.css/normalize.css'// A modern alternative to CSS resets
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en'

import App from './App'
import router from './router/router'
import  store from './store'

// import '@/icons' // icon
// import '@/permission' // permission control

Vue.use(ElementUI, { locale })
Vue.config.productionTip = true
Vue.prototype.$qs = qs

// Vue.use(Vuex)
// Vue.use(VueAxios, axios)
// Vue.use(qs)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
