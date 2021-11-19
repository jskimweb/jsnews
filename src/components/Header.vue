<template>
	<div class="header">
		<router-link to="/news">News</router-link>
		<router-link :class="{'color-active': active === true}" to="/ask">Ask</router-link>
		<router-link to="/jobs">Jobs</router-link>
	</div>
</template>

<script>
	import { computed } from 'vue'
	import { useRoute } from 'vue-router'

	export default {
		name: 'Header',
		setup() {
			const route = useRoute();

			// AskItemPage에서도 Ask 메뉴 포커스 유지
			let active = computed(() => {
				if(route.name === 'askItem') {
					return true;
				} else {
					return false;
				}
			});

			return {
				route,
				active
			}
		}
	}
</script>

<style scoped>
	.header {
		height: 5rem;
		background-color: #34495E;
		padding: 1rem;
	}

	.header a {
		position: relative;
		color: white;
		font-weight: 700;
		padding-right: 1rem;
		margin-right: 1rem;
	}

	.header a:after {
		content: '';
		position: absolute;
		right: 0;
		top: 50%;
		transform: translateY(-50%);
		width: .1rem;
		height: 2rem;
		background-color: #ccc;
	}

	.header a:last-child::after{
		display: none;
	}

	.header .router-link-exact-active {
		color: #41b883;
	}

	.color-active {
		color: #41b883 !important;
	}
</style>