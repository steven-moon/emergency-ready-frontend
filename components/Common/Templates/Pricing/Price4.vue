<template>
  <!--     *********    PRICING 4     *********      -->
  <div class="pricing-4" id="pricing-4">
    <div class="container">
      <div class="row">
        <div class="col-md-6 ml-auto mr-auto text-center">
          <h2 class="title">Pick the best plan for you</h2>
          <h4 class="description">You have Free Unlimited Updates and Premium Support on each
            package.</h4>
          <div class="section-space"></div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <card type="pricing" plain>
            <h6 class="category">Starter</h6>
            <div class="icon icon-danger">
              <i class="now-ui-icons tech_headphones"></i>
            </div>
            <h3 class="card-title">
              <small>$</small>
              10
            </h3>
            <ul>
              <li>1000 MB</li>
              <li>3 email</li>
              <li>5 Databases</li>
            </ul>
            <n-button type="danger" round>Get it Now</n-button>
          </card>
        </div>
        <div class="col-md-4">
          <card type="pricing" color="green">
            <h6 class="category">Professional</h6>
            <div class="icon icon-success">
              <i class="now-ui-icons tech_headphones"></i>
            </div>
            <h3 class="card-title">
              <small>$</small>
              40
            </h3>
            <ul>
              <li>Unlimited MB</li>
              <li>Unlimited emails</li>
              <li>Full Support</li>
            </ul>
            <a href="#pablo" class="btn btn-neutral btn-success disabled btn-round">
              Current Plan
            </a>
          </card>
        </div>
        <div class="col-md-4">
          <card type="pricing" plain>

            <h6 class="category">Basic</h6>
            <div class="icon icon-warning">
              <i class="now-ui-icons tech_headphones"></i>
            </div>
            <h3 class="card-title">
              <small>$</small>
              20
            </h3>
            <ul>
              <li>1000 MB</li>
              <li>3 email</li>
              <li>No Support</li>
            </ul>
            <a href="#pablo" class="btn btn-warning btn-round">
              Upgrade Plan
            </a>

          </card>
        </div>
      </div>
    </div>
  </div>
  <!--     *********    END PRICING 4      *********      -->
</template>
<script>

  export default {
    name: 'price4',
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
