import { createStore } from 'vuex'
import API from '../libs/api'

export default createStore({
	state: {

	},
	getters: {
		getUserData(state){
			return state.user
		}
	},
	mutations: {
		SET_USER_DATA(state, payload) {
			state.user = payload
		}
	},
	actions: {
		async loadUserData({commit}) {
			const api = new API()

			try {
				const user = await api.getAllUserData()
				commit('SET_USER_DATA', user)
			} catch(error) {
				console.error(error)
			}
		}
	},
	modules: {
	}
})
