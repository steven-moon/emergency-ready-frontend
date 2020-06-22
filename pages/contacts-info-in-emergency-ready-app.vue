<template>
  <sub-page :header="header" :pageText="pageText" :imageURL="imageURL"></sub-page>
</template>
<script>
  import SubPage from '@/components/EmergencyReady/SubPage'
  export default {
    name: 'contacts-info',
    components: {SubPage},
    layout: 'default',
    data () {
      return {
        title: 'Contact Info in the Emergency Ready App',
        description: "Add your local contact info into your custom emergency ready app.",
        header: "Custom Contact Info",
        pageText: "This feature will have all of your areas vital emergency contacts listed. Users can easily find " +
                "vital contacts for every type of situation. There are also pre-generated national emergency " +
                "contacts listed such as FEMA, Ready.gov, Citizens Corps, Us Department of Homeland Security, " +
                "CDC, national Weather Service and Red Cross.",
        imageURL: "/app-screenshots/custom-contacts.png",
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
