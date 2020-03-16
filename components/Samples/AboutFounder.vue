<template>
  <div class="wrapper landing-page">
    <team-wrapper whichTeam="single" :data="ceoData"></team-wrapper>
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
  import TeamWrapper from '@/components/Common/Templates/Team/TeamWrapper'


  export default {
    name: 'sample',
    components: {
      TeamWrapper
    },
    data() {
      return {
      }
    },
    computed: {
      ...mapGetters('teamStore', {
        ceoData: 'ceoData'
      }),
    },
    methods: {
    },
    mounted() {
    }
  }
</script>
