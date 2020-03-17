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
              icon: 'ni ni-shop text-primary',
            }"
          >
            <argon-sidebar-item
              :link="{ name: 'Dashboards', path: '/dashboards/dashboard1' }"
            ></argon-sidebar-item>
            <argon-sidebar-item
              :link="{ name: 'Alternative', path: '/dashboards/dashboard2' }"
            ></argon-sidebar-item>
          </argon-sidebar-item>

          <argon-sidebar-item :link="{
                    name: 'Examples',
                    icon: 'ni ni-ungroup text-orange'
                    }">
            <argon-sidebar-item :link="{ name: 'Twitter Feed', path: '/twitter-feed' }"/>
            <argon-sidebar-item :link="{ name: 'Notifications', path: '/notifications' }"/>
            <argon-sidebar-item :link="{ name: 'Pricing', path: '/pricing' }"/>
            <argon-sidebar-item :link="{ name: 'Featured Apps', path: '/featured-apps' }"/>
            <argon-sidebar-item :link="{ name: 'Contact Us', path: '/contact-us' }"/>
            <argon-sidebar-item :link="{ name: 'Blog', path: '/blog' }"/>


          </argon-sidebar-item>

          <argon-sidebar-item :link="{
                    name: 'Admin',
                    icon: 'ni ni-ui-04 text-info'
                  }">
            <argon-sidebar-item :link="{ name: 'Login', path: '/login' }"/>
            <argon-sidebar-item :link="{ name: 'Profile', path: '/settings/profile' }"/>
            <argon-sidebar-item :link="{ name: 'Manage Notifications', path: '/admin/notifications/manage' }"/>
            <argon-sidebar-item :link="{ name: 'Send Notifications', path: '/admin/notifications/send' }"/>

          </argon-sidebar-item>
        </template>
      </argon-side-bar>
      <div class="main-content">
        <dashboard-navbar :type="$route.name === 'alternative' ? 'light': 'default'"></dashboard-navbar>

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

  import DashboardNavbar from '~/components/Argon/layouts/argon/DashboardNavbar.vue';
  import ContentFooter from '~/components/Argon/layouts/argon/ContentFooter.vue';
  import DashboardContent from '~/components/Argon/layouts/argon/Content.vue';

  export default {
    components: {
      DashboardNavbar,
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
