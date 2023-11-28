<template>
	<section id="notes">
		<router-link class="path-to-home" to="/home">Back</router-link>
		<el-icon><DeleteFilled /></el-icon>
		<div class="notes">
			<h2 class="py-2 border-2 border-bottom">New Note</h2>
			<form action="" method="post">
				<div class="form-floating mb-3">
					<input type="text" class="form-control" id="floatingInput">
					<label for="floatingTitle">Title</label>
				</div>
				<div class="form-floating mb-3">
					<input type="text" class="form-control" id="floatingCategory">
					<label for="floatingCategory">Category</label>
				</div>
				<div class="form-floating mb-3">
					<input type="text" class="form-control" id="floatingContent">
					<label for="floatingContent">Content</label>
				</div>
				<button class="createNote" type="submit">Create Note</button>
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
@import "../css/notes.less";
</style>
