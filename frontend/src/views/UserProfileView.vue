<template>
	<section id="user">
		<div class="p-3">
			<h2 class="py-2 border-2 border-bottom">User Profile</h2>
			<div class="d-flex justify-content-between align-items-center">
				<router-link class="path-to-home" to="/home"><i class="bi bi-arrow-left-circle"></i></router-link>
				<router-link class="btn btn-dark w-auto" :to="{name: 'logout'}">
					<i class="bi bi-box-arrow-right"></i> Logout
				</router-link>
			</div>
			<div class="mt-3">
				<!-- <p>{{ $store.state.user?.firstname }}</p>
				<p>{{ $store.state.user?.lastname }}</p>
				<p>{{ $store.state.user?.email }}</p>
				<img :src="$store.state.user?.profile_img" alt=""> -->		
				<p>Firstname</p>
				<p>Lastname</p>
				<p>email@address.com</p>
				<img :src="$store.state.user?.profile_img" alt="">
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

<style lang="less">
@import "../css/user.less";
</style>
