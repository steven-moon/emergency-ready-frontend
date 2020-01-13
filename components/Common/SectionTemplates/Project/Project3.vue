<template>
  <!--     *********    PROJECTS 3     *********      -->
  <div class="projects-3" data-background-color="black">
    <div class="container">
      <div class="row">
        <div class="col-md-8 ml-auto mr-auto text-center">
          <h6 v-if="data.mutedText" class="category text-muted">{{data.mutedText}}</h6>
          <h2 v-if="data.title" class="title">{{data.title}}</h2>
        </div>
      </div>
      <div v-for="item in data.cards" class="section-story-overview">
        <div class="row">
          <div v-if="item.item1" class="col-md-6">
            <div class="image-container image-left"
                 :style="{ backgroundImage: `url(${item.item1.backgroundUrl})` }">
            </div>
            <!-- First image on the left side -->
            <h6 v-if="item.item1.category" class="category text-primary">{{item.item1.category}}</h6>
            <h4 v-if="item.item1.title" class="card-title">{{item.item1.title}}</h4>
            <p v-if="item.item1.description">{{item.item1.description}}</p>

          </div>
          <div v-if="item.item2" class="col-md-5">
            <!-- First image on the right side, above the article -->
            <div class="image-container image-right"
                 :style="{ backgroundImage: `url(${item.item2.backgroundUrl})` }">
            </div>
            <h6 v-if="item.item2.category" class="category text-primary">{{item.item2.category}}</h6>
            <h4 v-if="item.item2.title" class="card-title">{{item.item2.title}}</h4>
            <p v-if="item.item2.description">{{item.item2.description}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--     *********    END PROJECTS 3      *********      -->
</template>
<script>

  export default {
    name: 'project3',
    props: {
      data: {
        type: Object,
        required: true
      }
    },
    components: {
    },
    mounted() {
      console.log(this.data);
    }
  }
</script>
<style>
</style>
