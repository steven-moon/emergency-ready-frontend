<template>
   <profile/>
</template>

<script>

   import Profile from '~/components/Settings/Profile.vue'


   export default {
      layout: "default",
      middleware: ["check-auth", "auth"],
      components: {
         Profile
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
