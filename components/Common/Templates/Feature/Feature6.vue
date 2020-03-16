<template>
  <!--     *********     FEATURES 6      *********      -->
  <div class="features-6">
    <div class="container">
      <div class="row" v-if="data.title">
        <div class="col-md-8 ml-auto mr-auto text-center">
          <h2 class="title">{{data.title}}</h2>
          <h4 v-if="data.description" class="description">{{data.description}}</h4>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <div class="info info-horizontal" v-if="data.info1 && data.info1.title">
            <div class="icon icon-info">
              <i :class="data.info1.icon"></i>
            </div>
            <div class="description">
              <h4 class="info-title">{{data.info1.title}}</h4>
              <p>{{data.info1.description}}</p>
              <a v-if="data.info1.link" :href="data.info1.link" class="ml-3">{{data.info1.linkText}}</a>
            </div>
          </div>
          <div class="info info-horizontal" v-if="data.info2 && data.info2.title">
            <div class="icon icon-danger">
              <i :class="data.info2.icon"></i>
            </div>
            <div class="description">
              <h4 class="info-title">{{data.info2.title}}</h4>
              <p>{{data.info2.description}}</p>
              <a v-if="data.info2.link" :href="data.info2.link" class="ml-3">{{data.info2.linkText}}</a>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="phone-container">
            <img v-lazy="'img/iphone2.png'" />
          </div>
        </div>
        <div class="col-md-4">
          <div class="info info-horizontal" v-if="data.info3 && data.info3.title">
            <div class="icon icon-success">
              <i :class="data.info3.icon"></i>
            </div>
            <div class="description">
              <h4 class="info-title">{{data.info3.title}}</h4>
              <p class="description">{{data.info3.description}}</p>
              <a v-if="data.info3.link" :href="data.info3.link" class="ml-3">{{data.info3.linkText}}</a>
            </div>
          </div>
          <div class="info info-horizontal" v-if="data.info4 && data.info4.title">
            <div class="icon icon-success">
              <i class="now-ui-icons files_single-copy-04"></i>
            </div>
            <div class="description">
              <h4 class="info-title">{{data.info4.title}}</h4>
              <p>{{data.info4.description}}</p>
              <a v-if="data.info4.link" :href="data.info4.link" class="ml-3">{{data.info4.linkText}}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--     *********    END FEATURES 6      *********      -->
</template>
<script>

  export default {
    name: 'feature6',
    props: {
      data: {
        type: Object,
        required: true
      }
    },
    components: {
    }
  }
</script>
<style>
</style>




