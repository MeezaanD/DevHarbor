<template>
	<div class="d-flex align-items-center justify-content-between p-3">
		<!-- <h3 class="text-light">Hi, Username</h3>
		 -->
		 <div class="dropdown">
			<button class="btn btn-outline-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
				Menu
			</button>
			<ul class="dropdown-menu my-1">
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
			</ul>
		</div>
		<div class="buttons">
			<div class="dropdown">
				<button class="btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
					<img class="profile-img" src="https://i.postimg.cc/859CkZwP/1700057493682.jpg" alt="profile-img">
					<!-- <img class="profile-img" src="https://i.postimg.cc/6qZqxgmZ/MD.png" alt="profile-img"> -->
				</button>
				<ul class="dropdown-menu my-1">
					<li>
						<router-link class="dropdown-item py-2" to="/home">
							<i class="bi bi-house"></i> Home
						</router-link>
					</li>
					<li>
						<router-link class="dropdown-item py-2" to="/user">
							<i class="bi bi-person-circle"></i> Profile
						</router-link>
					</li>
					<li>
						<router-link class="btn btn-dark mx-3 my-2" :to="{name: 'logout'}">
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
  