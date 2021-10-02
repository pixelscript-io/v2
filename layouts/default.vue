<template>
	<div class="antialiased">
		<Nuxt />
	</div>
</template>

<style>
	@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&family=IBM+Plex+Sans:wght@400;500&display=swap');

	* {
		font-family: 'IBM Plex Sans', sans-serif;
	}

	.mono {
		font-family: 'IBM Plex Mono', monospace;
	}

	.inter {
		font-family: 'Inter', sans-serif;
	}

	.mt-3px {
		margin-top: 3px;
	}

	.ps-divider {
		height: 2px;
		width: 80px;
	}

	.ps-gradient-gray {
		background: rgb(242,244,248);
		background: linear-gradient(180deg, rgba(242,244,248,1) 0%, rgba(242,244,248,0) 100%);
	}
</style>
