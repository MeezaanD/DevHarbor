<template>
	<div>
		<el-timeline v-if="notes && notes.length > 0">
			<h2 class="py-2 border-2 border-bottom">Notes</h2>
			<el-timeline-item v-for="note in notes" :key="note.notes_id">
				<el-card>
					<h4>{{ note.title }}</h4>
					<h6 class="text-decoration-underline my-1">{{ note.category }}</h6>
					<p>{{ note.content }}</p>
					<router-link class="btn btn-secondary my-2" to="/note">Edit</router-link>
					<button class="btn btn-danger mx-2">Delete</button>
				</el-card>
			</el-timeline-item>
		</el-timeline>
		<div v-else>
			<h2 class="py-2 border-2 border-bottom">Notes</h2>
			<p class="text-center">Notes will appear once you are logged in.</p>
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
		store.dispatch("getNotes");
		const notes = computed(() => store.state.notes);
		return { notes };
	}
});
</script>
	
<style lang="less">
@import "../css/main.less";
@import "../css/notes.less";
</style>
  