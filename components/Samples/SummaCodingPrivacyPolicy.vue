<template>
  <div class="cd-section" id="features" >
    <div class="featured-app">
      <div class="container center">
        <h3>At Clever Coding we value your privacy and data.  We will never sell or share your information with third-parties.  At anytime you can request a full data dump of all information related to your account and of all your data</h3>
      </div>
    </div>
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
  import ProjectWrapper from '@/components/Common/Templates/Project/ProjectWrapper'


  export default {
    name: 'project',
    components: {
      ProjectWrapper
    },
    data() {
      return {}
    },
    computed: {
      ...mapGetters('pageDataStore', {
        whoIsCleverCoding: 'whoIsCleverCoding',
      }),
    },
    mounted() {
    }
  }
</script>
