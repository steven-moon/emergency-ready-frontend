<template>
  <div class="cd-section" id="testimonials" >

    <testimonials1 v-if="whichTestimonials === '1'" :data="data"></testimonials1>
    <testimonials2 v-if="whichTestimonials === '2'" :data="data"></testimonials2>
    <testimonials3 v-if="whichTestimonials === '3'" :data="data"></testimonials3>
  </div>
</template>
<script>

  import Testimonials1 from './Testimonials1';
  import Testimonials2 from './Testimonials2';
  import Testimonials3 from './Testimonials3';

  export default {
    name: 'feature',
    props: {
      whichTestimonials: {
        type: String,
        required: true
      },
      data: {
        type: Object,
        required: true
      }
    },
    components: {
      Testimonials1,
      Testimonials2,
      Testimonials3,

    }
  }
</script>
<style>
</style>
