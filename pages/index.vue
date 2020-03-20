<template>
  <div>
    <!--Header-->
    <div class="header bg-success pt-7 pb-7">
      <div class="container">
        <div class="header-body">
          <div class="row align-items-center" v-if="aboutUs">
            <div class="col-lg-6 align-items-center">
              <div class="pr-5">
                <h1 class="display-2 text-white font-weight-bold mb-0 pb-2">{{aboutUs.title}}</h1>
              </div>
              <div class="pt-5 align-items-center">
                <button type="button" class="btn btn-lg btn-primary btn-icon" @click.prevent="goToDashboard">Covid19 Dashboards</button>
              </div>
            </div>
            <div class="col-lg-6" >
              <div class="row pt-5">
                <div class="app-store-badge col-md-6 pb-3">
                  <div>
                    <a :href='aboutUs.emergencyReadyApp.appStoreLink'><img alt='Download on the App Store'
                                                                         src='/img/featured/Download_on_the_App_Store_Badge.png'/></a>
                  </div>
                </div>
                <div class="app-store-badge col-md-6">
                  <div>
                    <a :href='aboutUs.emergencyReadyApp.playStoreLink'><img alt='Get it on Google Play'
                                                                          src='/img/featured/google_play_badge_web_generic.png'/></a>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="aboutUs.cards" class="col-lg-6" v-for="aCard in aboutUs.cards">
              <div class="row pt-5">
                <div class="col-md-6" >
                  <div class="card">
                    <div class="card-body">
                      <div class="icon icon-shape bg-gradient-red text-white rounded-circle shadow mb-4">
                        <i class="ni ni-active-40"></i>
                      </div>
                      <h5 class="h3">{{aCard.info[0].title}}</h5>
                      <p>{{aCard.info[0].description}}}</p>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-body">
                      <div class="icon icon-shape bg-gradient-info text-white rounded-circle shadow mb-4">
                        <i class="ni ni-active-40"></i>
                      </div>
                      <h5 class="h3">{{aCard.info[1].title}}</h5>
                      <p>{{aCard.info[1].description}}}</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 pt-lg-5 pt-4">
                  <div class="card mb-4">
                    <div class="card-body">
                      <div class="icon icon-shape bg-gradient-success text-white rounded-circle shadow mb-4">
                        <i class="ni ni-active-40"></i>
                      </div>
                      <h5 class="h3">{{aCard.info[2].title}}</h5>
                      <p>{{aCard.info[2].description}}}</p>
                    </div>
                  </div>
                  <div class="card mb-4">
                    <div class="card-body">
                      <div class="icon icon-shape bg-gradient-warning text-white rounded-circle shadow mb-4">
                        <i class="ni ni-active-40"></i>
                      </div>
                      <h5 class="h3">{{aCard.info[0].title}}</h5>
                      <p>{{aCard.info[0].description}}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="separator separator-bottom separator-skew zindex-100">
        <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <polygon class="fill-default" points="2560 0 2560 100 0 100"></polygon>
        </svg>
      </div>
    </div>
  </div>
</template>
<script>
  /**
   * @ The external dependecies.
   */
  import {mapGetters} from 'vuex';

  import { Tooltip } from 'element-ui'
  export default {
    layout: 'argon-dashboard-layout',
    name: 'home-page',
    head () {
      return {
        title: "Emergency Ready App",
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          { hid: 'description', name: 'description', content: 'Contact us about have a custom Emergency Ready App created for your business or government agency.' }
        ]
      }
    },
    components: {
      [Tooltip.name]: Tooltip
    },
    computed: {
      ...mapGetters('pageDataStore', {
        aboutUs: 'aboutUs',
      }),
    },
    methods: {
      goToDashboard(){
        window.location.href = "/dashboards/"
      }
    }
  };

</script>
