<template>
  <div class="wrapper sections-page">
    <div class="section-space"></div>
    <div class="cd-section" id="features" >
      <div class="hide-small features-2 section-image" style="background-image: url('er-images/shutterstock_emergency_notification_no_words.jpg')">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-8 mr-auto ml-auto">
              <h2 class="title">Send Notifications</h2>
              <h4 class="description text-white description-bold">
                With this feature you will have the ability to send vital notification
                directly to users mobile phone or tablet using the built in Apple and Google Push Notification System. In the event of an emergency it is never more vital to have
                the ability to communicate to affected individual. You can send plain text messages or use HTML markup to include images, graphics and styling to your notifications. This feature can allow you to let people know where
                emergency muster areas are or alert them of imminent danger approaching.  Or share other useful messages your organization would like to share with your users.
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div class="show-small projects-2">
        <div class="container">
          <div class="row">
            <div class="col-md-8 ml-auto mr-auto text-center">
              <h2 class="title">Send Notifications</h2>
              <div class="section-space"></div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <card plain>
                <a slot="image" href="/contact-us">
                  <img class="img-raised rounded"
                       src="/er-images/shutterstock_emergency_notification_no_words.jpg"/>
                </a>
                <p class="card-description">
                  With this feature you will have the ability to send vital notification
                  directly to users mobile phone or tablet using the built in Apple and Google Push Notification System. In the event of an emergency it is never more vital to have
                  the ability to communicate to affected individual. You can send plain text messages or use HTML markup to include images, graphics and styling to your notifications. This feature can allow you to let people know where
                  emergency muster areas are or alert them of imminent danger approaching.  Or share other useful messages your organization would like to share with your users.
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
    name: 'send-emergency-notifications',
    layout: 'default',
    data () {
      return {
        title: 'Send Emergency Notifications - Emergency Ready App',
        description: "Have the ability to send your residents emergency notifications straight to their mobile device.",
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
