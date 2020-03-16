<template>
  <!--     *********    PRICING 3     *********      -->
  <div class="pricing-3 section-image" style="background-image: url('img/pricing/pricing3.jpg')" id="pricing-3">
    <div class="container">
      <div class="row">
        <div class="col-md-6 ml-auto mr-auto text-center">
          <h2 class="title">Pick the best plan for you</h2>
          <h4 class="description">You have Free Unlimited Updates on each package.</h4>
          <div class="section-space"></div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4 ml-auto">
          <card type="pricing">
            <h6 class="category">Freelance</h6>
            <h1 class="card-title">
              <small>$</small>
              29
              <small>/mo</small>
            </h1>
            <ul>
              <li>1 GB of space</li>
              <li>Limited Support</li>
              <li>Support at $25/hour</li>
              <li>Limited cloud access</li>
            </ul>
            <n-button type="success" round>Get Started</n-button>
          </card>
        </div>
        <div class="col-md-4 mr-auto">
          <card type="pricing" raised color="green">
            <h6 class="category">Business</h6>
            <h1 class="card-title">
              <small>$</small>
              59
              <small>/mo</small>
            </h1>
            <ul>
              <li>5 GB of space</li>
              <li>UnLimited Support</li>
              <li>Unlimited Downloads</li>
              <li>Full cloud access</li>
            </ul>
            <n-button type="neutral" round>Get Started</n-button>
          </card>
        </div>
      </div>
    </div>
  </div>
  <!--     *********    END PRICING 3      *********      -->
</template>
<script>

  export default {
    name: 'price3',
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
