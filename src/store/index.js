import { createStore } from 'vuex'


export default createStore({
	state: {
		inputSidebar: {
			visible: false,
			data: {
				title: '',
				description: '',
				meta: null
			},
			content: {
				'groupEdit': false
			}
		},
		lastUpdated: ''
	},
	getters: {
		isInputSidebarVisible(state){
			return state.inputSidebar.visible
		},

		inputSidebarContentContent(state){
			return state.inputSidebar.content
		},

		inputSidebarContentData(state){
			return state.inputSidebar.data
		}
	},
	mutations: {
		RESET_DASHBOARD_INPUT_SIDEBAR(state){
			state.inputSidebar.data = {
				title: '',
				description: '',
				meta: null
			}

			state.inputSidebar.visible = false

			for(let item in state.inputSidebar.content)
				state.inputSidebar.content[item] = false
		},
		SHOW_DASHBOARD_INPUT_SIDEBAR(state, payload){
			state.inputSidebar.visible = true
			state.inputSidebar.content[payload.component] = true
			state.inputSidebar.data = payload.data
		},
		UPDATE_LIST(state, payload){
			document.querySelector(payload).click()
			state.lastUpdated = payload
		}
	},
	actions: {

	},
	modules: {
	}
})
