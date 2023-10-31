<template>
    <div class="cd-section" id="features" >
        <div class="featured-app">
            <div class="container center">
                <h3>Emergency Ready values your privacy and will not have access to the information used from within the application. This information will be stored solely to your device. And is not sent to any servers.</h3>
            </div>
        </div>
    </div>
</template>
<script>

    import ContactUs from '@/components/Sections/ContactUs'
    import Subscribe from '@/components/Sections/Subscribe'

    export default {
        name: 'AboutUs',
        components: {
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
