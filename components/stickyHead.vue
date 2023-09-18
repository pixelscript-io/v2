<template>
  <div id="scrollHeader"
       class="grid grid-cols-12 opacity-0 fixed w-screen py-4 border-b-2 border-ps-blue bg-ps-medBlue bg-ps-img pointer-events-none z-40">
    <div class="col-span-1 md:col-span-2"></div>
    <div class="col-span-10 md:col-span-8 flex items-center justify-between">
      <img class="w-28 lg:w-56"
           src="logo.svg"
           @click="goTo('./')" />
    </div>
    <div class="col-span-1 md:col-span-2"></div>
  </div>
</template>

<script>
export default {
  props: ['scrollHeight'],
  data() {
    return {}
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      const header = document.getElementById('scrollHeader')
      let innerHeight
      const scrollY = window.scrollY

      if (this.scrollHeight == 'window.innerHeight') {
        innerHeight = window.innerHeight
      } else {
        innerHeight = document.getElementById(this.scrollHeight).clientHeight
      }

      if (scrollY < innerHeight) {
        header.setAttribute('style', 'opacity: 0; pointer-events: none;')
      } else if (scrollY >= innerHeight) {
        header.setAttribute('style', 'opacity: 1; pointer-events: auto;')
      }

      const el = document.getElementById('footer')
      const rect = el.getBoundingClientRect()

      if (
        rect.bottom < 0 ||
        rect.right < 0 ||
        rect.left > window.innerWidth ||
        rect.top > innerHeight
      ) {
        //
      } else {
        header.setAttribute('style', 'opacity: 0; pointer-events: none;')
      }
    },
  },
}
</script>

<style>
	#scrollHeader {
		transition: all 0.25s ease;
	}
</style>