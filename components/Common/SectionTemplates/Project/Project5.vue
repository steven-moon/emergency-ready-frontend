<template>
  <!--     *********    PROJECTS 5     *********      -->
  <div class="projects-5">
    <div class="container">
      <div class="row">
        <div class="col-md-8 ml-auto mr-auto text-center">
          <h2 class="title">{{data.title}}</h2>
          <h4 class="description" v-html="data.description"></h4>
          <div class="section-space"></div>
        </div>
      </div>
      <div v-for="aCard in data.cards"   :key="aCard.title" class="row pb-md-5 pb-sm-0">

          <div v-if="aCard.layout ==='left'" class="col-md-5 ml-auto pb-sm-4">
            <card type="background" raised class="card-background-product"
                  :style="{ backgroundImage: `url(${aCard.backgroundUrl})` }">
              <h2 v-if="aCard.title" class="card-title">{{aCard.title}}</h2>
              <p v-if="aCard.description" class="card-description" v-html="aCard.description"></p>
              <badge v-if="aCard.badgeText" type="neutral">{{aCard.badgeText}}</badge>
            </card>
          </div>
          <div v-if="aCard.layout ==='left'" class="col-md-5 mr-auto pt-1">
            <info-section v-for="item in aCard.info" :type="item.type" :key="item.title"
                          :icon="item.icon"
                          :title="item.title"
                          :description="item.description"
            />
          </div>
          <div v-if="aCard.layout !== 'left'" class="col-md-5 ml-auto mt-md-5 mt-sm-0 pb-md-5 pb-sm-0">
            <info-section v-for="item in aCard.info" :type="item.type" :key="item.title"
                          :icon="item.icon"
                          :title="item.title"
                          :description="item.description"
            />
          </div>
          <div v-if="aCard.layout !== 'left'"  class="col-md-5 mr-auto pt-sm-5">
            <card type="background" raised class="card-background-product"
                  :style="{ backgroundImage: `url(${aCard.backgroundUrl})` }">
              <h2 v-if="aCard.title" class="card-title">{{aCard.title}}</h2>
              <p v-if="aCard.description" class="card-description" v-html="aCard.description"></p>
              <badge v-if="aCard.badgeText" type="neutral">{{aCard.badgeText}}</badge>
            </card>
          </div>
      </div>
    </div>
  </div>
  <!--     *********    END PROJECTS 5      *********      -->
</template>
<script>

  export default {
    name: 'project5',
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
