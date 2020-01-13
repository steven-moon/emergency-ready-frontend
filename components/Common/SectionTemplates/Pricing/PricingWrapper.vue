<template>
  <div class="cd-section" id="pricing" >

    <price1 v-if="whichPricing === '1'" :data="data"></price1>
    <price2 v-if="whichPricing === '2'" :data="data"></price2>
    <price3 v-if="whichPricing === '3'" :data="data"></price3>
    <price4 v-if="whichPricing === '4'" :data="data"></price4>
    <price5 v-if="whichPricing === '5'" :data="data"></price5>
  </div>
</template>
<script>

  import Price1 from './Price1';
  import Price2 from './Price2';
  import Price3 from './Price3';
  import Price4 from './Price4';
  import Price5 from './Price5';

  export default {
    name: 'pricing',
    props: {
      whichPricing: {
        type: String,
        required: true
      },
      data: {
        type: Object,
        required: true
      }
    },
    components: {
      Price1,
      Price2,
      Price3,
      Price4,
      Price5,

    }
  }
</script>
<style>
</style>
