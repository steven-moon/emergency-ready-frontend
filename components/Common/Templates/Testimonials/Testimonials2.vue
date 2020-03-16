<template>
  <!--     *********    TESTIMONIALS 2     *********      -->
  <div class="testimonials-2">
    <div class="container">
      <div class="row">
        <div class="col-md-12 justify-content-center">
          <el-carousel height="500px" class="carousel-centered">
            <el-carousel-item v-for="testimonial in data.childArray" :key="testimonial.name">
              <card type="testimonial" plain>
                <img v-if="testimonial.image" slot="image" class="img img-raised" :src="testimonial.image"/>

                <h5 class="card-description" v-html="testimonial.description" ></h5>
                <h3 v-if="testimonial.name" class="card-title">{{testimonial.name}}</h3>
                <div class="card-footer">
                  <h6 v-if="testimonial.title" class="category text-primary">{{testimonial.title}}</h6>
                </div>
              </card>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </div>
  </div>
  <!--     *********    END TESTIMONIALS 2      *********      -->
</template>
<script>

  export default {
    name: 'testimonials2',
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
