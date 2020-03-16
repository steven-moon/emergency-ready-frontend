<template>
   <div>
      <notification v-if="action === 'view'"></notification>
      <notification-edit v-else></notification-edit>
   </div>
</template>

<script>

   import Notification from '~/components/Notification/Notification.vue'
   import NotificationEdit from '~/components/Notification/NotificationEdit.vue'


   export default {
      layout: "default",
      middleware: ["check-auth", "auth"],
      components: {
         Notification,
         NotificationEdit
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
