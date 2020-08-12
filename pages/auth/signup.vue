<template>
   <section class="section-login">
      <div class="section__inner">
         <div class="form-login">
            <div v-if="showSpinner">
               <tile :loading="showSpinner"></tile>
            </div>
            <div v-else>
               <form @submit.prevent="handleFormSubmit">
                  <div class="form__head">
                     <h3>Sign Up</h3>
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
                                 :is-invalid="fieldError(['first_name'])"
                                 :is-required="requiredField(['first_name'])"
                                 error-message="Error: You must enter a first name"
                                 id="field-first-name"
                                 label="First Name"
                                 placeholder="First Name"
                                 size="large"
                                 v-model.trim="$v.form.first_name.$model"
                                 withAsterisk
                              />
                           </div><!-- /.form__controls -->
                        </div>
                     </div>

                     <div class="form__row">
                        <div class="form__col">
                           <div class="form__controls">
                              <field
                                 :is-invalid="fieldError(['last_name'])"
                                 :is-required="requiredField(['last_name'])"
                                 error-message="Error: You must enter a last name."
                                 id="field-last-name"
                                 label="Last Name"
                                 placeholder="Last Name"
                                 size="large"
                                 v-model.trim="$v.form.last_name.$model"
                                 withAsterisk
                              />
                           </div><!-- /.form__controls -->
                        </div>
                     </div>

                     <div class="form__row">
                        <div class="form__col">
                           <div class="form__controls">
                              <field
                                 :is-invalid="fieldError(['phone'])"
                                 error-message="Error: Phone must be at least 10 digits"
                                 id="field-phone"
                                 label="Phone"
                                 placeholder="Phone"
                                 size="large"
                                 v-model.trim="$v.form.phone.$model"
                              />
                           </div><!-- /.form__controls -->
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

                     <div class="form__row">
                        <div class="form__col">
                           <div class="form__controls">
                              <field
                                 :is-invalid="fieldError(['repeatPassword'])"
                                 :is-required="requiredField(['repeatPassword'])"
                                 error-message="Error: Passwords must match"
                                 id="field-confirm-password"
                                 label="Confirm Password"
                                 placeholder="Confirm Your Password"
                                 size="large"
                                 type="password"
                                 v-model.trim="$v.form.repeatPassword.$model"
                                 withAsterisk
                              />
                           </div><!-- /.form__controls -->
                        </div>
                     </div>
                  </div>


                  <div class="form__actions">
                     <div class="d-flex justify-content-between align-items-center flex-wrap">
                        <button class="form__btn btn" type="submit">Create Account</button>
                     </div>
                  </div>
               </form>
            </div>
            <div>
               <form @submit.prevent="returnToLogin">

                  <div class="form__actions">
                     <div class="d-flex justify-content-between align-items-center flex-wrap">
                        <button class="form__btn btn" type="submit">Return to Login</button>
                     </div>
                  </div>
               </form>
            </div>
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
        layout: "login",
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
