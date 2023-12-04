<template>
	<section id="login">
		<h3 class="title">Sign In</h3>
		<form @submit.prevent="loginForm">
			<div class="form-row py-2">
				<div class="form-floating">
					<input v-model="email" type="email" class="form-control" id="floatingInput"
						placeholder="name@example.com" required />
					<label for="floatingInput">Email address</label>
				</div>
			</div>
			<div class="form-row py-2">
				<div class="form-floating mb-3">
					<input v-model="password" type="password" class="form-control" id="floatingPassword"
						placeholder="Password" required />
					<label for="floatingPassword">Password</label>
				</div>
			</div>
			<div class="form-row py-2">
				<button class="loginBtn" type="submit">Login</button>
			</div>
			<div class="form-row py-3">
				<router-link to="/register">Don't have an account?</router-link>
			</div>
			<router-link to="/home">Skip for now</router-link>
		</form>
	</section>
</template>
  
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
	name: 'LoginView',
	components: {},
	setup() {
		const email = ref('');
		const password = ref('');
		const store = useStore();

		const loginForm = () => {
			store.dispatch('login', {
				email: email.value,
				password: password.value,
			});
		};

		return { email, password, loginForm };
	},
});
</script>
  
<style lang="less">
@import "../css/login.less";
</style>
  