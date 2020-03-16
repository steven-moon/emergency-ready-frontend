<template>
  <div class="wrapper landing-page">
    <featured/>
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
import Featured from '@/components/Sections/Featured'
import ContactUs from '@/components/Sections/ContactUs'
import Subscribe from '@/components/Sections/Subscribe'

export default {
  name: 'featured-container',
  components: {
    Featured,
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


