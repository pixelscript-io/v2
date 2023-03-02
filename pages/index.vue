<template>
  <div>
    <StickyHead :scrollHeight="'window.innerHeight'"
                @show-chat="showChat = true" />
    <div id="container"
         class="bg-ps-medBlue bg-ps-img h-screen">
      <div class="iso-bg"></div>
      <div class="grid grid-cols-12">
        <div class="col-span-1 md:col-span-2"></div>
        <div class="col-span-10 md:col-span-8 flex justify-between pt-24 pb-24 md:pb-36 fadeIn">
          <img class="w-28 lg:w-56"
               src="logo.svg" />
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
        <div class="col-span-1 md:col-span-2"></div>

        <div class="col-span-1 md:col-span-2"></div>
        <div class="col-span-10 md:col-span-8 grid grid-cols-2 gap-x-12">
          <div class="col-span-2 lg:col-span-1">
            <p class="text-white text-xl md:text-2xl font-medium mb-1 fadeIn">
              Product Designer &amp; Full Stack Developer
            </p>
            <p class="text-white text-lg text-opacity-90 mb-6 fadeIn">
              Helping brands create beautiful, memorable and joyful experiences through web and mobile applications.
            </p>

            <div class="ps-divider bg-ps-blue mb-6 slideInLeft"></div>

            <p class="text-white text-sm text-opacity-80 leading-6 inter fadeIn">
              Hello, I'm Joe. I've been passionate about forging elegant and user-friendly interfaces for the previous 15+ years, ranging from small local companies to large enterprise-level corporations.
              <br /><br />
              Aside from designing, I'm also an experienced application & web developer specializing in Vue and NodeJS. I make sure that a single primary focus lies behind every business and design decision made: delivering stellar customer experiences.
            </p>
          </div>
          <div class="col-span-0 lg:col-span-1"></div>
        </div>
        <div class="col-span-2"></div>
      </div>
    </div>

    <div class="grid grid-cols-12 py-24 md:py-36 relative z-10 bg-white">
      <div class="col-span-1 md:col-span-2"></div>
      <div class="col-span-10 md:col-span-8 grid grid-cols-2 gap-x-12 z-10">
        <div class="z-10 col-span-2 lg:col-span-1">
          <p class="text-gray-800 text-xl md:text-2xl font-medium mb-1">
            Working with me
          </p>
          <p class="text-gray-800 text-base mb-5">
            If you've worked with agencies before, you can throw away all your expectations. Working with me is nothing like that. I am the only contact point you'll ever have. I'll never charge you for a receptionist. I am a one-man company and I have no intention of ever changing that.
          </p>

          <div class="ps-divider bg-ps-blue mb-6"></div>
        </div>
        <div></div>
        <div class="col-span-2 md:col-span-1 mb-8 lg:mb-0">
          <div class="bg-gray-100 w-full h-56 mb-4 ps-service-bg-left"></div>
          <p class="text-gray-800 text-lg font-medium mb-2">
            Website &amp; Product Design
          </p>
          <p class="text-gray-800 text-sm leading-6 text-opacity-80 inter">
            With over a decade of design experience, I can help you create a beautiful, functional website that is easy to use and easy to maintain. Ranging from simple landing pages to complex web applications, no task is too big or too small.
          </p>
          <dl class="pt-8">
            <div class="flex flex-row items-start mb-4">
              <img class="h-5 mt-3px mr-3"
                   src="bullet.svg" />
              <div>
                <dt class="text-gray-800 text-md font-medium">
                  Product Design
                </dt>
                <dd class="text-gray-800 text-sm text-opacity-80 inter">
                  Designing full web applications from scratch is a challenge. I have a lot of experience in products of all sizes from the ground up.
                </dd>
              </div>
            </div>
            <div class="flex flex-row items-start mb-4">
              <img class="h-5 mt-3px mr-3"
                   src="bullet.svg" />
              <div>
                <dt class="text-gray-800 text-md font-medium">
                  Website Design
                </dt>
                <dd class="text-gray-800 text-sm text-opacity-80 inter">
                  Websites are a great way to communicate with your users. I can help you create a beautiful, functional website that is easy to use and easy to maintain.
                </dd>
              </div>
            </div>
            <div class="flex flex-row items-start mb-4">
              <img class="h-5 mt-3px mr-3"
                   src="bullet.svg" />
              <div>
                <dt class="text-gray-800 text-md font-medium">
                  User Experience Research
                </dt>
                <dd class="text-gray-800 text-sm text-opacity-80 inter">
                  UX Research is a critical part of the design process. I can help you understand your users and what they want to do.
                </dd>
              </div>
            </div>
            <div class="flex flex-row items-start">
              <img class="h-5 mt-3px mr-3"
                   src="bullet.svg" />
              <div>
                <dt class="text-gray-800 text-md font-medium">
                  Design Systems
                </dt>
                <dd class="text-gray-800 text-sm text-opacity-80 inter">
                  Your design system is the foundation of your product. I can help you create a system that is easy to use and easy to maintain.
                </dd>
              </div>
            </div>
          </dl>
        </div>
        <div class="col-span-2 lg:col-span-1">
          <div class="bg-gray-100 w-full h-56 mb-4 ps-service-bg-right"></div>
          <p class="text-gray-800 text-lg font-medium mb-2">
            Full Stack Development
          </p>
          <p class="text-gray-800 text-sm leading-6 text-opacity-80 inter">
            I offer a full stack development service including the design and development of frontend systems, backend systems and APIs. Together, we can create a robust, scalable and maintainable product. I specialize in Vue and Nuxt for frontend development and NodeJS and Express for backend development.
          </p>
          <dl class="pt-8">
            <div class="flex flex-row items-start mb-4">
              <img class="h-5 mt-3px mr-3"
                   src="bullet.svg" />
              <div>
                <dt class="text-gray-800 text-md font-medium">
                  Frontend Applications
                </dt>
                <dd class="text-gray-800 text-sm text-opacity-80 inter">
                  I specialize in frontend development with the Vue framework. With a clean codebase and a well-organized architecture, your application will be easy to maintain.
                </dd>
              </div>
            </div>
            <div class="flex flex-row items-start mb-4">
              <img class="h-5 mt-3px mr-3"
                   src="bullet.svg" />
              <div>
                <dt class="text-gray-800 text-md font-medium">
                  API Design/Development
                </dt>
                <dd class="text-gray-800 text-sm text-opacity-80 inter">
                  Using NodeJS and Express, I can help you create a robust API to handle your requests and responses, and make your application more scalable.
                </dd>
              </div>
            </div>
            <div class="flex flex-row items-start mb-4">
              <img class="h-5 mt-3px mr-3"
                   src="bullet.svg" />
              <div>
                <dt class="text-gray-800 text-md font-medium">
                  Backend Infrastructure
                </dt>
                <dd class="text-gray-800 text-sm text-opacity-80 inter">
                  The backend of your product is the core of your application. Using NodeJS, I can help you create a robust backend that communicates swiftly and efficiently with your database and frontend application.
                </dd>
              </div>
            </div>
          </dl>
        </div>
      </div>
      <div class="col-span-1 md:col-span-2"></div>
    </div>

    <div class="bg-ps-medBlue bg-ps-img grid grid-cols-12 py-24 md:py-36">
      <div class="col-span-1 md:col-span-2"></div>
      <div class="col-span-10 md:col-span-8 grid grid-cols-2 gap-x-12">
        <div class="col-span-2 md:col-span-1">
          <p class="text-white text-xl md:text-2xl font-medium mb-1">
            Featured Projects
          </p>
          <p class="text-white text-base text-opacity-90 mb-6">
            Being a designer and developer, I've worked on a multitude of different types of projects and I'm proud of the work I've done. Here are some of my favorite recent projects.
          </p>

          <div class="ps-divider bg-ps-blue mb-6"></div>
        </div>
        <div></div>
      </div>
      <div class="col-span-1 md:col-span-2"></div>

      <div class="col-span-1 md:col-span-2"></div>
      <div class="col-span-10 md:col-span-8 grid grid-cols-3 gap-x-12 gap-y-12 mt-2">
        <div class="col-span-3 lg:col-span-1">
          <div class="bg-proj w-full h-56 rounded-sm mb-4 flex items-center justify-center cursor-pointer"
               @click="goTo('project-1')"
               v-show="hoverOne"
               @mouseover="hoverOne = true"
               @mouseleave="hoverOne = false">
            <svg xmlns="http://www.w3.org/2000/svg"
                 class="h-12 w-12"
                 fill="none"
                 viewBox="0 0 24 24"
                 stroke="white"
                 stroke-width="2">
              <path stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <div class="bg-gray-50 bg-proj-1 w-full h-56 rounded-sm mb-4"
               v-show="!hoverOne"
               @mouseover="hoverOne = true"
               @mouseleave="hoverOne = false">
          </div>
          <p class="text-white text-lg font-medium">
            Lead Management App
          </p>
          <p class="mono text-sm text-white text-opacity-70">Design, Frontend, Backend</p>
          <div class="ps-divider bg-ps-blue my-3"></div>
          <p class="text-white text-sm leading-6 text-opacity-80 inter mb-4">
            A web application that allows users to manage lead data that comes in from a variety of sources.
          </p>
        </div>
        <div class="col-span-3 lg:col-span-1">
          <div class="bg-proj w-full h-56 rounded-sm mb-4 flex items-center justify-center cursor-pointer"
               @click="goTo('project-2')"
               v-show="hoverTwo"
               @mouseover="hoverTwo = true"
               @mouseleave="hoverTwo = false">
            <svg xmlns="http://www.w3.org/2000/svg"
                 class="h-12 w-12"
                 fill="none"
                 viewBox="0 0 24 24"
                 stroke="white"
                 stroke-width="2">
              <path stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <div class="bg-gray-50 bg-proj-2 w-full h-56 rounded-sm mb-4"
               v-show="!hoverTwo"
               @mouseover="hoverTwo = true"
               @mouseleave="hoverTwo = false"></div>
          <p class="text-white text-lg font-medium">
            Dispensary Portal
          </p>
          <p class="mono text-sm text-white text-opacity-70">Frontend, Backend</p>
          <div class="ps-divider bg-ps-blue my-3"></div>
          <p class="text-white text-sm leading-6 text-opacity-80 inter">
            A web application used by dispensaries to measure how their products affect a variety of symptoms.
          </p>
        </div>
        <div class="col-span-3 lg:col-span-1">
          <div class="bg-proj w-full h-56 rounded-sm mb-4 flex items-center justify-center cursor-pointer"
               @click="goTo('project-3')"
               v-show="hoverThree"
               @mouseover="hoverThree = true"
               @mouseleave="hoverThree = false">
            <svg xmlns="http://www.w3.org/2000/svg"
                 class="h-12 w-12"
                 fill="none"
                 viewBox="0 0 24 24"
                 stroke="white"
                 stroke-width="2">
              <path stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <div class="bg-gray-50 bg-proj-3 w-full h-56 rounded-sm mb-4"
               v-show="!hoverThree"
               @mouseover="hoverThree = true"
               @mouseleave="hoverThree = false"></div>
          <p class="text-white text-lg font-medium">
            ESports Platform
          </p>
          <p class="mono text-sm text-white text-opacity-70">Design</p>
          <div class="ps-divider bg-ps-blue my-3"></div>
          <p class="text-white text-sm leading-6 text-opacity-80 inter">
            A web application for gamers and companies that want to host events and tournaments.
          </p>
        </div>
        <div class="col-span-3 lg:col-span-1">
          <div class="bg-proj w-full h-56 rounded-sm mb-4 flex items-center justify-center cursor-pointer"
               @click="goTo('project-4')"
               v-show="hoverFour"
               @mouseover="hoverFour = true"
               @mouseleave="hoverFour = false">
            <svg xmlns="http://www.w3.org/2000/svg"
                 class="h-12 w-12"
                 fill="none"
                 viewBox="0 0 24 24"
                 stroke="white"
                 stroke-width="2">
              <path stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <div class="bg-gray-50 bg-proj-4 w-full h-56 rounded-sm mb-4"
               v-show="!hoverFour"
               @mouseover="hoverFour = true"
               @mouseleave="hoverFour = false"></div>
          <p class="text-white text-lg font-medium">
            Cryptocurrency Platform
          </p>
          <p class="mono text-sm text-white text-opacity-70">Design, Frontend</p>
          <div class="ps-divider bg-ps-blue my-3"></div>
          <p class="text-white text-sm leading-6 text-opacity-80 inter">
            A cryptocurrency derivative trading platform focused on OTC swaps.
          </p>
        </div>
      </div>
      <div class="col-span-1 md:col-span-2"></div>
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
</style>
