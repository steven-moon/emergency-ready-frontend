<template>
   <div>
<!--      <covid19-trends></covid19-trends>-->
      <covid19-overview></covid19-overview>
   </div>
</template>
<script>

   // Components
   // import Covid19Trends from '@/components/Dashboards/Covid19Trends';
   import Covid19Overview from '@/components/Dashboards/Covid19Overview';

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
         Covid19Overview,
      },
      data() {
         return {
         };
      },
   };
</script>
<style></style>
