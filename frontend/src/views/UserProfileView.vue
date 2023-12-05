<template>
	<section id="user">
		<div class="p-3">
			<h2 class="py-2 border-2 border-bottom">User Profile</h2>
			<router-link class="path-to-home" to="/home"><i class="bi bi-arrow-left-circle"></i></router-link>
		</div>
	</section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'; 

export default defineComponent({
	components: {},
});
</script>

<style lang="less">
@import "../css/user.less";
</style>
