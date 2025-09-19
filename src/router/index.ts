import { type RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'

import Dashboard from '@/views/dashboard/index.vue'
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
		path: '/dashboard',
		component: Dashboard,
		meta: {
			title: '首页'
		}
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
