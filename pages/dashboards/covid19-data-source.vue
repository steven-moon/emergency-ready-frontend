<template>
   <div class="pt-6">
      <covid19-data-source></covid19-data-source>
   </div>
</template>
<script>

   // Components
   import Covid19DataSource from '@/components/Dashboards/Covid19DataSource';

   export default {
      layout: 'default',
      head () {
         return {
            title: "Emergency Ready App - Dashboard Overview",
            meta: [
               // hid is used as unique identifier. Do not use `vmid` for it as it will not work
               { hid: 'description', name: 'description', content: 'Contact us about have a custom Emergency Ready App created for your business or government agency.' }
            ]
         }
      },
      components: {
         Covid19DataSource,
      },
      data() {
         return {
         };
      },
   };
</script>
<style></style>
