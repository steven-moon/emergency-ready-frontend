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
          <nuxt-link class="navbar-brand" to="/app/dashboards">
            <img src="img/brand/white.png" alt="Logo white">
          </nuxt-link>
        </div>

        <template>
          <div class="navbar-collapse-header">
            <div class="row">
              <div class="col-6 collapse-brand">
                <nuxt-link to="/app/dashboards" class="mr-auto">
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
              <nuxt-link to="/app/dashboards/" class="nav-link">
                <i class="ni ni-notification-70"></i>
                <span class="nav-link-inner--text">Dashboard: Overview</span>
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="/app/dashboards/country" class="nav-link">
                <i class="ni ni-world-2"></i>
                <span class="nav-link-inner--text">Dashboard: Overview By Country</span>
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="/app/dashboards/trends" class="nav-link">
                <i class="ni ni-chart-bar-32"></i>
                <span class="nav-link-inner--text">Dashboard: Trends</span>
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="/app/dashboards/trends/country" class="nav-link">
                <i class="ni ni-map-big"></i>
                <span class="nav-link-inner--text">Dashboard: Trends By Country</span>
              </nuxt-link>
            </li>
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
