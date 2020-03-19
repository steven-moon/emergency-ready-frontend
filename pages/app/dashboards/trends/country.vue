<template>
   <div>
      <covid19-trends-by-country></covid19-trends-by-country>
   </div>
</template>
<script>

   // Components
   import Covid19TrendsByCountry from '@/components/Dashboards/Covid19TrendsByCountry';

   export default {
      layout: 'app-dashboard-layout',
      head () {
         return {
            title: "Emergency Ready App",
            meta: [
               // hid is used as unique identifier. Do not use `vmid` for it as it will not work
               { hid: 'description', name: 'description', content: 'Contact us about have a custom Emergency Ready App created for your business or government agency.' }
            ]
         }
      },
      components: {
         Covid19TrendsByCountry,
      },
      data() {
         return {
         };
      },
   };
</script>
<style></style>
