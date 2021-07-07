import { createStore } from 'vuex'


export default createStore({
	state: {
		inputSidebar: {
			visible: false,
			data: null,
			content: {
				'groupUpdate': false
			}
		}
	},
	getters: {
		isInputSidebarVisible(state){
			return state.inputSidebar.visible
		},

		inputSidebarContentContent(state){
			return state.inputSidebar.content
		}
	},
	mutations: {
		RESET_DASHBOARD_INPUT_SIDEBAR(state){
			state.inputSidebar.data = null

			for(let item in state.inputSidebar.content)
				state.inputSidebar.content[item] = false
		},
		SHOW_DASHBOARD_INPUT_SIDEBAR(state, payload){
			state.inputSidebar.visible = true
			state.inputSidebar.content[payload.component] = true
			state.inputSidebar.data = payload.data
		}
	},
	actions: {

	},
	modules: {
	}
})
