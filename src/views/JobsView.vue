<template>
	<div>
		<ListItem></ListItem>
	</div>
</template>

<script>
	import { useStore } from 'vuex'
	import ListItem from '@/components/ListItem.vue'
	// import ListMixin from '@/mixins/ListMixin.js'

	export default {
		name: 'JobsView',
		setup() {
			const store = useStore();

			store.commit('startSpinner');
			setTimeout(() => {
				store.dispatch('GET_JOBS')
					.then(() => {
						store.commit('endSpinner');
					})
					.catch(error => {
						console.log(error);
					});
			}, 1000);

			return {
				store
			}
		},
		components: {
			ListItem
		},
		// mixins: [ListMixin]
	}
</script>