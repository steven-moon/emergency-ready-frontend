
<template>
  <!--     *********     FEATURES 6      *********      -->
  <div class="cd-section" id="features" >
    <div class="featured-app">
      <div class="container center">
        <div class="row" v-if="data.title">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title">{{data.title}}</h2>
            <div v-html="data.description" class="text-primary"></div>
          </div>
        </div>
        <div class="row top">
          <div class="col-md-4">
            <div class="info info-horizontal" v-if="data.info1 && data.info1.title">
              <div class="icon icon-info">
                <i :class="data.info1.icon"></i>
              </div>
              <div class="description">
                <h4 class="info-title">{{data.info1.title}}</h4>
                <p v-html="data.info1.description"></p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="info info-horizontal" v-if="data.info2 && data.info2.title">
              <div class="icon icon-danger">
                <i :class="data.info2.icon"></i>
              </div>
              <div class="description">
                <h4 class="info-title">{{data.info2.title}}</h4>
                <p v-html="data.info2.description"></p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="info info-horizontal" v-if="data.info3 && data.info3.title">
              <div class="icon icon-info">
                <i :class="data.info3.icon"></i>
              </div>
              <div class="description">
                <h4 class="info-title">{{data.info3.title}}</h4>
                <p v-html="data.info3.description"></p>
              </div>
            </div>
          </div>
          </div>
        </div>
        <div class="row center">
          <device v-if="data.images && data.images.length > 0" :images="data.images"></device>
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
    computed: {
      ...mapGetters('featuredAppDataStore', {
        data: 'data',
      }),
    },
    mounted() {
      this.$store.commit('featuredAppDataStore/setPage', this.$route.params.id);
    },
    created() {
      this.$store.commit('featuredAppDataStore/setPage', this.$route.params.id);
    }
  }
</script>
<style>
</style>









