<template>
  <div class="wrapper landing-page">
    <team-wrapper whichTeam="3" :data="team(3)"></team-wrapper>
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
        data: 'data',
      }),
    },
    methods: {
      team(limit){
        return this.data(limit);
      }
    },
    mounted() {
      // initParallax()
    }
  }
</script>
