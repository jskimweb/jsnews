import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

export default {
	setup() {
		const route = useRoute();
		const store = useStore();

		store.commit('startSpinner');
		setTimeout(() => {
		store.dispatch('GET_LIST', route.name)
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
	}
}