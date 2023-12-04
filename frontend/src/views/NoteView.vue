<template>
	<section id="notes">
		<router-link class="path-to-home" to="/home"><i class="bi bi-arrow-left-circle"></i></router-link>
		<button @click="toggleNoteForm" class="btn btn-primary float-end m-2">
			{{ showNoteForm ? 'Cancel' : 'Add Note' }}</button>
		<div class="notes">
			<div v-if="showNoteForm" class="noteForm">
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
			<notesFeed v-if="!showNoteForm" />
		</div>
	</section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import notesFeed from '@/components/notesFeed.vue';

export default defineComponent({
	components: { notesFeed },
	data() {
		return {
			showNoteForm: false,
		};
	},
	methods: {
		toggleNoteForm() {
			this.showNoteForm = !this.showNoteForm;
		}
	},
});
</script>

<style lang="less">
@import "../css/main.less";
</style>
