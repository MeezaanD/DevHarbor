<template>
	<section id="login">
		<h3 class="title">Sign In</h3>
		<form action="" method="POST">
			<div class="form-row py-2">
				<div class="form-floating">
					<input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" required>
					<label for="floatingInput">Email address</label>
				</div>
			</div>
			<div class="form-row py-2">
				<div class="form-floating mb-3">
					<input type="password" class="form-control" id="floatingPassword" placeholder="Password" required>
					<label for="floatingPassword">Password</label>
				</div>
			</div>
			<div class="form-row py-2">
				<!-- An actual button should come here dont forget  -->
				<button class="loginBtn" type="submit">Login</button>
			</div>
			<div class="form-row py-3">
				<router-link to="/register">Dont have an account?</router-link>
			</div>
			<router-link to="/home">Skip for now</router-link>
		</form>
	</section>
</template>
	
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'LoginView',
	components: {},
});
</script>

<style lang="less">
@import "../css/login.less";
</style>
