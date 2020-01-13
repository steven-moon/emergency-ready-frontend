<template>
  <!--     *********    PROJECTS 2     *********      -->
  <div class="projects-2">
    <div class="container">
      <div class="row">
        <div class="col-md-8 ml-auto mr-auto text-center">
          <h6 v-if="data.mutedText" class="text-muted">{{data.mutedText}}</h6>
          <h2 v-if="data.title" class="title">{{data.title}}</h2>
          <h5 v-if="data.description" class="description">{{data.description}}</h5>
          <div class="section-space"></div>
        </div>
      </div>
      <div class="row">
        <div v-for="aCard in data.cards"   :key="aCard.title" class="col-md-4">
          <card plain>
            <a slot="image" :href="aCard.link">
              <img class="img-raised rounded"
                   :src="aCard.image"/>
            </a>


            <a v-if="aCard.link && aCard.title" :href="aCard.link">
              <h4 class="card-title">{{aCard.title}}</h4>
            </a>
            <h4 v-else-if="aCard.title" class="card-title">{{aCard.title}}</h4>
            <h6 v-if="aCard.category" class="category text-primary">{{aCard.category}}</h6>

            <p v-if="aCard.description" class="card-description">{{aCard.description}}</p>

          </card>
        </div>
      </div>
    </div>
  </div>
  <!--     *********    END PROJECTS 2      *********      -->
</template>
<script>

  export default {
    name: 'project2',
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
