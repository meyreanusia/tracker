
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@fortawesome/fontawesome-free/css/all.css';
import { key, store } from './store';
const app = createApp(App)

app.use(router)
.use(store, key)
.mount('#app')
