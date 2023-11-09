import { createApp } from 'vue'
import App from './App.vue'
import RocketForm from './RocketForm'

const app = createApp(App)
app.use(RocketForm)
app.mount('#app')
