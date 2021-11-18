<template>
	<div>
		<p>Name : {{ userInfo.id }}</p>
		<p>Karma : {{ userInfo.karma }}</p>
		<p>Created : {{ userInfo.created }}</p>
	</div>
</template>

<script>
	import { useRoute } from 'vue-router'
	import { mapGetters, useStore } from 'vuex'

	export default {
		name: 'User',
		computed: {
			...mapGetters(['userInfo'])
		},
		setup() {
			const route = useRoute();
			const store = useStore();
			const userName = route.params.id;
			store.dispatch('GET_USER', userName);

			return {
				route,
				store,
				userName
			}
		}
	}
</script>

<style scoped>

</style>