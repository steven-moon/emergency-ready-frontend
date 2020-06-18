<template>
    <div>
        <!-- Header -->
        <div class="header bg-gradient-success py-7 py-lg-8 pt-lg-9">
            <div class="container">
                <div class="header-body text-center mb-7">
                    <div class="row justify-content-center">
                        <div class="col-xl-5 col-lg-6 col-md-8 px-5">
                            <h1 class="text-white">Forgot Password</h1>
                            <p class="text-lead text-white">Enter your email below to get sent a reset password</p>
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
                                            placeholder="Email"
                                            prepend-icon="ni ni-email-83"
                                            v-model="$v.form.email.$model">
                                </base-input>

                                <div class="text-center">
                                    <base-button class="my-4" type="primary">Send Reset Email</base-button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-6">
                            <nuxt-link class="text-light" to="/login"><small>Return to Login</small>
                            </nuxt-link>
                        </div>
                        <div class="col-6 text-right">
                            <nuxt-link class="text-light" to="/"><small>Home Page</small></nuxt-link>
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
    import {email, minLength, required} from 'vuelidate/lib/validators';
    /**
     * @ The internal dependecies.
     */
    import Field from '~/components/Summa/Common/Field';
    import CommonAPI from '~/api/CommonAPI';
    import formValidationMixin from '~/plugins/form-validation';
    import {BaseAlert} from '~/components/Black';

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
                email: {required, email},
            }
        },
        data: () => ({
            showSpinner: false,
            alertType: "info",
            message: null,
            form: {
                email: '',
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
               this.$v.form.$touch();
               // if its still pending or an error is returned do not submit
               if (this.$v.form.$pending || this.$v.form.$error) {
                  this.alertType = 'danger';
                  this.message = "Please enter a valid email address."
               }else {
                  this.showSpinner = true;
                   this.message = null;
                  CommonAPI.forgotPassword(this.$store, this.form.email)
                          .then(response => {
                             console.log("In then response on login. response=");
                             console.log(response);
                             if (response.status && response.status === "success") {
                                //window.location.href = "/";
                                this.alertType = 'info';
                                this.message = "A reset email has been sent to: " + this.form.email;
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
        }
    }
</script>
