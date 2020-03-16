<template>
    <div class="black-container">
        <div :class="{ 'nav-open': $bsidebar.showSidebar }" class="wrapper">
            <black-notifications></black-notifications>
            <sidebar-fixed-toggle-button/>
            <black-side-bar
                    :background-color="sidebarBackground"
                    :short-title="$t('sidebar.shortTitle')"
                    :title="$t('sidebar.title')"
                    v-if="$bsidebar.showSidebar"
            >
                <template slot="links" slot-scope="props">
                    <black-sidebar-item
                            :link="{
            name: $t('sidebar.dashboard'),
            icon: 'tim-icons icon-chart-pie-36',
            path: '/black'
          }"
                    >
                    </black-sidebar-item>
                    <black-sidebar-item
                            :link="{ name: $t('sidebar.pages'), icon: 'tim-icons icon-image-02' }"
                    >
                        <black-sidebar-item
                                :link="{ name: $t('sidebar.pricing'), path: '/black/pricing' }"
                        ></black-sidebar-item>
                        <black-sidebar-item
                                :link="{ name: $t('sidebar.rtl'), path: localePath('pages-rtl', 'ar') }"
                        ></black-sidebar-item>
                        <black-sidebar-item
                                :link="{ name: $t('sidebar.timeline'), path: '/black/pages/timeline' }"
                        ></black-sidebar-item>
                        <black-sidebar-item
                                :link="{ name: $t('sidebar.login'), path: '/black/login' }"
                        ></black-sidebar-item>
                        <black-sidebar-item
                                :link="{ name: $t('sidebar.register'), path: '/black/register' }"
                        ></black-sidebar-item>
                        <black-sidebar-item
                                :link="{ name: $t('sidebar.lock'), path: '/black/lock' }"
                        ></black-sidebar-item>
                        <black-sidebar-item
                                :link="{ name: $t('sidebar.userProfile'), path: '/black/pages/user' }"
                        ></black-sidebar-item>
                        <black-sidebar-item
                                :link="{ name: 'Combined App', path: '/' }"
                        ></black-sidebar-item>
                    </black-sidebar-item>
                    <black-sidebar-item
                            :link="{
            name: $t('sidebar.components'),
            icon: 'tim-icons icon-molecule-40'
          }"
                    >
                        <black-sidebar-item :link="{ name: $t('sidebar.multiLevelCollapse') }">
                            <black-sidebar-item
                                    :link="{
                name: $t('sidebar.example'),
                isRoute: false,
                path: 'https://google.com',
                target: '_blank'
              }"
                            ></black-sidebar-item>
                        </black-sidebar-item>

                        <black-sidebar-item
                                :link="{ name: $t('sidebar.buttons'), path: '/black/components/buttons' }"
                        ></black-sidebar-item>
                        <black-sidebar-item
                                :link="{
              name: $t('sidebar.gridSystem'),
              path: '/black/components/grid-system'
            }"
                        ></black-sidebar-item>
                        <black-sidebar-item
                                :link="{ name: $t('sidebar.panels'), path: '/black/components/panels' }"
                        ></black-sidebar-item>
                        <black-sidebar-item
                                :link="{
              name: $t('sidebar.sweetAlert'),
              path: '/black/components/sweet-alert'
            }"
                        ></black-sidebar-item>
                        <black-sidebar-item
                                :link="{
              name: $t('sidebar.notifications'),
              path: '/black/components/notifications'
            }"
                        ></black-sidebar-item>
                        <black-sidebar-item
                                :link="{ name: $t('sidebar.icons'), path: '/black/components/icons' }"
                        ></black-sidebar-item>
                        <black-sidebar-item
                                :link="{
              name: $t('sidebar.typography'),
              path: '/black/components/typography'
            }"
                        ></black-sidebar-item>
                    </black-sidebar-item>
                    <black-sidebar-item
                            :link="{ name: $t('sidebar.forms'), icon: 'tim-icons icon-notes' }"
                    >
                        <black-sidebar-item
                                :link="{ name: $t('sidebar.regularForms'), path: '/black/forms/regular' }"
                        ></black-sidebar-item>
                        <black-sidebar-item
                                :link="{
              name: $t('sidebar.extendedForms'),
              path: '/black/forms/extended'
            }"
                        ></black-sidebar-item>
                        <black-sidebar-item
                                :link="{
              name: $t('sidebar.validationForms'),
              path: '/black/forms/validation'
            }"
                        ></black-sidebar-item>
                        <black-sidebar-item
                                :link="{ name: $t('sidebar.wizard'), path: '/black/forms/wizard' }"
                        ></black-sidebar-item>
                    </black-sidebar-item>
                    <black-sidebar-item
                            :link="{
            name: $t('sidebar.tables'),
            icon: 'tim-icons icon-puzzle-10'
          }"
                    >
                        <black-sidebar-item
                                :link="{
              name: $t('sidebar.regularTables'),
              path: '/black/table-list/regular'
            }"
                        ></black-sidebar-item>
                        <black-sidebar-item
                                :link="{
              name: $t('sidebar.extendedTables'),
              path: '/black/table-list/extended'
            }"
                        ></black-sidebar-item>
                        <black-sidebar-item
                                :link="{
              name: $t('sidebar.paginatedTables'),
              path: '/black/table-list/paginated'
            }"
                        ></black-sidebar-item>
                    </black-sidebar-item>
                    <black-sidebar-item
                            :link="{ name: $t('sidebar.maps'), icon: 'tim-icons icon-pin' }"
                    >
                        <black-sidebar-item
                                :link="{ name: $t('sidebar.googleMaps'), path: '/black/maps/google' }"
                        ></black-sidebar-item>
                        <black-sidebar-item
                                :link="{
              name: $t('sidebar.fullScreenMaps'),
              path: '/black/maps/full-screen'
            }"
                        ></black-sidebar-item>
                        <black-sidebar-item
                                :link="{ name: $t('sidebar.vectorMaps'), path: '/black/maps/vector-map' }"
                        ></black-sidebar-item>
                    </black-sidebar-item>
                    <black-sidebar-item
                            :link="{
            name: $t('sidebar.widgets'),
            icon: 'tim-icons icon-settings',
            path: '/black/widgets'
          }"
                    ></black-sidebar-item>
                    <black-sidebar-item
                            :link="{
            name: $t('sidebar.charts'),
            icon: 'tim-icons icon-chart-bar-32',
            path: '/black/charts'
          }"
                    ></black-sidebar-item>
                    <black-sidebar-item
                            :link="{
            name: $t('sidebar.calendar'),
            icon: 'tim-icons icon-time-alarm',
            path: '/black/calendar'
          }"
                    ></black-sidebar-item>
                </template>
            </black-side-bar>
            <!--Share plugin (for demo purposes). You can remove it if don't plan on using it-->
            <sidebar-share :background-color.sync="sidebarBackground"></sidebar-share>
            <div :data="sidebarBackground" class="main-panel">
                <dashboard-navbar></dashboard-navbar>
                <router-view name="header"></router-view>

                <div
                        :class="{ content: !isFullScreenRoute }"
                        @click="toggleSidebar"
                >
                    <zoom-center-transition :duration="200" mode="out-in">
                        <!-- your content here -->
                        <nuxt></nuxt>
                    </zoom-center-transition>
                </div>
                <content-footer v-if="!isFullScreenRoute"></content-footer>
            </div>
        </div>
    </div>
</template>
<script>
    /* eslint-disable no-new */
    import PerfectScrollbar from 'perfect-scrollbar';
    import 'perfect-scrollbar/css/perfect-scrollbar.css';
    import SidebarShare from '@/components/Black/Layout/SidebarSharePlugin';

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

    import DashboardNavbar from '@/components/Black/Layout/DashboardNavbar.vue';
    import ContentFooter from '@/components/Black/Layout/ContentFooter.vue';
    import DashboardContent from '@/components/Black/Layout/Content.vue';
    import SidebarFixedToggleButton from '@/components/Black/Layout/SidebarFixedToggleButton.vue';
    import {SlideYDownTransition, ZoomCenterTransition} from 'vue2-transitions';

    export default {
        components: {
            DashboardNavbar,
            ContentFooter,
            SidebarFixedToggleButton,
            DashboardContent,
            SlideYDownTransition,
            ZoomCenterTransition,
            SidebarShare
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
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
    }

    html {
        font-family: sans-serif; // 2
        line-height: 1.15; // 3
        -webkit-text-size-adjust: 100%; // 4
        -webkit-tap-highlight-color: rgba(#000, 0); // 5
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
