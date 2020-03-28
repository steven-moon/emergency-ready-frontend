<template>
    <div>
        <!--Charts-->
        <div class="container-fluid mt--6">
            <div class="row">
                <div class="col-6">
                    <bar-chart :isLoading="isLoading" :customStep="customStep" :activeIndex="0"></bar-chart>
                </div>
                <div class="col-6">
                    <bar-chart :isLoading="isLoading" :customStep="customStep" :activeIndex="1"></bar-chart>
                </div>
            </div>
            <div class="row">
                <div class="col-6">
                    <bar-chart :isLoading="isLoading" :customStep="customStep" :activeIndex="2"></bar-chart>
                </div>
                <div class="col-6">
                    <bar-chart :isLoading="isLoading" :customStep="customStep" :activeIndex="3"></bar-chart>
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
    import BarChart from '@/components/Dashboards//Charts/BarChart';


    export default {
        props: {
            isLoading: {
                type: Boolean,
                default: true
            },
            customStep: {
                type: Number,
                default: 4
            },
        },
        components: {
            BarChart,
        },
        data() {
            return {
            };
        },
        mounted() {
        }
    };
</script>
<style></style>
