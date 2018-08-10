import Vue from 'vue'
import TheContainer from './the-container.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(TheContainer)
}).$mount('#app')
