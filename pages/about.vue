<template>
  <div class="wrapper about-page">
    <about-us-summary></about-us-summary>
    <contact-us :withMap="true"></contact-us>
    <subscribe :showImage="true"></subscribe>
  </div>
</template>
Base App
<script>

import AboutUsSummary from '@/components/Sections/AboutUsSummary'
import ContactUs from '@/components/Sections/ContactUs'
import Subscribe from '@/components/Sections/Subscribe'

export default {
  name: 'AboutUs',
  components: {
    AboutUsSummary,
    ContactUs,
    Subscribe,
  },
  head () {
    return {
      title: this.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'Base App' }
      ]
    }
  },
  data() {
    return {
      title: "Base App - About Us"
    }
  },
  mounted() {
  }
}
</script>
<style></style>
