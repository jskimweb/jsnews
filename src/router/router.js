import { createRouter, createWebHistory } from 'vue-router';
import News from '@/views/News.vue'
import Ask from '@/views/Ask.vue'
import Jobs from '@/views/Jobs.vue'

const router = createRouter({
	history: createWebHistory(),
	routes: [
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
		}
	]
});

export default router;