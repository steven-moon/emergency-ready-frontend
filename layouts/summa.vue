<template>
    <div class="summa-container wrapper">
        <notifications/>
        <header-container @clicked="btnMenuToggle"/>

        <div :class="{main : true, 'show-sidebar': this.mobileMenuShow && $mq === 'mobile'}">
            <sidebar-container/>

            <div class="content">

                <nuxt />

            </div>
        </div>
        <modal-manager/>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from "vuex";
    import HeaderContainer from '~/components/Summa/Common/HeaderContainer';
    import SidebarContainer from '~/components/Summa/Common/SidebarContainer';
    import ModalManager from '~/components/Summa/Common/ModalManager';

    export default {
        components: {
            HeaderContainer,
            SidebarContainer,
            ModalManager
        },
        data () {
            return {
                login: false,
                mobileMenuShow: false
            }
        },
        computed: {
            ...mapGetters(['userId'])
        },
        methods: {
            btnMenuToggle (value) {
                this.mobileMenuShow = !this.mobileMenuShow;
            }
        },
        created() {
        },
        mounted() {
            if (process.browser) {
                var measurement_id = 'G-74KS4Z8X2W';

                if(process.env.GOOGLE_ID){
                    measurement_id = process.env.GOOGLE_ID;
                    console.log("USE Measurement Id from env variable")
                }else{
                    console.log("No Measurement Id set in env variable")
                }

                console.log(measurement_id);

                this.$gtag('config', measurement_id, {
                    page_path: this.$route.fullPath,
                });

                if(this.userId) {
                    this.$gtag('config', measurement_id, {
                        'user_id': this.userId
                    });
                }
            }
        }
    }

</script>

<style lang="scss">
    body {
        margin: 0;
    }
</style>
