<template>
    <div>
        <covid19-header v-if="$asidebar.activeDashboard === 'overview'" :isLoading="isLoading" :period="trendStep" title="Overview"></covid19-header>

        <covid19-header  v-if="$asidebar.activeDashboard === 'overview-by-country'" :isLoading="isLoading" :period="trendStep" title="Overview by Country"
                        :showSelectCountryDropdown="true" @updateCountry="updateCountry" :country_region="country_region"></covid19-header>

        <covid19-header v-if="$asidebar.activeDashboard === 'trends'" :isLoading="isLoading" :period="7" title="Trends" :showSteps="true" :customStep="3"></covid19-header>


        <covid19-header  v-if="$asidebar.activeDashboard === 'trends-by-country'"  :isLoading="isLoading" :period="3" title="Trends by Country" :showSteps="true" :customStep="1"
                        :showSelectCountryDropdown="true" @updateCountry="updateCountry" :country_region="country_region"></covid19-header>

        <!--        <covid-bar-charts :isLoading="isLoading"  :customStep="7"></covid-bar-charts>-->

<!--        <covid19-data-source></covid19-data-source>-->
    </div>
</template>
<script>
    import moment from 'moment';
    import {mapGetters} from 'vuex';

    //
    import * as chartConfigs from '@/components/Argon/argon-core/Charts/config';
    import CovidBarCharts from "./Charts/CovidBarCharts";

    import Covid19DataSource from '@/components/Dashboards/Covid19DataSource';
    import Covid19Header from '@/components/Dashboards/Charts/Covid19Header';
    import ReportsAPI from '~/api/ReportsAPI';


    export default {
        components: {
            CovidBarCharts,
            Covid19DataSource,
            Covid19Header
        },
        data() {
            return {
                isLoading: true,
                reportLink: "/dashboards/",
                trendStep: 7,
                country_region: 'US',
                scope: 'country'
            };
        },
        watch:{
            '$asidebar.activeDashboard'() {
                if(this.$asidebar.activeDashboard === 'overview'){
                    this.trendStep = 7;
                    this.country_region = '';
                    this.scope = 'all';
                    this.$asidebar.setActiveChart('confirmed');
                    this.getTotals();
                }else if(this.$asidebar.activeDashboard === 'overview-by-country'){
                    this.trendStep = 7;
                    this.country_region = 'US';
                    this.scope = 'country';
                    this.$asidebar.setActiveChart('confirmed');
                    this.getTotals();
                }else if(this.$asidebar.activeDashboard === 'trends'){
                    this.trendStep = 7;
                    this.country_region = '';
                    this.scope = 'all';
                    this.$asidebar.setActiveChart('confirmed');
                    this.getTotals();
                }else if(this.$asidebar.activeDashboard === 'trends-by-country'){
                    this.trendStep = 3;
                    this.country_region = 'US';
                    this.scope = 'country';
                    this.$asidebar.setActiveChart('confirmed');
                    this.getTotals();
                }
            }
        },
        computed: {
            ...mapGetters('reportStore', {
                totals: 'totals',
                reports: 'reports'
            }),
            dataDate(){
                if(this.totals && this.totals.length > 0) {
                    var current = this.totals[0];
                    return current.report_date;
                }else{
                    return "";
                }
            },
        },
        methods: {
            updateCountry(country) {
                console.log("update Country in Overview by Country: " + country);
                this.country_region = country;
                this.getTotals();
            },
            getTotals(){

                let params = {
                    'report':'totals',
                    'scope': this.scope,
                    'province_state': '',
                    'country_region': this.country_region
                };

                this.isLoading = true;
                ReportsAPI.getTotals(this.$store,params)
                    .then(totals => {
                        console.log(totals);
                        this.isLoading = false;
                        console.log("This.totals = ");
                        console.log(this.totals);
                        this.initBigChart(0);
                    })
                    .catch((error) => {
                        console.log(error);
                        this.isLoading = false;
                    });
            }
        },
        mounted() {
            this.getTotals();
        }
    };
</script>
<style></style>
