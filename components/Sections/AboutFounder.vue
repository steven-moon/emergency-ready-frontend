<template>
  <div class="wrapper landing-page">
    <team-wrapper whichTeam="single" :data="founderData"/>
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
  import TeamWrapper from '@/components/Common/SectionTemplates/Team/TeamWrapper'


  export default {
    name: 'AboutFounder',
    components: {
      TeamWrapper
    },
    data() {
      return {
      }
    },
    computed: {
      ...mapGetters('pageDataStore', {
        founderData: 'founderData',
      }),
    },
    methods: {
    },
    mounted() {
    }
  }
</script>
