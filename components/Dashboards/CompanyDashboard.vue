<template>
   <div class="dashboard-white-content row">
      <!-- Big Chart -->
      <div class="col-12">
         <card type="chart">
            <template slot="header">
               <div class="row">
                  <div :class="isRTL ? 'text-right' : 'text-left'" class="col-sm-6">
                     <h2 class="card-title">Revenue</h2>
                  </div>
                  <div class="col-sm-6 d-flex d-sm-block">
                     <div
                        :class="isRTL ? 'float-left' : 'float-right'"
                        class="btn-group btn-group-toggle"
                        data-toggle="buttons"
                     >
                        <label
                           :class="{ active: bigLineChart.activeIndex === index }"
                           :id="index"
                           :key="option.name"
                           class="btn btn-sm btn-primary btn-simple"
                           v-for="(option, index) in bigLineChartCategories"
                        >
                           <input
                              :checked="bigLineChart.activeIndex === index"
                              @click="initBigChart(index)"
                              autocomplete="off"
                              name="options"
                              type="radio"
                           />
                           <span class="d-none d-sm-block">{{ option.name }}</span>
                           <span class="d-block d-sm-none"><i :class="option.icon"></i></span>
                        </label>
                     </div>
                  </div>
               </div>
            </template>
            <div class="chart-area">
               <line-chart
                  :chart-data="bigLineChart.chartData"
                  :extra-options="bigLineChart.extraOptions"
                  :gradient-colors="bigLineChart.gradientColors"
                  :gradient-stops="bigLineChart.gradientStops"
                  ref="bigChart"
                  style="height: 100%"
               >
               </line-chart>
            </div>
         </card>
      </div>
      <!-- Stats Cards -->
      <div :key="card.title" class="col-lg-3 col-md-6" v-for="card in statsCards">
         <stats-card
            :icon="card.icon"
            :sub-title="card.subTitle"
            :title="card.title"
            :type="card.type"
         >
            <div slot="footer" v-html="card.footer"></div>
         </stats-card>
      </div>

      <!-- Small charts -->
      <div :class="{ 'text-right': isRTL }" class="col-lg-4">
         <card type="chart">
            <template slot="header">
               <h5 class="card-category">Total Shipments</h5>
               <h3 class="card-title">
                  <i class="tim-icons icon-bell-55 text-primary "></i> 763,215
               </h3>
            </template>
            <div class="chart-area">
               <line-chart
                  :chart-data="purpleLineChart.chartData"
                  :extra-options="purpleLineChart.extraOptions"
                  :gradient-colors="purpleLineChart.gradientColors"
                  :gradient-stops="purpleLineChart.gradientStops"
                  style="height: 100%"
               >
               </line-chart>
            </div>
         </card>
      </div>
      <div :class="{ 'text-right': isRTL }" class="col-lg-4">
         <card type="chart">
            <template slot="header">
               <h5 class="card-category">Daily Sales</h5>
               <h3 class="card-title">
                  <i class="tim-icons icon-delivery-fast text-info "></i> 3,500€
               </h3>
            </template>
            <div class="chart-area">
               <bar-chart
                  :chart-data="blueBarChart.chartData"
                  :extra-options="blueBarChart.extraOptions"
                  :gradient-stops="blueBarChart.gradientStops"
                  style="height: 100%"
               >
               </bar-chart>
            </div>
         </card>
      </div>
      <div :class="{ 'text-right': isRTL }" class="col-lg-4">
         <card type="chart">
            <template slot="header">
               <h5 class="card-category">Completed tasks</h5>
               <h3 class="card-title">
                  <i class="tim-icons icon-send text-success "></i> 12,100K
               </h3>
            </template>
            <div class="chart-area">
               <line-chart
                  :chart-data="greenLineChart.chartData"
                  :extra-options="greenLineChart.extraOptions"
                  :gradient-stops="greenLineChart.gradientStops"
                  style="height: 100%"
               >
               </line-chart>
            </div>
         </card>
      </div>
