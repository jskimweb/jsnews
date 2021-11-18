<template>
	<div class="ask">
		<div class="user-cont">
			<div>
				<i class="fas fa-user"></i>
			</div>
			<div class="user-desc">
				<router-link :to="`/user/${item.user}`">{{ item.user }}</router-link>
				<div class="time">{{ item.time_ago }}</div>
			</div>
		</div>
		<h2 class="ask__title">{{ item.title }} </h2>
		<div class="ask__content" v-html="item.content"></div>
	</div>
</template>

<script>
	import {
		useRoute
	} from 'vue-router'
	import {
		mapGetters,
		useStore
	} from 'vuex';

	export default {
		name: 'Item',
		computed: {
			...mapGetters(['item'])
		},
		setup() {
			const route = useRoute();
			const store = useStore();
			const itemId = route.params.id;
			store.dispatch('GET_ITEM', itemId);

			return {
				route,
				store,
				itemId
			}
		}
	}
</script>

<style scoped>
	.ask {
		padding: 1rem;
	}

	.user-cont {
		display: flex;
		align-items: center;
	}

	.fa-user {
		font-size: 4rem;
	}

	.user-desc {
		padding-left: 1rem;
	}

	.time {
		font-size: 1.3rem;
	}

	.ask__title {
		margin-top: 5rem;
	}

	.ask__content {
		margin-top: 2rem;
	}
</style>