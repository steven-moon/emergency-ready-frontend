<template>
  <sub-page :header="header" :pageText="pageText" :imageURL="imageURL"></sub-page>
</template>
<script>
  import SubPage from '@/components/EmergencyReady/SubPage'
  import UtilsMixin from "~/mixins/utils";

  export default {
    name: 'emergency-response-plans',
    components: {SubPage},
    mixins: [UtilsMixin],
    layout: 'default',
    data () {
      return {
        title: 'Emergency Response Plans - Emergency Ready App',
        description: "Your organization can have your emergency response plans in your own custom Emergency Ready App",
        header: "Emergency Response Plans",
        pageText: "Not only can your areas custom emergency response plans be listed here so users have easy access " +
                "to it but users can also create their own emergency response plans based on their individual needs. " +
                "The app will have the ability to walk users through the process of making a plan for emergencies " +
                "as well as keeping inventory and documenting specific needs. It also allows them to prioritize " +
                "action plans. Plans on the mobile app include Family plan, protective actions, Insurance information, " +
                "Home inventory, Hazard hunt checklists, evacuation lists and more.",
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
