<template>
	<div>
		<p v-for="item in jobsList" :key="item">
			<a :href="item.url">{{ item.title }}</a>
			<span>&nbsp;{{ item.domain }}</span>
		</p>	
	</div>
</template>

<script>
	import { mapGetters, useStore } from 'vuex'

	export default {
		name: 'Jobs',
		computed: {
			...mapGetters(['jobsList'])
		},
		setup() {
			const store = useStore();
			store.dispatch('GET_JOBS');

			return {
				store
			}
		}
	}
</script>

<style>

</style>