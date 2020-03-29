<template>
  <div class="argon-container">
    <div :class="layoutClass" class="auth-layout">
      <base-nav
              v-model="showMenu"
              type="light"
              :transparent="true"
              menu-classes="justify-content-end"
              class="navbar-horizontal navbar-main"
              expand=""
      >
        <div slot="brand" class="navbar-wrapper">
          <nuxt-link class="navbar-brand" to="/">
            <img src="img/brand/white.png" alt="Logo white">
          </nuxt-link>
        </div>

        <template>
          <div class="navbar-collapse-header">
            <div class="row">
              <div class="col-6 collapse-brand">
                <nuxt-link to="/" class="mr-auto">
                  <img src="img/brand/blue.png" alt="Logo Blue">
                </nuxt-link>
              </div>
              <div class="col-6 collapse-close">
                <button type="button" class="navbar-toggler" @click="closeMenu">
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
          </div>

          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <nuxt-link to="/" class="nav-link">
                <i class="ni ni-ambulance"></i>
                <span class="nav-link-inner--text">Emergency Ready App</span>
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="/dashboards/" class="nav-link">
                <i class="ni ni-notification-70"></i>
                <span class="nav-link-inner--text">Dashboard</span>
              </nuxt-link>
            </li>
<!--            <li class="nav-item">-->
<!--              <nuxt-link to="/dashboards/country" class="nav-link">-->
<!--                <i class="ni ni-world-2"></i>-->
<!--                <span class="nav-link-inner&#45;&#45;text">Dashboard: Overview By Country</span>-->
<!--              </nuxt-link>-->
<!--            </li>-->
<!--            <li class="nav-item">-->
<!--              <nuxt-link to="/dashboards/trends" class="nav-link">-->
<!--                <i class="ni ni-chart-bar-32"></i>-->
<!--                <span class="nav-link-inner&#45;&#45;text">Dashboard: Trends</span>-->
<!--              </nuxt-link>-->
<!--            </li>-->
<!--            <li class="nav-item">-->
<!--              <nuxt-link to="/dashboards/trends/country" class="nav-link">-->
<!--                <i class="ni ni-map-big"></i>-->
<!--                <span class="nav-link-inner&#45;&#45;text">Dashboard: Trends By Country</span>-->
<!--              </nuxt-link>-->
<!--            </li>-->
          </ul>
          <hr>
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link nav-link-icon" href="https://clevercoding.com/" target="_blank" rel="noopener" aria-label="Custom App Development">
                <i class="ni ni-atom"></i>
                <span class="nav-link-inner--text ">App Development Services</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link nav-link-icon" href="https://clevercoding.com/emergency-ready-app" target="_blank" rel="noopener" aria-label="Custom Branded Emergency App">
                <i class="ni ni-ambulance"></i>
                <span class="nav-link-inner--text ">Custom Branded Emergency App</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link nav-link-icon" href="https://clevercoding.com/contactus" target="_blank" rel="noopener" aria-label="Contact Us">
                <i class="ni ni-chat-round"></i>
                <span class="nav-link-inner--text ">Contact Us</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link nav-link-icon" href="https://clevercoding.com/blog" target="_blank" rel="noopener" aria-label="Blog">
                <i class="ni ni-collection"></i>
                <span class="nav-link-inner--text ">Blog</span>
              </a>
            </li>
          </ul>
          <hr class="">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link nav-link-icon" href="https://www.facebook.com/CleverCoding/" target="_blank" rel="noopener" aria-label="Facebook">
                <i class="fab fa-facebook-square"></i>
                <span class="nav-link-inner--text ">Facebook</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link nav-link-icon" href="https://www.instagram.com/CleverCoding" target="_blank" rel="noopener" aria-label="Instagram">
                <i class="fab fa-instagram"></i>
                <span class="nav-link-inner--text ">Instagram</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link nav-link-icon" href="https://twitter.com/CleverCoding" target="_blank" rel="noopener" aria-label="Twitter">
                <i class="fab fa-twitter-square"></i>
                <span class="nav-link-inner--text ">Twitter</span>
              </a>
            </li>
          </ul>
        </template>
      </base-nav>

      <div class="main-content">
        <nuxt></nuxt>
      </div>

      <footer class="py-5" id="footer-main">
        <div class="container">
          <div class="row align-items-center justify-content-xl-between">
            <div class="app-store-badge col-xl-6">
              <h2 class="text-white">Download the Free Emergency Ready App</h2>
            </div>
          </div>
          <div class="row align-items-center justify-content-xl-between pt-4 pb-4">
            <div class="app-store-badge col-12 col-lg-6 pb-4">
                  <a :href='aboutUs.emergencyReadyApp.appStoreLink'><img alt='Download on the App Store'
                                                                         src='/img/featured/Download_on_the_App_Store_Badge.png'/></a>
            </div>
            <div class="app-store-badge col-12 col-lg-6">
                <a :href='aboutUs.emergencyReadyApp.playStoreLink'><img alt='Get it on Google Play'
                                                                        src='/img/featured/google_play_badge_web_generic.png'/></a>
            </div>
          </div>
          <div class="row align-items-center justify-content-xl-between">
            <div class="col-xl-6">
              <div class="copyright text-center text-muted">
                © {{year}} <a href="https://clevercoding.com/" class="font-weight-bold ml-1" rel="noopener">Clever Coding LLC</a>
              </div>
            </div>
            <div class="col-xl-6">
              <ul class="nav nav-footer justify-content-center justify-content-xl-end">
                <li class="nav-item">
                  <a href="https://clevercoding.com/about" class="nav-link" target="_blank" rel="noopener">About Us</a>
                </li>
                <li class="nav-item">
                  <a href="https://clevercoding.com/blog/" class="nav-link" target="_blank" rel="noopener">Blog</a>
                </li>
                <li class="nav-item">
                  <a href="https://www.clevercoding.com/emergency-ready-app-privacy-policy" class="nav-link" target="_blank" rel="noopener">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>
