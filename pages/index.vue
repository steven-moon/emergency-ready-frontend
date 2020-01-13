<template>
  <div class="wrapper landing-page">
    <about-us-summary></about-us-summary>
    <contact-us :withMap="true"></contact-us>
    <subscribe :showImage="true"></subscribe>
  </div>
</template>
<script>
  /**
   * @ The external dependecies.
   */


  /**
   * @ The internal dependecies.
   */
  import AboutUsSummary from '@/components/Sections/AboutUsSummary'
  import ContactUs from '@/components/Sections/ContactUs'
  import Subscribe from '@/components/Sections/Subscribe'

  export default {
    name: 'Home',
    components: {
      AboutUsSummary,
      AboutFounder,
      ContactUs,
      Subscribe,
    },
    head () {
      return {
        title: this.title,
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          { hid: 'description', name: 'description', content: 'Welcome to Clever Coding. Our mobile app and web development company is based in Lehi, Utah but we service the country. Learn more about our company today!' }
        ]
      }
    },
    data() {
      return {
        title: "Clever Coding - Welcome To Clever Coding"
      }
    },
    mounted() {
      // initParallax()
    }
  }
</script>
<style></style>
