import { createRouter, createWebHistory } from 'vue-router';
import NewsView from '@/views/NewsView.vue'
import AskView from '@/views/AskView.vue'
import JobsView from '@/views/JobsView.vue'
import UserView from '@/views/UserView.vue'
import AskItemView from '@/views/AskItemView.vue'
import store from '@/store/store.js'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			redirect: '/news'
		},
		{
			path: '/news',
			name: 'news',
			component: NewsView,
			beforeEnter: (to, from, next) => {
				store.commit('startSpinner');
				store.dispatch('GET_NEWS')
					.then(() => {
						store.commit('endSpinner');
						next();
					})
					.catch(error => {
						console.log(error);
					});
			}
		},
		{
			path: '/ask',
			name: 'ask',
			component: AskView,
			beforeEnter: (to, from, next) => {
				store.commit('startSpinner');
				store.dispatch('GET_ASK')
					.then(() => {
						store.commit('endSpinner');
						next();
					})
					.catch(error => {
						console.log(error);
					});
			}
		},
		{
			path: '/jobs',
			name: 'jobs',
			component: JobsView,
			beforeEnter: (to, from, next) => {
				store.commit('startSpinner');
				store.dispatch('GET_JOBS')
					.then(() => {
						store.commit('endSpinner');
						next();
					})
					.catch(error => {
						console.log(error);
					});
			}
		},
		{
			path: '/user/:id',
			name: 'user',
			component: UserView,
			beforeEnter: (to, from, next) => {
				store.commit('startSpinner');
				store.dispatch('GET_USER', to.params.id)
					.then(() => {
						store.commit('endSpinner');
						next();
					})
					.catch(error => {
						console.log(error);
					});
			}
		},
		{
			path: '/ask/item/:id',
			name: 'askItem',
			component: AskItemView,
			beforeEnter: (to, from, next) => {
				store.commit('startSpinner');
				store.dispatch('GET_ITEM', to.params.id)
					.then(() => {
						store.commit('endSpinner');
						next();
					})
					.catch(error => {
						console.log(error);
					});
			}
		}
	]
});

export default router;