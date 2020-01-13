<template>
  <div>
    <main-navbar></main-navbar>
    <nuxt />
    <main-footer></main-footer>
  </div>
</template>
<script>
import MainNavbar from '@/components/Common/MainNavbar.vue'
import MainFooter from '@/components/Common/MainFooter.vue'
export default {
  components: {
    MainFooter,
    MainNavbar
  },
  mounted() {
    if (process.browser) {
      this.$gtag('config', 'G-0TVSZXD996', {
        page_path: this.$route.fullPath,
      })
    }
  }
}
</script>
<style></style>
