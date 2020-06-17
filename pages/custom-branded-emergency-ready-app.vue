<template>
  <div class="cd-section" id="projects">
    <div class="projects-2">
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


              <a href="/contact-us">
                <h4 class="card-title">Your Own App</h4>
              </a>
              <p class="card-description">
                Have your own custom iOS and Android Apps available for your target users such as: residents of your city, county or state, students at your school, or your employees.
                Your app with include your Logo.  It will include all the contact info that would be needed by your user such as local police, firefighters, hospitials, utility companies, etc.  We can also add in any custom guides or material your organization already has.
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
