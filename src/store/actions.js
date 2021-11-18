import {
	getNewsList,
	getAskList,
	getJobsList,
	getUserInfo,
	getItem
} from '@/api/api.js'

export default {
	GET_NEWS({ commit }) {
		getNewsList()
			.then(({ data }) => {
				console.log(data);
				commit('SET_NEWS', data);
			})
			.catch(error => {
				console.log(error);
			});
	},
	GET_ASK({	commit }) {
		getAskList()
			.then(({ data }) => {
				console.log(data);
				commit('SET_ASK', data);
			})
			.catch(error => {
				console.log(error);
			});
	},
	GET_JOBS({ commit }) {
		getJobsList()
			.then(({ data }) => {
				console.log(data);
				commit('SET_JOBS', data);
			})
			.catch(error => {
				console.log(error);
			});
	},
	GET_USER({ commit }, userName) {
		getUserInfo(userName)
			.then(({ data }) => {
				console.log(data);
				commit('SET_USER', data);
			})
			.catch(error => {
				console.log(error);
			})
	},
	GET_ITEM({ commit }, itemId) {
		getItem(itemId)
			.then(({ data }) => {
				console.log(data);
				commit('SET_ITEM', data);
			})
			.catch(error => {
				console.log(error);
			})
	}
}