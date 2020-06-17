<template>
    <div class="wrapper sections-pge">
        <div class="section-space"></div>
        <headers-section></headers-section>
        <features-section></features-section>
        <blog-section></blog-section>
        <teams-section></teams-section>
        <projects-section></projects-section>
        <pricing-section></pricing-section>
        <testimonial-section></testimonial-section>
        <contact-section></contact-section>
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
        name: 'sections',
        layout: 'default',
        components: {
            HeadersSection,
            FeaturesSection,
            BlogSection,
            TeamsSection,
            ProjectsSection,
            PricingSection,
            TestimonialSection,
            ContactSection
        }
    }
</script>
<style>
</style>
