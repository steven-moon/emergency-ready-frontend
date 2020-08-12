<template>
   <section class="section-login">
      <div class="section__inner">
         <div class="form-login">
            <div v-if="showSpinner">
               <tile :loading="showSpinner"></tile>
            </div>
            <form @submit.prevent="handleFormSubmit" v-else>
               <div class="form__head">
                  <h3>Log in</h3>
               </div>

               <div class="form__body">
                  <div class="form__row" v-if="message">
                     <div class="form__col">
                        <base-alert :type="alertType">{{message}}</base-alert>
                     </div>
                  </div>
                  <div class="form__row">
                     <div class="form__col">
                        <div class="form__controls">
                           <field
                              :is-invalid="fieldError(['email'])"
                              :is-required="requiredField(['email'])"
                              error-message="Error: Invalid Email"
                              id="field-username"
                              label="E-Mail"
                              placeholder="Example: john@gmail.com"
                              size="large"
                              v-model.trim="$v.form.email.$model"
                              withAsterisk
                           />
                        </div><!-- /.form__controls -->
                     </div>
                  </div>

                  <div class="form__row">
                     <div class="form__col">
                        <div class="form__controls">
                           <field
                              :is-invalid="fieldError(['password'])"
                              :is-required="requiredField(['password'])"
                              error-message="Error: Password must be at least 6 characters"
                              id="field-password"
                              label="Password"
                              placeholder="Your Password"
                              size="large"
                              type="password"
                              v-model.trim="$v.form.password.$model"
                              withAsterisk
                           />
                        </div><!-- /.form__controls -->
                     </div>
                  </div>
               </div>

               <div class="form__actions">
                  <div class="d-flex justify-content-between align-items-center flex-wrap">
                     <div class="password-link">
                        <a href="/forgot-password">
                           <img alt="" height="16" src="/images/ico-questionmark@2x.png" width="16">

                           <span>Forgot password?</span>
                        </a>
                     </div>

                     <div class="checkbox">
                        <a href="/signup">

                           <span>Create Account</span>
                        </a>
                     </div>

                     <button class="form__btn btn" type="submit">Log In</button>
                  </div>
               </div>
            </form>
         </div>
      </div>
   </section>
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
    import Field from '@/components/Summa/Common/Field';
    import CommonAPI from '@/api/CommonAPI';
    import formValidationMixin from '@/plugins/form-validation';
    import {BaseAlert } from '@/components/Black';

    export default {
        name: 'login',
        mixins: [
            validationMixin,
            formValidationMixin
        ],
        layout: "login",
        components: {
            Field,
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
                password: ''
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
                }else {
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
                                if(response.message && response.message.length > 0) {
                                    this.message = response.message;
                                }else{
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
