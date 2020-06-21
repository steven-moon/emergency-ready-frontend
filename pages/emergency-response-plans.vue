<template>
  <div class="wrapper sections-page">
    <div class="section-space"></div>
    <div class="cd-section" id="features" >
      <div class="hide-small features-2 section-image" style="background-image: url('/app-screenshots/make-a-plan-1.png')">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-8 mr-auto ml-auto">
              <h2 class="title">Emergency Response Plans</h2>
              <h4 class="description text-white description-bold">
                Not only can your areas custom emergency response plans be listed here so users have easy access
                to it but users can also create their own emergency response plans based on their individual needs.
                The app will have the ability to walk users through the process of making a plan for emergencies
                as well as keeping inventory and documenting specific needs. It also allows them to prioritize
                action plans. Plans on the mobile app include Family plan, protective actions, Insurance information,
                Home inventory, Hazard hunt checklists, evacuation lists and more.</h4>
            </div>
          </div>
        </div>
      </div>
      <div class="show-small projects-2">
        <div class="container">
          <div class="row">
            <div class="col-md-8 ml-auto mr-auto text-center">
              <h2 class="title">Emergency Response Plans</h2>
              <div class="section-space"></div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <card plain>
                <a slot="image" href="/contact-us">
                  <img class="img-raised rounded"
                       src="/app-screenshots/emergency-response-plans-1.png"/>
                </a>
                <p class="card-description">
                  Not only can your areas custom emergency response plans be listed here so users have easy access
                  to it but users can also create their own emergency response plans based on their individual needs.
                  The app will have the ability to walk users through the process of making a plan for emergencies
                  as well as keeping inventory and documenting specific needs. It also allows them to prioritize
                  action plans. Plans on the mobile app include Family plan, protective actions, Insurance information,
                  Home inventory, Hazard hunt checklists, evacuation lists and more.
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
    name: 'emergency-response-plans',
    layout: 'default',
    data () {
      return {
        title: 'Emergency Response Plans - Emergency Ready App',
        description: "Your organization can have your emergency response plans in your own custom Emergency Ready App",
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
