import Vue from 'vue'
import Search from './components/Search.vue'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  components: {
    search: Search
  },
  template: `<search></search>`,
  mounted() {
    console.log('mounted')
  },
  updated() {
    console.log('updated')
  },
  beforeUpdate() {
    console.log('before update')
  },
  destroyed() {
    console.log('destroyed')
  }
})