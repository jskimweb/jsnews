import { createRouter, createWebHistory } from 'vue-router';
import News from '@/views/News.vue'
import Ask from '@/views/Ask.vue'
import Jobs from '@/views/Jobs.vue'
import User from '@/views/User.vue'
import Item from '@/views/Item.vue'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			redirect: '/news'
		},
		{
			path: '/news',
			component: News
		},
		{
			path: '/ask',
			component: Ask
		},
		{
			path: '/jobs',
			component: Jobs
		},
		{
			path: '/user/:id',
			component: User
		},
		{
			path: '/item/:id',
			component: Item
		}
	]
});

export default router;