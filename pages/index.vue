<template>
    <div class="index-page">
        <div class="page-header header-filter blue-background min-height-700">
<!--            <div class="page-header-image"-->
<!--                 style="background-image: url('/app-screenshots/home-page.png')">-->
<!--            </div>-->
            <div class="content-center">
                <div class="container text-left max-width-none">
                    <div class="content-center">
                        <div class="row pb-6">
                            <div class="col-md-5">
                                <div class="aspect-ratio">
                                    <iframe height="250" width="510"
                                            src="https://www.youtube.com/embed/usnuefHRv80?rel=0&amp;controls=0&amp;showinfo=0"
                                            frameborder="0" allowfullscreen></iframe>
                                </div>
                            </div>
                            <div class="col-md-6 ml-auto mr-auto text-right">
                                <h1 class="title">Emergency Management for the Digital Age</h1>
                                <h4 class="description ">Let us customize your Emergency Management Mobile App so your citizens are prepared for any emergency</h4>
                            </div>
                        </div>
                        <div class="row pt-6">
                            <div class="col-md-5">
                            </div>
                            <div class="col-md-6 ml-auto mr-auto text-right">
                                <p class="title">Scroll down to learn more.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="cd-section" id="projects">
        <div class="projects-2">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 ml-auto mr-auto text-center">
                        <h2 class="title">Features</h2>
                        <h5 class="description">Below are a few of the features of the Emergency Ready App</h5>
                        <div class="section-space"></div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <card plain>
                            <a slot="image" href="/interactive-emergency-preparedness-kits">
                                <img class="img-raised rounded"
                                     src="/app-screenshots/get-a-kit.png"/>
                            </a>


                            <a href="/interactive-emergency-preparedness-kits">
                                <h4 class="card-title">Interactive Emergency Preparedness Kits</h4>
                            </a>
                            <p class="card-description">
                                Users can create interactive emergency kits so they will be prepared for any emergency
                            </p>

                        </card>
                    </div>
                    <div class="col-md-4">
                        <card plain>
                            <a slot="image" href="/emergency-response-plans">
                                <img class="img-raised rounded"
                                     src="/app-screenshots/emergency-response-plans-1.png"/>
                            </a>


                            <a href="/emergency-response-plans">
                                <h4 class="card-title">Emergency Response Plans</h4>
                            </a>
                            <p class="card-description">
                                Let us add your areas specific emergency plans to your mobile app so your citizens can access them at the touch of a button.
                            </p>

                        </card>
                    </div>
                    <div class="col-md-4">
                        <card plain>
                            <a slot="image" href="/send-emergency-notifications">
                                <img class="img-raised rounded"
                                     src="/er-images/shutterstock_emergency_notification_no_wordsV2.jpg"/>
                            </a>


                            <a href="/send-emergency-notifications">
                                <h4 class="card-title">Notifications</h4>
                            </a>
                            <p class="card-description">
                                Have the ability to send notifications to all of your citizens at a moments notice
                            </p>

                        </card>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <card plain>
                            <a slot="image" href="/custom-branded-emergency-ready-app">
                                <img class="img-raised rounded"
                                     src="/app-screenshots/custom-branded.png"/>
                            </a>


                            <a href="/custom-branded-emergency-ready-app">
                                <h4 class="card-title">Custom Brand</h4>
                            </a>
                            <p class="card-description">
                                Your logo will be displayed proudly on your Custom Emergency Preparedness App.  It typical takes 1 week to have a custom iOS and Android app ready to submit to the App Stores
                            </p>

                        </card>
                    </div>
                    <div class="col-md-4">
                        <card plain>
                            <a slot="image" href="/contact-us">
                                <img class="img-raised rounded"
                                     src="/app-screenshots/home-page.png"/>
                            </a>


                            <a href="/contact-us">
                                <h4 class="card-title">Pricing</h4>
                            </a>
                            <p class="card-description">
                                We can have your Custom Emergency Preparedness Mobile App on the Apple and Android App Stores and available for free download for as low as $5,000. The only additional cost is a yearly $1,000 renewal fee.
                            </p>

                        </card>
                    </div>
                    <div class="col-md-4">
                        <card plain>
                            <a slot="image" href="/contact-us">
                                <img class="img-raised rounded"
                                     src="/app-screenshots/home-page-2.png"/>
                            </a>


                            <a href="/contact-us">
                                <h4 class="card-title">Flexibility</h4>
                            </a>
                            <p class="card-description">
                                You can choose what type of contact info to share: like email, phone, facebook group and or website. You can also have us add your own custom content or edit the ones include.
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
    export default {
        name: 'home',
        layout: 'default',
        data () {
            return {
                title: 'Emergency Ready App',
                description: "Emergency Management for the Digital Age",
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
    iframe {
        width: 100%;
    }

    .aspect-ratio {
        position: relative;
        width: 100%;
        height: 0;
        padding-bottom: 51%;
    }

    .aspect-ratio iframe {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0; top: 0;
    }

</style>
