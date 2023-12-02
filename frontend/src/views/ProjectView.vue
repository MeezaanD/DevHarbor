<template>
	<section id="projects">
		<router-link class="path-to-home" to="/home">Back</router-link>
		<div class="projects">
			<projectsFeed/>
			<div class="projectForm">
				<h2 class="py-2 border-2 border-bottom">New Project</h2>
				<form action="" method="post">
					<div class="form-floating mb-3">
						<input type="text" class="form-control" id="floatingTitle">
						<label for="floatingTitle">Title</label>
					</div>
					<div class="form-floating mb-3">
						<input type="text" class="form-control" id="floatingDesign">
						<label for="floatingDesign">Design</label>
					</div>
					<div class="form-floating mb-3">
						<input type="text" class="form-control" id="floatingCode">
						<label for="floatingCode">Code</label>
					</div>
					<div class="form-floating mb-3">
						<input type="text" class="form-control" id="floatingLive">
						<label for="floatingLive">Live</label>
					</div>
					<div class="form-floating mb-3">
						<input type="date" class="form-control" id="startDate">
						<label for="startDate">Started Date</label>
					</div>
					<div class="form-floating mb-3">
						<input type="date" class="form-control" id="finishDate">
						<label for="finishDate">Finish Date</label>
					</div>
					<button class="createProject" type="submit">Create Project</button>
				</form>
			</div>
		</div>
	</section>
</template>

<script lang="ts">
import projectsFeed from '@/components/projectsFeed.vue';
import { defineComponent } from 'vue'; 

export default defineComponent({
	components: { projectsFeed },
});
</script>

<style lang="less">
@import "../css/projects.less";
</style>
