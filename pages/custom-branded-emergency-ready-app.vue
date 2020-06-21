<template>
  <div class="wrapper sections-page">
    <div class="section-space"></div>
    <div class="cd-section" id="features" >
      <div class="hide-small features-2 section-image" style="background-image: url('/app-screenshots/custom-branded.png')">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-8 mr-auto ml-auto">
              <h2 class="title">Custom Branded Emergency App</h2>
              <h4 class="description text-white description-bold">
                Have your own custom iOS and Android Apps available for your target users such as: residents
                of your city, county or state, students at your school, or your employees.
                  Your app with include your Logo.  It will include all the contact info that would be needed
                by your user such as local police, firefighters, hospitials, utility companies, etc.  We can
                also add in any custom guides or material your organization already has.
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div class="show-small projects-2">
        <div class="container">
          <div class="row">
            <div class="col-md-8 ml-auto mr-auto text-center">
              <h2 class="title">Custom Branded Emergency App</h2>
              <div class="section-space"></div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <card plain>
                <a slot="image" href="/contact-us">
                  <img class="img-raised rounded"
                       src="/app-screenshots/custom-branded.png"/>
                </a>
                <p class="card-description">
                  Have your own custom iOS and Android Apps available for your target users such as: residents
                  of your city, county or state, students at your school, or your employees.
                  Your app with include your Logo.  It will include all the contact info that would be needed
                  by your user such as local police, firefighters, hospitials, utility companies, etc.  We can
                  also add in any custom guides or material your organization already has.
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
    name: 'custom-branded',
    layout: 'default',
    data () {
      return {
        title: 'Custom Emergency Preparedness App',
        description: "Your organization can have it's own custom Emergency Preparedness App",
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
