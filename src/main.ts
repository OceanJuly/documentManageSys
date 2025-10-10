import ArcoVue from '@arco-design/web-vue'
import '@arco-design/web-vue/dist/arco.css'
import '@assets/styles/index'
import { createPinia } from 'pinia'
import 'unfonts.css'
import { createApp } from 'vue'
// vuetify
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import router from '@/router'

import App from './App.vue'

const app = createApp(App)

const vuetify = createVuetify({
	components,
	directives
})

app.use(createPinia()).use(ArcoVue).use(router).use(vuetify).mount('#app')
