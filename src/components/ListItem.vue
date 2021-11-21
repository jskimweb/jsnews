<template>
	<div>
		<ul>
			<li class="post" v-for="item in List" :key="item">
				<!-- 포인트 -->
				<div class="post__point">
					{{ item.points ? item.points : 0 }}
				</div>
				
				<div>
					<!-- 글제목 -->
					<a class="post__tit" v-if="item.domain" :href="item.url" target="_blank">{{ item.title }}</a>
					<router-link class="post__tit" v-else :to="`/ask/item/${item.id}`">{{ item.title }}</router-link>

					<!-- 댓글수 -->
					<span v-if="item.comments_count !== 0" class="post__comment-count">[{{ item.comments_count }}]</span>

					<!-- 작성자 -->
					<span class="post__writer">
						{{ item.time_ago }} by
						<router-link v-if="item.user" :to="`/user/${ item.user }`">{{ item.user }}</router-link>
						<a :href="item.url" v-else target="_blank">{{ item.domain }}</a>
					</span>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	import { mapGetters	} from 'vuex'
	import { useRoute } from 'vue-router'

	export default {
		name: 'ListItem',
		setup() {
			const route = useRoute();

			return {
				route
			}
		},
		computed: {
			...mapGetters(['newsList', 'askList', 'jobsList']),
			List () {
				if (this.route.name === 'news') {
					return this.newsList
				} else if (this.route.name === 'ask') {
					return this.askList
				} else if (this.route.name === 'jobs') {
					return this.jobsList
				} else {
					return false
				}
			}
		}
	}
</script>

<style scoped>
	.post {
		display: flex;
		align-items: center;
		border-bottom: .1rem solid #ddd;
	}

	.post .post__point {
		display: flex;
		justify-content: center;
		align-items: center;
		min-width: 10rem;
		height: 8rem;
		font-weight: 500;
		color: #41b883;
	}

	.post .post__tit {
		display: inline-block;
	}

	.post .post__tit:hover {
		text-decoration: underline;
		color: #34495E;
	}

	.post__comment-count {
		display: inline-block;
		font-size: 1.4rem;
		vertical-align: 0.2rem;
		color: red;
		padding-left: 1rem;
	}

	.post .post__writer {
		display: block;
		font-size: 1.6rem;
		color: #777;
	}

	.post .post__writer a {
		font-weight: 500;
		color: #777;
	}

	.post .post__writer a:hover {
		text-decoration: underline;
		color: #34495E;
	}
</style>