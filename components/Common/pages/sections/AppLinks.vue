<template>
    <div class="projects-2">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 ml-auto mr-auto " >
                    <div class="row pt-5">
                        <div class="app-store-badge col-md-6 pb-3">
                            <div>
                                <a :href='emergencyReadyApp.appStoreLink'><img alt='Download on the App Store'
                                                                               src='/img/featured/Download_on_the_App_Store_Badge.png'/></a>
                            </div>
                        </div>
                        <div class="app-store-badge col-md-6">
                            <div>
                                <a :href='emergencyReadyApp.playStoreLink'><img alt='Get it on Google Play'
                                                                                src='/img/featured/google_play_badge_web_generic.png'/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import {mapGetters} from "vuex";

    export default {
        name: 'AppLinks',
        computed: {
            ...mapGetters({
                emergencyReadyApp: 'emergencyReadyApp',
            }),
        }
    }
</script>
<style>

</style>
