import Sidebar from './SideBar.vue';
import SidebarItem from './SidebarItem.vue';

const BlackSidebarStore = {
  showSidebar: false,
  sidebarLinks: [],
  isMinimized: false,
  displaySidebar(value) {
    this.showSidebar = value;
  },
  toggleMinimize() {
    console.log("BEGIN: toggleMinimize");
    document.body.classList.toggle('sidebar-mini');
    // we simulate the window Resize so the charts will get updated in realtime.
    const simulateWindowResize = setInterval(() => {
      window.dispatchEvent(new Event('resize'));
    }, 180);

    // we stop the simulation of Window Resize after the animations are completed
    setTimeout(() => {
      clearInterval(simulateWindowResize);
    }, 1000);

    this.isMinimized = !this.isMinimized;
  }
};

const BlackSidebarPlugin = {
  install(Vue, options) {
    let app = new Vue({
      data: {
        blackSidebarStore: BlackSidebarStore
      }
    });
    Vue.prototype.$bsidebar = app.blackSidebarStore;
    Vue.component('black-side-bar', Sidebar);
    Vue.component('black-sidebar-item', SidebarItem);

    if (options && options.sidebarLinks) {
      BlackSidebarStore.sidebarLinks = options.sidebarLinks;
    }
  }
};

export default BlackSidebarPlugin;
