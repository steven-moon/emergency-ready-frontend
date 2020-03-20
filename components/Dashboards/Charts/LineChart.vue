<template>

    <card type="default" header-classes="bg-transparent" v-if="!isLoading">
        <div slot="header" class="row align-items-center">
            <div slot="header" class="row align-items-center">
                <div class="col" v-if="bigLineChart.activeIndex === 0">
                    <h6 class="text-uppercase text-muted ls-1 mb-1">Overview</h6>
                    <h5 class="h3 mb-0">Total Confirmed</h5>
                </div>
                <div class="col" v-if="bigLineChart.activeIndex === 1">
                    <h6 class="text-uppercase text-muted ls-1 mb-1">Overview</h6>
                    <h5 class="h3 mb-0">Total Deaths</h5>
                </div>
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
</template>
<script>
    import moment from 'moment';
    import {mapGetters} from 'vuex';

    //
    import * as chartConfigs from '@/components/Argon/argon-core/Charts/config';
    import LineChart from '@/components/Argon/argon-core/Charts/LineChart';



    export default {
        name: "DashboardLineChart",
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
            LineChart,
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
                }else{
                    label = "Deaths";
                }

                var labels = [];
                var data = [];

                var i = 0;

                while (i < this.totals.length) {
                    var row = this.totals[i];
                    if (parseInt(row.confirmed) > 12) {
                        labels.unshift(row.report_date.replace("2020-", ""));
                        if (this.activeIndex === 0) {
                            data.unshift(row.confirmed);
                        } else {
                            data.unshift(row.deaths);
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
