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
        head () {
            return {
                title: this.title,
                meta: [
                    // hid is used as unique identifier. Do not use `vmid` for it as it will not work
                    { hid: 'description', name: 'description', content: 'Contact us about have a custom Emergency Ready App created for your business or government agency.' }
                ]
            }
        },
        data() {
            return {
                title: "Emergency Ready App - Custom Branded Versions Available"
            }
        },
        mounted() {
        }
    }
</script>
<style></style>
