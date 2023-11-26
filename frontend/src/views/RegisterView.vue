<template>
	<section id="register">
		<h3 class="title">Sign Up</h3>
		<form action="" method="POST">
			<div class="form-row py-2">
				<div class="form-floating">
					<input type="text" class="form-control" id="floatingFname" placeholder="John" required>
					<label for="floatingInput">First Name</label>
				</div>
			</div>
			<div class="form-row py-2">
				<div class="form-floating">
					<input type="text" class="form-control" id="floatingLname" placeholder="Doe" required>
					<label for="floatingInput">Last Name</label>
				</div>
			</div>
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
			<div class="form-row pb-3">
				<label class="pb-3" for="ProfilePicture">Profile Picture</label>
				<input class="form-control" type="file" id="formFile">
			</div>
			<div class="form-row py-3">
				<!-- An actual button should come here dont forget  -->
				<button class="registerBtn" type="submit">Register</button>
			</div>
			<div class="form-row py-3">
				<router-link to="/">Already have an account?</router-link>
			</div>
		</form>
	</section>
</template>
	
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'CreateAccView',
	components: {},
});
</script>

<style lang="less">
@import "../css/register.less";
</style>
