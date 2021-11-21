import axios from 'axios'

const config = {
	baseUrl: 'https://api.hnpwa.com/v0/'
};

async function getNewsList() {
	try {
		return axios.get(`${config.baseUrl}news/1.json`);
	} catch (error) {
		console.log(error);
	}
}

function getAskList() {
	try {
		return axios.get(`${config.baseUrl}ask/1.json`);
	} catch (error) {
		console.log(error);
	}
}

function getJobsList() {
	try {
		return axios.get(`${config.baseUrl}jobs/1.json`);
	} catch (error) {
		console.log(error);
	}
}

function getUserInfo(userName) {
	try {
		return axios.get(`${config.baseUrl}user/${userName}.json`);
	} catch (error) {
		console.log(error);
	}
}

function getItem(itemId) {
	try {
		return axios.get(`${config.baseUrl}item/${itemId}.json`);
	} catch (error) {
		console.log(error);
	}
}

export {
	getNewsList,
	getAskList,
	getJobsList,
	getUserInfo,
	getItem
}