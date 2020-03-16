<template>
  <div class="features-6 emergency-page">
    <div class="container">
      <div :key="section.title" class="section" v-for="section in data.sections"><!-- Customization Info-->
        <div class="row" v-if="section.title">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title" v-html="section.title"/>
            <h4 class="description" v-if="section.description">{{section.description}}</h4>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="info info-horizontal" v-if="section.info1 && section.info1.title">
              <div class="icon icon-success">
                <i :class="section.info1.icon"/>
              </div>
              <div class="description">
                <h4 class="info-title">{{section.info1.title}}</h4>
                <p class="description">{{section.info1.description}}</p>
              </div>
            </div>
            <div class="info info-horizontal" v-if="section.info2 && section.info2.title">
              <div class="icon icon-success">
                <i :class="section.info2.icon"/>
              </div>
              <div class="description">
                <h4 class="info-title">{{section.info2.title}}</h4>
                <p class="description">{{section.info2.description}}</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="phone-container">
              <device :image="section.deviceImage" v-if="section.deviceImage"/>
              <device :images="section.deviceImages" v-else/>
            </div>
          </div>
          <div class="col-md-4">
            <div class="info info-horizontal" v-if="section.info3 && section.info3.title">
              <div class="icon icon-success">
                <i :class="section.info3.icon"/>
              </div>
              <div class="description">
                <h4 class="info-title">{{section.info3.title}}</h4>
                <p class="description">{{section.info3.description}}</p>
              </div>
            </div>
            <div class="info info-horizontal" v-if="section.info4 && section.info4.title">
              <div class="icon icon-success">
                <i :class="section.info4.icon"/>
              </div>
              <div class="description">
                <h4 class="info-title">{{section.info4.title}}</h4>
                <p class="description">{{section.info4.description}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title">App Downloads</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="info info-horizontal-centered">
              <div class="description">
                <h4 class="info-title">{{data.emergencyReadyApp.title}}</h4>
                <p>{{data.emergencyReadyApp.description}}</p>
              </div>
            </div>
            <div class="info info-horizontal-centered app-store-badge pb-3">

              <a :href='data.emergencyReadyApp.appStoreLink'><img alt='Download on the App Store'
                                                                  src='/img/featured/Download_on_the_App_Store_Badge.png'/></a>
            </div>
            <div class="info info-horizontal-centered app-store-badge pb-3">
              <a :href='data.emergencyReadyApp.playStoreLink'><img alt='Get it on Google Play'
                                                                   src='/img/featured/google_play_badge_web_generic.png'/></a>
            </div>
            <div class="info info-horizontal-centered">
              <device :image="data.emergencyReadyApp.deviceImage"
                      v-if="data.emergencyReadyApp.deviceImage"/>
              <device :images="data.emergencyReadyApp.deviceImages"
                      v-else/>
            </div>
          </div>

          <div class="col-md-6">
            <div class="info info-horizontal-centered">
              <div class="description">
                <h4 class="info-title">{{data.tooeleReadyApp.title}}</h4>
                <p>{{data.tooeleReadyApp.description}}</p>
              </div>
            </div>

            <div class="info info-horizontal-centered app-store-badge pb-3">
              <a :href='data.tooeleReadyApp.appStoreLink'><img alt='Download on the App Store'
                                                               src='/img/featured/Download_on_the_App_Store_Badge.png'/></a>
            </div>
            <div class="info info-horizontal-centered app-store-badge pb-3">
              <a :href='data.tooeleReadyApp.playStoreLink'><img alt='Get it on Google Play'
                                                                src='/img/featured/google_play_badge_web_generic.png'/></a>
            </div>
            <div class="info info-horizontal-centered">
              <device :image="data.tooeleReadyApp.deviceImage"
                      v-if="data.tooeleReadyApp.deviceImage"/>
              <device :images="data.tooeleReadyApp.deviceImages"
                      v-else/>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
  /**
   * @ The external dependecies.
   */
  import { mapGetters } from 'vuex'

  /**
   * @ The internal dependecies.
   */
  import Device from '@/components/Common/Device'

  export default {
    name: 'featured',
    components: {
      Device
    },
    data() {
      return {}
    },
    computed: {
      ...mapGetters('pageDataStore', {
        data: 'emergencyReady'
      })
    },
    mounted() {
    },
    created() {
    }
  }
</script>
<style>
</style>









