<template>
	<div>
		<el-timeline v-if="courses && courses.length > 0">
			<h2 class="py-2 border-2 border-bottom">Courses</h2>
			<el-timeline-item v-for="course in courses" :key="course.course_id" timestamp="2018/4/12" placement="top">
				<el-card>
					<h4>{{ course.title }}</h4>
					<a :href="course.url" target="_blank">Take me there</a>
					<div class="d-flex justify-content-between">
						<p>{{ course.startedAt }}</p>
						<p>{{ course.FinishedAt }}</p>
					</div>
					<router-link class="btn btn-secondary my-2" to="/course">Edit</router-link>
					<button class="btn btn-danger mx-2">Delete</button>
				</el-card>
			</el-timeline-item>
		</el-timeline>
		<div v-else>
			<h2 class="py-2 border-2 border-bottom">Courses</h2>
			<p class="text-center">Courses will appear once you are logged in.</p>
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
		store.dispatch("getCourses");
		const courses = computed(() => store.state.courses);
		return { courses };
	}
});
</script>

<style lang="less">
@import "../css/main.less";
@import "../css/courses.less";
</style>
