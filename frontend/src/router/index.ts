import { createRouter, createWebHistory, RouteRecordRaw, NavigationGuardNext, RouteLocationNormalized } from 'vue-router';
import LoginView from '../views/LoginView.vue';

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'login',
			component: LoginView
		},
		{
			path: '/logout',
			name: 'logout',
			beforeEnter: (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
				router.push({ name: 'login' });
				localStorage.removeItem('user_token');
				localStorage.removeItem('user');
			}
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
	] as RouteRecordRaw[] 
});

export default router;
