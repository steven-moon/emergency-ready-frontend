<template>
  <!--     *********    PRICING 5     *********      -->
  <div class="pricing-5 section-pricing-5 section-image" id="pricing-5"
       style="background-image: url('img/backgrounds/bg31.jpg')">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <h2 class="title">Choose a plan for your next project</h2>
          <tabs v-model="pricing5Tab" pills type="success" no-content-space>
            <tab-pane label="Expensive"></tab-pane>
            <tab-pane label="Cheaper"></tab-pane>
          </tabs>
          <p class="description">You have Free Unlimited Updates and Premium Support on each package. You
            also have 20 days to request a refund if you're not happy with your purchase.</p>
        </div>
        <div class="col-md-7 ml-auto mr-auto">
          <div class="tab-content tab-space">
            <div v-if="pricing5Tab === 'Expensive'" class="tab-pane active" id="personal">
              <div class="row">
                <div class="col-md-6">
                  <card type="pricing" raised>
                    <h6 class="category">Plus</h6>
                    <h1 class="card-title">
                      <small>$</small>
                      100
                    </h1>
                    <ul>
                      <li>
                        <b>15</b> Projects
                      </li>
                      <li>
                        <b>5GB</b> Storage
                      </li>
                      <li>
                        <b>Unlimited</b> users
                      </li>
                      <li>
                        <b>No time</b> tracking
                      </li>
                    </ul>
                    <a href="#pablo" class="btn btn-success btn-round">
                      Buy Now!
                    </a>
                  </card>
                </div>
                <div class="col-md-6">
                  <card type="pricing" plain>
                    <h6 class="category">Maximum</h6>
                    <h1 class="card-title">
                      <small>$</small>
                      120
                    </h1>
                    <ul>
                      <li>
                        <b>25</b> Projects
                      </li>
                      <li>
                        <b>15GB</b> Storage
                      </li>
                      <li>
                        <b>Unlimited</b> users
                      </li>
                      <li>
                        <b>No time</b> tracking
                      </li>
                    </ul>
                    <a href="#pablo" class="btn btn-success btn-round">
                      Buy Now!
                    </a>
                  </card>
                </div>
              </div>
            </div>
            <div v-else class="tab-pane active" id="commercial">
              <div class="row">
                <div class="col-md-6">
                  <card type="pricing" raised>

                    <h6 class="category">Standard</h6>
                    <h1 class="card-title">
                      <small>$</small>
                      20
                    </h1>
                    <ul>
                      <li>
                        <b>5</b> Projects
                      </li>
                      <li>
                        <b>2GB</b> Storage
                      </li>
                      <li>
                        <b>Unlimited</b> users
                      </li>
                      <li>
                        <b>No time</b> tracking
                      </li>
                    </ul>
                    <a href="#pablo" class="btn btn-success btn-round">
                      Buy Now!
                    </a>

                  </card>
                </div>
                <div class="col-md-6">
                  <card type="pricing" plain>
                    <h6 class="category">Premium</h6>
                    <h1 class="card-title">
                      <small>$</small>
                      60
                    </h1>
                    <ul>
                      <li>
                        <b>7</b> Projects
                      </li>
                      <li>
                        <b>3GB</b> Storage
                      </li>
                      <li>
                        <b>Unlimited</b> users
                      </li>
                      <li>
                        <b>No time</b> tracking
                      </li>
                    </ul>
                    <a href="#pablo" class="btn btn-success btn-round">
                      Buy Now!
                    </a>
                  </card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--     *********    END PRICING 5      *********      -->
</template>
<script>

  export default {
    name: 'price5',
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
