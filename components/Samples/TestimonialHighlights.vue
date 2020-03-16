<template>
  <div class="wrapper">
    <testimonials-wrapper :data="testimonals(limit)" :whichTestimonials="whichTestimonials"></testimonials-wrapper>
  </div>
</template>
<script>

  /**
   * @ The external dependecies.
   */
  import {mapGetters} from 'vuex';

  /**
   * @ The internal dependecies.
   */
  import TestimonialsWrapper from '@/components/Common/Templates/Testimonials/TestimonialsWrapper'

  export default {
    name: 'testimonials',
    props: {
      whichTestimonials: {
        type: String,
        default: "3"
      },
      limit: {
        type: Number,
        default: 3
      }
    },
    components: {
      TestimonialsWrapper
    },
    data() {
      return {
      }
    },
    computed: {
      ...mapGetters('testimonialStore', {
        data: 'data',
      }),
    },
    methods: {
      testimonals(limit){
        return this.data(limit);
      }
    },
    mounted() {
    }
  }
</script>
<style></style>
