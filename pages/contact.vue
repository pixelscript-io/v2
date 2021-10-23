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
          Let's Chat
        </p>
        <div class="ps-divider bg-ps-blue mb-4 slideInLeft"></div>
        <p class="mono text-white text-opacity-80 text-sm fadeIn">
          Ridiculus Nullam Tellus Vestibulum
        </p>
      </div>
      <div class="col-span-2"></div>
    </div>

    <div class="grid grid-cols-12 w-screen bg-gray-50 h-screen">
      <div class="col-span-2"></div>
      <div class="col-span-6 py-8 pr-12"
           id="article">
        <p class="inter text-gray-800 text-md leading-6 pb-4">
          Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Etiam porta sem malesuada magna mollis euismod.
        </p>
        <p class="inter text-gray-800 text-md leading-6 pb-4">
          Or email me directly at
          <a href="#"
             class="">
            joe@pixelscript.io
          </a>.
        </p>
        <div class="grid grid-cols-2 gap-x-12 gap-y-6 mt-6">
          <div class="col-span-1">
            <label class="inter text-sm text-gray-500">First name</label>
            <input type="text"
                   class="rounded-sm bg-white border border-gray-300 px-4 py-2 inter font-medium text-md text-gray-700 w-full focus:outline-none focus:border-ps-blue focus:bg-white mt-2" />
          </div>
          <div class="col-span-1">
            <label class="inter text-sm text-gray-500">Last name</label>
            <input type="text"
                   class="rounded-sm bg-white border border-gray-300 px-4 py-2 inter font-medium text-md text-gray-700 w-full focus:outline-none focus:border-ps-blue focus:bg-white mt-2" />
          </div>
          <div class="col-span-1">
            <label class="inter text-sm text-gray-500">Email address</label>
            <input type="email"
                   class="rounded-sm bg-white border border-gray-300 px-4 py-2 inter font-medium text-md text-gray-700 w-full focus:outline-none focus:border-ps-blue focus:bg-white mt-2" />
          </div>
          <div class="col-span-1">
            <label class="inter text-sm text-gray-500">Company</label>
            <input type="email"
                   class="rounded-sm bg-white border border-gray-300 px-4 py-2 inter font-medium text-md text-gray-700 w-full focus:outline-none focus:border-ps-blue focus:bg-white mt-2" />
          </div>
          <div class="col-span-1">
            <label class="inter text-sm text-gray-500">Email address</label>
            <select class="rounded-sm bg-white border border-gray-300 px-4 py-2 inter font-medium text-md text-gray-700 w-full focus:outline-none focus:border-ps-blue focus:bg-white mt-2">
              <option>General Inquiry</option>
            </select>
          </div>
          <div class="col-span-2">
            <label class="inter text-sm text-gray-500">Message</label>
            <textarea rows="10"
                      class="rounded-sm bg-white border border-gray-300 px-4 py-2 inter font-medium text-md text-gray-700 w-full focus:outline-none focus:border-ps-blue focus:bg-white mt-2">
            </textarea>
          </div>
        </div>
      </div>
      <div class="bg-gray-50 col-span-2 py-8 pl-12">
        <!-- <div class="mb-8 flex flex-col"
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
        </div> -->
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
