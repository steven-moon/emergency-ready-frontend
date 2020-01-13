<template>

    <!--     *********    IMAGE SUBSCRIBE LINE     *********      -->
    <div class="section subscribe-line subscribe-line-image" style="background-image: url('img/bg7.jpg')" v-if="showImage">
      <div class="container">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto">
            <div class="text-center">
              <h4 class="title">{{title}}</h4>
              <p class="description">
                {{description}}
              </p>
            </div>
            <div class="card card-raised card-form-horizontal">
              <div v-if="subscribeResponseMessage && !isLoading" class="card-body">
                <div class="row">
                  <div class="col-sm-12">{{subscribeResponseMessage}}</div>
                </div>
              </div>
              <div v-else-if="isLoading" class="card-body">
                <div class="row">
                  <div class="col-sm-12">
                    <tile :loading="isLoading"></tile>
                  </div>
                </div>
              </div>
              <div v-else class="card-body">
                <form action="" method="">
                  <div class="row">
                    <div class="col-sm-6 pb-4">
                      <fg-input
                        addon-left-icon="now-ui-icons cc-icons cc-icon-note"
                        placeholder="Name ..."
                        v-model="name">
                      </fg-input>
                    </div>
                    <div class="col-sm-6 pb-4">
                      <fg-input
                        addon-left-icon="now-ui-icons ui-1_email-85"
                        placeholder="Email ..."
                        v-model="email">
                      </fg-input>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-12 right">
                      <vue-recaptcha
                        ref="invisibleRecaptcha"
                        @verify="onVerify"
                        size="invisible"
                        :loadRecaptchaScript="true"
                        :sitekey="sitekey">
                        <n-button block round type="success">
                          Subscribe
                        </n-button>
                      </vue-recaptcha>

                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--     *********   END IMAGE SUBSCRIBE LINE     *********      -->

    <!--     *********   SIMPLE SUBSCRIBE LINE     *********      -->
    <div class="section subscribe-line subscribe-line-white" v-else>
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h4 class="title">{{title}}</h4>
            <p class="description">
              {{description}}
            </p>
          </div>
          <div class="col-md-6">
            <div class="card card-plain card-form-horizontal">
              <div v-if="subscribeResponseMessage && !isLoading" class="card-body">
                <div class="row">
                  <div class="col-sm-12">{{subscribeResponseMessage}}</div>
                </div>
              </div>
              <div v-else-if="isLoading" class="card-body">
                  <div class="row">
                    <div class="col-sm-12">
                      <tile :loading="isLoading"></tile>
                    </div>
                  </div>
              </div>
              <div v-else class="card-body">
                <form action="" method="">
                  <div class="row">
                    <div class="col-sm-6  pb-4">
                      <fg-input
                        addon-left-icon="now-ui-icons cc-icons cc-icon-note"
                        placeholder="Name ..."
                        v-model="name">
                      </fg-input>
                    </div>
                    <div class="col-sm-6  pb-4">
                      <fg-input
                        addon-left-icon="now-ui-icons ui-1_email-85"
                        placeholder="Email ..."
                        v-model="email">
                      </fg-input>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-12 right">
                      <vue-recaptcha
                        ref="invisibleRecaptcha"
                        @verify="onVerify"
                        size="invisible"
                        :loadRecaptchaScript="true"
                        :sitekey="sitekey">
                        <n-button block round type="success">
                          Subscribe
                        </n-button>
                      </vue-recaptcha>

                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--     *********   End SIMPLE SUBSCRIBE LINE     *********      -->

</template>

<script>

  import CleverAPI from "~/api/CleverAPI"
  import VueRecaptcha from 'vue-recaptcha';

  export default {
    name: 'subscribe',
    props: {
      showImage: {
        type: Boolean
      }
    },
    components: {
      VueRecaptcha
    },
    data() {
      return {
        sitekey: '6Lec8sIUAAAAAIz0bL89CotUzFVemN1EN2NPl44-',
        name: "",
        email: "",
        subscribeResponseMessage: null,
        isLoading: false,
        title: "Subscribe to our Newsletter",
        description: "Join our newsletter and get news in your inbox every week! We hate spam too, so no worries about this.  You can unsubscribe any time."
      }
    },
    computed: {},
    methods: {
      submitForm() {
        console.log('Submit Form');

        var formData = {
          name: this.name,
          email: this.email,
        }

        this.isLoading = true;
        CleverAPI.sendSubscribeForm(formData)
          .then(response => {
            if (response.status >= 200 && response.status < 300) {
                this.subscribeResponseMessage = "You have been successful subscribed to our newsletter."
            } else {
              this.subscribeResponseMessage = "There was an error.  Please try again later."
            }
            this.isLoading = false;
          })
          .catch((error) => {
            this.subscribeResponseMessage = "There was an error.  Please try again later."
            this.isLoading = false;
          });
      },
      onVerify(response){
        console.log(response);
        this.submitForm();
      }
    },
    mounted() {

    },
    created() {

    }
  }
</script>
