<template>
  <div class="wrapper contact-page">
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
  import ContactUs from '@/components/Sections/ContactUs'
  import Subscribe from '@/components/Sections/Subscribe'


  export default {
    name: 'contactus',
    components: {
      ContactUs,
      Subscribe
    },
    head () {
      return {
        title: this.title,
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          { hid: 'description', name: 'description', content: 'Do you have an idea for the next big app? Don\'t let that idea fly by and contact Clever Coding today. Our app delevlopment company is ready for anything.' }
        ]
      }
    },
    data() {
      return {
        title: "App Designer - Contact Our Lehi Office | Clever Coding"
      }
    },
    mounted() {
    }
  }
</script>
<style></style>
