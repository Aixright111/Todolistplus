import { createApp } from 'vue'
import App from './App.vue'
import Info  from './pages/info.vue'
import{createWebHashHistory,createRouter}from "vue-router"
const routes=[{ path: '/', redirect: '/info' },{path:"/info",component:Info}]
const router=createRouter({history:createWebHashHistory(),routes})
const app=createApp(App)
app.use(router)
app.mount('#app')
