import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'
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
			'@': path.resolve(__dirname, './src'),
			'@assets': path.resolve(__dirname, './src/assets')
		}
	},
	server: {
		host: true
	}
})
