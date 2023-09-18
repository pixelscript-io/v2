<template>
  <div class="antialiased">
    <Nuxt />
  </div>
</template>

<script>
</script>


<style>
	@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&family=IBM+Plex+Sans:wght@400;500&display=swap');

	* {
		font-family: 'IBM Plex Sans', sans-serif;
	}

	html,
	body {
		overflow-x: hidden;
		@apply bg-ps-medBlue;
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

	.h-1px {
		height: 1px;
	}

	.ps-divider {
		height: 2px;
		width: 80px;
	}

	.ps-gradient-gray {
		background: rgb(242,244,248);
		background: linear-gradient(180deg, rgba(242,244,248,1) 0%, rgba(242,244,248,0) 100%);
	}

	.ps-btn {
		background: rgb(15,98,254);
		background: linear-gradient(180deg, rgba(15,98,254,1) 0%, rgba(0,67,206,1) 100%);
		position: relative;
		overflow: hidden;
		z-index: 1;
	}

	.ps-btn:hover {
		transition: transform 0.45s ease-in-out;
	}

	.ps-btn::after {
		content: '';
		z-index: -1;
		background-color: rgba(255, 255, 255, 0.1);
		position: absolute;
		top: -50%;
		bottom: -50%;
		width: 1.25em;
		transform: translate3d(-525%, 0, 0) rotate(35deg);
	}

	.ps-btn:hover::after {
		transition: transform 0.45s ease-in-out;
		transform: translate3d(525%, 0, 0) rotate(35deg);
	}

	.ps-tag:hover {
		transition: transform 0.2s ease-in-out;
		transform: perspective(30rem);
	}

	.ps-tag::after {
		content: '';
		z-index: -1;
		background: rgb(15,98,254);
		background: linear-gradient(180deg, rgba(15,98,254,1) 0%, rgba(0,67,206,1) 100%);
		position: absolute;
		top: 100%;
		left: 0;
		width: 100%;
		transform: translate3d(0, 0, 0);
		@apply rounded-sm;
	}

	.ps-tag:hover::after {
		transition: all 0.2s ease-in-out;
		top: 0;
		bottom: 0;
	}

	.ps-service-bg-left {
		background-image: url('/bg_left.svg');
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
	}

	.ps-service-bg-right {
		background-image: url('/bg_right.svg');
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
	}

	#article a {
		@apply text-ps-blue font-medium;
	}

	.anim-a,
	#article a {
		position: relative;
	}

	.anim-a::before,
	#article a::before {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		height: 2px;
		background-color: #0F62FE;
		transform-origin: bottom right;
		transform: scaleX(0);
		transition: transform 0.5s ease;
	}

	.anim-a:hover::before,
	#article a:hover::before {
		transform-origin: bottom left;
		transform: scaleX(1);
	}

	.fade-enter-active, .fade-leave-active { transition: opacity .15s ease; }
  .fade-enter, .fade-leave-active { opacity: 0; }

	.fadeIn {
		animation: fade 1s cubic-bezier(0.25, 0.1, 0.25, 1.0) 1;
	}

	.slideInLeft {
		animation: slide 1s cubic-bezier(0.25, 0.1, 0.25, 1.0) 1;
	}

	.slideUp {
		animation: slideUp 1s cubic-bezier(0.25, 0.1, 0.25, 1.0) 1;
	}

	.iso-bg {
		background-image: url('/grid_bg.svg');
		background-repeat: no-repeat;
		background-size: cover;
		background-position: bottom;
		height: 100vh;
		width: 100vw;
		pointer-events: none;
		position: absolute;
		bottom: 0;
	}

	.bg-proj-1 {
		background-image: url('/proj-1.png');
		background-repeat: no-repeat;
		background-size: 150%;
		background-position: center;
	}

	.bg-proj-2 {
		background-image: url('/proj-2.png');
		background-repeat: no-repeat;
		background-size: 150%;
		background-position: center;
	}

	.bg-proj-3 {
		background-image: url('/proj-3.png');
		background-repeat: no-repeat;
		background-size: 150%;
		background-position: center;
	}

	.bg-proj-4 {
		background-image: url('/proj-4.png');
		background-repeat: no-repeat;
		background-size: 150%;
		background-position: center;
	}

	.bg-proj-5 {
		background-image: url('/proj-5.png');
		background-repeat: no-repeat;
		background-size: 150%;
		background-position: center;
	}

	.bg-proj-6 {
		background-image: url('/proj-6.png');
		background-repeat: no-repeat;
		background-size: 150%;
		background-position: center;
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

	@keyframes slide {
		0% {
			margin-left: -80px;
			opacity: 0;
			width: 160px;
		}
		25% {
			margin-left: -80px;
			opacity: 0;
			width: 160px;
		}
		50% {
			margin-left: 0;
			opacity: 1;
			width: 80px;
		}
		100% {
			margin-left: 0;
			opacity: 1;
			width: 80px;
		}
	}

	@keyframes slideUp {
		0% {
			margin-top: 80px;
			opacity: 0;
		}
		25% {
			margin-top: 80px;
			opacity: 0;
		}
		50% {
			margin-top: 3rem;
			opacity: 1;
		}
		100% {
			margin-top: 3rem;
			opacity: 1;
		}
	}
</style>
