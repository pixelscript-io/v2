<template>
  <div>
    <StickyHead :scrollHeight="'header'" />
    <div id="header"
         class="grid grid-cols-12 bg-ps-medBlue bg-ps-img">
      <div class="col-span-1 md:col-span-2"></div>
      <div class="col-span-10 md:col-span-8 py-6 pb-12 flex justify-between items-center">
        <img src="logo.svg"
             class="h-6 fadeIn" />
        <!-- <div class="flex items-center fadeIn">
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
                    class="hidden sm:block ps-btn flex flex-row items-center text-white text-sm text-opacity-90 font-medium px-4 py-2 transition-all rounded-sm ml-4">
            Let's chat
          </NuxtLink>
        </div> -->
      </div>
      <div class="col-span-1 md:col-span-2"></div>
      <div class="col-span-1 md:col-span-2"></div>
      <div class="col-span-10 md:col-span-8 py-8">
        <p class="text-white text-3xl font-medium mb-4 fadeIn">
          Projects
        </p>
        <div class="ps-divider bg-ps-blue mb-4 slideInLeft"></div>
        <p class="mono text-white text-opacity-80 text-sm fadeIn">
          Dispensary Portal
        </p>
      </div>
      <div class="col-span-1 md:col-span-2"></div>
    </div>

    <div class="grid grid-cols-12 w-full py-4 bg-white border-b border-gray-200">
      <div class="col-span-1 md:col-span-2"></div>
      <p class="mono text-sm text-gray-800 col-span-8">
        Frontend, Backend
      </p>
      <div class="col-span-1 md:col-span-2"></div>
    </div>

    <div class="grid grid-cols-12 w-screen bg-gray-50">
      <div class="col-span-1 md:col-span-2"></div>
      <div class="col-span-10 md:col-span-8 lg:col-span-6 py-8 pr-0 md:pr-12"
           id="article">
        <p class="text-gray-800 text-2xl font-medium pb-4">
          Dispensary Portal
        </p>
        <p class="inter text-gray-800 text-md leading-6 pb-4">
          The Dispensary Portal is a web application used by dispensaries to measure how their products affect a variety of symptoms in users such as anxiety, depression, and stress. The application is utilized by users to track their symptoms and provide feedback to the dispensary, as well as a resource to find products that are best associated with improving a user's symptoms.
        </p>
        <p class="inter text-gray-800 text-md leading-6 pb-4">
          Features of this project are:
        </p>
        <ul class="pt-8 pb-12">
          <li class="flex flex-row items-start mb-4">
            <img class="h-5 mt-3px mr-3"
                 src="bullet.svg" />
            <span class="text-gray-800 text-md font-medium">
              Each account has a full organization structure that can contain multiple users with a full role/permission system.
            </span>
          </li>
          <li class="flex flex-row items-start mb-4">
            <img class="h-5 mt-3px mr-3"
                 src="bullet.svg" />
            <span class="text-gray-800 text-md font-medium">
              Products and symptoms are tracked and analyzed, then visualized in graphs and charts to display how symptoms are affected by products over time.
            </span>
          </li>
          <li class="flex flex-row items-start mb-4">
            <img class="h-5 mt-3px mr-3"
                 src="bullet.svg" />
            <span class="text-gray-800 text-md font-medium">
              Users can video chat with the dispensary to discuss issues and provide feedback.
            </span>
          </li>
        </ul>

        <p class="text-gray-800 text-xl font-medium pb-4 mt-4">
          Technologies Used
        </p>
        <ul class="pt-8 pb-12">
          <li class="flex flex-row items-start mb-4">
            <img class="h-5 mt-3px mr-3"
                 src="bullet.svg" />
            <span class="text-gray-800 text-md font-medium">
              Frontend: Vue/Nuxt
            </span>
          </li>
          <li class="flex flex-row items-start mb-4">
            <img class="h-5 mt-3px mr-3"
                 src="bullet.svg" />
            <span class="text-gray-800 text-md font-medium">
              Communication: WebRTC
            </span>
          </li>
          <li class="flex flex-row items-start mb-4">
            <img class="h-5 mt-3px mr-3"
                 src="bullet.svg" />
            <span class="text-gray-800 text-md font-medium">
              Backend: Node/Express
            </span>
          </li>
          <li class="flex flex-row items-start mb-4">
            <img class="h-5 mt-3px mr-3"
                 src="bullet.svg" />
            <span class="text-gray-800 text-md font-medium">
              Database: PostgreSQL
            </span>
          </li>
          <li class="flex flex-row items-start mb-4">
            <img class="h-5 mt-3px mr-3"
                 src="bullet.svg" />
            <span class="text-gray-800 text-md font-medium">
              Design: Figma & Tailwind CSS
            </span>
          </li>
        </ul>

        <p class="text-gray-800 text-xl font-medium pb-4 mt-4">
          Designs
        </p>
        <div class="mb-4">
          <img src="disp-1.png" />
        </div>
        <div class="mb-4">
          <img src="disp-2.png" />
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
export default {
  name: 'Article',
  transition: 'fade',
  data() {
    return {
      showChat: false,
    }
  },
  mounted() {},
  methods: {},
}
</script>

<style>

</style>
