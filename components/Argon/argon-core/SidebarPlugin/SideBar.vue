<template>
  <div class="sidenav navbar navbar-vertical fixed-left navbar-expand-xs navbar-light bg-white"
       @mouseenter="$asidebar.onMouseEnter()"
       @mouseleave="$asidebar.onMouseLeave()"
       :data="backgroundColor">
    <div class="scrollbar-inner" ref="sidebarScrollArea">
      <div class="sidenav-header d-flex align-items-center">
        <a class="navbar-brand" href="#">
          <img src="/img/brand/blue.png" class="navbar-brand-img" alt="Sidebar logo">
        </a>
        <div class="ml-auto">
          <!-- Sidenav toggler -->
          <div  class="sidenav-toggler d-block d-xl-none pr-2"
               :class="{'active': !$asidebar.isMinimized }"
               @click="minimizeSidebar">
            <div class="sidenav-toggler-inner">
              <i class="sidenav-toggler-line"></i>
              <i class="sidenav-toggler-line"></i>
              <i class="sidenav-toggler-line"></i>
            </div>
          </div>
        </div>
      </div>
      <slot></slot>
      <div class="navbar-inner">
        <ul class="navbar-nav">
          <slot name="links">
            <argon-sidebar-item
              v-for="(link, index) in sidebarLinks"
              :key="link.name + index"
              :link="link"
            >
              <argon-sidebar-item
                v-for="(subLink, index) in link.children"
                :key="subLink.name + index"
                :link="subLink"
              >
              </argon-sidebar-item>
            </argon-sidebar-item>
          </slot>
        </ul>
        <slot name="links-after"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'sidebar',
  props: {
    title: {
      type: String,
      default: 'Creative Tim',
      description: 'Sidebar title'
    },
    shortTitle: {
      type: String,
      default: 'CT',
      description: 'Sidebar short title'
    },
    logo: {
      type: String,
      default: 'https://demos.creative-tim.com/nuxt-argon-dashboard-pro/img/brand/green.png',
      description: 'Sidebar app logo'
    },
    backgroundColor: {
      type: String,
      default: 'vue',
      validator: value => {
        let acceptedValues = [
          '',
          'vue',
          'blue',
          'green',
          'orange',
          'red',
          'primary'
        ];
        return acceptedValues.indexOf(value) !== -1;
      },
      description:
        'Sidebar background color (vue|blue|green|orange|red|primary)'
    },
    sidebarLinks: {
      type: Array,
      default: () => [],
      description:
        "List of sidebar links as an array if you don't want to use components for these."
    },
    autoClose: {
      type: Boolean,
      default: true,
      description:
        'Whether sidebar should autoclose on mobile when clicking an item'
    }
  },
  provide() {
    return {
      autoClose: this.autoClose
    };
  },
  computed: {
    showMenuButton(){
      if(process.client) {
        return this.$asidebar.breakpoint <= window.innerWidth;
      }else{
        return true;
      }
    }
  },
  methods: {
    minimizeSidebar() {
      //if (this.$asidebar) {
        this.$asidebar.toggleMinimize();
      //}
    }
  },
  mounted() {
    this.$asidebar.isMinimized = this.$asidebar.breakpoint < window.innerWidth
    this.minimizeSidebar()
  },
  beforeDestroy() {
    if (this.$asidebar.showSidebar) {
      this.$asidebar.showSidebar = false;
    }
  }
};
</script>
