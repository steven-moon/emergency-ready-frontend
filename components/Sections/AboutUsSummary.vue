<template>

  <project-wrapper whichProject="5" :data="aboutUs"/>
</template>


<script>
  /**
   * @ The external dependecies.
   */
  import {mapGetters} from 'vuex';

  /**
   * @ The internal dependecies.
   */
  import ProjectWrapper from '@/components/Common/SectionTemplates/Project/ProjectWrapper'


  export default {
    name: 'AboutUsSummary',
    components: {
      ProjectWrapper
    },
    data() {
      return {}
    },
    computed: {
      ...mapGetters('pageDataStore', {
        aboutUs: 'aboutUs',
      }),
    },
    mounted() {
    }
  }
</script>
