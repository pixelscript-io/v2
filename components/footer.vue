<template>
  <footer class="grid grid-cols-12 pb-8 w-full border-t-2 border-ps-blue bg-ps-darkBlue"
          id="footer">
    <div class="col-span-1 md:col-span-2"></div>
    <div class="col-span-10 md:col-span-8 flex flex-col">
      <div class="flex justify-between flex-row items-center py-8">
        <!-- <NuxtLink to="/contact"
                  class="ps-btn flex flex-row items-center text-white text-sm text-opacity-90 font-medium px-4 py-2 transition-all rounded-sm">
          Let's chat
        </NuxtLink> -->
        <img class="h-8"
             src="logo.svg" />
      </div>
      <div class="w-full bg-white bg-opacity-5 h-1px mb-4"></div>
      <div class="flex justify-between w-full">
        <p class="text-gray-500 text-xs inter mb-1">
          Copyright &copy; 2023 pixelscript.io
        </p>
        <p class="text-gray-500 text-xs inter">
          Built with Nuxt, love and a little magic
        </p>
      </div>
    </div>
    <div class="col-span-1 md:col-span-2"></div>
  </footer>
</template>

<script>
export default {}
</script>

<style>

</style>