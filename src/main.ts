import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Vue.config.productionTip = false; Vue3已不需要 https://v3.cn.vuejs.org/guide/migration/global-api.html#config-productiontip-%E7%A7%BB%E9%99%A4

const app = createApp(App);
app.use(store);
app.use(router);

import request from "@/utils/request"
app.config.globalProperties.request = request

app.mount('#app');

