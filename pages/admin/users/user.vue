<template>
   <user/>
</template>

<script>

   import User from '~/components/Admin/User.vue'


   export default {
      layout: "default",
      middleware: ["check-auth", "auth"],
      components: {
         User
      },
      data() {
         return {
         }
      },
      computed: {},
      methods: {},
      created() {
      },
   }
</script>
