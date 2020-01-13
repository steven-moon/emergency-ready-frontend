<template>
  <div class="cd-section" id="projects" >

    <project1 v-if="whichProject === '1'" :data="data"></project1>
    <project2 v-if="whichProject === '2'" :data="data"></project2>
    <project3 v-if="whichProject === '3'" :data="data"></project3>
    <project4 v-if="whichProject === '4'" :data="data"></project4>
    <project5 v-if="whichProject === '5'" :data="data"></project5>
  </div>
</template>
<script>

  import Project1 from './Project1';
  import Project2 from './Project2';
  import Project3 from './Project3';
  import Project4 from './Project4';
  import Project5 from './Project5';

  export default {
    name: 'feature',
    props: {
      whichProject: {
        type: String,
        required: true
      },
      data: {
        type: Object,
        required: true
      }
    },
    components: {
      Project1,
      Project2,
      Project3,
      Project4,
      Project5,

    }
  }
</script>
<style>
</style>
