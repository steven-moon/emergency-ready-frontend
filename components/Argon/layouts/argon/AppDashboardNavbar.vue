<template>
  <base-nav
    container-classes="container-fluid"
    class="navbar-top border-bottom navbar-expand"
    :class="{'bg-success navbar-dark': type === 'default'}"
  >
    <!-- Navbar links -->
    <ul class="navbar-nav align-items-center ml-md-auto">
      <li class="nav-item d-xl-none">
        <!-- Sidenav toggler -->
        <div class="pr-3 sidenav-toggler"
             :class="{active: !$asidebar.isMinimized, 'sidenav-toggler-dark': type === 'default', 'sidenav-toggler-light': type === 'light'}"
             @click="toggleSidebar">
          <div class="sidenav-toggler-inner">
            <i class="sidenav-toggler-line"></i>
            <i class="sidenav-toggler-line"></i>
            <i class="sidenav-toggler-line"></i>
          </div>
        </div>
      </li>
    </ul>
  </base-nav>
</template>
<script>
  import { CollapseTransition } from 'vue2-transitions';
  import BaseNav from '@/components/Argon/argon-core/Navbar/BaseNav.vue';
  import Modal from '@/components/Argon/argon-core/Modal.vue';

  export default {
    components: {
      CollapseTransition,
      BaseNav,
      Modal
    },
    props: {
      type: {
        type: String,
        default: 'default', // default|light
        description: 'Look of the dashboard navbar. Default (Green) or light (gray)'
      }
    },
    computed: {
      routeName() {
        const { name } = this.$route;
        return this.capitalizeFirstLetter(name);
      }
    },
    data() {
      return {
        activeNotifications: false,
        showMenu: false,
        searchModalVisible: false,
        searchQuery: ''
      };
    },
    methods: {
      capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      },
      toggleNotificationDropDown() {
        this.activeNotifications = !this.activeNotifications;
      },
      closeDropDown() {
        this.activeNotifications = false;
      },
      toggleSidebar() {
        this.$asidebar.displaySidebar(!this.$asidebar.showSidebar);
      },
      hideSidebar() {
        this.$asidebar.displaySidebar(false);
      }
    }
  };
</script>
