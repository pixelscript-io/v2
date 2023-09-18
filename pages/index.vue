<template>
  <div>
    <StickyHead :scrollHeight="'window.innerHeight'"
                @show-chat="showChat = true" />
    <div id="container">
      <span class="iso-bg"></span>
      <div id="grid">

        <div class="fadeIn">
          <img id="logo"
               src="logo.svg"
               @click="goTo('./')" />
          <nav class="fadeIn">
            <NuxtLink to="/contact"
                      class="btn ps-btn">
              Let's chat
            </NuxtLink>
          </nav>
        </div>

        <div id="intro">
          <p id="name"
             class="fadeIn">
            Joe Berthelot
          </p>
          <p id="title"
             class="fadeIn">
            UI/UX Designer &amp; Full Stack Developer
          </p>

          <div class="ps-divider bg-ps-blue mb-6 slideInLeft"></div>

          <p id="body"
             class="inter fadeIn">
            Hello, I'm Joe. I've been forging elegant and user-friendly interfaces for the previous 15+ years, ranging from small local companies to large enterprise-level corporations.
            <br /><br />
            Aside from designing, I'm also an experienced application & web developer specializing in Vue and NodeJS.
          </p>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
export default {
  name: 'Index',
  transition: 'fade',
  data() {
    return {
      hoverOne: false,
      hoverTwo: false,
      hoverThree: false,
      hoverFour: false,
      hoverFive: false,
      hoverSix: false,
    }
  },
  mounted() {},
  methods: {
    goTo(route) {
      this.$router.push(route)
    },
  },
}
</script>

<style scoped>
  .bg-proj {
    background: rgb(15,98,254);
  }

  #container {
    @apply bg-ps-medBlue min-h-screen;
  }

  #grid {
    @apply w-9/12 md:w-8/12;

    margin: 0 auto;
  }

  #grid > div {
    @apply flex justify-between pt-12 pb-12 md:pb-24 md:pt-24;
  }

  #logo {
    @apply w-28 lg:w-56;
  }

  nav {
    @apply flex items-center;
  }

  .btn {
    @apply hidden sm:block flex flex-row items-center text-white text-sm text-opacity-90 font-medium px-4 py-2 transition-all rounded-sm ml-4;
  }

  #intro {
    @apply flex flex-col w-full md:w-1/2;
  }

  #name {
    @apply text-white text-xl md:text-2xl font-medium mb-1;
  }

  #title {
    @apply text-white text-lg text-opacity-90 mb-6;
  }

  #body {
    @apply text-white text-sm text-opacity-80 leading-6;
  }
</style>
