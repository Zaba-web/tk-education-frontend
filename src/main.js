import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import store from './store'

import './assets/styles/styles.sass'
import 'animate.css'

createApp(App).use(router).use(store).mount('#app')




