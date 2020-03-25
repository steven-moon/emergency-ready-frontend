<template>
    <div>
        <covid19-header :isLoading="isLoading" :period="3" title="Trends by Country" :showSteps="true" :customStep="1"
                        :showSelectCountryDropdown="true" @updateCountry="updateCountry" :country_region="country_region"></covid19-header>


        <!--Charts-->
        <div class="container-fluid mt--6">
            <div class="row">
                <div class="col-md-6">
                    <line-chart :isLoading="isLoading" :customStep="2" :activeIndex="0"></line-chart>
                </div>
                <div class="col-md-6">
                    <bar-chart :isLoading="isLoading" :customStep="2" :activeIndex="0"></bar-chart>
                </div>
            </div>
        </div>

        <div class="container-fluid mt--6 pt-6">
            <div class="row">
                <div class="col-md-6">
                    <line-chart :isLoading="isLoading" :customStep="2" :activeIndex="1"></line-chart>
                </div>
                <div class="col-md-6">
                    <bar-chart :isLoading="isLoading" :customStep="2" :activeIndex="1"></bar-chart>
                </div>
            </div>
        </div>
        <covid19-data-source></covid19-data-source>

    </div>
</template>
<script>
    import moment from 'moment';
    import {mapGetters} from 'vuex';

    // Charts
    import * as chartConfigs from '@/components/Argon/argon-core/Charts/config';
    import LineChart from '@/components/Dashboards/Charts/LineChart';
    import BarChart from '@/components/Dashboards//Charts/BarChart';

    import Covid19DataSource from '@/components/Dashboards/Covid19DataSource';
    import Covid19Header from '@/components/Dashboards/Charts/Covid19Header';
    import ReportsAPI from '~/api/ReportsAPI';

    export default {
        components: {
            LineChart,
            BarChart,
            Covid19Header,
            Covid19DataSource
        },
        data() {
            return {
                trendStep: 4,
                country_region: 'US',
                isLoading: true,
                bigLineChart: {
                    activeIndex: 0,
                    extraOptions: chartConfigs.blueChartOptions,
                },
            };
        },
        computed: {
            ...mapGetters('reportStore', {
                totals: 'totals',
                countries: 'countries'
            }),
            dataDate(){
                if(this.totals && this.totals.length > 0) {
                    var current = this.totals[0];
                    return current.report_date;
                }else{
                    return "";
                }
            },
            overViewValues(){
                var confirmed = "";
                var confirmed_percentage = "";
                var deaths = "";
                var deaths_percentage = "";
                var recovered = "";
                var recovered_percentage = "";

                if(this.totals && this.totals.length > 0){
                    var current = this.totals[0];
                    confirmed = parseInt(current.confirmed);
                    deaths = parseInt(current.deaths);
                    recovered = parseInt(current.recovered);

                    if(this.totals.length >= 3){
                        var last_week = this.totals[2];

                        //Confirmed Percentage Increase
                        var last_week_confirmed = parseInt(last_week.confirmed);
                        var confirmed_diff = confirmed - last_week_confirmed;
                        if(confirmed_diff > 0 && last_week_confirmed > 0){
                            confirmed_percentage = ((confirmed_diff/last_week_confirmed) * 100).toFixed(2);
                        }

                        //Deaths Percentage Increase
                        var last_week_deaths = parseInt(last_week.deaths);
                        var deaths_diff = deaths - last_week_deaths;
                        if(deaths_diff > 0 && last_week_deaths > 0){
                            deaths_percentage = ((deaths_diff/last_week_deaths) * 100).toFixed(2);
                        }

                        //Recovered Percentage Increase
                        var last_week_recovered = parseInt(last_week.recovered);
                        var deaths_recovered = recovered - last_week_recovered;
                        if(deaths_recovered > 0 && last_week_recovered > 0){
                            recovered_percentage = ((deaths_recovered/last_week_recovered) * 100).toFixed(2);
                        }

                    }
                }

                return {
                    'confirmed': confirmed.toString(),
                    'confirmed_percentage': confirmed_percentage.toString(),
                    'deaths': deaths.toString(),
                    'deaths_percentage': deaths_percentage.toString(),
                    'recovered': recovered.toString(),
                    'recovered_percentage': recovered_percentage.toString(),
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
                var step = 2; //parseInt(parseInt(this.totals.length) / 8);

                while(i < this.totals.length && i <= 12){
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
            totalsByStep(step){
                var i = 0;
                var steppedArray = [];

                while(i < this.totals.length){
                    var row = this.totals[i];
                    if(parseInt(row.confirmed) > 13) {
                        steppedArray.push(row);
                    }
                    i = i + step;
                }
                console.log("Stepped Array:");
                console.log(steppedArray);

                return steppedArray;
            },
            updateCountry(country) {
                console.log("update Country in Overview by Country: " + country);
                this.country_region = country;
                this.getTotals();
            },
            getTotals(){

                let params = {
                    'report':'totals',
                    'scope':'country',
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
