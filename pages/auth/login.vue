<template>
  <div class="section section-basic mt-5" id="basic-elements">
    <div class="col-md-6 ml-auto mr-auto">
      <card type="profile">
        <div class="card-body">
          <h2 class="card-title">Log In</h2>

          <!--          <p class="card-description">-->
          <!--            Log in to access the admin portal.-->
          <!--          </p>-->
          <br/>
          <div id="inputs">
            <div class="row">
              <div class="col-sm-10 ml-auto mr-auto">
                <fg-input
                    v-model="form.email"
                    placeholder="Email"
                    :class="
                    error.email === true
                      ? 'has-danger'
                      : error.email === null
                      ? ''
                      : 'has-success'
                  "
                    type="email"
                ></fg-input>
                <fg-input
                    v-model="form.password"
                    placeholder="Password"
                    :class="
                    error.password === true
                      ? 'has-danger'
                      : error.password === null
                      ? ''
                      : 'has-success'
                  "
                    type="password"
                ></fg-input>
              </div>
            </div>
            <div class="row pb-4 ml-auto mr-auto">
              <div class="col-6">
                <nuxt-link
                    style="border: none;"
                    class="navigate-auth"
                    to="/auth/signup">
                  create an account
                </nuxt-link>
              </div>
              <div class="col-6">
                <nuxt-link
                    style="border: none;"
                    to="/auth/forgot-password"
                    class="navigate-auth">
                  forgot password?
                </nuxt-link>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-10 ml-auto mr-auto">
                <div @click="submit">
                  <n-button type="success" :wide="true">Login</n-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </card>
    </div>
  </div>
</template>
<script>
import {Button, FormGroupInput} from "@/components/UIKit";
import CommonAPI from '~/api/CommonAPI';

export default {
  layout: "default-auth",
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
  },
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      error: {
        email: null,
        password: null,
      },
    };
  },
  methods: {
    verifyInputs() {
      this.error = {
        email: null,
        password: null,
      };

      let isFormCompleted = true;

      // Check email is valid
      let re = /\S+@\S+\.\S+/;
      if (!re.test(this.form.email)) {
        isFormCompleted = false;
        this.error.email = true;
      }

      //Check password
      if (this.form.password === "") {
        isFormCompleted = false;
        this.error.password = true;
      }
      console.log(isFormCompleted);
      return isFormCompleted;
    },
    submit() {
      if (this.verifyInputs()) {
        console.log(this.form);
        // Make an axios call to database
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

                window.location.href = "/admin/";
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
      console.log(this.formErrors);
    },
  },
};
</script>
<style scoped lang="scss">
.submit-form__container {
  margin: 0 1px;
  display: flex;
  justify-content: flex-end;
  align-items: start;
}

.forgot-password {
  display: flex;
  justify-content: flex-end;
  margin: 0;
  font-size: 10px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
}

.navigate-auth {
  font-size: 13px;
}
</style>
