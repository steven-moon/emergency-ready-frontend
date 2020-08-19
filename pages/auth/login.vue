<template>
  <div class="section section-basic mt-5" id="basic-elements">
    <div class="col-md-6 ml-auto mr-auto">
      <card type="profile">
        <!-- <img slot="avatar" class="img img-raised" src="img/mike.jpg" /> -->
        <div class="card-footer">
          <a href="#pablo" class="btn btn-icon btn-twitter btn-round"
            ><i class="fab fa-twitter"></i
          ></a>
          <a href="#pablo" class="btn btn-icon btn-facebook btn-round"
            ><i class="fab fa-facebook-square"></i
          ></a>
          <a href="#pablo" class="btn btn-icon btn-google btn-round"
            ><i class="fab fa-google"></i
          ></a>
        </div>
        <div class="card-body">
          <h4 class="card-title">Log In</h4>

          <p class="card-description">
            Log in to unlock the full features behind your new app and see how
            much we've built in for you.
          </p>
          <br />
          <div id="inputs">
            <div class="col">
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
                <nuxt-link
                  style="border: none;"
                  to="/auth/forgot-password"
                  class="forgot-password"
                  >forgot password?</nuxt-link
                >
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
              <div class="col-sm-10 ml-auto mr-auto">
                <div class="submit-form__container ml-auto mr-auto">
                  <div class="create-account mt-1">
                    <nuxt-link
                      style="border: none;"
                      class="navigate-auth"
                      to="/auth/signup"
                      >create an account</nuxt-link
                    >
                  </div>
                  <div @click="submit">
                    <n-button type="success">Login</n-button>
                  </div>
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
import { Button, FormGroupInput } from "@/components/UIKit";
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
  position: absolute;
  left: 15px;
  font-size: 10px;
}
</style>
