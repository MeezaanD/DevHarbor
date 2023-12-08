<template>
	<section id="register">
		<h3 class="title text-light">Sign Up</h3>
		<form @submit.prevent="registerForm">
			<div class="form-row py-2">
				<div class="form-floating">
					<input type="text" v-model="firstname" class="form-control" placeholder="John" required />
					<label for="floatingInput">First Name</label>
				</div>
			</div>
			<div class="form-row py-2">
				<div class="form-floating">
					<input type="text" v-model="lastname" class="form-control" placeholder="Doe" required />
					<label for="floatingInput">Last Name</label>
				</div>
			</div>
			<div class="form-row py-2">
				<div class="form-floating">
					<input type="email" v-model="email" class="form-control" placeholder="name@example.com" required />
					<label for="floatingInput">Email address</label>
				</div>
			</div>
			<div class="form-row py-2">
				<div class="form-floating mb-3">
					<input class="form-control" type="password" v-model="password"  placeholder="Password" required />
					<label for="floatingPassword">Password</label>
				</div>
			</div>
			<div class="form-row pb-3">
				<div class="form-floating">
					<input class="form-control" type="text" id="formFile" v-model="profile_img" placeholder="Img URL" required/>
					<label class="pb-3" for="ProfilePicture">Profile Picture</label>
				</div>
			</div>
			<div class="form-row py-3">
				<button class="registerBtn" type="submit">Register</button>
			</div>
			<div class="form-row py-3">
				<router-link to="/">Already have an account?</router-link>
			</div>
		</form>
	</section>
</template>
  
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
	name: 'CreateAccView',
	setup() {
		const firstname = ref('');
		const lastname = ref('');
		const email = ref('');
		const password = ref('');
		const profile_img = ref('');
		const store = useStore();

		const registerForm = async () => {
			try {
				await store.dispatch('register', {
					firstname: firstname.value,
					lastname: lastname.value,
					email: email.value,
					password: password.value,
					profile_img: profile_img.value
				})
			}
			catch(error) {
				console.error(error)
			}
		};

		return { firstname, lastname, email, password, profile_img, registerForm };
	},
});
</script>
  
<style lang="less">
@import "../css/main.less";
</style>
  