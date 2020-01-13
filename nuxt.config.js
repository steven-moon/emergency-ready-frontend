require('dotenv').config();
const axios = require('axios');



module.exports = {
  mode: 'universal',
  server: {
    port: 3322,
    host: process.env.HOST || '0.0.0.0'
  },
  /*
   ** Headers of the page
   */
  router: {
    base: '/',
    linkExactActiveClass: 'active',
    scrollBehavior: (to) => {
      if (to.hash) {
        return { selector: to.hash }
      } else {
        return { x: 0, y: 0 }
      }
    }
  },
  redirect: [
    { from: '^/iPhone3Dglobe.php', to: '/' },
    { from: '^/ourapps.php', to: '/featured-apps' },
    { from: '^/index.php', to: '/' },
    { from: '^/index', to: '/' },
    { from: '^/(.*)\.php$', to: '/$1' },
    { from: '^/(.*)\.html$', to: '/$1' },
    { from: '^/wordpress/.+\\/([^.]+)\\/$', to: '/blog/$1' },
    { from: '^/wordpress/', to: '/blog/' },
  ],
  head: {
    title: 'Clever Coding',
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
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
    '@nuxtjs/redirect-module',
    '@nuxtjs/sitemap',
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
    WORDPRESS: process.env.WORDPRESS || 'https://wordpress.clevercoding.com/',
    HOST: process.env.HOST || '0.0.0.0',
    baseApiUrl: process.env.baseApiUrl || 'https://api.summacoding.com/api',
    WP_API_GET_POST_ENDPOINT: process.env.WP_API_GET_POST_ENDPOINT || 'https://wordpress.clevercoding.com/wp-json/emergency-ready/v1/get-post',
    WP_API_GET_POSTS_ENDPOINT: process.env.WP_API_GET_POSTS_ENDPOINT || 'https://wordpress.clevercoding.com/wp-json/emergency-ready/v1/get-posts',
  },
  sitemap: {
    hostname: 'https://clevercoding.com',
    exclude: [
      '/samples',
      '/samples/**'
    ],
    routes: [
      "/States/Mobile-Dev-Alabama",
      "/States/Mobile-Dev-Alaska",
      "/States/Mobile-Dev-Arizona",
      "/States/Mobile-Dev-Arkansas",
      "/States/Mobile-Dev-California",
      "/States/Mobile-Dev-Canada",
      "/States/Mobile-Dev-Colorado",
      "/States/Mobile-Dev-Connecticut",
      "/States/Mobile-Dev-Deleware",
      "/States/Mobile-Dev-Florida",
      "/States/Mobile-Dev-Georgia",
      "/States/Mobile-Dev-Hawaii",
      "/States/Mobile-Dev-Idaho",
      "/States/Mobile-Dev-Illinois",
      "/States/Mobile-Dev-Indiana",
      "/States/Mobile-Dev-Iowa",
      "/States/Mobile-Dev-Kansas",
      "/States/Mobile-Dev-Kentucky",
      "/States/Mobile-Dev-Louisiana",
      "/States/Mobile-Dev-Maine",
      "/States/Mobile-Dev-Maryland",
      "/States/Mobile-Dev-Massachusetts",
      "/States/Mobile-Dev-Michigan",
      "/States/Mobile-Dev-Minnesota",
      "/States/Mobile-Dev-Mississippi",
      "/States/Mobile-Dev-Missouri",
      "/States/Mobile-Dev-Montana",
      "/States/Mobile-Dev-Nebraska",
      "/States/Mobile-Dev-Nevada",
      "/States/Mobile-Dev-New-Hampshire",
      "/States/Mobile-Dev-New-Jersey",
      "/States/Mobile-Dev-New-Mexico",
      "/States/Mobile-Dev-New-York",
      "/States/Mobile-Dev-North-Carolina",
      "/States/Mobile-Dev-North-Dakota",
      "/States/Mobile-Dev-Ohio",
      "/States/Mobile-Dev-Oklahoma",
      "/States/Mobile-Dev-Oregon",
      "/States/Mobile-Dev-Pennsylvania",
      "/States/Mobile-Dev-Rhode-Island",
      "/States/Mobile-Dev-South-Carolina",
      "/States/Mobile-Dev-South-Dakota",
      "/States/Mobile-Dev-Tennessee",
      "/States/Mobile-Dev-Texas",
      "/States/Mobile-Dev-Utah",
      "/States/Mobile-Dev-Vermont",
      "/States/Mobile-Dev-Virginia",
      "/States/Mobile-Dev-Washington-DC",
      "/States/Mobile-Dev-Washington",
      "/States/Mobile-Dev-West-Virginia",
      "/States/Mobile-Dev-Wisconsin",
      "/States/Mobile-Dev-Wyoming",
    ]
  },
}
