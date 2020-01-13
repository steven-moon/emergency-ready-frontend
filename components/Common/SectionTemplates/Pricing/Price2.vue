<template>
  <!--     *********    PRICING 2     *********      -->
  <div class="pricing-2" id="pricing-2">
    <div class="container">
      <div class="row">
        <div class="col-md-6 ml-auto mr-auto text-center">
          <h2 class="title">Pick the best plan for you</h2>
          <tabs pills type="success" centered>
            <tab-pane label="Legal Entity"></tab-pane>
            <tab-pane label="Individual"></tab-pane>
          </tabs>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <card type="pricing" plain>
            <h6 class="category">Enterprise</h6>
            <h1 class="card-title">
              <small>$</small>
              59
            </h1>
            <ul>
              <li>
                <b>10GB</b> Disk Space
              </li>
              <li>
                <b>100GB</b> Monthly Bandwidth
              </li>
              <li>
                <b>20</b> Email Accounts
              </li>
              <li>
                <b>Unlimited</b> subdomains
              </li>
            </ul>
            <n-button type="success" round>
              Sign Up
            </n-button>
          </card>
        </div>
        <div class="col-md-4">
          <card type="pricing"
                raised
                class="card-background"
                style="background-image: url('img/pricing2.jpg')">

            <h6 class="category text-info">Professional</h6>
            <h1 class="card-title">
              <small>$</small>
              29
            </h1>
            <ul>
              <li>
                <b>5GB</b> Disk Space
              </li>
              <li>
                <b>50GB</b> Monthly Bandwidth
              </li>
              <li>
                <b>10</b> Email Accounts
              </li>
              <li>
                <b>Unlimited</b> subdomains
              </li>
            </ul>
            <a href="#pablo" class="btn btn-neutral btn-round">
              Sign Up
            </a>

          </card>
        </div>
        <div class="col-md-4">
          <card type="pricing" plain>

            <h6 class="category">Standard</h6>
            <h1 class="card-title">
              <small>$</small>
              17
            </h1>
            <ul>
              <li>
                <b>2GB</b> Disk Space
              </li>
              <li>
                <b>25GB</b> Monthly Bandwidth
              </li>
              <li>
                <b>5</b> Email Accounts
              </li>
              <li>
                <b>Unlimited</b> subdomains
              </li>
            </ul>
            <a href="#pablo" class="btn btn-success btn-round">
              Get Started
            </a>

          </card>
        </div>
      </div>
    </div>
  </div>
  <!--     *********    END PRICING 2      *********      -->
</template>
<script>

  export default {
    name: 'price2',
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
