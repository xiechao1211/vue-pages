// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
// import VueRouter from 'vue-router'
import Users from './Users.vue'
import Home from '../../components/HelloFromVux.vue'

// Vue.use(VueRouter)

// const routes = [{
//   path: '/users',
//   component: Home
// }]
//
// const router = new VueRouter({
//   routes
// })

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  // router,
  render: h => h(Users)
}).$mount('#app-box')
