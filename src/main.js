import Vue from 'vue'
import App from './App.vue'
// 全局内容
import style from './assets/statics/site/css/style.css'
// 路由相关

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
