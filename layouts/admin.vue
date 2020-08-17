<template>
  <div class="ui-kit-container">
    <admin-navbar :color-on-scroll="0"></admin-navbar>
    <nuxt />
    <admin-footer></admin-footer>
  </div>
</template>
<script>
  import AdminNavbar from "@/components/Common/AdminNavbar.vue";
  import AdminFooter from "@/components/Common/AdminFooter.vue";

  export default {
    components: {
      AdminNavbar,
      AdminFooter
    }
  }
</script>
<style lang="scss">
  body {
    margin: 0;
  }
</style>
