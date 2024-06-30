<template>
  <sub-page :header="header" :pageText="pageText" :imageURL="imageURL"></sub-page>
</template>
<script>
  import SubPage from '@/components/EmergencyReady/SubPage'
  import UtilsMixin from "~/mixins/utils";

  export default {
    name: 'custom-branded',
    layout: 'default',
    components: {SubPage},
    mixins: [UtilsMixin],
    data () {
      return {
        title: 'Custom Emergency Preparedness App',
        description: "Your organization can have it's own custom Emergency Preparedness App",
        header: "Custom Branded Emergency App",
        pageText: "Have your own custom iOS and Android Apps available for your target users such as: residents " +
                "of your city, county or state, students at your school, or your employees. " +
                "Your app with include your Logo.  It will include all the contact info that would be needed " +
                "by your user such as local police, firefighters, hospitials, utility companies, etc.  We can " +
                "also add in any custom guides or material your organization already has.",
        imageURL: "/app-screenshots/custom-branded.png",
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
<style>
</style>
