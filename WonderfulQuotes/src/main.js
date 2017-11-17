import Vue from 'vue'
import App from './App.vue'

Vue.component('app-footer', require('./components/appFooter.vue'))

export const bus = new Vue({});

new Vue({
  el: '#app',
  render: h => h(App)
})
