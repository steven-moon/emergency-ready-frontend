<template>
    <div>
        <covid19-header :isLoading="isLoading" :period="7" title="Overview"></covid19-header>

        <covid-bar-charts :isLoading="isLoading"  :customStep="7"></covid-bar-charts>

        <covid19-data-source></covid19-data-source>
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
                bigLineChart: {
                    activeIndex: 0,
                    extraOptions: chartConfigs.blueChartOptions,
                },
            };
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
            chartDataValues(){
                var label = "";
                if(this.bigLineChart.activeIndex === 0){
                    label = "Confirmed";
                }else{
                    label = "Deaths";
                }

                var labels = [];
                var data = [];

                var i = 0;
                var step = 7; //parseInt(parseInt(this.totals.length) / 8);

                while(i < this.totals.length){
                    var row = this.totals[i];
                    if(parseInt(row.confirmed) > 12) {
                        labels.unshift(row.report_date.replace("2020-", ""));
                        if (this.bigLineChart.activeIndex === 0) {
                            data.unshift(row.confirmed);
                        } else {
                            data.unshift(row.deaths);
                        }
                    }

                    i = i + step;
                }

                return {
                    datasets: [
                        {
                            label: label,
                            data: data
                        }
                    ],
                    labels: labels,
                };

            },
            lineChartDataValues(){

                var labels = [];
                var data = [];

                var i = 0;
                var step = 7; //parseInt(parseInt(this.totals.length) / 8);

                while(i < this.totals.length){
                    var row = this.totals[i];
                    if(parseInt(row.confirmed) > 12) {
                        labels.unshift(row.report_date.replace("2020-", ""));
                        if (this.bigLineChart.activeIndex === 0) {
                            data.unshift(row.confirmed);
                        } else {
                            data.unshift(row.deaths);
                        }
                    }

                    i = i + step;
                }

                return {
                    labels: labels,
                        datasets: [{
                        label: 'Confirmed',
                        data: data
                    }]
                };

            }
        },
        filters: {
            formatDate(value) {
                if(value) {
                    return moment(value).format('MMM D')

                }
            }
        },
        methods: {
            switchDashboards(){
                console.log("BEGIN: switchDashboards");
                this.$asidebar.displaySidebar(true);
            },
            initBigChart(index) {
                this.bigLineChart.activeIndex = index;
            },
            getTotals(){

                let params = {
                    'report':'totals',
                    'scope':'all',
                    'province_state': '',
                    'country_region': ''
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
