import Vue from 'vue'
import router from '@/routes'
import App from '@/App.vue'
import {
  Layout,
  Menu,
  Breadcrumb,
  Icon,
  Card,
  Col,
  Row,
  Button,
  Skeleton,
  Divider
} from 'ant-design-vue'
import '@/assets/css/global.scss'

Vue.config.productionTip = false

Vue.use(Layout)
Vue.use(Menu)
Vue.use(Breadcrumb)
Vue.use(Icon)
Vue.use(Card)
Vue.use(Col)
Vue.use(Row)
Vue.use(Button)
Vue.use(Skeleton)
Vue.use(Divider)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
