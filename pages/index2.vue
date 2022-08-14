<template>
  <div id="container"
			 class="w-screen h-screen bg-ps-medBlue bg-ps-img flex items-center justify-center">
		<img src="logo.svg"
				 class="fadeIn" />
	</div>
</template>

<script>
	export default {
		name: 'Splash',
		data () {
			return {
			}
		},
		methods: {

		}
	}
</script>

<style scoped>
	.fadeIn {
		animation: fade 2s linear 1;
	}

	@keyframes fade {
		0% {
			opacity: 0.0;
		}
		25% {
			opacity: 0;
		}
		50% {
			opacity: 1;
		}
		100% {
			opacity: 1;
		}
	}
</style>
