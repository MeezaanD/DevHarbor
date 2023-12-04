<template>
	<section id="courses">
		<router-link class="path-to-home" to="/home"><i class="bi bi-arrow-left-circle"></i></router-link>
		<button @click="toggleCourseForm" class="btn btn-primary float-end m-2">{{ showCourseForm ? 'Cancel' : 'Add Course'
		}}</button>
		<div class="courses">
			<div v-if="showCourseForm" class="courseForm">
				<h2 class="py-2 border-2 border-bottom">New Course</h2>
				<form action="" method="post">
					<div class="form-floating mb-3">
						<input type="text" class="form-control" id="floatingTitle">
						<label for="floatingTitle">Title</label>
					</div>
					<div class="form-floating mb-3">
						<input type="text" class="form-control" id="floatingLink">
						<label for="floatingLink">Link</label>
					</div>
					<div class="form-floating mb-3">
						<input type="date" class="form-control" id="startDate">
						<label for="startDate">Started Date</label>
					</div>
					<div class="form-floating mb-3">
						<input type="date" class="form-control" id="finishDate">
						<label for="finishDate">Finish Date</label>
					</div>
					<button class="createCourse" type="submit">Create Course</button>
				</form>
			</div>
			<coursesFeed v-if="!showCourseForm" />
		</div>
	</section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import coursesFeed from '@/components/coursesFeed.vue';

export default defineComponent({
	components: { coursesFeed },
	data() {
		return {
			showCourseForm: false,
		};
	},
	methods: {
		toggleCourseForm() {
			this.showCourseForm = !this.showCourseForm;
		}
	},
});
</script>

<style lang="less">
@import "../css/main.less";
</style>
