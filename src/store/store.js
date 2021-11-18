import { createStore } from 'vuex'
import getters from '@/store/getters.js'
import mutations from '@/store/mutations.js'
import actions from '@/store/actions.js'

const store = createStore({
	state: {
		newsList: [],
		askList: [],
		jobsList: [],
		userInfo: {},
		item: []
	},
	getters,
	mutations,
	actions
});

export default store