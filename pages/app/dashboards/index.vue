<template>
   <div>
      <base-header class="pb-6">
         <div class="row align-items-center py-4">
            <div class="col-lg-6 col-7">
               <h6 class="h2 text-white d-inline-block mb-0">Covid-19 Overview</h6>
               <span class="text-nowrap"> as of Mar 17th, 2020</span>
            </div>
         </div>
         <!-- Card stats -->
         <div v-if="isLoading">
            <tile :loading="isLoading"></tile>
         </div>
         <div v-else class="row">
            <div class="col-xl-3 col-md-6">
               <stats-card title="Total Confirmed"
                           type="gradient-red"
                           :sub-title="overViewValues.confirmed"
                           icon="ni ni-active-40">

                  <template slot="footer">
                     <span class="text-success mr-2"><i class="fa fa-arrow-up"></i> {{overViewValues.confirmed_percentage}}%</span>
                     <span class="text-nowrap">Last 7 days</span>
                  </template>
               </stats-card>
            </div>
            <div class="col-xl-3 col-md-6">
               <stats-card title="Total Deaths"
                           type="gradient-orange"
                           :sub-title="overViewValues.deaths"
                           icon="ni ni-chart-pie-35">

                  <template slot="footer">
                     <span class="text-success mr-2"><i class="fa fa-arrow-up"></i> {{overViewValues.deaths_percentage}}%</span>
                     <span class="text-nowrap">Last 7 days</span>
                  </template>
               </stats-card>
            </div>
            <div class="col-xl-3 col-md-6">
               <stats-card title="Total Recovered"
                           type="gradient-green"
                           :sub-title="overViewValues.recovered"
                           icon="ni ni-money-coins">

                  <template slot="footer">
                     <span class="text-success mr-2"><i class="fa fa-arrow-up"></i> {{overViewValues.recovered_percentage}}%</span>
                     <span class="text-nowrap">Last 7 days</span>
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
   </div>
</template>
<script>
   // Charts
   import * as chartConfigs from '@/components/Argon/argon-core/Charts/config';
   import LineChart from '@/components/Argon/argon-core/Charts/LineChart';
   import BarChart from '@/components/Argon/argon-core/Charts/BarChart';

   // Components
   import BaseProgress from '@/components/Argon/argon-core/BaseProgress';
   import RouteBreadCrumb from '@/components/Argon/argon-core/Breadcrumb/RouteBreadcrumb';
   import StatsCard from '@/components/Argon/argon-core/Cards/StatsCard';

   // Lists
   import ActivityFeed from '@/components/Argon/pages/dashboard/ActivityFeed.vue';
   import TaskList from '@/components/Argon/pages/dashboard/TaskList.vue';
   import UserList from '@/components/Argon/pages/dashboard/UserList.vue';
   import ProgressTrackList from '@/components/Argon/pages/dashboard/ProgressTrackList.vue';

   // Tables
   import LightTable from '@/components/Argon/pages/dashboard/LightTable.vue';
   import SocialTrafficTable from '@/components/Argon/pages/dashboard/SocialTrafficTable.vue';
   import PageVisitsTable from '@/components/Argon/pages/dashboard/PageVisitsTable.vue';
   import {mapGetters} from "vuex";

   //API
   import ReportsAPI from '~/api/ReportsAPI';

   export default {
      layout: 'app-dashboard-layout',
      components: {
         ActivityFeed,
         LineChart,
         BarChart,
         BaseProgress,
         RouteBreadCrumb,
         StatsCard,
         TaskList,
         PageVisitsTable,
         SocialTrafficTable,
         LightTable,
         UserList,
         ProgressTrackList
      },
      data() {
         return {
            isLoading: false,
            bigLineChart: {
               allData: [
                  [0, 20, 10, 30, 15, 40, 20, 60, 60],
                  [0, 20, 5, 25, 10, 30, 15, 40, 40]
               ],
               activeIndex: 0,
               chartData: {
                  datasets: [
                     {
                        label: 'Performance',
                        data: [0, 20, 10, 30, 15, 40, 20, 60, 60],
                     }
                  ],
                  labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
               },
               extraOptions: chartConfigs.blueChartOptions,
            },
            redBarChart: {
               chartData: {
                  labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                  datasets: [{
                     label: 'Sales',
                     data: [25, 20, 30, 22, 17, 29]
                  }]
               }
            }
         };
      },
      computed: {
         ...mapGetters('reportStore', {
            totals: 'totals',
         }),
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

               if(this.totals.length >= 7){
                  var last_week = this.totals[6];

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
         }
      },
      methods: {
         initBigChart(index) {
            let chartData = {
               datasets: [
                  {
                     label: 'Performance',
                     data: this.bigLineChart.allData[index]
                  }
               ],
               labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            };
            this.bigLineChart.chartData = chartData;
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
                    })
                    .catch((error) => {
                       console.log(error);
                       this.isLoading = false;
                    });
         }
      },
      mounted() {
         this.initBigChart(0);
         this.getTotals();
      }
   };
</script>
<style></style>
