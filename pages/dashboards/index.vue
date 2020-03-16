<template>
   <company-dashboard></company-dashboard>
</template>

<script>
    import CompanyDashboard from '~/components/Dashboards/CompanyDashboard';

    export default {
        layout: "default",
        middleware: ["check-auth", "auth"],
        components: {
            CompanyDashboard
        },
        data() {
            return {
                showSpinner: false,
            }
        },
        computed: {},
        methods: {},
        created() {
        },
    }
</script>
