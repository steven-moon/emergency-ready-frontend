<template>
   <div>
      <covid19-trends></covid19-trends>
   </div>
</template>
<script>

   // Components
   import Covid19Trends from '@/components/Dashboards/Covid19Trends';

   export default {
      layout: 'argon-dashboard-layout',
      head () {
         return {
            title: "Emergency Ready App - Trends Dashboard",
            meta: [
               // hid is used as unique identifier. Do not use `vmid` for it as it will not work
               { hid: 'description', name: 'description', content: 'Contact us about have a custom Emergency Ready App created for your business or government agency.' }
            ]
         }
      },
      components: {
         Covid19Trends,
      },
      data() {
         return {
         };
      },
   };
</script>
<style></style>
