<template>
    <div class="shell">
        <div class="section__inner">
            <div class="section__title">
                <h5>Notifications Page</h5>
            </div>
        </div>
    </div>
</template>

<script>
    /**
     * @ The external dependecies.
     */

    import { validationMixin } from 'vuelidate';
    import JQuery from 'jquery';
    let $ = JQuery;


    /**
     * @ The internal dependecies.
     */
    import formValidationMixin from '~/plugins/form-validation';
    import Datepicker from 'vuejs-datepicker';
    import Field from '~/components/Summa/Common/Field';



    export default {
        name: 'Notification',
        mixins: [
            validationMixin,
            formValidationMixin
        ],
        components: {
            Datepicker,
            Field,
        },
        // validations: {
        //     form: {
        //         reportData: {
        //             name: { required },
        //             company_type: { required }
        //         }
        //     }
        // },
        data () {
            return {}
        },

        computed: {
        },
        methods: {
        },
        mounted() {
        },
        created() {
        }
    }
</script>
