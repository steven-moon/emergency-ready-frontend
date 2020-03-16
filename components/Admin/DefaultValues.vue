<template>
    <div class="shell">
        <div class="section__inner">
            <div class="section__title">
                <h5>Default Values Page</h5>
								<!-- Build out settings block -->
									<!-- Include settings bars and profile pic -->
            </div>
        </div>
    </div>
</template>

<script>
    /**
     * @ The external dependecies.
     */

    import {validationMixin} from 'vuelidate';
    import JQuery from 'jquery';
    import {mapGetters} from 'vuex';


    /**
     * @ The internal dependecies.
     */
    import formValidationMixin from '~/plugins/form-validation';
    import Field from '~/components/Summa/Common/Field';

    let $ = JQuery;


    export default {
        name: 'DefaultValues',
        mixins: [
            validationMixin,
            formValidationMixin
        ],
        components: {
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
        },
        beforeCreate() {
        },
    }
</script>
