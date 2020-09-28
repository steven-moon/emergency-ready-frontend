<template>
  <div class="section section-basic mt-5" id="basic-elements">
    <div class="col-md-6 ml-auto mr-auto">
      <card type="blog" card-body-classes="text-center">
        <img slot="image" class="img rounded" :src="image" />
        <h6 class="category text-danger">
          <i class="now-ui-icons media-2_sound-wave"></i> Emergency App
        </h6>
        <h3 class="category text-gray mt-4 mb-2">
          Sign Up
        </h3>
        <p class="card-description">
          Fill out some basic information to get the ball rolling.
        </p>
        <br />

        <div id="inputs">
          <div class="col">
            <div class="col-sm-10 ml-auto mr-auto">
              <fg-input
                v-model="form.first"
                placeholder="First Name"
                :class="
                  error.first === true
                    ? 'has-danger'
                    : error.first === null
                    ? ''
                    : 'has-success'
                "
              >
              </fg-input>
              <fg-input
                v-model="form.last"
                placeholder="Last Name"
                :class="
                  error.last === true
                    ? 'has-danger'
                    : error.last === null
                    ? ''
                    : 'has-success'
                "
              >
              </fg-input>
            </div>
            <br />
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
                v-model="form.phone"
                placeholder="Phone Number"
                :class="
                  error.phone === true
                    ? 'has-danger'
                    : error.phone === null
                    ? ''
                    : 'has-success'
                "
                type="phone"
              ></fg-input>
              <fg-input
                v-model="form.organization"
                placeholder="Organization"
                :class="
                  error.organization === true
                    ? 'has-danger'
                    : error.organization === null
                    ? ''
                    : 'has-success'
                "
                type="text"
              ></fg-input>
            </div>
            <br />
            <div class="col-sm-10 ml-auto mr-auto">
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
              <fg-input
                v-model="form.confirmPassword"
                placeholder="Confirm Password"
                :class="
                  error.confirmPassword === true
                    ? 'has-danger'
                    : error.confirmPassword === null
                    ? ''
                    : 'has-success'
                "
                type="password"
              ></fg-input>
            </div>
            <div class="col-sm-10 ml-auto mr-auto">
              <div class="submit-form__container ml-auto mr-auto">
                <div class="error-list">
                  <ul>
                    <li v-for="message in errorMessages" :key="message">
                      {{ message }}
                    </li>
                  </ul>
                </div>
                <div @click="submit">
                  <n-button type="success">Create Account</n-button>
                </div>
              </div>
              <div class="navigate-auth mt-1">
                <nuxt-link style="border: none;" id="nav-link" to="/auth/login"
                  >I already have an account</nuxt-link
                >
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
import areaPrepared from "../../static/images/area-prepared.png";
import CommonAPI from '~/api/CommonAPI';

export default {
  layout: "default-auth",
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
  },
  data() {
    return {
      image: areaPrepared,
      form: {
        first: "",
        last: "",
        email: "",
        phone: "",
        organization: "",
        password: "",
        confirmPassword: "",
      },
      error: {
        first: null,
        last: null,
        email: null,
        phone: null,
        organization: null,
        password: null,
        confirmPassword: null,
      },
      errorMessages: [],
    };
  },
  methods: {
    verifyInputs() {
      this.error = {
        first: null,
        last: null,
        email: null,
        phone: null,
        organization: null,
        password: null,
        confirmPassword: null,
      };
      this.errorMessages = [];

      let isFormCompleted = true;

      //Check all form fields have been filled out
      for (let input in this.form) {
        if (this.form[input] === "") {
          this.error[input] = true;
          isFormCompleted = false;
        }
      }

      // Check email is valid
      let re = /\S+@\S+\.\S+/;
      if (!re.test(this.form.email)) {
        isFormCompleted = false;
        this.errorMessages.push("*Enter a valid email");
        this.error.email = true;
      }

      //Check phone
      let phone = this.form.phone.replace(/[^0-9]/g, "");
      if (phone.length < 10) {
        isFormCompleted = false;
        this.errorMessages.push("*Enter a full phone number");
        this.error.phone = true;
      }

      //Check passwords match
      if (
        this.form.password !== "" &&
        this.form.password !== this.form.confirmPassword
      ) {
        isFormCompleted = false;
        this.errorMessages.push("*Passwords must match");
        this.error.password = true;
        this.error.confirmPassword = true;
      }

      return isFormCompleted;
    },
    submit() {
      console.log("submit");
      if (this.verifyInputs()) {
        console.log(this.form);
        // Make an axios call to database
        CommonAPI.signup(this.$store, this.form)
            .then(response => {
                console.log("In then response on signup. response=");
                console.log(response);
                if (response.status && response.status === "success") {
                    console.log(response.status);

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

                    window.location.href = "/admin/";
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
      console.log(this.formErrors);
    },
  },
};
</script>
<style scoped lang="scss">
.submit-form__container {
  margin: 0 1px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.navigate-auth{
  margin: 0 1px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  font-size: 10px;
  text-decoration: none;
}

.nav-link {
  text-decoration: underline;
  &:hover{
    border: none;
  }
}

.error-list {
  font-size: 10px;
  margin: 10px 1px;

  ul {
    padding-left: 0;
    li {
      display: flex;
      justify-content: flex-start;
      color: #f96332;
      text-decoration: none;
    }
  }
}
</style>
