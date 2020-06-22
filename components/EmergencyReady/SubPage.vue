<template>
  <div class="wrapper sections-page">
    <div class="section-space"></div>
    <div class="cd-section" id="features" >
      <div class="hide-small features-2 section-image" :style="backgroundImage">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-8 mr-auto ml-auto">
              <h2 class="title">{{header}}</h2>
              <h4 class="description text-white description-bold">
                {{pageText}}
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div class="show-small projects-2">
        <div class="container">
          <div class="row">
            <div class="col-md-8 ml-auto mr-auto text-center">
              <h2 class="title">{{header}}</h2>
              <div class="section-space"></div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <card plain>
                <a slot="image" href="/contact-us">
                  <img class="img-raised rounded"
                       :src="imageURL"/>
                </a>
                <p class="card-description">
                  {{pageText}}
                </p>

              </card>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'sub-page',
    props: {
      header: {
        type: String,
        default: ""
      },
      pageText: {
        type: String,
        default: ""
      },
      imageURL: {
        type: String,
        default: ""
      },
    },
    computed: {
      backgroundImage() {
        return "background-image: url('" + this.imageURL + "')";
      }
    }
  }
</script>
<style>
</style>
