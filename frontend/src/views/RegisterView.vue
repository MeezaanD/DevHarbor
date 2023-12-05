<template>
	<section id="register">
		<h3 class="title text-light">Sign Up</h3>
		<form @submit.prevent="registerForm">
			<div class="form-row py-2">
				<div class="form-floating">
					<input type="text" v-model="firstName" class="form-control" placeholder="John" required />
					<label for="floatingInput">First Name</label>
				</div>
			</div>
			<div class="form-row py-2">
				<div class="form-floating">
					<input type="text" v-model="lastName" class="form-control" placeholder="Doe" required />
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
					<input type="password" v-model="password" class="form-control" placeholder="Password" required />
					<label for="floatingPassword">Password</label>
				</div>
			</div>
			<div class="form-row pb-3">
				<label class="pb-3" for="ProfilePicture">Profile Picture</label>
				<input class="form-control" type="file" id="formFile" @change="handleFileChange" />
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
		const firstName = ref('');
		const lastName = ref('');
		const email = ref('');
		const password = ref('');
		const profile_img = ref('');
		const store = useStore();

		const handleFileChange = (event: Event) => {
			const input = event.target as HTMLInputElement;
			const file = input.files?.[0];

			if (file) {
				const reader = new FileReader();

				reader.onload = (e) => {
					// e.target.result contains the base64-encoded string
					profile_img.value = e.target?.result as string;
				};

				reader.readAsDataURL(file);
			}
		};

		const registerForm = async () => {
			try {
				const formData = new FormData();
				formData.append('firstName', firstName.value);
				formData.append('lastName', lastName.value);
				formData.append('email', email.value);
				formData.append('password', password.value);
				formData.append('profile_img', profile_img.value);

				const response = await store.dispatch('register', formData);
				console.log(response);
			} catch (error) {
				console.error(error);
			}
		};

		return { firstName, lastName, email, password, profile_img, registerForm, handleFileChange };
	},
});
</script>
  
<style lang="less">
@import "../css/register.less";
</style>
  