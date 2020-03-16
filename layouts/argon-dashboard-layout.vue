<template>
  <div class="argon-container wrapper">
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
            :link="{ name: 'Dashboard', path: '/argon/dashboard' }"
          ></argon-sidebar-item>
          <argon-sidebar-item
            :link="{ name: 'Alternative', path: '/argon/alternative' }"
          ></argon-sidebar-item>
        </argon-sidebar-item>

        <argon-sidebar-item :link="{
                  name: 'Examples',
                  icon: 'ni ni-ungroup text-orange'
                  }">
          <argon-sidebar-item :link="{ name: 'Pricing', path: '/argon/pricing' }"/>
          <argon-sidebar-item :link="{ name: 'Login', path: '/argon/login' }"/>
          <argon-sidebar-item :link="{ name: 'Register', path: '/argon/register' }"/>
          <argon-sidebar-item :link="{ name: 'Lock', path: '/argon/lock' }"/>
          <argon-sidebar-item :link="{ name: 'Timeline', path: '/argon/pages/timeline' }"/>
          <argon-sidebar-item :link="{ name: 'Profile', path: '/argon/pages/user' }"/>


        </argon-sidebar-item>

        <argon-sidebar-item :link="{
                  name: 'Components',
                  icon: 'ni ni-ui-04 text-info'
                }">
          <argon-sidebar-item :link="{ name: 'Buttons', path: '/argon/components/buttons' }"/>
          <argon-sidebar-item :link="{ name: 'Cards', path: '/argon/components/cards' }"/>
          <argon-sidebar-item :link="{ name: 'Grid', path: '/argon/components/grid-system' }"/>
          <argon-sidebar-item :link="{ name: 'Notifications', path: '/argon/components/notifications' }"/>
          <argon-sidebar-item :link="{ name: 'Icons', path: '/argon/components/icons' }"/>
          <argon-sidebar-item :link="{ name: 'Typography', path: '/argon/components/typography' }"/>

          <argon-sidebar-item :link="{ name: 'Multi Level' }">
            <argon-sidebar-item :link="{ name: 'Third level menu', path:'#' }"/>
            <argon-sidebar-item :link="{ name: 'Just another link', path:'#' }"/>
            <argon-sidebar-item :link="{ name: 'One last link', path:'#' }"/>
          </argon-sidebar-item>
        </argon-sidebar-item>
        <argon-sidebar-item :link="{
                        name: 'Forms',
                        icon: 'ni ni-single-copy-04 text-pink'
                      }">
          <argon-sidebar-item :link="{ name: 'Elements', path: '/argon/forms/elements' }"/>
          <argon-sidebar-item :link="{ name: 'Components', path: '/argon/forms/components' }"/>
          <argon-sidebar-item :link="{ name: 'Validation', path: '/argon/forms/validation' }"/>
        </argon-sidebar-item>

        <argon-sidebar-item :link="{
                        name: 'Tables',
                        icon: 'ni ni-align-left-2 text-default'
                      }">
          <argon-sidebar-item :link="{ name: 'Tables', path: '/argon/tables/regular' }"/>
          <argon-sidebar-item :link="{ name: 'Sortable', path: '/argon/tables/sortable' }"/>
          <argon-sidebar-item :link="{ name: 'Paginated Tables', path: '/argon/tables/paginated' }"/>
        </argon-sidebar-item>

        <argon-sidebar-item :link="{
                        name: 'Maps',
                        icon: 'ni ni-map-big text-primary'
                      }">
          <argon-sidebar-item :link="{ name: 'Google', path: '/argon/maps/google' }"/>
          <argon-sidebar-item :link="{ name: 'Vector', path: '/argon/maps/vector' }"/>
        </argon-sidebar-item>
        <argon-sidebar-item
          :link="{
            name: 'Widgets',
            icon: 'ni ni-archive-2 text-green',
            path: '/argon/widgets'
          }">
        </argon-sidebar-item>
        <argon-sidebar-item
          :link="{
            name: 'Charts',
            icon: 'ni ni-chart-pie-35 text-info',
            path: '/argon/charts'
          }">
        </argon-sidebar-item>

        <argon-sidebar-item
          :link="{
            name: 'Calendar',
            icon: 'ni ni-calendar-grid-58 text-red',
            path: '/argon/calendar'
          }">
        </argon-sidebar-item>
        <argon-sidebar-item
                :link="{
            name: 'Combined App',
            icon: 'ni ni-cloud-download-9 text-info',
            path: '/'
          }">
        </argon-sidebar-item>
      </template>

      <template slot="links-after">
        <hr class="my-3">
        <h6 class="navbar-heading p-0 text-muted">Documentation</h6>

        <ul class="navbar-nav mb-md-3">
          <li class="nav-item">
            <a class="nav-link" href="https://demos.creative-tim.com/nuxt-argon-dashboard-pro/documentation"
               target="_blank" rel="noopener">
              <i class="ni ni-spaceship"></i>
              <span class="nav-link-text">Getting started</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link"
               href="https://demos.creative-tim.com/nuxt-argon-dashboard-pro/documentation/foundation/colors.html"
               target="_blank" rel="noopener">
              <i class="ni ni-palette"></i>
              <span class="nav-link-text">Foundation</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link"
               href="https://demos.creative-tim.com/nuxt-argon-dashboard-pro/documentation/components/avatars.html"
               target="_blank" rel="noopener">
              <i class="ni ni-ui-04"></i>
              <span class="nav-link-text">Components</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link"
               href="https://demos.creative-tim.com/nuxt-argon-dashboard-pro/documentation/components/plugin_datepicker.html"
               target="_blank" rel="noopener">
              <i class="ni ni-chart-pie-35"></i>
              <span class="nav-link-text">Plugins</span>
            </a>
          </li>
        </ul>
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
