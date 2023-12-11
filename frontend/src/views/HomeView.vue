<template>
	<section id="home">
		<div class="feed-section">
			<ul>
				<li class="feed-options">
					<router-link to="/notes">
						<i class="bi bi-journal-check"></i> Notes
					</router-link>
				</li>
				<li class="feed-options">
					<router-link to="/projects">
						<i class="bi bi-tools"></i> Projects
					</router-link>
				</li>
				<li class="feed-options">
					<router-link to="/courses">
						<i class="bi bi-book"></i> Courses
					</router-link>
				</li>
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
