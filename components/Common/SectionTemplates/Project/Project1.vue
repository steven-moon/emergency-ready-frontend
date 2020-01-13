<template>
  <!--     *********    PROJECTS 1     *********      -->
  <div class="projects-1">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-8 ml-auto mr-auto text-center">
          <h2 v-if="data.title" class="title">{{data.title}}</h2>
          <p v-if="data.description" class="description text-primary">{{data.description}}</p>
        </div>
      </div>
      <div class="row">
        <div  v-for="aCard in data.cards"   :key="aCard.title"  class="col-md-6 px-0">
          <card type="background" class="card-background-product card-no-shadow"
                :style="{ backgroundImage: `url(${aCard.backgroundUrl})` }">

            <h6 v-if="aCard.category" class="category">{{aCard.category}}</h6>
            <h3 v-if="aCard.title" class="card-title">{{aCard.title}}</h3>
            <p v-if="aCard.description" class="card-description">{{aCard.description}}</p>
            <n-button v-if="aCard.link" @click.native="goToURL(aCard.link)" type="danger" round>
              <i :class="aCard.icon"></i> {{aCard.linkText}}
            </n-button>
          </card>
        </div>
      </div>
    </div>
  </div>
  <!--     *********    END PROJECTS 1      *********      -->
</template>
<script>

  export default {
    name: 'project1',
    props: {
      data: {
        type: Object,
        required: true
      }
    },
    components: {
    },
    methods : {
      goToURL(link) {
        if(link) {
          window.location.href = link;
        }
      }
    }
  }
</script>
<style>
</style>
