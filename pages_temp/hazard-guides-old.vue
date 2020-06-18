<template>
  <div class="cd-section" id="projects">
    <div class="projects-2">
      <div class="container">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title">Hazard Guides</h2>
            <div class="section-space"></div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <card plain>
              <a slot="image" href="/contact-us">
                <img class="img-raised rounded"
                     src="/app-screenshots/emergency-response-plans-1.png"/>
              </a>


              <a href="/contact-us">
                <h4 class="card-title">Be Informed</h4>
              </a>
              <p class="card-description">
                App in includes built in Guides for a wide variety of situations.
                We can also add your organizations guides to your custom built version.
              </p>

            </card>
          </div>
          <div class="col-md-6">
            <card plain>
              <a slot="image" href="/contact-us">
                <img class="img-raised rounded"
                     src="/app-screenshots/emergency-response-plans-1.png"/>
              </a>


              <a href="/contact-us">
                <h4 class="card-title">Bundled Hazard Guides</h4>
              </a>
              <p class="card-description">
                Some of the bundled guides included cover: earthquakes, hazardous weather, fires, utility failures, public health emergencies, hazardous materials and terrorism.
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
