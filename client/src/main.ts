import { createApp } from 'vue'
import App from './App.vue'
import router from '~/router'

import 'font-proxima-nova-css/fonts.min.css'
import '~/assets/reset.css'
import '~/assets/form.css'
import 'virtual:uno.css'

const app = createApp(App)
app.use(router)
app.mount('#app')
