<template>
   <div>
<!--      <covid19-breakdown></covid19-breakdown>-->

      <covid19-overview></covid19-overview>
   </div>
</template>
<script>

   // Components
   // import Covid19Breakdown from '@/components/Dashboards/Covid19Breakdown';

   import Covid19Overview from '@/components/Dashboards/Covid19Overview';
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
         Covid19Overview,
      },
      data() {
         return {
         };
      },
   };
</script>
<style></style>
