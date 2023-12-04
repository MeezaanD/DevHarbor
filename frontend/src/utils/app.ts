import { ref, onBeforeMount } from 'vue';
import { useRouter, RouteLocationNormalized } from 'vue-router';

export function useTopNav() {
	const showTopNav = ref(true);
	const router = useRouter();

	const shouldShowTopNav = (to: RouteLocationNormalized) => {
		const hiddenRoutes = ['/', '/register', '/user'];
		return !hiddenRoutes.includes(to.path);
	};

	// Update showTopNav when the route changes
	const updateShowTopNav = (to: RouteLocationNormalized) => {
		showTopNav.value = shouldShowTopNav(to);
	};

	// Use onBeforeRouteUpdate to capture route changes
	onBeforeMount(() => {
		updateShowTopNav(router.currentRoute.value);
		router.beforeEach((to) => {
			updateShowTopNav(to);
			return true; // Ensure navigation continues
		});
	});

	return { showTopNav };
}
