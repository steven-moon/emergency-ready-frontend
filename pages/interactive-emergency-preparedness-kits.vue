<template>
  <div class="cd-section" id="projects">
    <div class="projects-2">
      <div class="container">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title">Interactive Emergency Preparedness Kits</h2>
            <h5 class="description">Your custom Emergency Preparedness Mobile App will have the ability to walk users through the process of preparing emergency kits for their personal use.  </h5>
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
                <h4 class="card-title">Kits</h4>
              </a>
              <p class="card-description">
                Kits on the mobile app include: Evacuation kit, Sanitation kit, Important Documents kit, Vehicle kit, Pet kit,
                Shelter-In-Place kit, Elderly and special needs kit, Child/baby kit, First Aid kit and more.
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
                <h4 class="card-title">Custom lists</h4>
              </a>
              <p class="card-description">
                Of course, every individual has different needs. In addition to the many built in lists, users are able to create there own custom ones.
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
                <h4 class="card-title">Built in list</h4>
              </a>
              <p class="card-description">
                It lists essential items for various emergency situations and allows the user to track their inventory for these emergencies.
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