<!--      <div class="col-lg-5">-->
<!--         <card :header-classes="{ 'text-right': isRTL }" type="tasks">-->
<!--            <template slot="header">-->
<!--               <h6 class="title d-inline">Tasks (5)</h6>-->
<!--               <p class="card-category d-inline">Today</p>-->
<!--               <base-dropdown-->
<!--                  :class="{ 'float-left': isRTL }"-->
<!--                  menu-on-right=""-->
<!--                  tag="div"-->
<!--                  title-classes="btn btn-link btn-icon"-->
<!--               >-->
<!--                  <i class="tim-icons icon-settings-gear-63" slot="title"></i>-->
<!--                  <a class="dropdown-item" href="#pablo"> Action </a>-->
<!--                  <a class="dropdown-item" href="#pablo"> Another action </a>-->
<!--                  <a class="dropdown-item" href="#pablo"> Something else </a>-->
<!--               </base-dropdown>-->
<!--            </template>-->
<!--            <div class="table-full-width table-responsive">-->
<!--               <task-list></task-list>-->
<!--            </div>-->
<!--         </card>-->
<!--      </div>-->
<!--      <div class="col-lg-7">-->
<!--         <card :header-classes="{ 'text-right': isRTL }" class="card">-->
<!--            <h5 class="card-title" slot="header">Management table</h5>-->
<!--            <div class="table-responsive">-->
<!--               <user-table></user-table>-->
<!--            </div>-->
<!--         </card>-->
<!--      </div>-->
   </div>
