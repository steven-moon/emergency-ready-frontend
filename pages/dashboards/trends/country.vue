<template>
   <div>
<!--      <covid19-trends-by-country></covid19-trends-by-country>-->
      <covid19-overview></covid19-overview>
   </div>
</template>
<script>

   // Components
   // import Covid19TrendsByCountry from '@/components/Dashboards/Covid19TrendsByCountry';
   import Covid19Overview from '@/components/Dashboards/Covid19Overview';

   export default {
      layout: 'argon-dashboard-layout',
      head () {
         return {
            title: "Emergency Ready App - Trends Dashboard by Country",
            meta: [
               // hid is used as unique identifier. Do not use `vmid` for it as it will not work
               { hid: 'description', name: 'description', content: 'Contact us about have a custom Emergency Ready App created for your business or government agency.' }
            ]
         }
      },
      components: {
         Covid19Overview,
      },
      data() {
         return {
         };
      },
   };
</script>
<style></style>
