<template>
    <card header-classes="bg-transparent"  v-if="!isLoading">
        <div slot="header" class="row align-items-center">
            <div class="col" v-if="activeIndex === 0">
                <h6 class="text-uppercase text-muted ls-1 mb-1">Overview</h6>
                <h5 class="h3 mb-0">Total Confirmed</h5>
            </div>
            <div class="col" v-if="activeIndex === 1">
                <h6 class="text-uppercase text-muted ls-1 mb-1">Overview</h6>
                <h5 class="h3 mb-0">New Cases</h5>
            </div>
            <div class="col" v-if="activeIndex === 2">
                <h6 class="text-uppercase text-muted ls-1 mb-1">Overview</h6>
                <h5 class="h3 mb-0">Total Deaths</h5>
            </div>
            <div class="col" v-if="activeIndex === 3">
                <h6 class="text-uppercase text-muted ls-1 mb-1">Overview</h6>
                <h5 class="h3 mb-0">Recovered</h5>
            </div>
            <div class="col" v-if="activeIndex === 4">
                <h6 class="text-uppercase text-muted ls-1 mb-1">Overview</h6>
                <h5 class="h3 mb-0">New Deaths</h5>
            </div>
        </div>

        <bar-chart
                :height="350"
                ref="barChart"
                :chart-data="chartDataValues"
        >
        </bar-chart>
    </card>
</template>
<script>
    import moment from 'moment';
    import {mapGetters} from 'vuex';

    //
    import * as chartConfigs from '@/components/Argon/argon-core/Charts/config';
    import BarChart from '@/components/Argon/argon-core/Charts/BarChart';



    export default {
        name: "DashboardBarChart",
        props: {
            customStep: {
                type: Number,
                default: 4
            },
            isLoading: {
                type: Boolean,
                default: true
            },
            activeIndex: {
                type: Number,
                default: 0
            }
        },
        components: {
            BarChart,
        },

        data() {
            return {
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
            chartDataValues() {
                var label = "";
                if(this.activeIndex === 0){
                    label = "Confirmed";
                }else if(this.activeIndex === 1){
                    label = "New Cases";
                }else if(this.activeIndex === 2){
                    label = "Deaths";
                }else if(this.activeIndex === 3){
                    label = "Recovered";
                }else if(this.activeIndex === 4){
                    label = "New Deaths";
                }

                var labels = [];
                var data = [];

                var i = 0;

                while (i < this.totals.length) {
                    var row = this.totals[i];
                    if (row.report_date !== '2020-03-22'  && row.report_date !== '2020-03-13') {
                        if (this.activeIndex === 0 && parseInt(row.confirmed) > 12 ) {
                            labels.unshift(row.report_date.replace("2020-", ""));
                            data.unshift(row.confirmed);
                        } else if (this.activeIndex === 1 && parseInt(row.cases) > 12 ) {
                            labels.unshift(row.report_date.replace("2020-", ""));
                            data.unshift(row.cases);
                        } else if (this.activeIndex === 2 && parseInt(row.deaths) > 12 ) {
                            labels.unshift(row.report_date.replace("2020-", ""));
                            data.unshift(row.deaths);
                        } else if (this.activeIndex === 3 && parseInt(row.recovered) > 12 ) {
                            labels.unshift(row.report_date.replace("2020-", ""));
                            data.unshift(row.recovered);
                        } else if (this.activeIndex === 4 && parseInt(row.new_deaths) > 0 ) {
                            labels.unshift(row.report_date.replace("2020-", ""));
                            data.unshift(row.new_deaths);
                        }
                    }

                    i = i + this.customStep;
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
        },
        methods: {
        },
        mounted() {
        }
    };
</script>
<style></style>
