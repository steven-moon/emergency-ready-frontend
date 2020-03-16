<template>
  <div class="ui-kit-container">
    <main-navbar :color-on-scroll="450"></main-navbar>
    <nuxt />
    <main-footer type="default"></main-footer>
  </div>
</template>
<script>
  import MainNavbar from "@/components/UIKit/layout/MainNavbar.vue";
  import MainFooter from "@/components/UIKit/layout/MainFooter.vue";
  export default {
    components: {
      MainFooter,
      MainNavbar
    }
  }
</script>
<style lang="scss">
  body {
    margin: 0;
  }
</style>
