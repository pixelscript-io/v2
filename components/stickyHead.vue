<template>
  <div id="scrollHeader"
       class="grid grid-cols-12 opacity-0 fixed w-screen py-4 border-b-2 border-ps-blue bg-ps-medBlue bg-ps-img pointer-events-none z-40">
    <div class="col-span-1 md:col-span-2"></div>
    <div class="col-span-10 md:col-span-8 flex items-center justify-between">
      <img class="w-28 lg:w-56"
           src="logo.svg" />
      <div class="flex items-center">
        <NuxtLink to="/home"
                  class="inter text-white text-opacity-90 text-sm font-medium mr-8 anim-a">
          Root
        </NuxtLink>
        <a href="JoeResume.pdf"
           target="_blank"
           class="inter text-white text-opacity-90 text-sm font-medium mr-0 sm:mr-8 anim-a">
          Resume
        </a>
        <NuxtLink to="/contact"
                  class="hidden sm:block ps-btn flex flex-row items-center text-white text-sm text-opacity-90 font-medium px-4 py-2 transition-all rounded-sm">
          Let's chat
        </NuxtLink>
      </div>
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