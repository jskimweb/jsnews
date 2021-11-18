<template>
	<div>
		<p v-for="item in newsList" :key="item">
			<a :href="item.url">{{ item.title }}</a>
			<span>
				&nbsp;{{ item.time_ago }} by
				<router-link :to="`/user/${item.user}`">{{ item.user }}</router-link>
			</span>
		</p>
	</div>
</template>

<script>
	import { mapGetters, useStore } from 'vuex'

	export default {
		name: 'News',
		computed: {
			...mapGetters(['newsList'])
		},
		setup() {
			const store = useStore();
			store.dispatch('GET_NEWS');

			return {
				store
			}
		}
	}
</script>

<style scoped>

</style>