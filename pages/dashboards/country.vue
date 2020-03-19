<template>
   <div>
      <covid19-overview-by-country></covid19-overview-by-country>
   </div>
</template>
<script>

   // Components
   import Covid19OverviewByCountry from '@/components/Dashboards/Covid19OverviewByCountry';

   export default {
      layout: 'argon-dashboard-layout',
      head () {
         return {
            title: "Emergency Ready App - Dashboard Overview by Country",
            meta: [
               // hid is used as unique identifier. Do not use `vmid` for it as it will not work
               { hid: 'description', name: 'description', content: 'Contact us about have a custom Emergency Ready App created for your business or government agency.' }
            ]
         }
      },
      components: {
         Covid19OverviewByCountry,
      },
      data() {
         return {
         };
      },
   };
</script>
<style></style>
