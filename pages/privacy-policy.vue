<template>
    <div class="wrapper about-page">
<!---->
        <contact-us :withMap="true"/>
        <subscribe :showImage="true"/>
    </div>
</template>
Emergency Ready
<script>

    import ContactUs from '@/components/Sections/ContactUs'
    import Subscribe from '@/components/Sections/Subscribe'

    export default {
        name: 'AboutUs',
        components: {
            EmergencyReadyApp,
            EmergencyReadyAppPrivacyPolicy,
            ContactUs,
            Subscribe,
        },
        data () {
            return {
                title: 'Emergency Ready App - Privacy Policy',
                description: "We respect your privacy",
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
        mounted() {
        }
    }
</script>
<style></style>