</template>
<script>
    import LineChart from '~/components/Black/Charts/LineChart';
    import BarChart from '~/components/Black/Charts/BarChart';
    import * as chartConfigs from '~/components/Black/Charts/config';
    import TaskList from '~/components/Black/Dashboard/TaskList';
    import UserTable from '~/components/Black/Dashboard/UserTable';
    import CountryMapCard from '~/components/Black/Dashboard/CountryMapCard';
    import StatsCard from '~/components/Black/Cards/StatsCard';
    import config from '~/config';

    let bigChartData = [
        [100, 70, 85, 60, 75, 60, 90],
        [80, 120, 105, 110, 95, 105, 90, 100, 80, 95, 70, 120,80, 120, 105, 110, 95, 105, 90, 100, 80, 95, 70, 120,80, 120, 105, 110, 95, 105, 90],
        [460, 580, 465, 613, 680, 705, 490, 330, 570, 315, 460, 730]
    ];
    let bigChartLabels = [
        ['SUN','MON','TUE','WED','THU','FRI','SAT'],
        ['1st','2nd','3rd','4th','5th','6th','7th','8th','9th','10th','11th','12th','13th','14th','15th',
            '16th','17th','18th','19th','20th','21th','22nd','23rd','24th','25th','26th','27th','28th','29th','30th','31st'],
        ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
    ];
    let bigChartDatasetOptions = {
        fill: true,
        borderColor: config.colors.primary,
        borderWidth: 2,
        borderDash: [],
        borderDashOffset: 0.0,
        pointBackgroundColor: config.colors.primary,
        pointBorderColor: 'rgba(255,255,255,0)',
        pointHoverBackgroundColor: config.colors.primary,
        pointBorderWidth: 20,
        pointHoverRadius: 4,
        pointHoverBorderWidth: 15,
        pointRadius: 4,
    };

    export default {
        name: 'company-dashbaord',
        layout: "default",
        components: {
            LineChart,
            BarChart,
            StatsCard,
            TaskList,
            CountryMapCard,
            UserTable
        },
        data() {
            return {
                statsCards: [
                    {
                        title: '14 of 33',
                        subTitle: 'Leads Closed',
                        type: 'warning',
                        icon: 'tim-icons icon-spaceship',
                        footer: '<i class="tim-icons icon-atom"></i> Per Salesperson: 3.1'
                    },
                    {
                        title: '2143',
                        subTitle: 'Hours Worked',
                        type: 'primary',
                        icon: 'tim-icons icon-watch-time',
                        footer: '<i class="tim-icons icon-single-02"></i></i>Per Employee: 134'
                    },
                    {
                        title: '21',
                        subTitle: 'Task Completed',
                        type: 'info',
                        icon: 'tim-icons icon-check-2',
                        footer: '<i class="tim-icons icon-watch-time"></i> Average Time: 14.3'
                    },
                    {
                        title: '75',
                        subTitle: 'Issues',
                        type: 'danger',
                        icon: 'tim-icons icon-molecule-40',
                        footer: '<i class="tim-icons icon-sound-wave"></i> Per Task: 3.4'
                    }
                ],
                bigLineChart: {
                    activeIndex: 0,
                    chartData: {
                        datasets: [{
                            ...bigChartDatasetOptions,
                            data: bigChartData[0]
                        }],
                        labels: bigChartLabels[0]
                    },
                    extraOptions: chartConfigs.purpleChartOptions,
                    gradientColors: config.colors.primaryGradient,
                    gradientStops: [1, 0.4, 0],
                    categories: []
                },
                purpleLineChart: {
                    extraOptions: chartConfigs.purpleChartOptions,
                    chartData: {
                        labels: ['JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
                        datasets: [
                            {
                                label: 'Data',
                                fill: true,
                                borderColor: config.colors.primary,
                                borderWidth: 2,
                                borderDash: [],
                                borderDashOffset: 0.0,
                                pointBackgroundColor: config.colors.primary,
                                pointBorderColor: 'rgba(255,255,255,0)',
                                pointHoverBackgroundColor: config.colors.primary,
                                pointBorderWidth: 20,
                                pointHoverRadius: 4,
                                pointHoverBorderWidth: 15,
                                pointRadius: 4,
                                data: [80, 100, 70, 80, 120, 80]
                            }
                        ]
                    },
                    gradientColors: config.colors.primaryGradient,
                    gradientStops: [1, 0.2, 0]
                },
                greenLineChart: {
                    extraOptions: chartConfigs.greenChartOptions,
                    chartData: {
                        labels: ['JUL', 'AUG', 'SEP', 'OCT', 'NOV'],
                        datasets: [
                            {
                                label: 'My First dataset',
                                fill: true,
                                borderColor: config.colors.danger,
                                borderWidth: 2,
                                borderDash: [],
                                borderDashOffset: 0.0,
                                pointBackgroundColor: config.colors.danger,
                                pointBorderColor: 'rgba(255,255,255,0)',
                                pointHoverBackgroundColor: config.colors.danger,
                                pointBorderWidth: 20,
                                pointHoverRadius: 4,
                                pointHoverBorderWidth: 15,
                                pointRadius: 4,
                                data: [90, 27, 60, 12, 80]
                            }
                        ]
                    },
                    gradientColors: [
                        'rgba(66,134,121,0.15)',
                        'rgba(66,134,121,0.0)',
                        'rgba(66,134,121,0)'
                    ],
                    gradientStops: [1, 0.4, 0]
                },
                blueBarChart: {
                    extraOptions: chartConfigs.barChartOptions,
                    chartData: {
                        labels: ['USA', 'GER', 'AUS', 'UK', 'RO', 'BR'],
                        datasets: [
                            {
                                label: 'Countries',
                                fill: true,
                                borderColor: config.colors.info,
                                borderWidth: 2,
                                borderDash: [],
                                borderDashOffset: 0.0,
                                data: [53, 20, 10, 80, 100, 45]
                            }
                        ]
                    },
                    gradientColors: config.colors.primaryGradient,
                    gradientStops: [1, 0.4, 0]
                }
            };
        },
        computed: {
            enableRTL() {
                return this.$route.query.enableRTL;
            },
            isRTL() {
                return false;
                //return this.$rtl.isRTL;
            },
            bigLineChartCategories() {
                return [{name: 'Week', icon: 'tim-icons icon-single-02'},
                    {name: 'Month', icon: 'tim-icons icon-gift-2'},
                    {name: 'Year', icon: 'tim-icons icon-tap-02'}];
            }
        },
        methods: {
            initBigChart(index) {
                let chartData = {
                    datasets: [{
                        ...bigChartDatasetOptions,
                        data: bigChartData[index]
                    }],
                    labels: bigChartLabels[index]
                };
                this.$refs.bigChart.updateGradients(chartData);
                this.bigLineChart.chartData = chartData;
                this.bigLineChart.activeIndex = index;
            }
        },
        mounted() {
            this.initBigChart(0);

        }
    }
</script>
<style></style>
