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

      <h1>Private Collection</h1>
    </aside>

    <h3>Email Templates</h3>

    <div id="workgrid">
      <div v-for="item in items"
           :key="item.id"
           @click="openLightbox(item.image)"
           @mousemove="handleMouseMove"
           @mouseleave="handleMouseLeave"
           :style="'background-image: url('+ item.image +'); background-position: '+ item.align +';'">
      </div>
    </div>

    <h3>Websites &amp; Applications</h3>

    <div id="workgrid2">
      <div v-for="item in items2"
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
          id: 0,
          title: 'Reflect',
          image: 'email1.png',
          align: '-266px -286px',
        },
        {
          id: 2,
          title: 'Reflect',
          image: 'email3.jpg',
          align: '-66px -421px',
        },
      ],
      items2: [
        {
          id: 0,
          title: 'Reflect',
          image: 'website3.jpg',
          align: '-626px -312px',
        },
        {
          id: 1,
          title: 'Reflect',
          image: 'website2.jpg',
          align: '-665px -169px',
        },
        {
          id: 1,
          title: 'Reflect',
          image: 'website4.png',
          align: '-1006px -217px',
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

<style scoped>
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

	h3 {
			font-family: 'Outfit', sans-serif;
			font-size: 24px;
			font-weight: 500;
			line-height: 1;
			color: White;
			margin: 48px 0 16px 0;
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

	#workgrid2 {
		margin-bottom: 64px !important;
	}

	#workgrid,
	#workgrid2 {
		display: grid;
		grid-template-columns: repeat(1, 1fr);
		gap: 32px;
		margin: 32px 0;
	}

	@media (min-width: 440px) {
		#workgrid,
	#workgrid2 {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			gap: 32px;
			margin: 32px 0;
		}
	}

	@media (min-width: 1024px) {
		#workgrid,
	#workgrid2 {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			gap: 32px;
			margin: 32px 0;
		}
	}

	#workgrid > div,
	#workgrid2 > div{
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
