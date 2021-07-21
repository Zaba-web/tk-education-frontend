import { createRouter, createWebHistory } from 'vue-router'

import mainPageRoutes from '@/static/routes/mainPageRoutes'
import adminRoutes from '@/static/routes/adminRoutes'
import studentRoutes from '@/static/routes/studentRoutes'

import AdminLayout from '@/views/Admin/AdminLayout.vue'
import StudentLayout from '@/views/Student/StudentLayout.vue'

import API from '@/libs/api'

import store from '@/store/index'

const api = new API()

const routes = [
	...mainPageRoutes,
	{
		path: '/admin',
		name: 'adminLayout',
		component: AdminLayout,
		children: [
			...adminRoutes
		]
	},
	{
		path: '/student',
		name: 'student',
		component: StudentLayout,
		children: [
			...studentRoutes
		]
	},
	{
		path: '/logout',
		component: mainPageRoutes[0].component,
		beforeEnter(){
			api.userLogout().then(()=>{
				router.push('/')
			})
		}
	}
]
  
const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {

	if(to.fullPath.includes("admin")) { 

		if(!api.ifUserLogin()) {
			next(from.path || '/')
			return ;
		}

		api.getUserAccessLevel().then(userAccessLevel=>{
			if(userAccessLevel < 2) {
				next(from.path || '/')
				return ;
			}

			store.commit('RESET_DASHBOARD_INPUT_SIDEBAR')

			next()
		})
		
	} else {
		next()
	} 
})

export default router