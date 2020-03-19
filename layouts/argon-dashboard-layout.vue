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
              name: 'Dashboards',
              icon: 'ni ni-chart-bar-32 text-primary',
            }"
          >
              <argon-sidebar-item
                :link="{ name: 'Overview', path: '/dashboards/' }"
              ></argon-sidebar-item>
              <argon-sidebar-item
                :link="{ name: 'Overview By Country', path: '/dashboards/country' }"
              ></argon-sidebar-item>
              <argon-sidebar-item
                      :link="{ name: 'Trends', path: '/dashboards/trends' }"
              ></argon-sidebar-item>
              <argon-sidebar-item
                      :link="{ name: 'Trends By Country', path: '/dashboards/trends/country' }"
              ></argon-sidebar-item>
          </argon-sidebar-item>


          <!--<argon-sidebar-item :link="{
                    name: 'Sections',
                    icon: 'ni ni-ungroup text-orange'
                    }">
            <argon-sidebar-item :link="{ name: 'Twitter Feed', path: '/twitter-feed' }"/>
            <argon-sidebar-item :link="{ name: 'Notifications', path: '/notifications' }"/>
            <argon-sidebar-item :link="{ name: 'Pricing', path: '/pricing' }"/>
            <argon-sidebar-item :link="{ name: 'Featured Apps', path: '/featured-apps' }"/>
            <argon-sidebar-item :link="{ name: 'Contact Us', path: 'https://clevercoding.com/contactus' }"/>
            <argon-sidebar-item :link="{ name: 'Blog', path: '/blog' }"/>


          </argon-sidebar-item>-->

          <!--<argon-sidebar-item :link="{
                    name: 'Admin',
                    icon: 'ni ni-ui-04 text-info'
                  }">
            <argon-sidebar-item :link="{ name: 'Login', path: '/login' }"/>
            <argon-sidebar-item :link="{ name: 'Profile', path: '/settings/profile' }"/>
            <argon-sidebar-item :link="{ name: 'Manage Notifications', path: '/admin/notifications/manage' }"/>
            <argon-sidebar-item :link="{ name: 'Send Notifications', path: '/admin/notifications/send' }"/>

          </argon-sidebar-item>-->
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
                <i class="ni ni-ambulance"></i>
                <span class="nav-link-text">Custom Branded Emergency App</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link"
                 href="https://clevercoding.com/contactus"
                 target="_blank" rel="noopener">
                <i class="ni ni-chat-round"></i>
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
        <app-dashboard-navbar :type="$route.name === 'alternative' ? 'light': 'default'"></app-dashboard-navbar>

        <div @click="$asidebar.displaySidebar(false)">
          <nuxt></nuxt>
        </div>
        <content-footer v-if="!$route.meta.hideFooter"></content-footer>
      </div>
    </div>
  </div>
</template>
<script>
  /* eslint-disable no-new */
  import PerfectScrollbar from 'perfect-scrollbar';
  import 'perfect-scrollbar/css/perfect-scrollbar.css';

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

  import AppDashboardNavbar from '~/components/Argon/layouts/argon/AppDashboardNavbar.vue';
  import ContentFooter from '~/components/Argon/layouts/argon/ContentFooter.vue';
  import DashboardContent from '~/components/Argon/layouts/argon/Content.vue';

  export default {
    components: {
      AppDashboardNavbar,
      ContentFooter,
      DashboardContent
    },
    methods: {
      initScrollbar() {
        let isWindows = navigator.platform.startsWith('Win');
        if (isWindows) {
          initScrollbar('scrollbar-inner');
        }
      }
    },
    computed: {
      classes() {


        return [

          {'g-sidenav-hidden' : !this.$asidebar.showSidebar || this.$asidebar.isMinimized},
          {'g-sidenav-pinned' : this.$asidebar.showSidebar && !this.$asidebar.isMinimized},
          {'g-sidenav-show': this.$asidebar.showSidebar && !this.$asidebar.isMinimized},
        ]
      }
    },
    mounted() {
      this.initScrollbar()
    }
  };
</script>
<style lang="scss">
  body {
    margin: 0;
  }
</style>
