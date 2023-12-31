import Sidebar from './SideBar.vue';
import SidebarItem from './SidebarItem.vue';

const ArgonSidebarStore = {
  showSidebar: false,
  sidebarLinks: [],
  isMinimized: false,
  breakpoint: 10000,
  activeChart: "confirmed",
  activeDashboard: "trends-by-country",
  hovered: false,
  keepPinned(){
    if (process.client) {
      return window.innerWidth > this.breakpoint;
    }else{
      return false;
    }
  },
  displaySidebar(value) {
    this.showSidebar = value;
  },
  setActiveChart(value){
    this.activeChart = value;
  },
  setActiveDashboard(value) {
    console.log("BEGIN: activeDashboard: " + value);
    // if (process.client) {
    //     if (window.innerWidth > this.breakpoint) {
    //       return;
    //     }
    // }
    this.activeDashboard = value;

    // let docClasses = document.body.classList
    // if (value) {
    //   docClasses.add('g-sidenav-pinned')
    //   docClasses.add('g-sidenav-show')
    //   docClasses.remove('g-sidenav-hidden')
    // } else {
    //   docClasses.add('g-sidenav-hidden')
    //   docClasses.remove('g-sidenav-pinned')
    //   docClasses.remove('g-sidenav-show')
    // }
  },
  toggleMinimize() {
    this.isMinimized = !this.isMinimized;
    this.showSidebar = this.isMinimized;
    // let docClasses = document.body.classList
    // if (this.isMinimized) {
    //   docClasses.add('g-sidenav-hidden')
    //   docClasses.remove('g-sidenav-pinned')
    //   docClasses.remove('g-sidenav-show')
    // } else {
    //   docClasses.add('g-sidenav-pinned')
    //   docClasses.add('g-sidenav-show')
    //   docClasses.remove('g-sidenav-hidden')
    // }
    // if (this.hovered) {
    //   docClasses.add('g-sidenav-show')
    // }
  },
  onMouseEnter() {
    this.hovered = true
    if (this.isMinimized) {
      // document.body.classList.add('g-sidenav-show')
      // document.body.classList.remove('g-sidenav-hidden')
    }
  },
  onMouseLeave() {
    this.hovered = false
    // if (this.isMinimized) {
    //   let docClasses = document.body.classList
    //   docClasses.remove('g-sidenav-show')
    //   docClasses.add('g-sidenav-hide')
    //   setTimeout(() => {
    //     docClasses.remove('g-sidenav-hide')
    //     docClasses.add('g-sidenav-hidden')
    //   }, 300)
    // }
  }
};

const ArgonSidebarPlugin = {
  install(Vue, options) {
    if (options && options.sidebarLinks) {
      ArgonSidebarStore.sidebarLinks = options.sidebarLinks;
    }
    let app = new Vue({
      data: {
        asidebar: ArgonSidebarStore
      }
    });
    Vue.prototype.$asidebar = app.asidebar;
    Vue.component('argon-side-bar', Sidebar);
    Vue.component('argon-sidebar-item', SidebarItem);
  }
};

export default ArgonSidebarPlugin;
