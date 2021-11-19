import { createRouter, createWebHistory } from 'vue-router';
import NewsView from '@/views/NewsView.vue'
import AskView from '@/views/AskView.vue'
import JobsView from '@/views/JobsView.vue'
import UserView from '@/views/UserView.vue'
import AskItemView from '@/views/AskItemView.vue'

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
			component: NewsView
		},
		{
			path: '/ask',
			name: 'ask',
			component: AskView
		},
		{
			path: '/jobs',
			name: 'jobs',
			component: JobsView
		},
		{
			path: '/ask/item/:id',
			name: 'askItem',
			component: AskItemView
		},
		{
			path: '/user/:id',
			name: 'user',
			component: UserView
		}
	]
});

export default router;