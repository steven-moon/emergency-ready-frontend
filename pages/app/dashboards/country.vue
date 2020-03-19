<template>
   <div>
      <covid19-overview-by-country></covid19-overview-by-country>
   </div>
</template>
<script>

   // Components
   import Covid19OverviewByCountry from '@/components/Dashboards/Covid19OverviewByCountry';

   export default {
      layout: 'app-dashboard-layout',
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
