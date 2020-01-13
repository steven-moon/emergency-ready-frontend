<template>
  <!--     *********     FEATURES 7      *********      -->
  <div class="features-7 section-image" :style="{ backgroundImage: `url(${data.backgroundUrl})` }">
    <div class="col-md-8 mr-auto ml-auto text-center" v-if="data.title">
      <h2 class="title">{{data.title}}</h2>
      <h4 v-if="data.description" class="description">{{data.description}}</h4>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6 px-0">
          <div class="col-sm-12">
            <div class="info info-horizontal" v-if="data.info1 && data.info1.title">
              <div class="icon">
                <i :class="data.info1.icon"></i>
              </div>
              <div class="description">
                <h4 class="info-title">{{data.info1.title}}</h4>
                <p class="description">{{data.info1.description}}</p>
                <a v-if="data.info1.link" :href="data.info1.link" class="ml-3">{{data.info1.linkText}}</a>
              </div>
            </div>
            <div class="info info-horizontal" v-if="data.info2 && data.info2.title">
              <div class="icon">
                <i :class="data.info2.icon"></i>
              </div>
              <div class="description">
                <h4 class="info-title">{{data.info2.title}}</h4>
                <p class="description">{{data.info2.description}}</p>
                <a v-if="data.info2.link" :href="data.info2.link" class="ml-3">{{data.info2.linkText}}</a>
              </div>
            </div>
            <div class="info info-horizontal" v-if="data.info3 && data.info3.title">
              <div class="icon">
                <i :class="data.info3.icon"></i>
              </div>
              <div class="description">
                <h4 class="info-title">{{data.info3.title}}</h4>
                <p class="description">{{data.info3.description}}</p>
                <a v-if="data.info3.link" :href="data.info3.link" class="ml-3">{{data.info3.linkText}}</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="image-container" v-if="data.cardImage">
            <img v-lazy="data.cardImage" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--     *********    END FEATURES 7      *********      -->
</template>
<script>

  export default {
    name: 'feature7',
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





