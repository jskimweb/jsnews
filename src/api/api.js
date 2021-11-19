import axios from 'axios'

const config = {
	baseUrl: 'https://api.hnpwa.com/v0/'
};

function getNewsList() {
	return axios.get(`${config.baseUrl}news/1.json`);
}

function getAskList() {
	return axios.get(`${config.baseUrl}ask/1.json`);
}

function getJobsList() {
	return axios.get(`${config.baseUrl}jobs/1.json`);
}

function getUserInfo(userName) {
	return axios.get(`${config.baseUrl}user/${userName}.json`);
}

function getItem(itemId) {
	return axios.get(`${config.baseUrl}item/${itemId}.json`);
}

function getList(pageName) {
	return axios.get(`${config.baseUrl}${pageName}/1.json`);
}

export {
	getNewsList,
	getAskList,
	getJobsList,
	getUserInfo,
	getItem,
	getList
}