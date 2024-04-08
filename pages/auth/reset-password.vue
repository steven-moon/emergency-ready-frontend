<template>
  <div class="section section-basic mt-5" id="basic-elements">
    <div class="col-md-6 ml-auto mr-auto">
      <card type="blog" card-body-classes="text-center">
        <nuxt-link style="border: none;" class="back-btn" to="/auth/connect-wallet"
          >Back to login</nuxt-link
        >
        <img slot="image" class="img rounded" :src="image" />
        <h6 class="category text-danger">
          <i class="now-ui-icons media-2_sound-wave"></i> Emergency App
        </h6>
        <h3 class="category text-gray mt-4 mb-2">
          Reset Password
        </h3>
        <p class="card-description card-description__width ml-auto mr-auto">
          Please enter in a new password and confirm the phrase to complete the update.
        </p>
        <br />

        <div id="inputs">
          <div class="col">
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
                placeholder="Confirm password"
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
                  <n-button type="success">Reset Password</n-button>
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

export default {
  layout: "default-auth",
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
  },
  data() {
    return {
      title: 'Reset Password - Emergency Ready App',
      description: "Reset password using this form",
      form: {
        password: "",
        confirmPassword: "",
      },
      error: {
        password: null,
        confirmPassword: null,
      },
      errorMessages: [],
    };
  },
  head () {
    return {
      title: this.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'og:title', name: 'og:title', content: this.title },
        { hid: 'description', name: 'description', content: this.description },
        { hid: 'og:description', name: 'og:description', content: this.description },
        { hid: 'og:site_name', name: 'og:site_name', content: "Emergency Ready App" },
        { hid: 'apple-mobile-web-app-title', name: 'apple-mobile-web-app-title', content: this.title },
      ]
    }
  },
  methods: {
    verifyInputs() {
      this.error = {
        password: null,
        confirmPassword: null,
      };

      let isFormCompleted = true;

      //Check all form fields have been filled out
      for (let input in this.form) {
        if (this.form[input] === "") {
          this.error[input] = true;
          isFormCompleted = false;
        }
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
      }
      console.log(this.formErrors);
    },
  },
};
</script>
<style scoped lang="scss">
.back-btn {
  position: absolute;
  left: 18px;
  top: 16px;
  font-size: 10px;
}

.card-description__width {
  width: 450px;
}

.submit-form__container {
  margin: 0 1px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
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
