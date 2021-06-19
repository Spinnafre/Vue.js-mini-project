import Vue from 'vue'
import App from './App.vue'
import Componente2 from './components/Componente2.vue'

Vue.component('componente-2',Componente2)

Vue.config.productionTip = false

import VueApexCharts from 'vue-apexcharts'
Vue.component('apexchart', VueApexCharts);

new Vue({
  render: h => h(App),
}).$mount('#app')
