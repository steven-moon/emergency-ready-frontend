<template>
   <div>
      <covid19-overview></covid19-overview>
   </div>
</template>
<script>

   // Components
   import Covid19Overview from '@/components/Dashboards/Covid19Overview';

   export default {
      layout: 'app-dashboard-layout',
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
