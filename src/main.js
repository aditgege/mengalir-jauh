import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from './plugins/axios'
import '../src/assets/style/main.css'
import { createPinia } from 'pinia'
createApp(App).use(createPinia())
.use(router)
.use(axios)
.mount('#app')