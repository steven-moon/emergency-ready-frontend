<template>
   <settings></settings>
</template>

<script>

   import Settings from '~/components/Settings/Settings.vue'


   export default {
      layout: "default",
      middleware: ["check-auth", "auth"],
      components: {
         Settings
      },
      data() {
         return {
            showSpinner: false,
         }
      },
      computed: {},
      methods: {},
      created() {
      },
   }
</script>
