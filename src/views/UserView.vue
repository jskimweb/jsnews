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
	import { mapGetters } from 'vuex'
	import UserProfile from '@/components/UserProfile.vue'

	export default {
		name: 'UserView',
		computed: {
			...mapGetters(['userInfo'])
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