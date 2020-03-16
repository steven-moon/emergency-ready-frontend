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
                        <h3>Forgot Password</h3>
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

                    </div>

                    <div class="form__actions">
                        <div class="d-flex justify-content-between align-items-center flex-wrap">
                            <button class="form__btn btn" type="submit">Send Reset Password Email</button>
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
        layout: "login",
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
