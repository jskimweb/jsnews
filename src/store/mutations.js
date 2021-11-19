export default {
	SET_NEWS(state, payload) {
		state.newsList = payload;
	},
	SET_ASK(state, payload) {
		state.askList = payload;
	},
	SET_JOBS(state, payload) {
		state.jobsList = payload;
	},
	SET_USER(state, payload) {
		state.userInfo = payload;
	},
	SET_ITEM(state, payload) {
		state.item = payload;
	},
	startSpinner(state) {
		state.loadingStatus = true;
	},
	endSpinner(state) {
		state.loadingStatus = false;
	},
	SET_LIST(state, payload) {
		state.list = payload;
	}
}