<template>
	<section id="home">
		<div class="text-center p-2">
			<h3>Hello, Username</h3>
			<div class="dropdown m-2">
				<button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
					aria-expanded="false">
					Create New
				</button>
				<ul class="dropdown-menu">
					<li><a class="dropdown-item" href="/note">New Note</a></li>
					<li><a class="dropdown-item" href="/project">New Project</a></li>
					<li><a class="dropdown-item" href="/course">New Course</a></li>
				</ul>
			</div>
		</div>
		<div class="container-fluid">
			<div class="row">
				<div class="col-12 col-lg-4 border border-1">
					<Notes />
				</div>
				<div class="col-12 col-lg-4 border border-1">
					<Projects />
				</div>
				<div class="col-12 col-lg-4 border border-1">
					<Courses />
				</div>
			</div>
		</div>
	</section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Nav from '@/components/sideNav.vue'
import Notes from '@/components/notesFeed.vue'
import Projects from '@/components/projectsFeed.vue'
import Courses from '@/components/coursesFeed.vue'

export default defineComponent({
	name: 'HomeView',
	components: { Nav, Notes, Projects, Courses },
});
</script>

<style lang="less">
@import "../css/home.less";
</style>
