<template>
  <div class="cd-section" id="projects">
    <div class="projects-2">
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


              <a href="/contact-us">
                <h4 class="card-title">Your Information</h4>
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
    name: 'custom-branded-app',
    layout: 'default',
    components: {
    }
  }
</script>
<style>
</style>
