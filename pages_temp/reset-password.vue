<template>
    <div>
        <!-- Header -->
        <div class="header bg-gradient-success py-7 py-lg-8 pt-lg-9">
            <div class="container">
                <div class="header-body text-center mb-7">
                    <div class="row justify-content-center">
                        <div class="col-xl-5 col-lg-6 col-md-8 px-5">
                            <h1 class="text-white">Reset Password</h1>
                            <p class="text-lead text-white"></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="separator separator-bottom separator-skew zindex-100">
                <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <polygon class="fill-default" points="2560 0 2560 100 0 100"></polygon>
                </svg>
            </div>
        </div>
        <!-- Page content -->
        <div class="container mt--8 pb-5">
            <div class="row justify-content-center">
                <div class="col-lg-5 col-md-7">
                    <div class="card bg-secondary border-0 mb-0">
                        <div class="card-body px-lg-5 py-lg-5">
                            <div v-if="showSpinner">
                                <tile :loading="showSpinner"></tile>
                            </div>
                            <form @submit.prevent="handleFormSubmit" v-else>
                                <div v-if="message"  class="text-center">
                                    <base-alert :type="alertType">{{message}}</base-alert>
                                </div>
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="Password"
                                            prepend-icon="ni ni-lock-circle-open"
                                            type="password"
                                            v-model="$v.form.password.$model">
                                </base-input>

                                <base-input alternative
                                            class="mb-3"
                                            placeholder="Password"
                                            prepend-icon="ni ni-lock-circle-open"
                                            type="password"
                                            v-model="$v.form.repeatPassword.$model">
                                </base-input>

                                <div class="text-center">
                                    <base-button class="my-4" type="primary">Reset Password</base-button>
                                </div>
                            </form>
                        </div>
                        <div class="row mt-3">
                            <div class="col-6">
                            </div>
                            <div class="col-6 text-right">
                                <nuxt-link class="text-light" to="/login"><small>Return to Login</small></nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    /**
     * @ The external dependecies.
     */
    import {validationMixin} from 'vuelidate';
    import {mapActions, mapGetters, mapMutations} from "vuex";
    import {sameAs, minLength, required} from 'vuelidate/lib/validators';
    /**
     * @ The internal dependecies.
     */
    import Field from '~/components/Summa/Common/Field';
    import CommonAPI from '~/api/CommonAPI';
    import {BaseAlert} from '~/components/Black';
    import formValidationMixin from '~/plugins/form-validation';

    export default {
        name: 'login',
        mixins: [
            validationMixin,
            formValidationMixin
        ],
        layout: "argon-auth-layout",
        components: {
            Field,
            BaseAlert
        },
        validations: {
            form: {
                password: {required, minLength: minLength(6)},
                repeatPassword: {
                    required,
                    sameAsPassword: sameAs('password')
                }
            }
        },
        data: () => ({
            showSpinner: false,
            token: null,
            message: null,
            passwordHasReset: false,
            alertType: "info",
            form: {
                password: '',
                repeatPassword: ''
            }
        }),
        computed: {
            ...mapActions([
                'logout'
            ]),
            ...mapGetters({
                isUserLoggedIn: 'isUserLoggedIn',
            }),
        },
        methods: {
            returnToLogin(){
                window.location.href = "/login";
            },
            handleFormSubmit() {
                if (!this.token) {
                    this.alertType = 'danger';
                    this.message = "There is no valid reset token.  Make sure you come to this page from the reset password email";
                } else if (this.form.password.length === 0 || this.$v.form.$pending || this.$v.form.$error) {
                    console.log("Error or Pending");
                    console.log(this.$v.form);
                    this.alertType = 'danger';
                    this.message = "Error in form.  Make sure your passwords match.";
                } else {
                    this.showSpinner = true;
                    this.message = null;
                    CommonAPI.resetPassword(this.$store, this.token, this.form.password)
                        .then(response => {
                            console.log("In then response on login. response=");
                            console.log(response);
                            if (response.status && response.status === "success") {
                                this.alertType = 'info'
                                this.message = "Your password has been successfully changed";
                                this.passwordHasReset = true;
                            } else {
                                this.alertType = 'danger';
                                if(response.message && response.message.length > 0) {
                                    this.message = response.message;
                                }else{
                                    this.message = 'A server error has occurred.  Please try again later.';
                                }
                            }
                            this.showSpinner = false;
                        })
                        .catch((error) => {
                            console.log(error);
                            this.showSpinner = false;
                            this.message = error;
                            this.alertType = 'danger'
                        });
                }
            }
        },
        mounted() {
        },
        created() {
           if (this.$route.query.token) {
              this.token = this.$route.query.token;
           }else{
              this.token = null;
           }
        }
    }
</script>
