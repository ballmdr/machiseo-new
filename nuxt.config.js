const pkg = require('./package')
const environment = {
  ADMIN_SUB_ID: 'google-oauth2|110559176155139692267',
  API_URL: 'https://machiseo.net',
  BASE_URL: '',
  CDN_URL: 'https://machiseo.net',
  REST_MONGO: 'https://mongo.machiseo.net',
  //REST_MONGO: 'http://localhost:9000',
  VOTE_SERVER: 'https://vote.machiseo.net',
  // VOTE_SERVER: 'http://localhost:9001',
  USER_DRUPAL: 'ballmdr',
  PASS_DRUPAL: 'M3n17v11',
  DISCOURSE_URL: 'https://community.machiseo.com',
  DISCOURSE_API_KEY: '71696264866640b9a7f1d58c61bdd3046ae3e72ae9664000c2fc8ee94bde7baf'
}

module.exports = {
  mode: 'universal',
  env: {
    baseUrl: environment.BASE_URL,
    cdnUrl: environment.CDN_URL,
    adminSubId: environment.ADMIN_SUB_ID,
    restMongoUrl: environment.REST_MONGO,
    voteServer: environment.VOTE_SERVER,
    userDrupal: environment.USER_DRUPAL,
    passDrupal: environment.PASS_DRUPAL,
    discourseUrl: environment.DISCOURSE_URL,
    discourseAPI: environment.DISCOURSE_API_KEY
  },
  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/axios-port' },
    { src: '~/plugins/vue-filter' },
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL: environment.API_URL,
    retry: { retries: 3 }
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  }
}
