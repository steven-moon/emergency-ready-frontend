<template>
   <admin></admin>
</template>

<script>

   import Admin from '~/components/Admin/Admin.vue'


   export default {
      layout: "default",
      middleware: ["check-auth", "auth"],
      components: {
         Admin
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
