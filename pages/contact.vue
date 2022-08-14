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
          Let's Chat
        </p>
        <div class="ps-divider bg-ps-blue mb-4 slideInLeft"></div>
        <p class="mono text-white text-opacity-80 text-sm fadeIn">
          Got a project in mind or just want to talk?
        </p>
      </div>
      <div class="col-span-2"></div>
    </div>

    <div class="grid grid-cols-12 w-screen bg-gray-50 h-screen">
      <div class="col-span-2"></div>
      <div class="col-span-8 lg:col-span-6 py-8 pr-12"
           id="article">
        <p class="bg-blue-50 w-full px-4 py-2 rounded-sm text-blue-600 text-sm font-medium border border-blue-600 mb-4"
           v-if="sent">Your email has been sent!</p>
        <p class="inter text-gray-800 text-md leading-6 pb-4">
          Complete the form below to send me an email and I'll get back to you as soon as possible!
        </p>
        <p class="inter text-gray-800 text-md leading-6 pb-4">
          Or email me directly at
          <a href="#"
             class="">
            joe@pixelscript.io
          </a>.
        </p>
        <form ref="form"
              @submit.prevent="sendEmail"
              class="grid grid-cols-2 gap-x-12 gap-y-6 mt-6">
          <div class="col-span-2 lg:col-span-1">
            <label class="inter text-sm text-gray-500">First name</label>
            <input type="text"
                   name="user_name"
                   v-model="first_name"
                   class="rounded-sm bg-white border border-gray-300 px-4 py-2 inter font-medium text-md text-gray-700 w-full focus:outline-none focus:border-ps-blue focus:bg-white mt-2" />
          </div>
          <div class="col-span-2 lg:col-span-1">
            <label class="inter text-sm text-gray-500">Last name</label>
            <input type="text"
                   name="user_last_name"
                   v-model="last_name"
                   class="rounded-sm bg-white border border-gray-300 px-4 py-2 inter font-medium text-md text-gray-700 w-full focus:outline-none focus:border-ps-blue focus:bg-white mt-2" />
          </div>
          <div class="col-span-2 lg:col-span-1">
            <label class="inter text-sm text-gray-500">Email address</label>
            <input type="email"
                   name="user_email"
                   v-model="email_address"
                   class="rounded-sm bg-white border border-gray-300 px-4 py-2 inter font-medium text-md text-gray-700 w-full focus:outline-none focus:border-ps-blue focus:bg-white mt-2" />
          </div>
          <div class="col-span-2 lg:col-span-1">
            <label class="inter text-sm text-gray-500">Company</label>
            <input type="text"
                   name="user_company"
                   v-model="company"
                   class="rounded-sm bg-white border border-gray-300 px-4 py-2 inter font-medium text-md text-gray-700 w-full focus:outline-none focus:border-ps-blue focus:bg-white mt-2" />
          </div>
          <div class="col-span-2">
            <label class="inter text-sm text-gray-500">Message</label>
            <textarea rows="10"
                      name="user_message"
                      v-model="message"
                      class="rounded-sm bg-white border border-gray-300 px-4 py-2 inter font-medium text-md text-gray-700 w-full focus:outline-none focus:border-ps-blue focus:bg-white mt-2">
            </textarea>
          </div>
          <button type="submit"
                  v-if="valid"
                  class="col-span-2 ps-btn flex flex-row items-center text-white text-sm text-opacity-90 font-medium px-4 py-2 rounded-sm w-full">
            Send Email
          </button>
        </form>
      </div>
      <div class="bg-gray-50 col-span-2 py-8 pl-12">

      </div>
      <div class="bg-gray-50 col-span-2"></div>
    </div>

    <Footer />
  </div>
</template>

<script>
import emailjs from '@emailjs/browser'

export default {
  name: 'Article',
  transition: 'fade',
  data() {
    return {
      first_name: '',
      last_name: '',
      email_address: '',
      company: '',
      message: '',
      valid: false,
      sent: false,
    }
  },
  updated() {
    this.valid =
      this.first_name.length > 0 &&
      this.last_name.length > 0 &&
      this.email_address.match(
        /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
      ) &&
      this.message.length > 0
  },
  methods: {
    sendEmail() {
      emailjs
        .sendForm(
          'service_6kzwrjn',
          'template_pvftu29',
          this.$refs.form,
          'jm1HqLLih3f3PPd0E'
        )
        .then(
          (result) => {
            this.valid = false
            this.first_name = ''
            this.last_name = ''
            this.email_address = ''
            this.company = ''
            this.message = ''
            this.sent = true
          },
          (error) => {
            console.log('FAILED...', error.text)
          }
        )
    },
  },
}
</script>

<style>

</style>
