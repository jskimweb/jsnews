import { createStore } from 'vuex'
import getters from './getters.js'
import mutations from './mutations.js'
import actions from './actions.js'

const store = createStore({
	state: {
		newsList: [],
		askList: [],
		jobsList: [],
		userInfo: {},
		item: {},
		loadingStatus: false
	},
	getters,
	mutations,
	actions
});

export default store