<template>
  <div class="cd-section" id="projects">
    <div class="projects-2">
      <div class="container">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title">Emergency Response Plans</h2>
            <h5 class="description">
              </h5>
            <div class="section-space"></div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <card plain>
              <a slot="image" href="/contact-us">
                <img class="img-raised rounded"
                     src="/app-screenshots/make-a-plan-1.png"/>
              </a>


              <a href="/contact-us">
                <h4 class="card-title">Make a Plan</h4>
              </a>
              <p class="card-description">
                Not only can your areas custom emergency response plans be listed here so users
                have easy access to it but users can also create their own emergency response plans based on their individual needs.
              </p>

            </card>
          </div>
          <div class="col-md-4">
            <card plain>
              <a slot="image" href="/contact-us">
                <img class="img-raised rounded"
                     src="/app-screenshots/make-a-plan-2.png"/>
              </a>


              <a href="/contact-us">
                <h4 class="card-title">Action Plans</h4>
              </a>
              <p class="card-description">
                It also allows them to prioritize action plans. Plans on the mobile app include Family plan, protective actions, Insurance information, Home inventory, Hazard hunt checklists, evacuation lists and more
              </p>

            </card>
          </div>
          <div class="col-md-4">
            <card plain>
              <a slot="image" href="/contact-us">
                <img class="img-raised rounded"
                     src="/app-screenshots/make-a-plan-3.png"/>
              </a>


              <a href="/contact-us">
                <h4 class="card-title">Step-by-Step</h4>
              </a>
              <p class="card-description">
                The app will have the ability to walk users through the process of making a plan for emergencies as well as
                keeping inventory and documenting specific needs.
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
