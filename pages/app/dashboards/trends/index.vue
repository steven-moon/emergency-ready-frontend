<template>
   <div>
      <covid19-trends></covid19-trends>
   </div>
</template>
<script>

   // Components
   import Covid19Trends from '@/components/Dashboards/Covid19Trends';

   export default {
      layout: 'app-dashboard-layout',
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
