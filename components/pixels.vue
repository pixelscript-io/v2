<template>
  <div id="pixels"
			 class="bg-ps-medBlue bg-ps-img">
		<!-- <div id="top-gradient"></div> -->
	</div>
</template>

<script>
	export default {
		name: 'Pixels',
		data () {
			return {
			}
		},
		mounted() {
			// this.fillGrid()
		},
		methods: {
			fillGrid() {
				const container = document.getElementById('pixels')
				const cols = getComputedStyle(container).getPropertyValue("grid-template-columns")
				const rows = getComputedStyle(container).getPropertyValue("grid-template-rows")

				const colCount = cols.split(" ")
				const rowCount = rows.split(" ")
				const squareCount = colCount.length * rowCount.length

				for (let a = 0; a < squareCount; a++) {
					const color = '#000'
					const opacity = 'opacity: ' + 0 + '%;'
					const bg = 'background-color: ' + color + ';'
					const anim = 'animation: blink 3s infinite;'
					const animDelay = 'animation-delay: ' + Math.ceil(Math.random() * 5000) + 'ms;'
					const animEase = 'animation-timing-function: ease-in-out;'

					const square = document.createElement('div')

					square.setAttribute('style', opacity + bg + anim + animDelay + animEase)

					container.appendChild(square)
				}
			}
		}
	}
</script>

<style>
	@layer utilities {
		.bg-grad-dark {
			background: rgb(5,17,42);
			background: linear-gradient(145deg, rgba(5,17,42,1) 0%, rgba(17,24,39,1) 100%);
		}

		#pixels {
			/* display: grid;
			grid-template-columns: repeat(auto-fill, 48px);
			grid-template-rows: repeat(auto-fill, 48px); */
			height: 100vh;
			width: 100vw;
			z-index: 1;
		}

		#top-gradient {
			background: rgb(7,28,66);
			background: linear-gradient(315deg, rgba(7,28,66,0) 0%, rgba(7,28,66,1) 100%);
			height: 100vh;
			opacity: .3;
			position: absolute;
			width: 100vw;
			z-index: 2;
		}

		.bg-ps-img {
			background-image: url('/bg.svg');
			background-repeat: no-repeat;
		}

		@keyframes blink {
			0% {
				opacity: 0.0;
				box-shadow: inset 0 0 0 1px transparent;
			}
			25% {
				opacity: 0.0;
				box-shadow: inset 0 0 0 1px transparent;
			}
			50% {
				opacity: 0.04;
				box-shadow: inset 0 0 0 1px #0F62FE;
			}
			100% {
				opacity: 0.0;
				box-shadow: inset 0 0 0 1px transparent;
			}
		}
	}
</style>
