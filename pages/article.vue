<template>
  <div>
    <StickyHead :scrollHeight="'header'" />
    <Chat v-show="showChat" />
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
          <NuxtLink to="/article"
                    class="inter text-white text-opacity-90 text-sm font-medium mr-8 anim-a">
            Writing
          </NuxtLink>
          <a href="#"
             class="inter text-white text-opacity-90 text-sm font-medium mr-8 anim-a">
            Design
          </a>
          <a href="#"
             class="inter text-white text-opacity-90 text-sm font-medium mr-8 anim-a">
            Tools
          </a>
          <NuxtLink to="/contact"
                    class="ps-btn flex flex-row items-center text-white text-sm text-opacity-90 font-medium px-4 py-2 transition-all rounded-sm ml-4">
            Let's chat
          </NuxtLink>
        </div>
      </div>
      <div class="col-span-2"></div>
      <div class="col-span-2"></div>
      <div class="col-span-8 py-8">
        <p class="text-white text-opacity-90 text-3xl font-medium mb-4 fadeIn">
          Designing beautiful shadows in CSS
        </p>
        <div class="ps-divider bg-ps-blue mb-4 slideInLeft"></div>
        <p class="mono text-white text-opacity-80 text-sm fadeIn">
          September 21, 2021
        </p>
      </div>
      <div class="col-span-2"></div>
    </div>

    <div class="grid grid-cols-12 w-full py-4 bg-white border-b border-gray-200">
      <div class="col-span-2"></div>
      <p class="mono text-sm text-gray-800 col-span-8">
        <a href="#"
           class="mono text-gray-900 anim-a">Articles</a> <span class="opacity-50">/</span> Laravel 9 Release Date Changes
      </p>
      <div class="col-span-2"></div>
    </div>

    <div class="grid grid-cols-12 w-screen bg-gray-50">
      <div class="col-span-2"></div>
      <div class="col-span-6 py-8 pr-12"
           id="article">
        <p class="text-gray-800 text-2xl font-medium pb-4">
          Make a Single Page Application (SPA) with Vue.js and Sanity
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
        <p class="inter text-gray-800 text-md leading-6 pb-4">
          The source code for this project is located in <a href="#">this GitHub repository</a>.
        </p>
        <p class="inter text-gray-800 text-md leading-6 pb-4">
          A demo version of this SPA is located <a href="#">here</a>.
        </p>
        <p class="inter text-gray-800 text-md leading-6 pb-4">
          This project was created using the Vue.js 3 and Tailwind CSS Starter kit, located here.
        </p>

        <p class="text-gray-800 text-xl font-medium pb-4 mt-4">
          What are single-page applications?
        </p>
        <p class="inter text-gray-800 text-md leading-6 pb-4">
          In the history of web development, traditionally, web applications were composed of more than one page, each having links between them. An HTTP request to a web server would be made at each page load, code would be executed on a server, and then an entire page would be rendered. Each page would have server-side back-end code running, performing actions such as a database query or a call to remote API.
        </p>
      </div>
      <div class="bg-gray-50 col-span-2 py-8 pl-12">
        <div class="mb-8 flex flex-col"
             id="toc">
          <span class="inter text-sm font-medium text-gray-800 py-1 fit cursor-pointer hover:text-ps-blue anim-a">
            Why use TailwindCSS?
          </span>
          <span class="inter text-sm font-medium text-gray-500 py-1 cursor-pointer hover:text-ps-blue anim-a">
            What are utility classes?
          </span>
          <span class="inter text-sm font-medium text-gray-500 py-1 cursor-pointer hover:text-ps-blue anim-a">
            Finished project link
          </span>
          <span class="inter text-sm font-medium text-gray-500 py-1 cursor-pointer hover:text-ps-blue anim-a">
            Add the dependencies
          </span>
          <span class="inter text-sm font-medium text-gray-500 py-1 cursor-pointer hover:text-ps-blue anim-a">
            Create Tailwind configuration files
          </span>
        </div>

        <div class="flex space-x-2">
          <span class="px-2 py-1 bg-gray-600 rounded-sm mono font-medium text-white text-xs uppercase tracking-wider overflow-hidden cursor-pointer ps-tag">
            Vue
          </span>
          <span class="px-2 py-1 bg-gray-600 rounded-sm mono font-medium text-white text-xs uppercase tracking-wider overflow-hidden cursor-pointer ps-tag">
            Javascript
          </span>
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
  methods: {
    handleScroll() {
      const header = document.getElementById('scrollHeader')
      const innerHeight = window.innerHeight
      const scrollY = window.scrollY

      console.log(document.body.scrollHeight)

      if (scrollY < innerHeight) {
        header.setAttribute('style', 'opacity: 0;')
      } else if (scrollY >= innerHeight) {
        header.setAttribute('style', 'opacity: 1;')
      }

      const el = document.getElementById('footer')
      const rect = el.getBoundingClientRect()

      if (
        rect.bottom < 0 ||
        rect.right < 0 ||
        rect.left > window.innerWidth ||
        rect.top > window.innerHeight
      ) {
        //
      } else {
        header.setAttribute('style', 'opacity: 0;')
      }
    },
  },
}
</script>

<style>
	#toc > span {
    width: fit-content;
  }
</style>
