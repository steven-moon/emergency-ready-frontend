<template>
  <div class="argon-container">
    <div class="wrapper">
      <argon-notifications></argon-notifications>
      <div class="main-content">
        <div>
          <nuxt></nuxt>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import BaseNav  from '~/components/Argon/argon-core/Navbar/BaseNav.vue';
  import {mapActions, mapGetters} from "vuex";

  export default {
    components: {
      BaseNav,
    },
    props: {
      backgroundColor: {
        type: String,
        default: 'black'
      }
    },
    // head () {
    //   return {
    //     title: this.title,
    //     meta: [
    //       // hid is used as unique identifier. Do not use `vmid` for it as it will not work
    //       { hid: 'description', name: 'description', content: 'Base App - Argon' }
    //     ],
    //     script: [
    //       { type: 'module', src: 'https://code.jquery.com/jquery-3.3.1.slim.min.js' },
    //       { type: 'module', src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js' },
    //       { type: 'module', src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js' }
    //     ]
    //   }
    // },
    data() {
      return {
        showMenu: false,
        menuTransitionDuration: 250,
        year: new Date().getFullYear(),
        pageClass: 'login-page',
      };
    },
    computed: {
      ...mapActions([
        'logout'
      ]),
      ...mapGetters({
        isUserLoggedIn: 'isUserLoggedIn',
      }),

      title() {
        return `${this.$route.name} Page`;
      },
      layoutClass() {
        let exceptions = ['index', 'home']
        if (!exceptions.includes(this.$route.name)) {
          return 'bg-default'
        } else {
          return ''
        }
      }
    },
    methods: {
      closeMenu() {
        document.body.classList.remove('nav-open');
        this.showMenu = false;
      },
    },
    watch: {
      '$route.path'() {
        if (this.showMenu) {
          this.closeMenu();
        }
      }
    }
  };
</script>
<style lang="scss">
  .auth-layout {
    min-height: 100vh;
  }

  body {
    margin: 0;
  }
</style>
