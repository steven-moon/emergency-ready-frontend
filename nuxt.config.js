const webpack = require("webpack");
const nodeExternals = require('webpack-node-externals')
const axios = require('axios');

require('dotenv').config();


module.exports = {
  mode: 'universal',
  server: {
    port: 3322,
    host: process.env.HOST || '0.0.0.0'
  },
  head: {
    title: 'Emergency Ready App',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=yes'
      },
      { name: 'msapplication-TileColor', content: '#ffffff' },
      { name: 'msapplication-TileImage', content: '/icons/ms-icon-144x144.png' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/icons/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '57x57', href: '/icons/apple-icon-57x57.png' },
      { rel: 'apple-touch-icon', sizes: '60x60', href: '/icons/apple-icon-60x60.png' },
      { rel: 'apple-touch-icon', sizes: '72x72', href: '/icons/apple-icon-72x72.png' },
      { rel: 'apple-touch-icon', sizes: '76x76', href: '/icons/apple-icon-76x76.png' },
      { rel: 'apple-touch-icon', sizes: '114x114', href: '/icons/apple-icon-114x114.png' },
      { rel: 'apple-touch-icon', sizes: '120x120', href: '/icons/apple-icon-120x120.png' },
      { rel: 'apple-touch-icon', sizes: '144x144', href: '/icons/apple-icon-144x144.png' },
      { rel: 'apple-touch-icon', sizes: '152x152', href: '/icons/apple-icon-152x152.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/icons/apple-icon-180x180.png' },
      { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/icons/android-icon-192x192.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/icons/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/icons/favicon-96x96.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/icons/favicon-16x16.png' },

      { rel: 'manifest', href: '/icons/manifest.json' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Montserrat:400,700,200|Open+Sans+Condensed:700'
      },
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.0.6/css/all.css'
      },
      {
        rel: 'stylesheet',
        href:
          'https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css',
        crossorigin: 'anonymous'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['~/assets/sass/style.scss', '~/assets/sass/demo.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/globalDirectives.js', ssr: false, mode: 'client' },
    { src: '~/plugins/element-ui.js' },
    { src: '~/plugins/global.js' },
    { src: '~/plugins/persist.js', ssr: false,  mode: 'client'},
    { src: '~/plugins/vue-h5-swiper.js', ssr: false,  mode: 'client'},
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/dotenv',
    ['@nuxtjs/google-analytics', {
      id: process.env.GOOGLE_ID
    }],
    ['@nuxtjs/google-gtag', { id: "G-0TVSZXD996" }]
  ],
  /*
   ** Build configuration
   */
  build: {
    vendor: ["jquery","jquery-ui"],
    // plugins: [
    //   new webpack.ProvidePlugin({
    //     $: 'jquery',
    //     jQuery: 'jquery',
    //     'window.jQuery': 'jquery'
    //   })
    // ],
    extractCSS: process.env.NODE_ENV === 'production',
    babel: {
      plugins: [
        [
          'component',
          {
            libraryName: 'element-ui',
            styleLibraryName: 'theme-chalk'
          }
        ]
      ]
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  env: {
    WORDPRESS: process.env.WORDPRESS || 'https://wordpress.emergencyreadyapp.com/',
    HOST: process.env.HOST || '0.0.0.0',
    baseApiUrl: process.env.baseApiUrl || 'https://api.summacoding.com/api',
    WP_API_GET_POST_ENDPOINT: process.env.WP_API_GET_POST_ENDPOINT || 'https://wordpress.emergencyreadyapp.com/wp-json/clever-coding/v1/get-post',
    WP_API_GET_POSTS_ENDPOINT: process.env.WP_API_GET_POSTS_ENDPOINT || 'https://wordpress.emergencyreadyapp.com/wp-json/clever-codingy/v1/get-posts',
  },
}
