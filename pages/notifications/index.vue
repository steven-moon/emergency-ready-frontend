<template>
   <div>
      <notification-list></notification-list>
   </div>
</template>

<script>

   import NotificationList from '~/components/Notification/NotificationList.vue'


   export default {
      layout: "default",
      middleware: ["check-auth", "auth"],
      components: {
         NotificationList
      },
      data() {
         return {
            isLoading: false,
            action: 'view'
         }
      },
      computed: {},
      methods: {},
      created() {
      },
   }
</script>
