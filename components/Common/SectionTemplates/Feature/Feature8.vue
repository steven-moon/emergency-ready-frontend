<template>
  <!--     *********     FEATURES 8      *********      -->
  <div class="features-8 section-image" :style="{ backgroundImage: `url(${data.backgroundUrl})` }">
    <div class="col-md-8 ml-auto mr-auto text-center" v-if="data.title">
      <h2 class="title" v-html="data.title"></h2>
      <h4 v-if="data.description" class="description" v-html="data.description"></h4>
    </div>
    <div class="container">
      <div class="row">
        <div :class="columnSize"  v-for="item in data.items">
          <card style="height: 100%">
            <img slot="image" :src="item.image" class="rounded" alt="">
            <div class="info text-center">
              <div class="icon">
                <i :class="item.icon"></i>
              </div>
              <h4 class="info-title" v-html="item.title"></h4>
              <p class="description" v-html="item.description"></p>
              <a v-if="item.link" :href="item.link" class="ml-3">{{item.linkText}}</a>
            </div>
          </card>
        </div>
      </div>
    </div>
  </div>
  <!--     *********    END FEATURES 8      *********      -->
</template>
<script>

  export default {
    name: 'feature8',
    props: {
      data: {
        type: Object,
        required: true
      }
    },
    components: {
    },
    computed: {
      columnSize() {
        if(this.data.items.length === 1) {
          return "col-md-12 pt-2 pb-5"
        }else if(this.data.items.length === 2 ||
          this.data.items.length === 4 ||
          this.data.items.length === 6 ||
          this.data.items.length === 8) {
          return "col-md-6 pt-2 pb-5"
        }else {
          return "col-md-4 pt-2 pb-5"
        }
      }
    }
  }
</script>
<style>
</style>





