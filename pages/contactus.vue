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
          { hid: 'description', name: 'description', content: 'Emergency Ready' }
        ]
      }
    },
    data() {
      return {
        title: "Contact Emergency Ready"
      }
    },
    mounted() {
    }
  }
</script>
<style></style>
