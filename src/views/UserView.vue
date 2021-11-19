<template>
	<div>
		<UserProfile>
			<!-- 유저명 -->
			<template v-slot:username>
				<p>{{ userInfo.id }}</p>
			</template>
			
			<!-- 가입일 -->
			<template v-slot:usertime>
				<span class="user__time">{{ 'Joined ' + userInfo.created }}</span>
			</template>

			<!-- 카르마 -->
			<template v-slot:karma>
				<span class="user__karma">{{ ', ' + userInfo.karma }}</span>
			</template>
		</UserProfile>
	</div>
</template>

<script>
	import { useRoute } from 'vue-router'
	import { mapGetters, useStore } from 'vuex'
	import UserProfile from '@/components/UserProfile.vue'

	export default {
		name: 'UserView',
		computed: {
			...mapGetters(['userInfo'])
		},
		setup() {
			const route = useRoute();
			const store = useStore();
			const userName = route.params.id;

			store.commit('startSpinner');
			setTimeout(() => {
				store.dispatch('GET_USER', userName)
					.then(() => {
						store.commit('endSpinner');
					})
					.catch(error => {
						console.log(error);
					});
			}, 1000);

			return {
				route,
				store,
				userName
			}
		},
		components: {
			UserProfile
		}
	}
</script>

<style>
	.user__time,
	.user__karma {
			font-size: 1.3rem;
	}
</style>