<template>

  <project-wrapper whichProject="5" :data="whoIsCleverCoding"></project-wrapper>
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
