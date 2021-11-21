<template>
	<div class="user">
		<div>
			<i class="fas fa-user"></i>
		</div>
		<div class="user-txt">
			<slot name="username"></slot>
			<slot name="usertime"></slot>
			<slot name="karma"></slot>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'UserProfile'
	}
</script>

<style scoped>
	.user {
		display: flex;
		align-items: center;
		padding: 2rem;
	}

	.user .fa-user {
		font-size: 5rem;
	}

	.user .user-txt {
		padding-left: 2rem;
	}
</style>