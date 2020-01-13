<template>
  <!--     *********     FEATURES 4      *********      -->
  <div class="features-4">
    <div class="container">
      <div class="row" v-if="data.title">
        <div class="col-md-8 ml-auto mr-auto text-center">
          <h2 class="title">{{data.title}}</h2>
          <h4 v-if="data.description" class="description">{{data.description}}</h4>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4" v-if="data.info1 && data.info1.title">
          <card type="background" raised color="transparent" style="background-image: url('img/bg24.jpg')">
            <template slot="info">
              <div class="icon icon-white">
                <i :class="data.info1.icon"></i>
              </div>
              <div class="description">
                <h4 class="info-title">{{data.info1.title}}</h4>
                <p class="description">{{data.info1.description}}</p>
                <a v-if="data.info1.link" :href="data.info1.link" class="ml-3">{{data.info1.linkText}}</a>
              </div>
            </template>
          </card>
        </div>
        <div class="col-md-4" v-if="data.info2 && data.info2.title">
          <card type="background" raised color="transparent" style="background-image: url('img/bg23.jpg')">
            <template slot="info">
              <div class="icon icon-white">
                <i :class="data.info2.icon"></i>
              </div>
              <div class="description">
                <h4 class="info-title">{{data.info2.title}}</h4>
                <p class="description">{{data.info2.description}}</p>
                <a v-if="data.info2.link" :href="data.info2.link" class="ml-3">{{data.info2.linkText}}</a>
              </div>
            </template>
          </card>
        </div>
        <div class="col-md-4" v-if="data.info3 && data.info3.title">
          <card type="background" raised color="transparenr" style="background-image: url('img/bg25.jpg')">
            <template slot="info">
              <div class="icon icon-white">
                <i :class="data.info3.icon"></i>
              </div>
              <div class="description">
                <h4 class="info-title">{{data.info3.title}}</h4>
                <p class="description">{{data.info3.description}}</p>
                <a v-if="data.info3.link" :href="data.info3.link" class="ml-3">{{data.info3.linkText}}</a>
              </div>
            </template>
          </card>
        </div>
      </div>
    </div>
  </div>
  <!--     *********    END FEATURES 4      *********      -->
</template>
<script>

  export default {
    name: 'feature4',
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


