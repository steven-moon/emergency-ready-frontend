<template>
   <div class="black-container sidebar-wrapper" :class="{ 'nav-open': $bsidebar.showSidebar }">
      <black-notifications></black-notifications>
      <sidebar-fixed-toggle-button />
      <black-side-bar
         :background-color="sidebarBackground"
         short-title="CT"
         title="Creative Tim"
      >
         <template slot-scope="props" slot="links">
            <black-sidebar-item
               :link="{
            name: $t('sidebar.dashboard'),
            icon: 'tim-icons icon-chart-pie-36',
            path: '/black/starter-page'
          }"
            >
            </black-sidebar-item>
         </template>
      </black-side-bar>
      <div class="main-panel" :data="sidebarBackground">
         <dashboard-navbar></dashboard-navbar>
         <router-view name="header"></router-view>

         <div
            :class="{ content: !isFullScreenRoute }"
            @click="toggleSidebar"
         >
            <zoom-center-transition :duration="200" mode="out-in">
               <!-- your content here -->
               <router-view></router-view>
            </zoom-center-transition>
         </div>
         <content-footer v-if="!isFullScreenRoute"></content-footer>
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

    import DashboardNavbar from '~/components/Black/Layout/starter/SampleNavbar.vue';
    import ContentFooter from '~/components/Black/Layout/starter/SampleFooter.vue';
    import DashboardContent from '~/components/Black/Layout/Content.vue';
    import SidebarFixedToggleButton from '~/components/Black/Layout/SidebarFixedToggleButton.vue';
    import { SlideYDownTransition, ZoomCenterTransition } from 'vue2-transitions';

    export default {
        components: {
            DashboardNavbar,
            ContentFooter,
            SidebarFixedToggleButton,
            DashboardContent,
            SlideYDownTransition,
            ZoomCenterTransition
        },
        data() {
            return {
                sidebarBackground: 'vue' //vue|blue|orange|green|red|primary
            };
        },
        computed: {
            isFullScreenRoute() {
                return this.$route.path === '/maps/full-screen'
            }
        },
        methods: {
            toggleSidebar() {
                if (this.$bsidebar.showSidebar) {
                    this.$bsidebar.displaySidebar(false);
                }
            },
            initScrollbar() {
                let docClasses = document.body.classList;
                let isWindows = navigator.platform.startsWith('Win');
                if (isWindows) {
                    // if we are on windows OS we activate the perfectScrollbar function
                    initScrollbar('sidebar');
                    initScrollbar('main-panel');
                    initScrollbar('sidebar-wrapper');

                    docClasses.add('perfect-scrollbar-on');
                } else {
                    docClasses.add('perfect-scrollbar-off');
                }
            }
        },
        mounted() {
            this.initScrollbar();
        }
    };
</script>
<style lang="scss">

   body {
      margin: 0;
   }

   $scaleSize: 0.95;
   @keyframes zoomIn95 {
      from {
         opacity: 0;
         transform: scale3d($scaleSize, $scaleSize, $scaleSize);
      }
      to {
         opacity: 1;
      }
   }

   .main-panel .zoomIn {
      animation-name: zoomIn95;
   }

   @keyframes zoomOut95 {
      from {
         opacity: 1;
      }
      to {
         opacity: 0;
         transform: scale3d($scaleSize, $scaleSize, $scaleSize);
      }
   }

   .main-panel .zoomOut {
      animation-name: zoomOut95;
   }
</style>
