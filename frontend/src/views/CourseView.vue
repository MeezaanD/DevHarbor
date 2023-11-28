<template>
	<section id="courses">
		<router-link class="path-to-home" to="/home">Back</router-link>
		<div class="courses">
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
	</section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'; 

export default defineComponent({
	components: {},
});
</script>

<style lang="less">
@import "../css/courses.less";
</style>
