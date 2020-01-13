<template>
  <!--     *********    TESTIMONIALS 1     *********      -->
  <div class="testimonials-1 section-image" style="background-image: url('img/bg19.jpg')">
    <div class="container">
      <div class="row">
        <div class="col-md-6 ml-auto mr-auto text-center">
          <h2 v-if="data.title" class="title">{{data.title}}</h2>
          <h4 v-if="data.description" class="description">{{data.description}}</h4>
        </div>
      </div>
      <div class="row">
        <div v-for="testimonial in data.childArray" class="col-md-4 pt-3 pb-3">
          <card type="testimonial" no-footer-line style="height: 100%">

            <div class="pt-2 pb-3">
              <img v-if="testimonial.image" slot="image" class="img img-icon" :src="testimonial.image"/>
            </div>

            <p v-html="testimonial.description" class="card-description pt-2"></p>
            <div slot="raw-content" class="icon icon-primary">
              <i class="fas fa-quote-right"></i>
            </div>
            <template slot="footer">
              <h4 v-if="testimonial.name" class="card-title">{{testimonial.name}}</h4>
              <p v-if="testimonial.title" class="category text-primary">{{testimonial.title}}</p>
            </template>
          </card>
        </div>
      </div>
    </div>
  </div>
  <!--     *********    END TESTIMONIALS 1      *********      -->
</template>
<script>

  export default {
    name: 'testimonials',
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
