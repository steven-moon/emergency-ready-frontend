<template>
   <users/>
</template>

<script>

   import Users from '~/components/Admin/Users.vue'
   import CommonAPI from '~/api/CommonAPI';

   export default {
      layout: "default",
      middleware: ["check-auth", "auth"],
      components: {
         Users
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
      mounted() {
         CommonAPI.getAppUsers(this.$store,this.$store.getters.getAuthToken);
      }
   }
</script>
