<template>
  <sub-page :header="header" :pageText="pageText" :imageURL="imageURL"></sub-page>
</template>
<script>
import SubPage from '@/components/EmergencyReady/SubPage'
export default {
  name: 'send-emergency-notifications',
  components: {SubPage},
  layout: 'default',
  data () {
    return {
      title: 'Send Emergency Notifications - Emergency Ready App',
      description: "Have the ability to send your residents emergency notifications straight to their mobile device.",
      header: "Send Notifications",
      pageText: "With this feature you will have the ability to send vital notification " +
          "directly to users mobile phone or tablet using the built in Apple and Google Push Notification System. In the event of an emergency it is never more vital to have " +
          "the ability to communicate to affected individual. You can send plain text messages or use HTML markup to include images, graphics and styling to your notifications. This feature can allow you to let people know where " +
          "emergency muster areas are or alert them of imminent danger approaching.  Or share other useful messages your organization would like to share with your users.",
      imageURL: "/er-images/shutterstock_emergency_notification_no_words.jpg",
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