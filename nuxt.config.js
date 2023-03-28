import tailwindForms from '@tailwindcss/forms'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'server',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Pixelscript',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/google-gtag'
  ],

  'google-gtag': {
    id: 'UA-258997466-1',
    config: {
      anonymize_ip: false, // anonymize IP 
      send_page_view: false, // might be necessary to avoid duplicated page track on page reload
      // linker: {
      //   domains: ['pix','domain.org']
      // }
    },
    debug: true, // enable to track in dev mode
    disableAutoPageTrack: false, // disable if you don't want to track each page route with router.afterEach(...).
    // additionalAccounts: [{
    //   id: 'AW-XXXX-XX',
    //   config: {
    //     send_page_view: false
    //   }
    // }]
  },

  // Tailwind module configuration
	tailwindcss: {
		config: {
			plugins: [tailwindForms]
		}
	},

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Google Analytics module configuration
  // googleAnalytics: {
  //   id: 'G-DXCZBPJP2T'
  // },

  server: {
		port: 8080, // default: 3000
		host: '0.0.0.0' // default: localhost
	},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
