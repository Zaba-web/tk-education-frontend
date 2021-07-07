import { createRouter, createWebHistory } from 'vue-router'

import mainPageRoutes from '../static/routes/mainPageRoutes'
import adminRoutes from '../static/routes/adminRoutes'

import AdminLayout from '../views/Admin/AdminLayout.vue'

import API from '../libs/api'

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
		path: '/logout',
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

			next()
		})
		
	} else {
		next()
	} 
})

export default router