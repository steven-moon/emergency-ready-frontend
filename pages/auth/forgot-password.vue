<template>
  <div class="section section-basic mt-5" id="basic-elements">
    <div class="col-md-6 ml-auto mr-auto">
      <card type="blog" card-body-classes="text-center">
        <nuxt-link style="border: none;" class="back-btn" to="/auth/login"
          >Back to login</nuxt-link
        >
        <img slot="image" class="img rounded" :src="image" />
        <h6 class="category text-danger">
          <i class="now-ui-icons media-2_sound-wave"></i> Emergency App
        </h6>
        <h3 class="category text-gray mt-4 mb-2">
          Send Password Reset
        </h3>
        <p class="card-description card-description__width ml-auto mr-auto">
          Enter in the email associated with your account. If it's in our system
          we will send you an email with a minute of sending the request.
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
                  <n-button type="success">Send Email Reset</n-button>
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
      form: {
        email: "",
      },
      error: {
        email: null,
      },
      errorMessages: [],
    };
  },
  methods: {
    verifyInputs() {
      this.error = {
        email: null,
      };

      let isFormCompleted = true;

      // Check email is valid
      let re = /\S+@\S+\.\S+/;
      if (!re.test(this.form.email)) {
        isFormCompleted = false;
        this.errorMessages.push("*Enter a valid email");
        this.error.email = true;
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
  align-items: start;
}

.error-list {
  font-size: 10px;
  margin: 10px 1px;

  ul {
    padding-left: 0;
    li {
      display: flex;
      justify-content: start;
      color: #f96332;
      text-decoration: none;
    }
  }
}
</style>
