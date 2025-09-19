import 'normalize.css'
import { createPinia } from 'pinia'
import 'unfonts.css'
import { createApp } from 'vue'
// vuetify
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'

import router from '@/router'

import App from './App.vue'

const app = createApp(App)

const vuetify = createVuetify({
	components,
	directives
})

app.use(createPinia()).use(router).use(vuetify).mount('#app')
