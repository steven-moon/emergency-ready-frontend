<template>
   <div>
      <covid19-trends-by-country></covid19-trends-by-country>
   </div>
</template>
<script>

   // Components
   import Covid19TrendsByCountry from '@/components/Dashboards/Covid19TrendsByCountry';

   export default {
      layout: 'argon-dashboard-layout',
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
