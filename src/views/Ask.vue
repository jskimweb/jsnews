<template>
	<div>
		<p v-for="item in askList" :key="item">
			<router-link :to="`/item/${item.id}`">{{ item.title }}</router-link>
			<span>&nbsp;{{ item.time_ago }} by {{ item.user }}</span>
		</p>
	</div>
</template>

<script>
	import { mapGetters, useStore } from 'vuex'

	export default {
		name: 'Ask',
		computed: {
			...mapGetters(['askList'])
		},
		setup() {
			const store = useStore();
			store.dispatch('GET_ASK');

			return {
				store
			}
		}
	}
</script>

<style>

</style>