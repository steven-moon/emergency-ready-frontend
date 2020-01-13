<template>
  <div>
    <main-navbar></main-navbar>
    <nuxt />
  </div>
</template>
<script>
import MainNavbar from '@/components/Common/MainNavbar.vue'
import MainFooter from '@/components/Common/MainFooter.vue'
export default {
  components: {
    MainNavbar
  }
}
</script>
<style></style>
