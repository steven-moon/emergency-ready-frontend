<template>
  <!--     *********    PRICING 1     *********      -->
  <div class="pricing-1 section-image" id="pricing-1"
       style="background-image: url('img/pricing/pricing1.jpg')">
    <div class="container">
      <div class="row">
        <div class="col-md-6 ml-auto mr-auto text-center">
          <h2 class="title">Pick the best plan for you</h2>
          <h4 class="description ">You have Free Unlimited Updates and Premium Support on each
            package.</h4>
          <div class="section-space"></div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3">
          <card type="pricing" plain>

            <h6 class="category ">Bravo Pack</h6>
            <div class="icon icon-warning">
              <i class="now-ui-icons media-1_button-power"></i>
            </div>
            <h3 class="card-title">$10</h3>
            <ul>
              <li>Complete documentation</li>
              <li>Working materials in Sketch</li>
            </ul>
            <n-button type="warning" round class="btn-neutral">Add to Cart</n-button>

          </card>
        </div>
        <div class="col-md-3">
          <card type="pricing">
            <h6 class="category">Alpha Pack</h6>
            <div class="icon icon-success">
              <i class="now-ui-icons objects_diamond"></i>
            </div>
            <h3 class="card-title">$67</h3>
            <ul>
              <li>Working materials in EPS</li>
              <li>6 months access to the library</li>
            </ul>
            <n-button type="success" round class="btn-success">Add to Cart</n-button>
          </card>
        </div>
        <div class="col-md-3">
          <card type="pricing" plain>

            <h6 class="category ">Charlie Pack</h6>
            <div class="icon icon-success">
              <i class="now-ui-icons media-2_sound-wave"></i>
            </div>
            <h3 class="card-title">$69</h3>
            <ul>
              <li>Working materials in PSD</li>
              <li>1 year access to the library</li>
            </ul>
            <n-button type="success" round class="btn-neutral">Add to Cart</n-button>

          </card>
        </div>
        <div class="col-md-3">
          <card type="pricing" plain>

            <h6 class="category ">Extra Pack</h6>
            <div class="icon icon-danger">
              <i class="now-ui-icons education_atom"></i>
            </div>
            <h3 class="card-title">$159</h3>
            <ul>
              <li>Complete documentation</li>
              <li>2GB cloud storage</li>
            </ul>
            <n-button type="danger" round class="btn-neutral">Add to Cart</n-button>
          </card>
        </div>
      </div>
    </div>
  </div>
  <!--     *********    END PRICING 1      *********      -->
</template>
<script>

  export default {
    name: 'price1',
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
