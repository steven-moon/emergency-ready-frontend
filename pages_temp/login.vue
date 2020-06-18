<template>
    <div>
        <!-- Header -->
        <div class="header bg-gradient-success py-7 py-lg-8 pt-lg-9">
            <div class="container">
                <div class="header-body text-center mb-7">
                    <div class="row justify-content-center">
                        <div class="col-xl-5 col-lg-6 col-md-8 px-5">
                            <h1 class="text-white">Login</h1>
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
                                            placeholder="Email"
                                            prepend-icon="ni ni-email-83"
                                            v-model="$v.form.email.$model">
                                </base-input>

                                <base-input alternative
                                            class="mb-3"
                                            placeholder="Password"
                                            prepend-icon="ni ni-lock-circle-open"
                                            type="password"
                                            v-model="$v.form.password.$model">
                                </base-input>

                                <base-checkbox v-model="form.rememberMe">Remember me</base-checkbox>
                                <div class="text-center">
                                    <base-button class="my-4" type="primary">Sign in</base-button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-6">
                            <nuxt-link class="text-light" to="/forgot-password"><small>Forgot password?</small>
                            </nuxt-link>
                        </div>
                        <div class="col-6 text-right">
                            <nuxt-link class="text-light" to="/signup"><small>Create new account</small></nuxt-link>
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
    import CommonAPI from '~/api/CommonAPI';
    import formValidationMixin from '~/plugins/form-validation';
    import BaseAlert from '~/components/Argon/argon-core/BaseAlert';

    export default {
        name: 'login',
        mixins: [
            validationMixin,
            formValidationMixin
        ],
        layout: "argon-auth-layout",
        components: {
            BaseAlert
        },
        validations: {
            form: {
                email: {required, email},
                password: {required, minLength: minLength(6)}
            }
        },
        data: () => ({
            showSpinner: false,
            message: null,
            alertType: "info",
            form: {
                email: '',
                password: '',
                rememberMe: true
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
            handleFormSubmit() {
                this.$v.form.$touch();
                // if its still pending or an error is returned do not submit
                if (this.form.email.length === 0 || this.form.password.length === 0 || this.$v.form.$pending || this.$v.form.$error) {
                    console.log("Error or Pending");
                    console.log(this.$v.form);
                    this.alertType = 'danger';
                    this.message = "Error in form.  Make sure you are using a valid email and passwords.";
                } else {
                    this.showSpinner = true;
                    this.message = null;
                    CommonAPI.login(this.$store, this.form.email, this.form.password)
                        .then(response => {
                            console.log("In then response on login. response=");
                            console.log(response);
                            if (response.status && response.status === "success") {
                                this.$cookies.set("authToken", response.api_token, {
                                    path: '/',
                                    maxAge: 60 * 60 * 24 * 7
                                });
                                this.$cookies.set("userId", this.form.email, {path: '/', maxAge: 60 * 60 * 24 * 7});
                                this.$cookies.set("user", JSON.stringify(response.user), {
                                    path: '/',
                                    maxAge: 60 * 60 * 24 * 7
                                });


                                this.$store.commit('setAuthToken', response.api_token);
                                this.$store.commit('setUserID', this.form.email);
                                this.$store.commit('setUser', response.user);

                                window.location.href = "/";
                            } else {
                                this.alertType = 'danger';
                                if (response.message && response.message.length > 0) {
                                    this.message = response.message;
                                } else {
                                    this.message = 'A server error has occurred.  Please try again later.';
                                }
                                this.showSpinner = false;
                            }

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
            //this.logout();
        },
        created() {
            //this.logout();
            this.$store.dispatch('logout');
            if (this.isUserLoggedIn) {
                //window.location.href = "/";
            } else {
                //	window.location.href = "/login.html";
            }
            //if (this.$route.query.action === 'logout') {
            //  this.logout();
            //}
        }
    }
</script>
