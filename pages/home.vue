<template>
  <div>
    <StickyHead :scrollHeight="'window.innerHeight'"
                @show-chat="showChat = true" />
    <Chat v-show="showChat" />
    <div id="container"
         class="bg-ps-medBlue bg-ps-img h-screen">
      <div class="grid grid-cols-12">
        <div class="col-span-2"></div>
        <div class="col-span-8 flex justify-between pt-24 pb-36 fadeIn">
          <img src="logo.svg" />
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
        <div class="col-span-8 grid grid-cols-2 gap-x-12">
          <div>
            <p class="text-white text-2xl text-opacity-90 font-medium mb-1 fadeIn">
              Product Designer &amp; Full Stack Developer
            </p>
            <p class="text-white text-lg text-opacity-90 mb-6 fadeIn">
              Helping brands create beautiful, memorable and joyful experiences through web and mobile applications.
            </p>

            <div class="ps-divider bg-ps-blue mb-6 slideInLeft"></div>

            <p class="text-white text-sm text-opacity-80 leading-6 inter fadeIn">
              Donec id elit non mi porta gravida at eget metus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum. Aenean lacinia bibendum nulla sed consectetur. Donec ullamcorper nulla non metus auctor fringilla.
              <br /><br />
              Etiam porta sem malesuada magna mollis euismod. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>

            <!-- <button class="ps-btn flex flex-row items-center text-white text-md text-opacity-90 font-medium px-4 py-2 rounded-sm mt-12 slideUp"
                    @click="showChat = true">
              Let's chat
            </button> -->
          </div>
          <div></div>
        </div>
        <div class="col-span-2"></div>
      </div>
    </div>

    <div class="grid grid-cols-12 py-36 bg-white"
         id="blog-section">
      <div class="col-span-2"></div>
      <div class="col-span-8 grid grid-cols-2 gap-x-12">
        <div>
          <p class="text-gray-800 text-2xl font-medium mb-1">
            From the blog
          </p>
          <p class="text-gray-800 text-md mb-5">
            I think it's important for designers to be able to write well. Being able to clearly communicate your thought process is one of the best ways of connecting with your team and, ultimately, your users. Plus, I love sharing my thoughts with a wider community!
          </p>

          <div class="ps-divider bg-ps-blue mb-6"></div>
        </div>
        <div></div>
        <div>
          <div class="bg-gray-100 w-full h-56 mb-4"></div>
          <div class="flex justify-between">
            <p class="mono text-sm text-gray-600">September 21, 2021</p>
            <p class="mono text-sm text-gray-600">CSS, Design</p>
          </div>
          <a href="#"
             class="text-gray-800 hover:text-ps-blue text-lg cursor-pointer font-medium anim-a">
            Designing beautiful shadows in CSS
          </a>
          <p class="text-gray-800 text-sm leading-6 text-opacity-80 mt-4 inter">
            Cras justo odio, dapibus ac facilisis in, egestas eget quam. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Curabitur blandit tempus porttitor.
          </p>
        </div>
        <div>
          <div class="mb-8">
            <div class="flex justify-between">
              <p class="mono text-sm text-gray-600">September 21, 2021</p>
              <p class="mono text-sm text-gray-600">CSS, Design</p>
            </div>
            <a href="#"
               class="text-gray-800 hover:text-ps-blue text-lg cursor-pointer font-medium anim-a">
              Designing beautiful shadows in CSS
            </a>
          </div>
          <div class="mb-8">
            <div class="flex justify-between">
              <p class="mono text-sm text-gray-600">September 21, 2021</p>
              <p class="mono text-sm text-gray-600">CSS, Design</p>
            </div>
            <a href="#"
               class="text-gray-800 hover:text-ps-blue text-lg cursor-pointer font-medium anim-a">
              Designing beautiful shadows in CSS
            </a>
          </div>
          <div class="mb-8">
            <div class="flex justify-between">
              <p class="mono text-sm text-gray-600">September 21, 2021</p>
              <p class="mono text-sm text-gray-600">CSS, Design</p>
            </div>
            <a href="#"
               class="text-gray-800 hover:text-ps-blue text-lg cursor-pointer font-medium anim-a">
              Designing beautiful shadows in CSS
            </a>
          </div>
          <div class="mb-8">
            <div class="flex justify-between">
              <p class="mono text-sm text-gray-600">September 21, 2021</p>
              <p class="mono text-sm text-gray-600">CSS, Design</p>
            </div>
            <a href="#"
               class="text-gray-800 hover:text-ps-blue text-lg cursor-pointer font-medium anim-a">
              Designing beautiful shadows in CSS
            </a>
          </div>
          <div class="mb-8">
            <div class="flex justify-between">
              <p class="mono text-sm text-gray-600">September 21, 2021</p>
              <p class="mono text-sm text-gray-600">CSS, Design</p>
            </div>
            <a href="#"
               class="text-gray-800 hover:text-ps-blue text-lg cursor-pointer font-medium anim-a">
              Designing beautiful shadows in CSS
            </a>
          </div>
          <div class="">
            <div class="flex justify-between">
              <p class="mono text-sm text-gray-600">September 21, 2021</p>
              <p class="mono text-sm text-gray-600">CSS, Design</p>
            </div>
            <a href="#"
               class="text-gray-800 hover:text-ps-blue text-lg cursor-pointer font-medium anim-a">
              Designing beautiful shadows in CSS
            </a>
          </div>
        </div>
      </div>
      <div class="col-span-2"></div>
    </div>

    <div class="grid grid-cols-12 py-36 relative z-10 bg-white">
      <div class="ps-gradient-gray w-screen left-0 top-0 h-1/2 absolute z-0"></div>
      <div class="col-span-2"></div>
      <div class="col-span-8 grid grid-cols-2 gap-x-12 z-10">
        <div class="z-10">
          <p class="text-gray-800 text-2xl font-medium mb-1">
            How I can help you
          </p>
          <p class="text-gray-800 text-md mb-5">
            I think it's important for designers to be able to write well. Being able to clearly communicate your thought process is one of the best ways of connecting with your team and, ultimately, your users. Plus, I love sharing my thoughts with a wider community!
          </p>

          <div class="ps-divider bg-ps-blue mb-6"></div>
        </div>
        <div></div>
        <div>
          <div class="bg-gray-100 w-full h-56 mb-4"></div>
          <p class="text-gray-800 text-lg font-medium mb-2">
            Website &amp; Product Design
          </p>
          <p class="text-gray-800 text-sm leading-6 text-opacity-80 inter">
            Cras justo odio, dapibus ac facilisis in, egestas eget quam. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Curabitur blandit tempus porttitor.
          </p>
          <dl class="pt-8">
            <div class="flex flex-row items-start mb-4">
              <img class="h-5 mt-3px mr-3"
                   src="bullet.svg" />
              <div>
                <dt class="text-gray-800 text-md font-medium">
                  User Interface Design
                </dt>
                <dd class="text-gray-800 text-sm text-opacity-80 inter">
                  Cras mattis consectetur purus sit amet fermentum.
                </dd>
              </div>
            </div>
            <div class="flex flex-row items-start mb-4">
              <img class="h-5 mt-3px mr-3"
                   src="bullet.svg" />
              <div>
                <dt class="text-gray-800 text-md font-medium">
                  User Interface Design
                </dt>
                <dd class="text-gray-800 text-sm text-opacity-80 inter">
                  Cras mattis consectetur purus sit amet fermentum.
                </dd>
              </div>
            </div>
            <div class="flex flex-row items-start mb-4">
              <img class="h-5 mt-3px mr-3"
                   src="bullet.svg" />
              <div>
                <dt class="text-gray-800 text-md font-medium">
                  User Interface Design
                </dt>
                <dd class="text-gray-800 text-sm text-opacity-80 inter">
                  Cras mattis consectetur purus sit amet fermentum.
                </dd>
              </div>
            </div>
            <div class="flex flex-row items-start">
              <img class="h-5 mt-3px mr-3"
                   src="bullet.svg" />
              <div>
                <dt class="text-gray-800 text-md font-medium">
                  User Interface Design
                </dt>
                <dd class="text-gray-800 text-sm text-opacity-80 inter">
                  Cras mattis consectetur purus sit amet fermentum.
                </dd>
              </div>
            </div>
          </dl>
        </div>
        <div>
          <div class="bg-gray-100 w-full h-56 mb-4"></div>
          <p class="text-gray-800 text-lg font-medium mb-2">
            Full Stack Development
          </p>
          <p class="text-gray-800 text-sm leading-6 text-opacity-80 inter">
            Cras justo odio, dapibus ac facilisis in, egestas eget quam. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Curabitur blandit tempus porttitor.
          </p>
          <dl class="pt-8">
            <div class="flex flex-row items-start mb-4">
              <img class="h-5 mt-3px mr-3"
                   src="bullet.svg" />
              <div>
                <dt class="text-gray-800 text-md font-medium">
                  User Interface Design
                </dt>
                <dd class="text-gray-800 text-sm text-opacity-80 inter">
                  Cras mattis consectetur purus sit amet fermentum.
                </dd>
              </div>
            </div>
            <div class="flex flex-row items-start mb-4">
              <img class="h-5 mt-3px mr-3"
                   src="bullet.svg" />
              <div>
                <dt class="text-gray-800 text-md font-medium">
                  User Interface Design
                </dt>
                <dd class="text-gray-800 text-sm text-opacity-80 inter">
                  Cras mattis consectetur purus sit amet fermentum.
                </dd>
              </div>
            </div>
            <div class="flex flex-row items-start mb-4">
              <img class="h-5 mt-3px mr-3"
                   src="bullet.svg" />
              <div>
                <dt class="text-gray-800 text-md font-medium">
                  User Interface Design
                </dt>
                <dd class="text-gray-800 text-sm text-opacity-80 inter">
                  Cras mattis consectetur purus sit amet fermentum.
                </dd>
              </div>
            </div>
            <div class="flex flex-row items-start">
              <img class="h-5 mt-3px mr-3"
                   src="bullet.svg" />
              <div>
                <dt class="text-gray-800 text-md font-medium">
                  User Interface Design
                </dt>
                <dd class="text-gray-800 text-sm text-opacity-80 inter">
                  Cras mattis consectetur purus sit amet fermentum.
                </dd>
              </div>
            </div>
          </dl>
        </div>
      </div>
      <div class="col-span-2"></div>
    </div>

    <div class="bg-ps-medBlue bg-ps-img grid grid-cols-12 py-36">
      <div class="col-span-2"></div>
      <div class="col-span-8 grid grid-cols-2 gap-x-12">
        <div>
          <p class="text-white text-opacity-90 text-2xl font-medium mb-1">
            Tools &amp; tutorials
          </p>
          <p class="text-white text-lg text-opacity-90 mb-6">
            Sed posuere consectetur est at lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo.
          </p>

          <div class="ps-divider bg-ps-blue mb-6"></div>
        </div>
        <div></div>
      </div>
      <div class="col-span-2"></div>

      <div class="col-span-2"></div>
      <div class="col-span-8 grid grid-cols-3 gap-x-12 gap-y-12 mt-2">
        <div>
          <div class="bg-gray-50 w-full h-40 rounded-sm mb-4"></div>
          <div class="flex justify-between items-center mb-2">
            <p class="mono text-sm text-white text-opacity-70">September 21, 2021</p>
            <p class="text-sm text-white text-opacity-80 px-4 py-1 ps-btn rounded-full font-medium">Tutorials</p>
          </div>
          <a href="#"
             class="text-white hover:text-ps-blue text-opacity-90 text-lg cursor-pointer font-medium anim-a">
            Tailwind CSS v3 is now released
          </a>
        </div>
        <div>
          <div class="bg-gray-50 w-full h-40 rounded-sm mb-4"></div>
          <div class="flex justify-between items-center mb-2">
            <p class="mono text-sm text-white text-opacity-70">September 21, 2021</p>
            <p class="text-sm text-white text-opacity-80 px-4 py-1 ps-btn rounded-full font-medium">Tools</p>
          </div>
          <a href="#"
             class="text-white hover:text-ps-blue text-opacity-90 text-lg cursor-pointer font-medium anim-a">
            Using the AWS PHP SDK
          </a>
        </div>
        <div>
          <div class="bg-gray-50 w-full h-40 rounded-sm mb-4"></div>
          <div class="flex justify-between items-center mb-2">
            <p class="mono text-sm text-white text-opacity-70">September 21, 2021</p>
            <p class="text-sm text-white text-opacity-80 px-4 py-1 ps-btn rounded-full font-medium">Snippets</p>
          </div>
          <a href="#"
             class="text-white hover:text-ps-blue text-opacity-90 text-lg cursor-pointer font-medium anim-a">
            How to test Laravel applications
          </a>
        </div>
        <div>
          <div class="bg-gray-50 w-full h-40 rounded-sm mb-4"></div>
          <div class="flex justify-between items-center mb-2">
            <p class="mono text-sm text-white text-opacity-70">September 21, 2021</p>
            <p class="text-sm text-white text-opacity-80 px-4 py-1 ps-btn rounded-full font-medium">Snippets</p>
          </div>
          <a href="#"
             class="text-white hover:text-ps-blue text-opacity-90 text-lg cursor-pointer font-medium anim-a">
            How to test Laravel applications
          </a>
        </div>
        <div>
          <div class="bg-gray-50 w-full h-40 rounded-sm mb-4"></div>
          <div class="flex justify-between items-center mb-2">
            <p class="mono text-sm text-white text-opacity-70">September 21, 2021</p>
            <p class="text-sm text-white text-opacity-80 px-4 py-1 ps-btn rounded-full font-medium">Snippets</p>
          </div>
          <a href="#"
             class="text-white hover:text-ps-blue text-opacity-90 text-lg cursor-pointer font-medium anim-a">
            How to test Laravel applications
          </a>
        </div>
        <div>
          <div class="bg-gray-50 w-full h-40 rounded-sm mb-4"></div>
          <div class="flex justify-between items-center mb-2">
            <p class="mono text-sm text-white text-opacity-70">September 21, 2021</p>
            <p class="text-sm text-white text-opacity-80 px-4 py-1 ps-btn rounded-full font-medium">Snippets</p>
          </div>
          <a href="#"
             class="text-white hover:text-ps-blue text-opacity-90 text-lg cursor-pointer font-medium anim-a">
            How to test Laravel applications
          </a>
        </div>
      </div>
      <div class="col-span-2"></div>
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
      showChat: false,
    }
  },
  mounted() {},
  methods: {},
}
</script>

<style>

</style>
