<template>
	<el-timeline>
			<h2 class="py-2 border-2 border-bottom">Notes</h2>
			<el-timeline-item timestamp="2018/4/12" placement="top">
				<el-card>
					<h4>Update Github template</h4>
					<p>Tom committed 2018/4/12 20:46</p>
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
