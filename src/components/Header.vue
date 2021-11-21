<template>
	<div class="header">
		<h1 class="header__tit">Vue News</h1>
		<router-link to="/news">News</router-link>
		<router-link :class="{'color-active': activeMenu === true}" to="/ask">Ask</router-link>
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

			// AskItemView에서도 Ask 메뉴 포커스 유지
			let activeMenu = computed(() => {
				if(route.name === 'askItem') {
					return true;
				} else {
					return false;
				}
			});

			return {
				route,
				activeMenu
			}
		}
	}
</script>

<style scoped>
	.header {
		background-color: #34495E;
		padding: 1rem 2rem;
	}

	.header h1 {
		color: white;
		font-size: 3.5rem;
		line-height: 1;
		margin-bottom: 2rem;
	}

	.header a {
		position: relative;
		color: white;
		font-weight: 700;
		padding-right: 2rem;
		margin-right: 2rem;
	}

	.header a:last-child{
		padding-right: 0;
		margin-right: 0;
	}

	.header a::after {
		content: '';
		position: absolute;
		right: 0;
		top: 50%;
		transform: translateY(-50%);
		width: .1rem;
		height: 2rem;
		background-color: #ccc;
	}

	.header a:last-child::after {
		display: none;
	}

	.header .router-link-exact-active {
		color: #41b883;
	}

	.color-active {
		color: #41b883 !important;
	}
</style>