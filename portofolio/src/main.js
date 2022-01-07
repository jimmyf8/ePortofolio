import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ScrollAnimation from './directives/scrollanimation'
import ScaleAnimation from './directives/scaleanimation'


Vue.directive('scrollanimation', ScrollAnimation);
Vue.directive('scaleanimation', ScaleAnimation);


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
