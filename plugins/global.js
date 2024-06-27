import Vue from 'vue';
import globalComponents from './globalComponents';
import lang from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';
import VueLazyload from 'vue-lazyload';
import VueSpinners from 'vue-spinners';
import Draggable from 'vuedraggable';
import Multiselect from 'vue-multiselect';
import VueTabs from 'vue-nav-tabs/dist/vue-tabs.js';
import VuePaginate from 'vue-paginate';
import VTooltip from 'v-tooltip';
import VueMq from 'vue-mq';

import '@/polyfills';

// Notifications plugin. Used on Notifications page
import BlackNotifications from '@/components/Black/NotificationPlugin';
// Sidebar on the right. Used as a local plugin in DashboardLayout.vue
import BlackSideBar from '@/components/Black/SidebarPlugin';
// Notifications plugin. Used on Notifications page
import ArgonNotifications from '~/components/Argon/argon-core/NotificationPlugin';
// Sidebar on the right. Used as a local plugin in DashboardLayout.vue
import ArgonSideBar from '~/components/Argon/argon-core/SidebarPlugin';

// Validation plugin used to validate forms
import VeeValidate from 'vee-validate';
// RTL (right to left plugin to support rtl layout). If you don't need support for rtl, remove this plugin
import RTLPlugin from './RTLPlugin';

export default () => {
  Vue.use(globalComponents);
  Vue.use(VueMq, {
    breakpoints: {
      mobile: 767,
      tablet: 1023,
      laptop: 1200,
      desktop: Infinity,
    },
  });

  Vue.use(VTooltip);
  Vue.use(VuePaginate);
  Vue.use(VueTabs);
  Vue.component('multiselect', Multiselect);
  Vue.component('draggable', Draggable);
  Vue.use(VueLazyload);
  locale.use(lang);
  Vue.use(VueSpinners);
  Vue.use(VueLazyload, {
    observer: true,
    // optional
    observerOptions: {
      rootMargin: '0px',
      threshold: 0.1,
    },
  });
  Vue.use(RTLPlugin);
  Vue.use(VeeValidate, { fieldsBagName: 'veeFields' });
  Vue.use(BlackSideBar);
  Vue.use(BlackNotifications);
  Vue.use(ArgonSideBar);
  Vue.use(ArgonNotifications);
};

// Import the dashboard plugins
//import './black/dashboard-plugin';
import './argon/dashboard-plugin';
