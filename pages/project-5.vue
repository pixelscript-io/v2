<template>
  <div>
    <StickyHead :scrollHeight="'header'" />
    <div id="header"
         class="grid grid-cols-12 bg-ps-medBlue bg-ps-img">
      <div class="col-span-2"></div>
      <div class="col-span-8 py-6 pb-12 flex justify-between items-center">
        <img src="logo.svg"
             class="h-6 fadeIn" />
        <div class="flex items-center fadeIn">
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
        </div>
      </div>
      <div class="col-span-2"></div>
      <div class="col-span-2"></div>
      <div class="col-span-8 py-8">
        <p class="text-white text-3xl font-medium mb-4 fadeIn">
          Projects
        </p>
        <div class="ps-divider bg-ps-blue mb-4 slideInLeft"></div>
        <p class="mono text-white text-opacity-80 text-sm fadeIn">
          Landscaping Directory App
        </p>
      </div>
      <div class="col-span-2"></div>
    </div>

    <div class="grid grid-cols-12 w-full py-4 bg-white border-b border-gray-200">
      <div class="col-span-2"></div>
      <p class="mono text-sm text-gray-800 col-span-8">
        Design
      </p>
      <div class="col-span-2"></div>
    </div>

    <div class="grid grid-cols-12 w-screen bg-gray-50">
      <div class="col-span-2"></div>
      <div class="col-span-8 lg:col-span-6 py-8 pr-12"
           id="article">
        <p class="text-gray-800 text-2xl font-medium pb-4">
          Landscaping Directory App
        </p>
        <p class="inter text-gray-800 text-md leading-6 pb-4">
          Learn what a single-page application (SPA) is, why VueJS is one of the leading JavaScript frameworks for creating a SPA, and how to connect to Sanity using its JavaScript client to create a web application with low maintenance.
        </p>
        <p class="inter text-gray-800 text-md leading-6 pb-4">
          We will build a small SPA to display albums and rate and comment on them.
        </p>
        <p class="inter text-gray-800 text-md leading-6 pb-4">
          This tutorial will demonstrate how we can build a single-page application using <a href="#">Vue.js</a> for the functionality of JavaScript-based frontend and the Sanity content platform as the backend to hold the application's information. We will create a small, demonstrational SPA that displays audio recordings, their artists, and the year of its release, and then provides a way for users to give a rating to the album and optionally, leaving a comment.
        </p>
        <p class="inter text-gray-800 text-md leading-6 pb-4">
          Prerequisites for this project are:
        </p>
        <ul class="pt-8 pb-12">
          <li class="flex flex-row items-start mb-4">
            <img class="h-5 mt-3px mr-3"
                 src="bullet.svg" />
            <span class="text-gray-800 text-md font-medium">
              A free <a href="#">Sanity.io</a> account.
            </span>
          </li>
          <li class="flex flex-row items-start mb-4">
            <img class="h-5 mt-3px mr-3"
                 src="bullet.svg" />
            <span class="text-gray-800 text-md font-medium">
              A free <a href="#">Netlify</a> account.
            </span>
          </li>
          <li class="flex flex-row items-start mb-4">
            <img class="h-5 mt-3px mr-3"
                 src="bullet.svg" />
            <span class="text-gray-800 text-md font-medium">
              A <a href="#">GitHub</a> account.
            </span>
          </li>
          <li class="flex flex-row items-start mb-4">
            <img class="h-5 mt-3px mr-3"
                 src="bullet.svg" />
            <span class="text-gray-800 text-md font-medium">
              A text editor, preferably a source code editor
            </span>
          </li>
          <li class="flex flex-row items-start mb-4">
            <img class="h-5 mt-3px mr-3"
                 src="bullet.svg" />
            <span class="text-gray-800 text-md font-medium">
              A shell environment (like Terminal or PowerShell)
            </span>
          </li>
          <li class="flex flex-row items-start mb-4">
            <img class="h-5 mt-3px mr-3"
                 src="bullet.svg" />
            <span class="text-gray-800 text-md font-medium">
              Git client
            </span>
          </li>
          <li class="flex flex-row items-start">
            <img class="h-5 mt-3px mr-3"
                 src="bullet.svg" />
            <span class="text-gray-800 text-md font-medium">
              npm, the node package manager (to install dependencies)
            </span>
          </li>
        </ul>

        <p class="text-gray-800 text-xl font-medium pb-4 mt-4">
          Designs
        </p>
        <div class="mb-4">
          <img src="landscape-1.png" />
        </div>
      </div>
      <div class="bg-gray-50 col-span-2"></div>
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
