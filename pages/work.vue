<template>
  <div>
    <transition name="fade">
      <div v-if="isLightboxVisible"
           class="lightbox"
           @click="closeLightbox">
        <img :src="currentImage"
             class="lightbox-image">
      </div>
    </transition>

    <aside>
      <Header />

      <h1>Work</h1>
    </aside>

    <div id="workgrid">
      <div v-for="item in items"
           :key="item.id"
           @click="openLightbox(item.image)"
           @mousemove="handleMouseMove"
           @mouseleave="handleMouseLeave"
           :style="'background-image: url('+ item.image +'); background-position: '+ item.align +';'">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  transition: 'fade',
  data() {
    return {
      items: [
        {
          id: 16,
          title: 'Reflect',
          image: 'gflow.png',
          align: '-873px -263px',
        },
        {
          id: 15,
          title: 'Reflect',
          image: 'esports-1.png',
          align: '-119px -159px',
        },
        {
          id: 1,
          title: 'Reflect',
          image: 'reflect1.jpg',
          align: '-225px -629px',
        },
        {
          id: 13,
          title: 'Reflect',
          image: 'swap.png',
          align: '-1090px -179px',
        },
        {
          id: 2,
          title: 'Reflect',
          image: 'api1.jpg',
          align: '-163px -57px',
        },
        {
          id: 3,
          title: 'Reflect',
          image: 'canvas1.jpg',
          align: '-415px -478px',
        },
        {
          id: 4,
          title: 'Reflect',
          image: 'phone1.png',
          align: '-499px -250px',
        },
        {
          id: 5,
          title: 'Reflect',
          image: 'artboard_4x.png',
          align: '-229px -183px',
        },
        {
          id: 6,
          title: 'Reflect',
          image: 'artboard.png',
          align: '-212px -73px',
        },
        {
          id: 14,
          title: 'Reflect',
          image: 'rhiz.png',
          align: '-229px -50px',
        },
        {
          id: 7,
          title: 'Reflect',
          image: 'spacex.png',
          align: '-276px -296px',
        },
        {
          id: 8,
          title: 'Reflect',
          image: 'files.png',
          align: '-241px -71px',
        },
        {
          id: 9,
          title: 'Reflect',
          image: 'yld.png',
          align: '-99px -1646px',
        },
        {
          id: 10,
          title: 'Reflect',
          image: 'chat-1.png',
          align: '-57px -8px',
        },
        {
          id: 11,
          title: 'Reflect',
          image: 'drib.png',
          align: '-2px -250px',
        },
        {
          id: 12,
          title: 'Reflect',
          image: 'RC.png',
          align: '-3px -7px',
        },
      ],
      isLightboxVisible: false, // Controls the visibility of the lightbox
      currentImage: '',
    }
  },
  mounted() {},
  methods: {
    handleMouseMove(event) {
      const { offsetX, offsetY, target } = event
      const { clientWidth, clientHeight } = target

      const xPos = offsetX / clientWidth - 0.5
      const yPos = offsetY / clientHeight - 0.5

      const rotateX = yPos * 20 // Adjust the degree of rotation here
      const rotateY = xPos * 20 // Adjust the degree of rotation here

      target.style.transform = `scale(1.05)`
    },
    handleMouseLeave(event) {
      event.target.style.transform = 'scale(1)'
    },
    openLightbox(imageUrl) {
      this.currentImage = imageUrl
      this.isLightboxVisible = true
    },
    closeLightbox() {
      this.isLightboxVisible = false
    },
  },
}
</script>

<style>
	h1, h2 {
    font-family: 'Outfit', sans-serif;
    font-size: 48px;
    line-height: 1;
    font-weight: 700;
    color: White;
    margin: 0;
  }

  h2 {
    margin: 64px 0;
  }

  /* MQ - 1024 */
	@media (min-width: 1024px) {
		h1, h2 {
      font-family: 'Outfit', sans-serif;
      font-size: 64px;
      line-height: 1;
      font-weight: 700;
      color: White;
      margin: 0;
    }

    h2 {
      margin: 100px 0;
    }
	}

	#workgrid {
		display: grid;
		grid-template-columns: repeat(1, 1fr);
		grid-template-rows: repeat(12, 1fr);
		gap: 32px;
		margin: 64px 0;
	}

	@media (min-width: 440px) {
		#workgrid {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			grid-template-rows: repeat(6, 1fr);
			gap: 32px;
			margin: 64px 0;
		}
	}

	@media (min-width: 1024px) {
		#workgrid {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			grid-template-rows: repeat(4, 1fr);
			gap: 32px;
			margin: 64px 0;
		}
	}

	#workgrid > div {
		cursor: pointer;
		border-radius: 8px;
		aspect-ratio: 1 / 1;
		background: #333;
		transition: transform 0.2s ease-out;
  	overflow: hidden;
		background-position: center center;
		background-size: auto;
		background-repeat: no-repeat;
	}

	.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.lightbox-image {
	background-color: white;
  max-width: 90%;
  max-height: 90%;
}

	.fade-enter-active, .fade-leave-active {
		transition: opacity 0.5s ease;
	}

	.fade-enter, .fade-leave-to /* starting and end state for entering and leaving */ {
		opacity: 0;
	}

	.fade-enter-to, .fade-leave /* entering end state and leaving start state */ {
		opacity: 1;
	}
</style>
