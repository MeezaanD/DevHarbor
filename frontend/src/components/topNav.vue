<template>
	<div class="d-flex align-items-center justify-content-between p-3">
		<h3>Hi, Username</h3>
		<div class="buttons">
			<div class="dropdown">
				<button class="btn btn-dark" type="button" data-bs-toggle="dropdown" aria-expanded="false">
					<i class="bi bi-hand-index"></i>
				</button>
				<ul class="dropdown-menu">
				  <li><router-link class="dropdown-item" to="/note">Notes</router-link></li>
				  <li><router-link class="dropdown-item" to="/project">Projects</router-link></li>
				  <li><router-link class="dropdown-item" to="/course">Courses</router-link></li>
				  <li><router-link class="btn btn-dark mx-3" to="/logout">Sign out</router-link></li>
				</ul>
			  </div>
		</div>
	</div>
</template>

<style lang="less">
@import "../css/main.less";
</style>
