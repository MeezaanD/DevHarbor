// Import necessary libraries
import { createStore } from 'vuex';
import axios from 'axios';
import router from '@/router'

// const api = "https://devharbor-api.onrender.com/";

const api = "http://localhost:2003/";
export default createStore({
	state: {
		user: null,
		loggedIn: false,
		token: null,
		msgSuccess: null
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
					setTimeout(() => {
						router.push({ name: 'home' });
					}, 3000);
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
				alert('Successfully Added User')
				const { result, msg, err } = await res.data;
				if (result) {
					context.commit('SET_USER', result);
					context.commit('SET_MSG_SUCCESS', msg);
				} else {
					context.commit('SET_MSG_SUCCESS', err)
				}
			} catch (error) {
				console.error(error)
			}
		},
		logout({ commit }) {
			// Clear user, login status, and token from the store and local storage
			commit('SET_USER', null);
			commit('SET_LOGGED_IN', false);
			commit('SET_TOKEN', null);
			localStorage.removeItem('user_token'); // Updated key
			router.push('/home');
		}
	},
	modules: {}
});
