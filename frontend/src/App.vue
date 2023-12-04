<template>
	<div>
		<topNav v-if="showTopNav" />
		<router-view/>
	</div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import topNav from './components/topNav.vue';
import { useTopNav } from './utils/app';

export default defineComponent({
	components: { topNav },
	setup() {
		const { showTopNav } = useTopNav();
		return { showTopNav };
	},
});
</script>
  
<style lang="less">
@import "./css/main.less";
</style>
  