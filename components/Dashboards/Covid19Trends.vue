<template>
    <div>
        <base-header class="pb-6 pt-5">
            <div class="row align-items-center py-4">
                <div class="col-lg-6 col-7">
                    <h6 class="h2 text-white ">Covid-19 Trends</h6>
                    <p class="text-white" v-if="!isLoading"> Current as of {{dataDate | formatDate}}</p>
                </div>
            </div>
            <!-- Card stats -->
            <div v-if="isLoading">
                <tile :loading="true"></tile>
            </div>
            <div v-else class="row">
                <div class="col-xl-3 col-md-6">
                    <stats-card title="Total Confirmed"
                                type="gradient-orange"
                                :sub-title="overViewValues.confirmed"
                                icon="ni ni-ambulance">

                        <template slot="footer">
                            <span class="text-success mr-2"><i class="fa fa-arrow-up"></i> {{overViewValues.confirmed_percentage}}%</span>
                            <span class="text-nowrap pb-2">Last 3 days</span>

                            <div class="pt-2">
                                <div  class="row" v-for="aStep in totalsByStep(trendStep)" :key="aStep.report_date">
                                        <div class="text-primary col-3 text-left"> {{aStep.report_date | formatDate}} </div>
                                        <div class="text-nowrap col-9 text-left">{{aStep.confirmed}} cases</div>
                                </div>
                            </div>
                        </template>
                    </stats-card>
                </div>
                <div class="col-xl-3 col-md-6">
                    <stats-card title="Total Deaths"
                                type="gradient-red"
                                :sub-title="overViewValues.deaths"
                                icon="ni ni-single-02">

                        <template slot="footer">
                            <span class="text-success mr-2"><i class="fa fa-arrow-up"></i> {{overViewValues.deaths_percentage}}%</span>
                            <span class="text-nowrap">Last 3 days</span>

                            <div class="pt-2">
                                <div  class="row" v-for="aStep in totalsByStep(trendStep)" :key="aStep.report_date">
                                    <div class="text-primary col-3 text-left" v-if="parseInt(aStep.deaths) > 3"> {{aStep.report_date | formatDate}} </div>
                                    <div class="text-nowrap col-9 text-left" v-if="parseInt(aStep.deaths) > 3">{{aStep.deaths}} deaths</div>
                                </div>
                            </div>
                        </template>
                    </stats-card>
                </div>
                <div class="col-xl-3 col-md-6">
                    <stats-card title="Total Recovered"
                                type="gradient-green"
                                :sub-title="overViewValues.recovered"
                                icon="ni ni-satisfied">

                        <template slot="footer">
                            <span class="text-success mr-2"><i class="fa fa-arrow-up"></i> {{overViewValues.recovered_percentage}}%</span>
                            <span class="text-nowrap">Last 7 days</span>

                            <div class="pt-2">
                                <div  class="row" v-for="aStep in totalsByStep(trendStep)" :key="aStep.report_date">
                                    <div class="text-primary col-3 text-left" v-if="parseInt(aStep.recovered) > 3"> {{aStep.report_date | formatDate}} </div>
                                    <div class="text-nowrap col-9 text-left" v-if="parseInt(aStep.recovered) > 3">{{aStep.recovered}} recovered</div>
                                </div>
                            </div>
                        </template>
                    </stats-card>

                </div>
                <!--<div class="col-xl-3 col-md-6">
                   <stats-card title="Performance"
                               type="gradient-info"
                               sub-title="49,65%"
                               icon="ni ni-chart-bar-32">

                      <template slot="footer">
                         <span class="text-success mr-2"><i class="fa fa-arrow-up"></i> 54.8%</span>
                         <span class="text-nowrap">Since last month</span>
                      </template>
                   </stats-card>
                </div>-->
            </div>
        </base-header>

        <!--Charts-->
        <div class="container-fluid mt--6">
            <div class="row">
                <div class="col-xl-8">
                    <card type="default" header-classes="bg-transparent" v-if="!isLoading">
                        <div slot="header" class="row align-items-center">
                            <div class="col">
                                <h6 class="text-light text-uppercase ls-1 mb-1">Overview</h6>
                                <h5 class="h3 text-white mb-0">Confirmed / Deaths</h5>
                            </div>
                            <div class="col">
                                <ul class="nav nav-pills justify-content-end">
                                    <li class="nav-item mr-2 mr-md-0">
                                        <a class="nav-link py-2 px-3"
                                           href="#"
                                           :class="{active: bigLineChart.activeIndex === 0}"
                                           @click.prevent="initBigChart(0)">
                                            <span class="d-none d-md-block">Confirmed</span>
                                            <span class="d-md-none">C</span>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link py-2 px-3"
                                           href="#"
                                           :class="{active: bigLineChart.activeIndex === 1}"
                                           @click.prevent="initBigChart(1)">
                                            <span class="d-none d-md-block">Deaths</span>
                                            <span class="d-md-none">D</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <line-chart
                                :height="350"
                                ref="bigChart"
                                :chart-data="chartDataValues"
                                :extra-options="bigLineChart.extraOptions"
                        >
                        </line-chart>

                    </card>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
    import moment from 'moment';
    import {mapGetters} from 'vuex';

    // Charts
    import * as chartConfigs from '@/components/Argon/argon-core/Charts/config';
    import LineChart from '@/components/Argon/argon-core/Charts/LineChart';
    import BarChart from '@/components/Argon/argon-core/Charts/BarChart';

    //API
    import ReportsAPI from '~/api/ReportsAPI';

    export default {
        components: {
            LineChart,
            BarChart,
        },
        data() {
            return {
                trendStep: 7,
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

                while(i < this.totals.length && i <= 13){
                    var row = this.totals[i];
                    labels.unshift(row.report_date.replace("2020-",""));
                    if(this.bigLineChart.activeIndex === 0){
                        data.unshift(row.confirmed);
                    }else{
                        data.unshift(row.deaths);
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
            },
            totalsByStep(step){
                var i = 0;
                var steppedArray = [];

                while(i < this.totals.length){
                    var row = this.totals[i];
                    if(parseInt(row.confirmed) > 12) {
                        steppedArray.push(row);
                    }
                    i = i + step;
                }
                console.log("Stepped Array:");
                console.log(steppedArray);

                return steppedArray;
            }
        },
        mounted() {
            this.getTotals();
        }
    };
</script>
<style></style>
