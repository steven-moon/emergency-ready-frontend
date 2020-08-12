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
              <h3>Reset Password</h3>
            </div>

            <div class="form__body">
              <div class="form__row" v-if="message">
                <div class="form__col">
                  <base-alert :type="alertType">{{ message }}</base-alert>
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
                  </div>
                  <!-- /.form__controls -->
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
                  </div>
                  <!-- /.form__controls -->
                </div>
              </div>
            </div>

            <div class="form__actions">
              <div
                class="d-flex justify-content-between align-items-center flex-wrap"
              >
                <button class="form__btn btn" type="submit">
                  Reset Password
                </button>
              </div>
            </div>
          </form>
        </div>
        <div>
          <form @submit.prevent="returnToLogin">
            <div class="form__actions">
              <div
                class="d-flex justify-content-between align-items-center flex-wrap"
              >
                <button class="form__btn btn" type="submit">
                  Return to Login
                </button>
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
import { validationMixin } from "vuelidate";
import { mapActions, mapGetters, mapMutations } from "vuex";
import { sameAs, minLength, required } from "vuelidate/lib/validators";
/**
 * @ The internal dependecies.
 */
import Field from "~/components/Summa/Common/Field";
import CommonAPI from "~/api/CommonAPI";
import { BaseAlert } from "~/components/Black";
import formValidationMixin from "~/plugins/form-validation";

export default {
  name: "login",
  mixins: [validationMixin, formValidationMixin],
  layout: "login",
  components: {
    Field,
    BaseAlert,
  },
  validations: {
    form: {
      password: { required, minLength: minLength(6) },
      repeatPassword: {
        required,
        sameAsPassword: sameAs("password"),
      },
    },
  },
  data: () => ({
    showSpinner: false,
    token: null,
    message: null,
    passwordHasReset: false,
    alertType: "info",
    form: {
      password: "",
      repeatPassword: "",
    },
  }),
  computed: {
    ...mapActions(["logout"]),
    ...mapGetters({
      isUserLoggedIn: "isUserLoggedIn",
    }),
  },
  methods: {
    returnToLogin() {
      window.location.href = "/login";
    },
    handleFormSubmit() {
      if (!this.token) {
        this.alertType = "danger";
        this.message =
          "There is no valid reset token.  Make sure you come to this page from the reset password email";
      } else if (
        this.form.password.length === 0 ||
        this.$v.form.$pending ||
        this.$v.form.$error
      ) {
        console.log("Error or Pending");
        console.log(this.$v.form);
        this.alertType = "danger";
        this.message = "Error in form.  Make sure your passwords match.";
      } else {
        this.showSpinner = true;
        this.message = null;
        CommonAPI.resetPassword(this.$store, this.token, this.form.password)
          .then((response) => {
            console.log("In then response on login. response=");
            console.log(response);
            if (response.status && response.status === "success") {
              this.alertType = "info";
              this.message = "Your password has been successfully changed";
              this.passwordHasReset = true;
            } else {
              this.alertType = "danger";
              if (response.message && response.message.length > 0) {
                this.message = response.message;
              } else {
                this.message =
                  "A server error has occurred.  Please try again later.";
              }
            }
            this.showSpinner = false;
          })
          .catch((error) => {
            console.log(error);
            this.showSpinner = false;
            this.message = error;
            this.alertType = "danger";
          });
      }
    },
  },
  mounted() {},
  created() {
    if (this.$route.query.token) {
      this.token = this.$route.query.token;
    } else {
      this.token = null;
    }
  },
};
</script>
