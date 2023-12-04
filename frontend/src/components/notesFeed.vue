<template>
	<el-timeline>
		<h2 class="py-2 border-2 border-bottom">Notes</h2>
		<el-timeline-item timestamp="2018/4/12" placement="top">
			<el-card>
				<div class="d-flex align-items-center justify-content-between">
					<h4>Ticket 3059</h4>
					<h6>Work</h6>
				</div>
				<p>Finished the backend part of the ticket</p>
			</el-card>
		</el-timeline-item>
		<el-timeline-item timestamp="2018/4/12" placement="top">
			<el-card>
				<div class="d-flex justify-content-between">
					<h4>Ticket 3059</h4>
					<h6>Work</h6>
				</div>
				<p>Finished the backend part of the ticket</p>
			</el-card>
		</el-timeline-item>
		<el-timeline-item timestamp="2018/4/12" placement="top">
			<el-card>
				<div class="d-flex justify-content-between">
					<h4>Ticket 3059</h4>
					<h6>Work</h6>
				</div>
				<p>Finished the backend part of the ticket</p>
			</el-card>
		</el-timeline-item>
	</el-timeline>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	components: {},
});
</script>

<style lang="less">
@import "../css/main.less";
@import "../css/notes.less";
</style>
