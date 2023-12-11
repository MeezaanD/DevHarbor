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
			path: '/notes',
			name: 'notes',
			component: () => import('../views/NoteView.vue')
		},
		{
			path: '/note',
			name: 'single-note',
			component: () => import('../views/SingleNoteView.vue')
		},
		{
			path: '/projects',
			name: 'projects',
			component: () => import('../views/ProjectView.vue')
		},
		{
			path: '/project',
			name: 'single-project',
			component: () => import('../views/SingleProjectView.vue')
		},
		{
			path: '/courses',
			name: 'course',
			component: () => import('../views/CourseView.vue')
		},
		{
			path: '/note',
			name: 'single-course',
			component: () => import('../views/SingleCourseView.vue')
		},
	] as RouteRecordRaw[] 
});

export default router;
