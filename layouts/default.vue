<template>
  <div class="ui-kit-container">
    <main-navbar :color-on-scroll="0"></main-navbar>
    <nuxt />
    <app-links></app-links>
    <contact-us></contact-us>
<!--    <subscribe :showImage="true"></subscribe>-->
    <main-footer></main-footer>
  </div>
</template>
<script>
  import MainNavbar from "@/components/Common/MainNavbar.vue";
  import MainFooter from "@/components/Common/MainFooter.vue";
  //import ContactUs from '@/components/Sections/ContactUs'
  import ContactUs from '@/components/Common/pages/sections/Contact';
  import AppLinks from '@/components/Common/pages/sections/AppLinks';
  import Subscribe from '@/components/Sections/Subscribe'
  export default {
    components: {
      AppLinks,
      MainFooter,
      MainNavbar,
      ContactUs,
      Subscribe,
    }
  }
</script>
<style lang="scss">
  body {
    margin: 0;
  }
</style>
