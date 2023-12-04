<template>
	<section id="home">
		<div class="feed-section">
			<ul>
				<li class="feed-options"><router-link to="/note">Notes</router-link></li>
				<li class="feed-options"><router-link to="/project">Projects</router-link></li>
				<li class="feed-options"><router-link to="/course">Courses</router-link></li>
			</ul>
		</div>
	</section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
	name: 'HomeView',
});
</script>

<style lang="less">
@import "../css/home.less";
</style>
