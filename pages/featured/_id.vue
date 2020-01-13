<template>
  <div class="wrapper landing-page">
    <featured-app/>
    <contact-us :withMap="true"/>
    <subscribe :showImage="true"/>
  </div>
</template>
<script>
/**
 * @ The external dependecies.
 */


/**
 * @ The internal dependecies.
 */
import FeaturedApp from '@/components/Sections/FeaturedApp'
import ContactUs from '@/components/Sections/ContactUs'
import Subscribe from '@/components/Sections/Subscribe'

export default {
  name: 'featured-app-container',
  components: {
    FeaturedApp,
    ContactUs,
    Subscribe
  },
  data() {
    return {
    };
  },
  mounted() {
  }
}
</script>


