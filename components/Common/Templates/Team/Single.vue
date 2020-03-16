<template>
  <div class="section team-5 section-image" :style="{ backgroundImage: `url(${data.backgroundUrl})` }">
    <div class="container">
      <div class="row">
        <div class="col-md-8 ml-auto mr-auto text-center">
          <h2 v-if="data.title" class="title">{{data.title}}</h2>
          <h4 v-if="data.description" class="description">{{data.description}}</h4>
        </div>
      </div>
      <div class="row  align-content-center">
        <div class="col-md-2"></div>
        <div class="col-md-8">
          <card type="profile">
            <img v-if="data.childArray[0].image" slot="avatar" class="img img-raised" :src="data.childArray[0].image"/>

            <h3 class="card-title">{{data.childArray[0].name}}</h3>
            <h6 v-if="data.childArray[0].title" class="category text-primary">{{data.childArray[0].title}}</h6>
            <p v-if="data.childArray[0].description" class="card-description pl-4 pr-4 pt-3 text-left" v-html="data.childArray[0].description"></p>
            <div class="card-footer">
              <a v-if="data.childArray[0].linkedin"  :href="data.childArray[0].linkedin"  class="btn btn-icon btn-neutral btn-round"><i
                class="fab fa-linkedin"></i></a>
              <a v-if="data.childArray[0].twitter"  :href="data.childArray[0].twitter" class="btn btn-icon btn-neutral btn-round"><i
                class="fab fa-twitter"></i></a>
            </div>

          </card>
        </div>
        <div class="col-md-2"></div>
      </div>
    </div>
  </div>
</template>
<script>

  export default {
    name: 'single',
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
