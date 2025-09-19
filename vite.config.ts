import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { URL, fileURLToPath } from 'node:url'
import ViteFonts from 'unplugin-fonts/vite'
import { defineConfig } from 'vite'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		vueJsx(),
		vueDevTools(),
		ViteFonts({
			fontsource: {
				families: [
					{
						name: 'Roboto',
						weights: [100, 300, 400, 500, 700, 900],
						styles: ['normal', 'italic']
					}
				]
			}
		})
	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
		}
	},
	server: {
		host: true
	}
})
