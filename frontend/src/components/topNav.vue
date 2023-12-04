<template>
	<div class="d-flex align-items-center justify-content-between p-3">
		<h3>Hi, Username</h3>
		<div class="buttons">
			<div class="dropdown">
				<button class="btn btn-dark" type="button" data-bs-toggle="dropdown" aria-expanded="false">
					<i class="bi bi-hand-index"></i>
				</button>
				<ul class="dropdown-menu">
					<li>
						<router-link class="dropdown-item py-2" to="/home">
							<i class="bi bi-house"></i> Home
						</router-link>
					</li>
					<li>
						<router-link class="dropdown-item py-2" to="/note">
							<i class="bi bi-journal-check"></i> Notes
						</router-link>
					</li>
					<li>
						<router-link class="dropdown-item py-2" to="/project">
							<i class="bi bi-tools"></i> Projects
						</router-link>
					</li>
					<li>
						<router-link class="dropdown-item py-2" to="/course">
							<i class="bi bi-book"></i> Courses
						</router-link>
					</li>
					<li>
						<router-link class="dropdown-item py-2" to="/user">
							<i class="bi bi-person-circle"></i> Profile
						</router-link>
					</li>
					<li>
						<router-link class="btn btn-dark mx-3 my-2" to="/logout">
							<i class="bi bi-box-arrow-right"></i> Logout
						</router-link>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<style lang="less">
@import "../css/main.less";
</style>
  