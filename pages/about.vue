<template>
  <div class="wrapper about-page">
    <about-us-summary></about-us-summary>
    <contact-us :withMap="true"></contact-us>
    <subscribe :showImage="true"></subscribe>
  </div>
</template>
Emergency Ready
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
        { hid: 'description', name: 'description', content: 'Clever Coding was one of the first iOS developers on the market, and we haven\'t stopped since. Learn about our roots and how we became the company we are. ' }
      ]
    }
  },
  data() {
    return {
      title: "Application Development Lehi - Learn About Our Mobile App Development Company! | Clever Coding"
    }
  },
  mounted() {
  }
}
</script>
<style></style>
