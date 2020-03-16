<template>
  <div class="ui-kit-container">
    <main-navbar :color-on-scroll="450"></main-navbar>
    <nuxt />
  </div>
</template>
<script>
  import MainNavbar from "@/components/UIKit/layout/MainNavbar.vue";
  export default {
    components: {
      MainNavbar
    }
  }
</script>
<style lang="scss">
  body {
    margin: 0;
  }
</style>
