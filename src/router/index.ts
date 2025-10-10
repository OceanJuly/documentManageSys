import { type RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'

import Layout from '@/layout/index.vue'
import NotFoundPage from '@/views/exception/404.vue'
import Login from '@/views/login/index.vue'

const routes: Array<RouteRecordRaw> = [
	{
		path: '/login',
		component: Login,
		meta: {
			title: '登录'
		}
	},
	{
		path: '/404',
		component: NotFoundPage,
		meta: {
			title: '404'
		}
	},
	{
		path: '/',
		redirect: '/dashboard',
		component: Layout,
		children: [
			{
				path: '/dashboard',
				name: 'Dashboard',
				component: () => import('@/views/dashboard/index.vue'),
				meta: {
					title: 'Dashboard'
				}
			}
		]
	}
]

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: routes
})

router.beforeResolve(async (to) => {
	if (to.meta.title) {
		window.document.title = to.meta.title as string
	}
})

export default router
