<template>
  <div class="wrapper sections-page">
    <div class="section-space"></div>
    <div class="cd-section" id="features" >
      <div class="hide-small features-2 section-image" style="background-image: url('/app-screenshots/custom-contacts.png')">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-8 mr-auto ml-auto">
              <h2 class="title">Custom Contact Info</h2>
              <h4 class="description text-white description-bold">
                This feature will have all of your areas vital emergency contacts listed. Users can easily find
                vital contacts for every type of situation. There are also pre-generated national emergency
                contacts listed such as FEMA, Ready.gov, Citizens Corps, Us Department of Homeland Security,
                CDC, national Weather Service and Red Cross.
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div class="show-small projects-2">
        <div class="container">
          <div class="row">
            <div class="col-md-8 ml-auto mr-auto text-center">
              <h2 class="title">Custom Contact Info</h2>
              <div class="section-space"></div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <card plain>
                <a slot="image" href="/contact-us">
                  <img class="img-raised rounded"
                       src="/app-screenshots/custom-contacts.png"/>
                </a>
                <p class="card-description">
                  This feature will have all of your areas vital emergency contacts listed. Users can easily find
                  vital contacts for every type of situation. There are also pre-generated national emergency
                  contacts listed such as FEMA, Ready.gov, Citizens Corps, Us Department of Homeland Security,
                  CDC, national Weather Service and Red Cross.
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
  import HeadersSection from '@/components/UIKit/pages/sections/Headers'
  import FeaturesSection from '@/components/UIKit/pages/sections/Features'
  import BlogSection from '@/components/UIKit/pages/sections/Blogs'
  import TeamsSection from '@/components/UIKit/pages/sections/Teams'
  import ProjectsSection from '@/components/UIKit/pages/sections/Projects'
  import PricingSection from '@/components/UIKit/pages/sections/Pricing'
  import TestimonialSection from '@/components/UIKit/pages/sections/Testimonials'
  import ContactSection from '@/components/UIKit/pages/sections/Contact'
  export default {
    name: 'contacts-info',
    layout: 'default',
    data () {
      return {
        title: 'Contact Info in the Emergency Ready App',
        description: "Add your local contact info into your custom emergency ready app.",
      }
    },
    head () {
      return {
        title: this.title,
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          { hid: 'og:title', name: 'og:title', content: this.title },
          { hid: 'description', name: 'description', content: this.description },
          { hid: 'og:description', name: 'og:description', content: this.description },
          { hid: 'og:site_name', name: 'og:site_name', content: "Emergency Ready App" },
          { hid: 'apple-mobile-web-app-title', name: 'apple-mobile-web-app-title', content: this.title },
        ]
      }
    },
  }
</script>
<style>
</style>
