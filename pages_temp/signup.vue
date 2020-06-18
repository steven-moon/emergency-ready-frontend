<template>
   <div>
      <!-- Header -->
      <div class="header bg-gradient-success py-7 py-lg-8 pt-lg-9">
         <div class="container">
            <div class="header-body text-center mb-7">
               <div class="row justify-content-center">
                  <div class="col-xl-5 col-lg-6 col-md-8 px-5">
                     <h1 class="text-white">Signup</h1>
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
                                    placeholder="First Name"
                                    prepend-icon="ni ni-hat-3"
                                    v-model="$v.form.first_name.$model">
                        </base-input>
                        <base-input alternative
                                    class="mb-3"
                                    placeholder="Last Name"
                                    prepend-icon="ni ni-hat-3"
                                    v-model="$v.form.last_name.$model">
                        </base-input>
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

                        <base-input alternative
                                    class="mb-3"
                                    placeholder="Password"
                                    prepend-icon="ni ni-lock-circle-open"
                                    type="password"
                                    v-model="$v.form.repeatPassword.$model">
                        </base-input>

                        <base-checkbox v-model="form.rememberMe">Remember me</base-checkbox>
                        <div class="text-center">
                           <base-button class="my-4" type="primary">Create Account</base-button>
                        </div>
                     </form>
                  </div>
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
</template>

<script>
    /**
     * @ The external dependecies.
     */
    import {validationMixin} from 'vuelidate';
    import {mapActions, mapGetters, mapMutations} from "vuex";
    import {email, minLength, required, sameAs} from 'vuelidate/lib/validators';
    /**
     * @ The internal dependecies.
     */
    import Field from '~/components/Summa/Common/Field';
    import CommonAPI from '~/api/CommonAPI';
    import formValidationMixin from '~/plugins/form-validation';

    import {Modal, BaseAlert} from '~/components/Black';

    export default {
        name: 'login',
        mixins: [
            validationMixin,
            formValidationMixin
        ],
       layout: "argon-auth-layout",
        components: {
            Field,
            Modal,
            BaseAlert
        },
        validations: {
            form: {
                email:      {required, email},
                first_name: {required, minLength: minLength(1)},
                last_name:  {required, minLength: minLength(1)},
                phone:      {minLength: minLength(10)},
                password:   {required, minLength: minLength(6)},
                repeatPassword: {
                    required,
                    sameAsPassword: sameAs('password')
                },

            }
        },
        data: () => ({
            showSpinner: false,
            message: null,
            alertType: "info",
            form: {
                email: '',
                first_name: '',
                last_name: '',
                phone: '',
                password: '',
                repeatPassword: ''
            },
            notifications: {
                topCenter: false
            },
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
            returnToLogin() {
                window.location.href = "/login";
            },
            notifyVue(verticalAlign, horizontalAlign, message) {
                console.log("notifyVue");
                console.log(message);
                this.$notify({
                    message: message,
                    timeout: 30000,
                    icon: 'tim-icons icon-bell-55',
                    horizontalAlign: horizontalAlign,
                    verticalAlign: verticalAlign,
                    type: 'warning'
                });
            },
            handleFormSubmit() {
                this.$v.form.$touch();
                // if its still pending or an error is returned do not submit
                if (this.form.email.length === 0 ||
                    this.form.password.length   === 0 ||
                    this.form.first_name.length === 0 ||
                    this.form.last_name.length  === 0 ||
                    this.$v.form.$pending || this.$v.form.$error) {
                    console.log("Error or Pending");
                    console.log(this.$v.form);
                    this.alertType = 'danger';
                    this.message = "Error in form.  Make sure you are using a valid email, first name, last name and that your passwords match.";
                } else {
                    this.showSpinner = true;
                    this.message = null;
                    CommonAPI.signup(this.$store, this.form)
                        .then(response => {
                            console.log("In then response on login. response=");
                            console.log(response);
                            if (response.status && response.status === "success") {

                                this.$cookies.set("authToken", response.api_token, {
                                    path: '/',
                                    maxAge: 60 * 60 * 24 * 7
                                });
                                this.$cookies.set("userId", this.form.email, {path: '/', maxAge: 60 * 60 * 24 * 7});
                                this.$cookies.set("user", JSON.stringify(response.data.user), {
                                    path: '/',
                                    maxAge: 60 * 60 * 24 * 7
                                });

                                this.$store.commit('setUser', response.data.user);
                                this.$store.commit('setUserID', this.form.email);
                                this.$store.commit('setAuthToken', response.api_token);

                                window.location.href = "/";
                            } else {
                                this.alertType = 'danger';
                                if (response.message && response.message.length > 0) {
                                    this.message = response.message;
                                } else {
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
    };

</script>
<style>
   .card .alert {
      position: relative !important;
      width: 100%;
   }
</style>
