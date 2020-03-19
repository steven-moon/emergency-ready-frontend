const pkg = require('./package');
const webpack = require("webpack");
const nodeExternals = require('webpack-node-externals');
//const axios = require('axios');

require('dotenv').config();


export default {
    mode: 'universal',
    /* Increase build speed */
    // parallel: true,
    // cache: true,
    // hardSource: true,
    /* /. Increase build speed */
    server: {
        port: process.env.PORT || 9847,
        host: process.env.HOST || '0.0.0.0',
    },
    // vue: {
    //    config: {
    //       productionTip: false,
    //       devtools: true
    //    }
    // },
    /*
    ** Headers of the page
    */
    head: {
        title: 'Emergency Ready App',
        meta: [
            {charset: 'utf-8'},
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=yes'
            },
            {hid: 'description', name: 'description', content: process.env.npm_package_description || ''},
            {name: 'msapplication-TileColor', content: '#ffffff'},
            {name: 'msapplication-TileImage', content: '/icons/ms-icon-144x144.png'}
        ],
        link: [
            {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Poppins:200,300,400,600,700,800'},
            {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700'},
            {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:400,700,200|Open+Sans+Condensed:700'},
            {rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.min.css'},
            {rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.6.3/css/all.css', integrity: "sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/", crossorigin: "anonymous"},
            {rel: 'icon', type: 'image/x-icon', href: '/icons/favicon.ico'},
            {rel: 'apple-touch-icon', sizes: '57x57', href: '/icons/apple-icon-57x57.png'},
            {rel: 'apple-touch-icon', sizes: '60x60', href: '/icons/apple-icon-60x60.png'},
            {rel: 'apple-touch-icon', sizes: '72x72', href: '/icons/apple-icon-72x72.png'},
            {rel: 'apple-touch-icon', sizes: '76x76', href: '/icons/apple-icon-76x76.png'},
            {rel: 'apple-touch-icon', sizes: '114x114', href: '/icons/apple-icon-114x114.png'},
            {rel: 'apple-touch-icon', sizes: '120x120', href: '/icons/apple-icon-120x120.png'},
            {rel: 'apple-touch-icon', sizes: '144x144', href: '/icons/apple-icon-144x144.png'},
            {rel: 'apple-touch-icon', sizes: '152x152', href: '/icons/apple-icon-152x152.png'},
            {rel: 'apple-touch-icon', sizes: '180x180', href: '/icons/apple-icon-180x180.png'},
            {rel: 'icon', type: 'image/png', sizes: '192x192', href: '/icons/android-icon-192x192.png'},
            {rel: 'icon', type: 'image/png', sizes: '32x32', href: '/icons/favicon-32x32.png'},
            {rel: 'icon', type: 'image/png', sizes: '96x96', href: '/icons/favicon-96x96.png'},
            {rel: 'icon', type: 'image/png', sizes: '16x16', href: '/icons/favicon-16x16.png'},

            {rel: 'manifest', href: '/icons/manifest.json'},
        ],
        bodyAttrs: {
            class: 'sidebar-mini' // delete the class to have the sidebar expanded by default. Add `white-content` class here to enable "white" mode.
        }
    },
    /*
     ** Customize the progress-bar color
     */
    loading: {color: '#fff'},
    /*
     ** Global CSS
     */
    // css: [
    // ],
    css: [
        'assets/css/nucleo/css/nucleo.css',
        '~/assets/css/nucleo-icons.css',
        'quill/dist/quill.snow.css',
        'quill/dist/quill.bubble.css',
        'quill/dist/quill.core.css',
        '~/assets/sass/style.scss',
        '~/assets/sass/demo.scss',
    ],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        '~/plugins/form-validation.js',
        '~/plugins/global.js',
        {src: '~/plugins/now-ui-kit' },
        {src: '~/plugins/element-ui.js'},
        {src: '~/plugins/globalDirectives.js', ssr: false, mode: 'client' },
        {src: '~/plugins/persist.js', ssr: false, mode: 'client'},
        {src: '~/plugins/vuejs-datepicker.js', mode: 'client'},
        {src: '~/plugins/vue-touch.js', mode: 'client'},
        // {src: '~/plugins/html2pdf.bundle.min.js', ssr:false},
        {src: '~/plugins/vue-image-upload.js', mode: 'client'},
        {src: '~plugins/nuxt-quill-plugin.js', ssr: false},
        {src: '~/plugins/vue-h5-swiper.js', ssr: false, mode: 'client'},
        {src: '~/plugins/argon/full-calendar', ssr: false },
        {src: '~/plugins/argon/world-map', ssr: false },
        // { src: '~/plugins/black/full-calendar.js', ssr: false },
        // { src: '~/plugins/black/world-map.js', ssr: false }
    ],
    /*
    ** Nuxt.js dev-modules
    */
    devModules: [],
    /*
     ** Nuxt.js modules
     */
    modules: [
        '@nuxtjs/pwa',
        '@nuxtjs/dotenv',
        '@nuxtjs/redirect-module',
        '@nuxtjs/sitemap',
        ['@nuxtjs/google-analytics', {id: process.env.GOOGLE_ID}],
        'cookie-universal-nuxt',
        'nuxt-i18n',
        ['@nuxtjs/google-gtag', {id: process.env.GOOGLE_ID || 'G-74KS4Z8X2W'}]
    ],
    i18n: {
        locales: [
            {
                code: 'en',
                file: 'en.js'
            },
            {
                code: 'ar',
                file: 'ar.js'
            }
        ],
        lazy: true,
        langDir: 'lang/',
        defaultLocale: 'en',
    },
    axios: {
        baseURL: "https://api.emergencyreadyapp.com/api",
        credentials: false
    },
    /*
     ** Build configuration
     */
    build: {
        /**
         * add external plugins
         */
        // splitChunks: {
        //    layouts: true
        // },
        //vendor: ["jquery", "vuejs-datepicker"],

        //transpile: [/^element-ui/],
        plugins: [
            new webpack.ProvidePlugin({
                $: "jquery"
            })
        ],
        extractCSS: process.env.NODE_ENV === 'production',
        babel: {
            plugins: [
                [
                    'component',
                    {
                        "libraryName": 'element-ui',
                        "styleLibraryName": 'theme-chalk'
                    }
                ]
            ]
        },
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {
        }
    },
    env: {
        WORDPRESS: process.env.WORDPRESS || 'https://wordpress.emergencyreadyapp.com/',
        HOST: process.env.HOST || '0.0.0.0',
        baseUrl: process.env.baseUrl || 'https://api.emergencyreadyapp.com/',
        WP_API_GET_POST_ENDPOINT: process.env.WP_API_GET_POST_ENDPOINT || 'https://wordpress.emergencyreadyapp.com/wp-json/clever-coding/v1/get-post',
        WP_API_GET_POSTS_ENDPOINT: process.env.WP_API_GET_POSTS_ENDPOINT || 'https://wordpress.emergencyreadyapp.com/wp-json/clever-codingy/v1/get-posts',
    },
    router: {
        base: '/',
        linkExactActiveClass: 'active',
        scrollBehavior: (to) => {
            if (to.hash) {
                return {selector: to.hash}
            } else {
                return {x: 0, y: 0}
            }
        },
        // extendRoutes(routes, resolve) {
        //     routes.push({
        //         path: '/board/:projectId',
        //         component: resolve(__dirname, 'pages/board/index.vue'),
        //         children: [
        //             {
        //                 path: 'task/:taskId',
        //                 component: resolve(__dirname, 'pages/board/index.vue'),
        //             }
        //         ]
        //     });
        // }
    },
  redirect: [
    {from: '^/index.php', to: '/'},
    {from: '^/index', to: '/'},
    {from: '^/(.*)\.php$', to: '/$1'},
    {from: '^/(.*)\.html$', to: '/$1'},
  ],
    sitemap: {
        hostname: 'https://clevercoding.com',
        exclude: [
            '/samples',
            '/samples/**'
        ],
        routes: [
            "/States/Mobile-Dev-Alabama",
            "/States/Mobile-Dev-Alaska",
        ]
    },
};
