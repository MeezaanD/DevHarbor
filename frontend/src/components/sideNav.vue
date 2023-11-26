<template>
	<section id="sideNav">
		<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasMenu"
			aria-controls="offcanvasMenu">
			Menu
		</button>
		<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasMenu" aria-labelledby="offcanvasMenuLabel">
			<div class="offcanvas-header">
				<h5 class="offcanvas-title" id="offcanvasMenuLabel">Menu</h5>
				<button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
			</div>
			<div class="offcanvas-body">
				<div class="fixed-bottom m-2">
					<button class="btn btn-dark">Sign out</button>
				</div>
			</div>
		</div>
	</section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	components: {},
});
</script>
