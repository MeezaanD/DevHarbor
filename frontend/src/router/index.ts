import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import LoginView from '../views/LoginView.vue'

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'login',
		component: LoginView
	},
	{
		path: '/register',
		name: 'register',
		component: () => import('../views/RegisterView.vue')
	},
	{
		path: '/user',
		name: 'user-profile',
		component: () => import('../views/UserProfileView.vue')
	},
	{
		path: '/home',
		name: 'home',
		component: () => import('../views/HomeView.vue')
	},
	{
		path: '/note',
		name: 'notes',
		component: () => import('../views/NoteView.vue')
	},
	{
		path: '/project',
		name: 'projects',
		component: () => import('../views/ProjectView.vue')
	},
	{
		path: '/course',
		name: 'course',
		component: () => import('../views/CourseView.vue')
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
