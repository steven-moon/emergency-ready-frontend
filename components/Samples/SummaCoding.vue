
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
<!--        <div class="row top">-->
<!--          <div class="col-md-4">-->
<!--            <div class="info info-horizontal" v-if="data.info1 && data.info1.title">-->
<!--              <div class="icon icon-info">-->
<!--                <i :class="data.info1.icon"></i>-->
<!--              </div>-->
<!--              <div class="description">-->
<!--                <h4 class="info-title">{{data.info1.title}}</h4>-->
<!--                <p v-html="data.info1.description"></p>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="col-md-4">-->
<!--            <div class="info info-horizontal" v-if="data.info2 && data.info2.title">-->
<!--              <div class="icon icon-danger">-->
<!--                <i :class="data.info2.icon"></i>-->
<!--              </div>-->
<!--              <div class="description">-->
<!--                <h4 class="info-title">{{data.info2.title}}</h4>-->
<!--                <p v-html="data.info2.description"></p>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="col-md-4">-->
<!--            <div class="info info-horizontal" v-if="data.info3 && data.info3.title">-->
<!--              <div class="icon icon-info">-->
<!--                <i :class="data.info3.icon"></i>-->
<!--              </div>-->
<!--              <div class="description">-->
<!--                <h4 class="info-title">{{data.info3.title}}</h4>-->
<!--                <p v-html="data.info3.description"></p>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
      <div class="row center">
        <device v-if="images && images.length > 0" :images="images"></device>
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
        title: "Summa Coding is a software for running a software company.",
        description: "Summa Coding is the internal tool we used to manage Clever Coding.  Summa Coding includes a lead tracking/management and customer management tools.  Summa includes a Kanban style project and task management tools.  It includes time tracking, billing and invoicing tools.  The real power is the dashboards and reports that are available that enable you valuable insight into what is going on at your company.  We are now opening up the software by invite only.  If you would like to get on the waiting list please use the contact form below.",
        images: [
          '/img/featured/summa-coding-1.png',
          '/img/featured/summa-coding-2.png',
          '/img/featured/summa-coding-3.png',
          '/img/featured/summa-coding-4.png',
          '/img/featured/summa-coding-5.png',]
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









