<template>
  <div class="cd-section" id="teams" >

    <team1 v-if="whichTeam === '1'" :data="data"></team1>
    <team2 v-if="whichTeam === '2'" :data="data"></team2>
    <team3 v-if="whichTeam === '3'" :data="data"></team3>
    <team4 v-if="whichTeam === '4'" :data="data"></team4>
    <team5 v-if="whichTeam === '5'" :data="data"></team5>
    <single v-if="whichTeam === 'single'" :data="data"></single>
  </div>
</template>
<script>

  import Team1 from './Team1';
  import Team2 from './Team2';
  import Team3 from './Team3';
  import Team4 from './Team4';
  import Team5 from './Team5';
  import Single from './Single';

  export default {
    name: 'feature',
    props: {
      whichTeam: {
        type: String,
        required: true
      },
      data: {
        type: Object,
        required: true
      }
    },
    components: {
      Team1,
      Team2,
      Team3,
      Team4,
      Team5,
      Single

    }
  }
</script>
<style>
</style>
