import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'
import Genre from './components/Genre'

Vue.use(BootstrapVue) 
Vue.use(VueRouter) 
Vue.config.productionTip = false

const routes = [
  {
    path : '/genres', 
    component : Genre
  }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  render: h => h(App), router
}).$mount('#app')
