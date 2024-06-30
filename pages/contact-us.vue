<template>
  <div></div>
</template>

<script>
import UtilsMixin from "~/mixins/utils";


  export default {
    name: 'contact-us',
    layout: 'default',
    mixins: [UtilsMixin],
    data () {
      return {
        title: 'Contact Us - Emergency Ready App',
        description: "We would love to answer any questions you may have.",
      }
    },
    head () {
      return {
        title: this.title,
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          { hid: 'og:title', name: 'og:title', content: this.title },
          { hid: 'description', name: 'description', content: this.description },
          { hid: 'og:description', name: 'og:description', content: this.description },
          { hid: 'og:site_name', name: 'og:site_name', content: "Emergency Ready App" },
          { hid: 'apple-mobile-web-app-title', name: 'apple-mobile-web-app-title', content: this.title },
        ]
      }
    },
  }
</script>
