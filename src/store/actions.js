import {
	getNewsList,
	getAskList,
	getJobsList,
	getUserInfo,
	getItem
} from '@/api/api.js'

export default {
	async GET_NEWS({ commit }) {
		const response = await getNewsList();
		console.log(response.data);
		commit('SET_NEWS', response.data);
		return response;
	},
	async GET_ASK({ commit }) {
		const response = await getAskList();
		console.log(response.data);
		commit('SET_ASK', response.data);
		return response;
	},
	async GET_JOBS({ commit }) {
		const response = await getJobsList();
		console.log(response.data);
		commit('SET_JOBS', response.data);
		return response;
	},
	async GET_USER({ commit }, userName) {
		const response = await getUserInfo(userName);
		console.log(response.data);
		commit('SET_USER', response.data);
		return response;
	},
	async GET_ITEM({ commit }, itemId) {
		const response = await getItem(itemId);
		console.log(response.data);
		commit('SET_ITEM', response.data);
		return response;
	}
}