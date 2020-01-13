<template>
  <!--     *********    TESTIMONIALS 3     *********      -->
  <div class="testimonials-3">
    <div class="container">
      <div class="row">
        <div class="col-md-6 ml-auto mr-auto text-center">
          <h2 v-if="data.title" class="title">{{data.title}}</h2>
        </div>
      </div>
      <div class="row">
        <div v-for="testimonial in data.childArray" class="col-md-4">
          <card type="testimonial" plain>
            <img v-if="testimonial.image" slot="image" class="img img-raised" :src="testimonial.image"/>

            <h3 v-if="testimonial.name" class="card-title">{{testimonial.name}}</h3>
            <h6 v-if="testimonial.title" class="category text-primary">{{testimonial.title}}</h6>
            <p v-html="testimonial.description" class="card-description"></p>
          </card>
        </div>
      </div>
    </div>
  </div>
  <!--     *********    END TESTIMONIALS 3      *********      -->
</template>
<script>

  export default {
    name: 'testimonials3',
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
