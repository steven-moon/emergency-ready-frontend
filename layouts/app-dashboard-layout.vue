<template>
  <div class="argon-container">
    <div class="wrapper" :class="
            [{'g-sidenav-hidden' : !this.$asidebar.keepPinned() && (!this.$asidebar.showSidebar || this.$asidebar.isMinimized)},
            {'g-sidenav-pinned' : this.$asidebar.keepPinned() || (this.$asidebar.showSidebar && !this.$asidebar.isMinimized)},
            {'g-sidenav-show': this.$asidebar.keepPinned() || (this.$asidebar.showSidebar && !this.$asidebar.isMinimized)}]"
    >
      <argon-notifications></argon-notifications>
      <argon-side-bar>
        <template slot-scope="props" slot="links">
          <argon-sidebar-item
                  :link="{
              name: 'Overview',
              icon: 'ni ni-shop text-primary',
              path: '/app/dashboards/'
            }">
          </argon-sidebar-item>

          <argon-sidebar-item
                  :link="{
              name: 'Overview By Country',
              icon: 'ni ni-shop text-primary',
              path: '/app/dashboards/country'
            }">
          </argon-sidebar-item>

          <argon-sidebar-item
                  :link="{
              name: 'Trends',
              icon: 'ni ni-shop text-primary',
              path: '/app/dashboards/trends'
            }">
          </argon-sidebar-item>

          <argon-sidebar-item
                  :link="{
              name: 'Trends by County',
              icon: 'ni ni-shop text-primary',
              path: '/app/dashboards/trends/country'
            }">
          </argon-sidebar-item>

        </template>
        <template slot="links-after">
          <hr class="my-3">
          <h6 class="navbar-heading p-0 text-muted"></h6>

          <ul class="navbar-nav mb-md-3">
            <li class="nav-item">
              <a class="nav-link" href="https://clevercoding.com/"
                 target="_blank" rel="noopener">
                <i class="ni ni-atom"></i>
                <span class="nav-link-text">Custom App Development</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link"
                 href="https://clevercoding.com/emergency-ready-app"
                 target="_blank" rel="noopener">
                <i class="ni ambulance"></i>
                <span class="nav-link-text">Custom Branded Emergency App</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link"
                 href="https://clevercoding.com/contactus"
                 target="_blank" rel="noopener">
                <i class="ni chat-round"></i>
                <span class="nav-link-text">Contact Us</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link"
                 href="https://clevercoding.com/blog"
                 target="_blank" rel="noopener">
                <i class="ni ni-collection"></i>
                <span class="nav-link-text">Blog</span>
              </a>
            </li>
          </ul>
        </template>
      </argon-side-bar>
      <div class="main-content">
        <app-dashboard-navbar type="default"></app-dashboard-navbar>

        <div @click="$asidebar.displaySidebar(false)">
          <nuxt></nuxt>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

  import {mapActions, mapGetters} from "vuex";
  import AppDashboardNavbar from '~/components/Argon/layouts/argon/AppDashboardNavbar.vue';
  import DashboardContent from '~/components/Argon/layouts/argon/Content.vue';

  //API
  import ReportsAPI from '~/api/ReportsAPI';

  export default {
    components: {
      AppDashboardNavbar,
      DashboardContent
    },
    props: {
      backgroundColor: {
        type: String,
        default: 'black'
      }
    },
    // head () {
    //   return {
    //     title: this.title,
    //     meta: [
    //       // hid is used as unique identifier. Do not use `vmid` for it as it will not work
    //       { hid: 'description', name: 'description', content: 'Base App - Argon' }
    //     ],
    //     script: [
    //       { type: 'module', src: 'https://code.jquery.com/jquery-3.3.1.slim.min.js' },
    //       { type: 'module', src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js' },
    //       { type: 'module', src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js' }
    //     ]
    //   }
    // },
    data() {
      return {
        showMenu: false,
        menuTransitionDuration: 250,
        year: new Date().getFullYear(),
        pageClass: 'login-page',
      };
    },
    computed: {
      ...mapActions([
        'logout'
      ]),
      ...mapGetters({
        isUserLoggedIn: 'isUserLoggedIn',
      }),

      title() {
        return `${this.$route.name} Page`;
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
    methods: {
      closeMenu() {
        document.body.classList.remove('nav-open');
        this.showMenu = false;
      },
    },
    watch: {
      '$route.path'() {
        if (this.showMenu) {
          this.closeMenu();
        }
      }
    },
    mounted() {
      ReportsAPI.getCountryList(this.$store);
    }
  };
</script>
<style lang="scss">
  .auth-layout {
    min-height: 100vh;
  }

  body {
    margin: 0;
  }
</style>
