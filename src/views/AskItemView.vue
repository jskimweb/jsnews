<template>
	<div class="ask">
		<UserProfile :item="item">
			<!-- 유저명 -->
			<template v-slot:username>
				<router-link class="user__name" :to="`/user/${item.user}`">
					<p>{{ item.user }}</p>	
				</router-link>
			</template>

			<!-- 업로드 시각 -->
			<template v-slot:usertime>
				<span class="user__time">{{ 'Posted ' + item.time_ago }}</span>
			</template>
		</UserProfile>

		<h2 class="ask__title">{{ item.title }} </h2>
		<div class="ask__content" v-html="item.content"></div>
	</div>
</template>

<script>
	import { mapGetters	} from 'vuex';
	import UserProfile from '@/components/UserProfile.vue'

	export default {
		name: 'AskItemView',
		computed: {
			...mapGetters(['item'])
		},
		components: {
			UserProfile
		}
	}
</script>

<style scoped>
	.user__name:hover {
		text-decoration: underline;
		color: #34495E;
	}

	.ask .ask__title,
	.ask .ask__content {
		margin-top: 2rem;
	}
</style>