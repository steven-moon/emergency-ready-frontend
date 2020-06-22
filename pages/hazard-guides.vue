<template>
  <sub-page :header="header" :pageText="pageText" :imageURL="imageURL"></sub-page>
</template>
<script>
  import SubPage from '@/components/EmergencyReady/SubPage'
  export default {
    name: 'hazard-guides',
    components: {SubPage},
    layout: 'default',
    data () {
      return {
        title: 'Hazard Guides - Emergency Ready App',
        description: "Provide your residents with Hazard guides with the many standard guides providing in the Emergency Ready App.",
        header: "Hazard Guides",
        pageText: "The Emergency Ready App includes built in Guides for a wide variety of situations. " +
                "We can also add your organizations guides to your custom built version. " +
                "Some of the bundled guides included cover: earthquakes, hazardous weather, fires, " +
                "utility failures, public health emergencies, hazardous materials and terrorism.",
        imageURL: "/app-screenshots/emergency-response-plans-1.png",
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
