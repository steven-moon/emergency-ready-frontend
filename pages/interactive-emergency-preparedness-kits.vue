<template>
  <sub-page :header="header" :pageText="pageText" :imageURL="imageURL"></sub-page>
</template>
<script>
  import SubPage from '@/components/EmergencyReady/SubPage'
  export default {
    name: 'interactive-emergency-kits',
    components: {SubPage},
    layout: 'default',
    data () {
      return {
        title: 'Interactive Emergency Preparedness Kits - Emergency Ready App',
        description: "Your custom Emergency Preparedness Mobile App will have the ability to walk users through " +
                "the process of preparing emergency kits for their personal use.",
        header: "Interactive Emergency Preparedness Kits",
        pageText: "Your custom Emergency Preparedness Mobile App will have the ability to walk users through " +
                "the process of preparing emergency kits for their personal use. It lists essential items " +
                "for various emergency situations and allows the user to track their inventory for these " +
                "emergencies. Of course, every individual has different needs so the app provides something " +
                "for everyone. Kits on the mobile app include…..Evacuation kit, Sanitation kit, Important " +
                "Documents kit, Vehicle kit, Pet kit, Shelter-In-Place kit, Elderly and special needs kit, " +
                "Child/baby kit, First Aid kit and more.",
        imageURL: "/app-screenshots/make-a-plan-1.png",
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
