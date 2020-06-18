<template>
  <div class="wrapper sections-page">
    <div class="section-space"></div>
    <div class="cd-section" id="features" >
      <div class="features-2 section-image" style="background-image: url('/app-screenshots/make-a-plan-1.png')">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-8 mr-auto ml-auto">
              <h2 class="title">Interactive Emergency Preparedness Kits</h2>
              <h4 class="description text-white description-bold">
                Your custom Emergency Preparedness Mobile App will have the ability to walk users through
                the process of preparing emergency kits for their personal use. It lists essential items
                for various emergency situations and allows the user to track their inventory for these
                emergencies. Of course, every individual has different needs so the app provides something
                for everyone. Kits on the mobile app include…..Evacuation kit, Sanitation kit, Important
                Documents kit, Vehicle kit, Pet kit, Shelter-In-Place kit, Elderly and special needs kit,
                Child/baby kit, First Aid kit and more.
              </h4>
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
    name: 'interactive-emergency-kits',
    layout: 'default',
    data () {
      return {
        title: 'Interactive Emergency Preparedness Kits - Emergency Ready App',
        description: "Your custom Emergency Preparedness Mobile App will have the ability to walk users through " +
                "the process of preparing emergency kits for their personal use.",
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