<script>
  /* eslint-disable no-new */
  import PerfectScrollbar from 'perfect-scrollbar';
  import 'perfect-scrollbar/css/perfect-scrollbar.css';
  import ReportsAPI from '~/api/ReportsAPI';

  function hasElement(className) {
    return document.getElementsByClassName(className).length > 0;
  }

  function initScrollbar(className) {
    if (hasElement(className)) {
      new PerfectScrollbar(`.${className}`);
    } else {
      // try to init it later in case this component is loaded async
      setTimeout(() => {
        initScrollbar(className);
      }, 100);
    }
  }

  import BaseNav  from '~/components/Argon/argon-core/Navbar/BaseNav.vue';
  import AppDashboardNavbar from '~/components/Argon/layouts/argon/AppDashboardNavbar.vue';
  import ContentFooter from '~/components/Argon/layouts/argon/ContentFooter.vue';
  import DashboardContent from '~/components/Argon/layouts/argon/Content.vue';
  import {mapGetters} from "vuex";

  export default {
    components: {
      BaseNav,
      AppDashboardNavbar,
      ContentFooter,
      DashboardContent
    },
    props: {
      backgroundColor: {
        type: String,
        default: 'black'
      }
    },
    data() {
      return {
        menuTransitionDuration: 250,
        year: new Date().getFullYear(),
        pageClass: 'login-page',
      };
    },
    watch: {
      '$route.path'() {
        if (this.showMenu) {
          this.closeMenu();
        }
      }
    },
    methods: {
      initScrollbar() {
        let isWindows = navigator.platform.startsWith('Win');
        if (isWindows) {
          initScrollbar('scrollbar-inner');
        }
      },
      closeMenu() {
        document.body.classList.remove('nav-open');

        console.log("BEGIN: closeMenu. argon-dashboard-layout");
        this.$asidebar.displaySidebar(false);
      },
      openMenu() {
        console.log("BEGIN: openMenu in layout");
        this.$asidebar.displaySidebar(true);
      }
    },
    computed: {
      ...mapGetters('pageDataStore', {
        aboutUs: 'aboutUs',
      }),
      showMenu(){
        return this.$asidebar.showSidebar;
      },
      classes() {


        return [

          {'g-sidenav-hidden' : !this.$asidebar.showSidebar || this.$asidebar.isMinimized},
          {'g-sidenav-pinned' : this.$asidebar.showSidebar && !this.$asidebar.isMinimized},
          {'g-sidenav-show': this.$asidebar.showSidebar && !this.$asidebar.isMinimized},
        ]
      },
      layoutClass() {
        let exceptions = ['index', 'home']
        if (!exceptions.includes(this.$route.name)) {
          return 'bg-default'
        } else {
          return ''
        }
      }
    },
    mounted() {
      this.initScrollbar();
      ReportsAPI.getCountryList(this.$store);
    }
  };
</script>
<style lang="scss">
  body {
    margin: 0;
  }
  .auth-layout {
    min-height: 100vh;
  }
</style>
