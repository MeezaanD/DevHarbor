<template>
	<div>
		<el-timeline v-if="projects && projects.length > 0">
			<h2 class="py-2 border-2 border-bottom">Projects</h2>
			<el-timeline-item v-for="project in projects" :key="project.projects_id">
				<el-card>
					<h4>{{project.title}}</h4>
					<div class="d-flex justify-content-start gap-3 mx-auto py-2">
						<a class="btn btn-info rounded-pill" :href="project.design_url" target="_blank">Design</a>
						<a class="btn btn-warning rounded-pill" :href="project.code_url" target="_blank">Code</a>
						<a class="btn btn-dark rounded-pill" :href="project.live_url" target="_blank">Live</a>
					</div>
					<router-link class="btn btn-secondary my-2" to="/project">Edit</router-link>
					<button class="btn btn-danger mx-2">Delete</button>
				</el-card>
			</el-timeline-item>
		</el-timeline>
		<div v-else>
			<h2 class="py-2 border-2 border-bottom">Projects</h2>
			<p class="text-center">Projects will appear once you are logged in.</p>
		</div>
	</div>
</template>
  

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
	components: {},
	setup() {
		const store = useStore();
		store.dispatch("getProjects");
		const projects = computed(() => store.state.projects);
		return { projects };
	}
});
</script>

<style lang="less">
@import "../css/main.less";
@import "../css/projects.less";
</style>
