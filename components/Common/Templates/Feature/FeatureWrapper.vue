<!--

Feature 1
  - backgroundImage: No
  - withImage: No
  - infoImages: No
Feature 2
  - backgroundImage: Yes
  - withImage: No
  - infoImages: No
Feature 3
  - backgroundImage: No
  - withImage: No
  - infoImages: No
  - info icons with circle
Feature 4
  - backgroundImage: No
  - withImage: No
  - infoImages: Yes as card Info
Feature 5
  - backgroundImage: Yes
  - withImage: Yes on right half
  - infoImages:
Feature 6
  - backgroundImage: No
  - withImage: Yes in center
  - infoImages: No
  - 4 info slots
Feature 7
  - backgroundImage: Yes
  - withImage: Yes on right third
  - infoImages: No
Feature 8
  - backgroundImage: Yes
  - withImage: No
  - infoImages: Yes on Top
  - 4 info slots

  -->
<template>
  <div class="cd-section" id="features" >

    <feature1 v-if="whichFeature === '1'" :data="data"></feature1>
    <feature2 v-if="whichFeature === '2'" :data="data"></feature2>
    <feature3 v-if="whichFeature === '3'" :data="data"></feature3>
    <feature4 v-if="whichFeature === '4'" :data="data"></feature4>
    <feature5 v-if="whichFeature === '5'" :data="data"></feature5>
    <feature6 v-if="whichFeature === '6'" :data="data"></feature6>
    <feature7 v-if="whichFeature === '7'" :data="data"></feature7>
    <feature8 v-if="whichFeature === '8'" :data="data"></feature8>
  </div>
</template>
<script>

  import Feature1 from './Feature1';
  import Feature2 from './Feature2';
  import Feature3 from './Feature3';
  import Feature4 from './Feature4';
  import Feature5 from './Feature5';
  import Feature6 from './Feature6';
  import Feature7 from './Feature7';
  import Feature8 from './Feature8';

  export default {
    name: 'feature',
    props: {
      whichFeature: {
        type: String,
        required: true
      },
      data: {
        type: Object,
        required: true
      }
    },
    components: {
      Feature1,
      Feature2,
      Feature3,
      Feature4,
      Feature5,
      Feature6,
      Feature7,
      Feature8,

    }
  }
</script>
<style>
</style>
