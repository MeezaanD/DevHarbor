// Import necessary libraries
import { createStore } from 'vuex';
import axios from 'axios';
import router from '@/router'

const api = "https://devharbor-api.onrender.com/";

// const api = "http://localhost:2003/";
export default createStore({
	state: {
		user: null,
		loggedIn: false,
		token: null,
		msgSuccess: null,
		notes: null,
		projects: null,
		courses: null
	},
	mutations: {
		SET_USER(state, user) {
			state.user = user;
		},
		SET_LOGGED_IN(state, loggedIn) {
			state.loggedIn = loggedIn;
		},
		SET_TOKEN(state, token) {
			state.token = token;
		},
		SET_MSG_SUCCESS(state, msg) {
			state.msgSuccess = msg;
		},
		SET_USER_NOTES(state, notes) {
			state.notes = notes;
		},
		SET_USER_PROJECTS(state, projects) {
			state.projects = projects;
		},
		SET_USER_COURSES(state, courses) {
			state.courses = courses;
		}
	},
	actions: {
		async login(context, payload) {
			try {
				const response = await axios.post(`${api}login`, payload);
				console.log('Response:', response);
				alert('Logged In');
				const { result, jToken, msg, err } = response.data;
				if (result) {
					context.commit('SET_USER', result);
					context.commit('SET_TOKEN', jToken);
					localStorage.setItem('user_token', jToken); // Updated key
					localStorage.setItem('user', JSON.stringify(result));
					context.commit('SET_MSG_SUCCESS', msg);
					router.push('/home');
				} else {
					context.commit('SET_MSG_SUCCESS', err);
				}
			} catch (error) {
				console.error(error);
			}
		},
		async register(context, payload) {
			try {
				const res = await axios.post(`${api}register`, payload);
				console.log('Response:', res);
				const { result, jToken, msg, err } = await res.data;
				if (result) {
					context.commit('SET_USER', result);
					context.commit('SET_TOKEN', jToken);
					localStorage.setItem('user_token', jToken);
					localStorage.setItem('user', JSON.stringify(result));
					context.commit('SET_MSG_SUCCESS', msg);
					router.push('/home');
				} else {
					context.commit('SET_MSG_SUCCESS', err);
				}
			} catch (error) {
				console.error(error);
			}
		},
		logout({ commit }) {
			commit('SET_USER', null);
			commit('SET_LOGGED_IN', false);
			commit('SET_TOKEN', null);
			localStorage.removeItem('user_token'); // Updated key
			router.push('/home');
		},
		async getUser(context, id) {
			try {
			  const res = await axios.get(`${api}/user/${id}`);
			  let { results, err } = await res.data;
			  if (results) {
				context.commit('SET_USER', results);
			  } else {
				context.commit('setMessage', err);
			  }
			} catch (error) {
			  console.error('Error fetching user:', error);
			  context.commit('setMessage', 'Error fetching user');
			}
		  },	  
		async getNotes(context) {
			try {
				if (!context.state.user) {
					console.log("User is not logged in");
					return;
				}
				const userId = context.state.user.user_id;
				if (!userId) {
					console.error("User ID is null or undefined");
					return;
				}
				const res = await axios.get(`${api}user/${userId}/notes`);
				let { results, err } = await res.data;
				if (results) {
					context.commit('SET_USER_NOTES', results);
					console.log(results);
				} else {
					context.commit('setMessage', err);
				}
			} catch (error) {
				console.error(error);
			}
		},
		async getProjects(context) {
			try {
				if (!context.state.user) {
					console.log("User is not logged in");
					return;
				}
				const userId = context.state.user.user_id;
				if (!userId) {
					console.error("User ID is null or undefined");
					return;
				}
				const res = await axios.get(`${api}user/${userId}/projects`);
				let { results, err } = await res.data;
				if (results) {
					context.commit('SET_USER_PROJECTS', results);
					console.log(results);
				} else {
					context.commit('setMessage', err);
				}
			} catch (error) {
				console.error(error);
			}
		},
		async getCourses(context) {
			try {
				if (!context.state.user) {
					console.log("User is not logged in");
					return;
				}
				const userId = context.state.user.user_id;
				if (!userId) {
					console.error("User ID is null or undefined");
					return;
				}
				const res = await axios.get(`${api}user/${userId}/courses`);
				let { results, err } = await res.data;
				if (results) {
					context.commit('SET_USER_COURSES', results);
					console.log(results);
				} else {
					context.commit('setMessage', err);
				}
			} catch (error) {
				console.error(error);
			}
		}
	},
	modules: {}
});
