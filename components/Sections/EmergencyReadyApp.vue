
<template>
  <!--     *********     FEATURES 6      *********      -->
  <div class="cd-section" id="features" >
    <div class="featured-app">
      <div class="container center">
        <div class="row" v-if="title">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title">{{title}}</h2>
            <div v-html="description" class="text-primary"></div>
          </div>
        </div>
      <div class="row center">
        <device v-if="images && images.length > 0" :images="images"/>
      </div>
    </div>
    </div>
  </div>
  <!--     *********    END FEATURES 6      *********      -->
</template>
<script>
  /**
   * @ The external dependecies.
   */
  import {mapGetters} from 'vuex';

  /**
   * @ The internal dependecies.
   */
  import Device from '@/components/Common/Device'
  export default {
    name: 'featured-app',
    components: {
      Device
    },
    data() {
      return {
        title: "The Emergency Ready App allows users to access emergency information on the go during emergencies.",
        description: "Users can create interactive emergency kits, create customized family plans and can view preparedness guides so they are more informed of what to do in an emergency. " +
        " Contact us to learn about having a custom branded version of the Emergency Ready App created for your business or government agency.",
        images: [
          '/img/featured/emergency-ready-1.png',
          '/img/featured/emergency-ready-2.png',
          '/img/featured/emergency-ready-3.png',
          '/img/featured/emergency-ready-4.png',
          '/img/featured/emergency-ready-5.png',]
      }
    },
    mounted() {
    },
    created() {
    }
  }
</script>
<style>
</style>









