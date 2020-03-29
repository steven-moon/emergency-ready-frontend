<template>
    <base-header class="pb-6 pt-5 container-fluid">
        <div class="row align-items-center py-4">
            <div class="col-10 col-xs-12 pb-3">
                <p class="text-white" v-if="!isLoading"> Current as of {{dataDate | formatDate}} <a
                        href="/dashboards/covid19-data-source">Data Source</a></p>
                <p class="text-white">Reliance on this website for medical guidance is strictly prohibited. For
                    informational purposes only</p>
            </div>

            <ul class="nav nav-tabs row align-items-center text-center pl-3 pr-2 pb-3">
                <li class="active col-6 col-md-3 col-xl-3 pb-2">
                    <base-button type="default" class="btn btn-icon btn-max" :class="[{'active':$asidebar.activeDashboard === 'overview'}]" @click.prevent="switchDashboards('overview')" >Overview</base-button>
                </li>
                <li class="active col-6 col-md-3 col-xl-3 pb-2">
                    <base-button type="default" class="btn btn-icon btn-max" :class="[{'active':$asidebar.activeDashboard === 'overview-by-country'}]" @click.prevent="switchDashboards('overview-by-country')">Overview By Country</base-button>
                </li>
                <li class="active col-6 col-md-3  col-xl-3 pb-2">
                    <base-button type="default" class="btn btn-icon btn-max" :class="[{'active':$asidebar.activeDashboard === 'trends'}]" @click.prevent="switchDashboards('trends')">Trends</base-button>
                </li>
                <li class="active col-6 col-md-3 col-xl-3 pb-2">
                    <base-button type="default" class="btn btn-icon btn-max" :class="[{'active':$asidebar.activeDashboard === 'trends-by-country'}]" @click.prevent="switchDashboards('trends-by-country')">Trends By Country</base-button>
                </li>
            </ul>
            <div class="col-10 col-xs-12 pt-2" v-if="!isLoading && showSelectCountryDropdown">
                <base-input label="Select Country">
                    <select @change="updateCountry($event)" class="form-control" v-model="country_region">
                        <option :key="country.country_region" :value="country.country_region"
                                v-for="country in countries">{{country.country_region}} ({{ country.confirmed}})
                        </option>
                    </select>
                </base-input>
            </div>
        </div>
        <!-- Card stats -->
        <div v-if="isLoading">
            <tile :loading="true"></tile>
        </div>
        <div v-else class="">
            <ul class="nav nav-tabs row align-items-center text-center pb-3">
                <li class="active col-6 col-md-3 col-xl-3 pb-2">
                    <button @click.prevent="setActiveChart('confirmed')" class="btn btn-icon btn-max" :class="buttonClass('confirmed')" type="button">
                        Confirmed
                    </button>
                </li>
                <li class="active col-6 col-md-3 col-xl-3 pb-2">
                    <button @click.prevent="setActiveChart('cases')" class="btn btn-icon btn-max" :class="buttonClass('cases')"  type="button">
                        New Cases
                    </button>
                </li>
                <li class="active col-6 col-md-3  col-xl-3 pb-2">
                    <button @click.prevent="setActiveChart('deaths')" class="btn btn-icon btn-max " :class="buttonClass('deaths')"  type="button">
                        Deaths
                    </button>
                </li>
                <li class="active col-6 col-md-3 col-xl-3 pb-2">
                    <button @click.prevent="setActiveChart('recovered')" class="btn btn-icon btn-max" :class="buttonClass('recovered')"  type="button">
                        Recovered
                    </button>
                </li>
            </ul>

            <div class="row"  v-if="$asidebar.activeChart === 'confirmed'">
                <div class="col-md-6">
                    <stats-card :sub-title="overViewValues.confirmed"
                                icon="ni ni-ambulance"
                                title="Total Confirmed"
                                type="gradient-orange">

                        <template slot="footer">
                            <span class="text-success mr-2"><i class="fa fa-arrow-up"></i> {{overViewValues.confirmed_percentage}}%</span>
                            <span class="text-nowrap">Last {{period}} days</span>

                            <div class="pt-2" v-if="showSteps">
                                <div :key="aStep.report_date" class="row" v-for="aStep in totalsByStep(customStep)">
                                    <div class="text-primary  col-5 col-sm-6 col-md-3 text-left"> {{aStep.report_date |
                                        formatDate}}
                                    </div>
                                    <div class="text-nowrap  col-7 col-sm-6 col-md-9 text-left">{{aStep.confirmed}}
                                        cases
                                    </div>
                                </div>
                            </div>
                        </template>
                    </stats-card>
                </div>
                <div class="col-md-6">
                    <bar-chart :isLoading="isLoading" :customStep="customStep" :activeIndex="0"></bar-chart>
                </div>
            </div>
            <div class="row"  v-if="$asidebar.activeChart === 'cases'">
                <div class="col-md-6">
                    <stats-card :sub-title="overViewValues.cases"
                                :title="'New Cases (Last' + period + ' days)'"
                                icon="ni ni-ambulance"
                                type="gradient-orange">

                        <template slot="footer">
                            <span class="text-success mr-2"><i class="fa fa-arrow-up"></i> {{overViewValues.confirmed_percentage}}%</span>
                            <span class="text-nowrap">Last {{period}} days</span>

                            <div class="pt-2" v-if="showSteps">
                                <div :key="aStep.report_date" class="row" v-for="aStep in totalsByStep(customStep)">
                                    <div class="text-primary  col-5 col-sm-6 col-md-3 text-left"> {{aStep.report_date |
                                        formatDate}}
                                    </div>
                                    <div class="text-nowrap  col-7 col-sm-6 col-md-9 text-left">{{aStep.cases}} new
                                        cases
                                    </div>
                                </div>
                            </div>
                        </template>
                    </stats-card>
                </div>
                <div class="col-md-6">
                    <bar-chart :isLoading="isLoading" :customStep="customStep" :activeIndex="1"></bar-chart>
                </div>
            </div>

            <div class="row"  v-if="$asidebar.activeChart === 'deaths'">
                <div class="col-md-6">
                    <stats-card :sub-title="overViewValues.deaths"
                                icon="ni ni-single-02"
                                title="Total Deaths"
                                type="gradient-red">

                        <template slot="footer">
                            <span class="text-success mr-2"><i class="fa fa-arrow-up"></i> {{overViewValues.deaths_percentage}}%</span>
                            <span class="text-nowrap">Last {{period}} days</span>

                            <div class="pt-2" v-if="showSteps">
                                <div :key="aStep.report_date" class="row" v-for="aStep in totalsByStep(customStep)">
                                    <div class="text-primary col-5 col-sm-6 col-md-3 text-left"
                                         v-if="parseInt(aStep.deaths) > 3"> {{aStep.report_date | formatDate}}
                                    </div>
                                    <div class="text-nowrap col-7 col-sm-6 col-md-9 text-left"
                                         v-if="parseInt(aStep.deaths) > 3">{{aStep.deaths}} deaths
                                    </div>
                                </div>
                            </div>
                        </template>
                    </stats-card>
                </div>
                <div class="col-md-6">
                    <bar-chart :isLoading="isLoading" :customStep="customStep" :activeIndex="2"></bar-chart>
                </div>
            </div>
            <div class="row"  v-if="$asidebar.activeChart === 'recovered'">
                <div class="col-md-6">
                    <stats-card :sub-title="overViewValues.recovered"
                                icon="ni ni-satisfied"
                                title="Total Recovered"
                                type="gradient-green">

                        <template slot="footer">
                            <span class="text-success mr-2"><i class="fa fa-arrow-up"></i> {{overViewValues.recovered_percentage}}%</span>
                            <span class="text-nowrap">Last {{period}} days</span>

                            <div class="pt-2" v-if="showSteps">
                                <div :key="aStep.report_date" class="row" v-for="aStep in totalsByStep(customStep)">
                                    <div class="text-primary col-5 col-sm-6 col-md-3 text-left"
                                         v-if="parseInt(aStep.recovered) > 3"> {{aStep.report_date | formatDate}}
                                    </div>
                                    <div class="text-nowrap col-7 col-sm-6 col-md-9 text-left"
                                         v-if="parseInt(aStep.recovered) > 3">{{aStep.recovered}} recovered
                                    </div>
                                </div>
                            </div>
                        </template>
                    </stats-card>

                </div>
                <div class="col-md-6">
                    <bar-chart :isLoading="isLoading" :customStep="customStep" :activeIndex="3"></bar-chart>
                </div>
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
</template>
<script>
    import moment from 'moment';
    import {mapGetters} from 'vuex';
    import BarChart from '@/components/Dashboards//Charts/BarChart';

    export default {
        props: {
            country_region: {
                type: String,
                default: null
            },
            title: {
                type: String,
                default: 'Overview'
            },
            isLoading: {
                type: Boolean,
                default: true
            },
            showSteps: {
                type: Boolean,
                default: false
            },
            period: {
                type: Number,
                default: 7
            },
            customStep: {
                type: Number,
                default: 4
            },
            showSelectCountryDropdown: {
                type: Boolean,
                default: false
            },
        },
        components: {
            BarChart
        },
        data() {
            return {};
        },
        computed: {
            ...mapGetters('reportStore', {
                totals: 'totals',
                countries: 'countries',
            }),
            dataDate() {
                if (this.totals && this.totals.length > 0) {
                    var current = this.totals[0];
                    return current.report_date;
                } else {
                    return "";
                }
            },
            overViewValues() {
                var confirmed = "";
                var confirmed_percentage = "";
                var deaths = "";
                var deaths_percentage = "";
                var recovered = "";
                var recovered_percentage = "";
                var cases = "";
                var cases_percentage = "";

                if (this.totals && this.totals.length > 0) {
                    var current = this.totals[0];
                    confirmed = parseInt(current.confirmed);
                    deaths = parseInt(current.deaths);
                    recovered = parseInt(current.recovered);
                    cases = parseInt(current.cases);

                    if (this.totals.length >= this.period && this.period > 0) {
                        var last_week = this.totals[this.period - 1];

                        cases = confirmed - last_week.confirmed;
                        //Confirmed Percentage Increase
                        var last_week_confirmed = parseInt(last_week.confirmed);
                        var confirmed_diff = confirmed - last_week_confirmed;
                        if (confirmed_diff > 0 && last_week_confirmed > 0) {
                            confirmed_percentage = ((confirmed_diff / last_week_confirmed) * 100).toFixed(2);
                        }

                        //Deaths Percentage Increase
                        var last_week_deaths = parseInt(last_week.deaths);
                        var deaths_diff = deaths - last_week_deaths;
                        if (deaths_diff > 0 && last_week_deaths > 0) {
                            deaths_percentage = ((deaths_diff / last_week_deaths) * 100).toFixed(2);
                        }

                        //Recovered Percentage Increase
                        var last_week_recovered = parseInt(last_week.recovered);
                        var recovered_diff = recovered - last_week_recovered;
                        if (recovered_diff > 0 && last_week_recovered > 0) {
                            recovered_percentage = ((recovered_diff / last_week_recovered) * 100).toFixed(2);
                        }

                        //Cases Percentage Increase
                        var last_week_cases = parseInt(last_week.cases);
                        var cases_diff = cases - last_week_cases;
                        if (cases_diff > 0 && last_week_recovered > 0) {
                            cases_percentage = ((cases_diff / last_week_cases) * 100).toFixed(2);
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
                    'cases': cases.toString(),
                    'cases_percentage': cases_percentage.toString(),
                }
            },
        },
        filters: {
            formatDate(value) {
                if (value) {
                    return moment(value).format('MMM D')
                }
            }
        },
        methods: {
            buttonClass(value){
                if(value === 'confirmed' && this.$asidebar.activeChart === 'confirmed'){
                    return [{ "btn-info": true }];
                }else if(value === 'cases' && this.$asidebar.activeChart === 'cases'){
                    return [{ "btn-info": true }];
                }else if(value === 'deaths' && this.$asidebar.activeChart === 'deaths'){
                    return [{ "btn-info": true }];
                }else if(value === 'recovered' && this.$asidebar.activeChart === 'recovered'){
                    return [{ "btn-info": true }];
                }else{
                    return [{ "btn-secondary": true }];
                }
            },
            switchDashboards(value) {
                console.log("BEGIN: switchDashboards");
                this.$asidebar.setActiveDashboard(value);
            },
            setActiveChart(value){
                this.$asidebar.setActiveChart(value);
            },
            updateCountry(event) {
                console.log("update Country: " + event.target.value);
                this.$emit('updateCountry', event.target.value);
            },
            totalsByStep(step) {
                var i = 0;
                var count = 0;
                var steppedArray = [];

                while (i < this.totals.length) {
                    var row = this.totals[i];
                    var report_date = row.report_date;
                    if (parseInt(row.confirmed) > 13 && report_date !== '2020-03-22' && report_date !== '2020-03-13') {

                        var deaths = row.deaths;
                        var confirmed = row.confirmed;
                        var recovered = row.recovered;
                        var cases = row.cases;


                        var oldDeaths = 0;
                        var oldConfirmed = 0;
                        var oldRecovered = 0;
                        var oldCases = 0;

                        var deathPercentIncrease = 0;
                        var confirmedPercentIncrease = 0;
                        var recoveredPercentIncrease = 0;
                        var casesPercentIncrease = 0;


                        var j = i + step;
                        if (j < this.totals.length) {
                            var nextRow = this.totals[j];
                            oldDeaths = nextRow.deaths;
                            oldConfirmed = nextRow.confirmed;
                            oldRecovered = nextRow.recovered;
                            oldCases = nextRow.cases;

                            if (oldDeaths > 0 && deaths > 0) {
                                deathPercentIncrease = (((deaths - oldDeaths) / oldDeaths) * 100).toFixed(2);
                            }

                            if (oldConfirmed > 0 && confirmed > 0) {
                                confirmedPercentIncrease = (((confirmed - oldConfirmed) / oldConfirmed) * 100).toFixed(2);
                            }

                            if (oldRecovered > 0 && recovered > 0) {
                                recoveredPercentIncrease = (((recovered - oldRecovered) / oldRecovered) * 100).toFixed(2);
                            }

                            if (oldCases > 0 && cases > 0) {
                                casesPercentIncrease = (((cases - oldCases) / oldCases) * 100).toFixed(2);
                            }
                        }



                        steppedArray.push(
                            {
                                'deaths': deaths.toString(),
                                'confirmed': confirmed.toString(),
                                'recovered': recovered.toString(),
                                'cases': cases.toString(),
                                'report_date': report_date,
                                'oldDeaths': oldDeaths.toString(),
                                'oldConfirmed': oldConfirmed.toString(),
                                'oldRecovered': oldRecovered.toString(),
                                'oldCases': oldCases.toString(),
                                'deathPercentIncrease': deathPercentIncrease.toString(),
                                'confirmedPercentIncrease': confirmedPercentIncrease.toString(),
                                'recoveredPercentIncrease': recoveredPercentIncrease.toString(),
                                'casesPercentIncrease': casesPercentIncrease.toString(),
                            }
                        );

                        if(count >= 7 && step < 3){
                            step = 3;
                        }else if(count >= 14 && step < 7){
                            step = 7;
                        }
                    }

                    count = count + 1;
                    i = i + step;

                }
                console.log("Stepped Array:");
                console.log(steppedArray);

                return steppedArray;
            },
        },
        mounted() {
        }
    };
</script>
<style></style>
