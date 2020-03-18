<template>
  <div class="argon-container">
    <div :class="layoutClass" class="auth-layout">
      <base-nav
        v-model="showMenu"
        type="light"
        :transparent="true"
        menu-classes="justify-content-end"
        class="navbar-horizontal navbar-main"
        expand="lg"
      >
        <div slot="brand" class="navbar-wrapper">
          <nuxt-link class="navbar-brand" to="/">
            <img src="img/brand/white.png" alt="Logo white">
          </nuxt-link>
        </div>

       <template>
         <div class="navbar-collapse-header">
           <div class="row">
             <div class="col-6 collapse-brand">
               <nuxt-link to="/">
                 <img src="img/brand/green.png" alt="Logo green">
               </nuxt-link>
             </div>
             <div class="col-6 collapse-close">
               <button type="button" class="navbar-toggler" @click="showMenu = false">
                 <span></span>
                 <span></span>
               </button>
             </div>
           </div>
         </div>

         <ul class="navbar-nav mr-auto" v-if="isUserLoggedIn">
           <li class="nav-item">
             <nuxt-link to="/dashboards" class="nav-link">
               <span class="nav-link-inner--text">Dashboards</span>
             </nuxt-link>
           </li>
           <li class="nav-item">
             <nuxt-link to="/twitter-feed" class="nav-link">
               <span class="nav-link-inner--text">Twitter Feed</span>
             </nuxt-link>
           </li>
           <li class="nav-item">
             <nuxt-link to="/notifications" class="nav-link">
               <span class="nav-link-inner--text">Notifications</span>
             </nuxt-link>
           </li>
           <li class="nav-item">
             <nuxt-link to="/pricing" class="nav-link">
               <span class="nav-link-inner--text">Pricing</span>
             </nuxt-link>
           </li>
           <li class="nav-item">
             <nuxt-link to="/featured-apps" class="nav-link">
               <span class="nav-link-inner--text">Featured Apps</span>
             </nuxt-link>
           </li>
           <li class="nav-item">
             <nuxt-link to="/login" class="nav-link">
               <span class="nav-link-inner--text">Login</span>
             </nuxt-link>
           </li>
           <li class="nav-item">
             <nuxt-link to="/settings/profile" class="nav-link">
               <span class="nav-link-inner--text">Profile</span>
             </nuxt-link>
           </li>
           <li class="nav-item">
             <nuxt-link to="/admin/notifications/manage" class="nav-link">
               <span class="nav-link-inner--text">Manage Notifications</span>
             </nuxt-link>
           </li>
           <li class="nav-item">
             <nuxt-link to="/admin/notifications/send" class="nav-link">
               <span class="nav-link-inner--text">Send Notifications</span>
             </nuxt-link>
           </li>
           <li class="nav-item">
             <nuxt-link to="/contact-us" class="nav-link">
               <span class="nav-link-inner--text">Contact Us</span>
             </nuxt-link>
           </li>
           <li class="nav-item">
             <nuxt-link to="/blog" class="nav-link">
               <span class="nav-link-inner--text">Blog</span>
             </nuxt-link>
           </li>
           <li class="nav-item">
             <nuxt-link to="/" class="nav-link">
               <span class="nav-link-inner--text"></span>
             </nuxt-link>
           </li>
         </ul>
         <hr class="d-lg-none">
         <ul class="navbar-nav align-items-lg-center ml-lg-auto">
           <li class="nav-item">
             <a class="nav-link nav-link-icon" href="https://www.facebook.com/" target="_blank" rel="noopener" aria-label="Facebook">
               <i class="fab fa-facebook-square"></i>
               <span class="nav-link-inner--text d-lg-none">Facebook</span>
             </a>
           </li>
           <li class="nav-item">
             <a class="nav-link nav-link-icon" href="https://www.instagram.com/" target="_blank" rel="noopener" aria-label="Instagram">
               <i class="fab fa-instagram"></i>
               <span class="nav-link-inner--text d-lg-none">Instagram</span>
             </a>
           </li>
           <li class="nav-item">
             <a class="nav-link nav-link-icon" href="https://twitter.com/" target="_blank" rel="noopener" aria-label="Twitter">
               <i class="fab fa-twitter-square"></i>
               <span class="nav-link-inner--text d-lg-none">Twitter</span>
             </a>
           </li>
         </ul>
       </template>
      </base-nav>

      <div class="main-content">
        <nuxt></nuxt>
      </div>

      <footer class="py-5" id="footer-main">
        <div class="container">
          <div class="row align-items-center justify-content-xl-between">
            <div class="col-xl-6">
              <div class="copyright text-center text-lg-left text-muted">
                © {{year}} <a href="/" class="font-weight-bold ml-1" rel="noopener">Clever Coding LLC</a>
              </div>
            </div>
            <div class="col-xl-6">
              <ul class="nav nav-footer justify-content-center justify-content-xl-end">
                <li class="nav-item">
                  <a href="/about" class="nav-link" target="_blank" rel="noopener">About Us</a>
                </li>
                <li class="nav-item">
                  <a href="/blog/" class="nav-link" target="_blank" rel="noopener">Blog</a>
                </li>
                <li class="nav-item">
                  <a href="/privacy-policy" class="nav-link" target="_blank" rel="noopener">Terms & Privacy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
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
