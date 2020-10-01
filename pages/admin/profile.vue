<template>
  <div v-if="isLoading" class="section">
    <tile :loading="isLoading"/>
  </div>
  <div v-else class="section section-basic mt-5" id="basic-elements">
    <div class="col-md-6 ml-auto mr-auto">
      <card type="profile">
        <!-- <img slot="avatar" class="img img-raised" src="img/mike.jpg" /> -->
        <div class="card-body">
          <h4 class="card-title">Profile</h4>

<!--          <p class="card-description">-->
<!--            Welcome to your profile-->
<!--          </p>-->

          <div class="col pt-4">
            <h6>Current Password</h6>
            <fg-input
                v-model="currentPassword"
                placeholder="Current Password"
                type="password"
            ></fg-input>
          </div>
          <div class="col">
            <h6>New Password</h6>
            <fg-input
                v-model="newPassword"
                placeholder="New Password"
                type="password"
            ></fg-input>
          </div>
          <div class="col">
            <h6>Confirm New Password</h6>
            <fg-input
                v-model="confirmPassword"
                placeholder="Confirm New Password"
                type="password"
            ></fg-input>
          </div>
          <div class="col" v-if="message">
              <base-alert :type="alertType">{{message}}</base-alert>
          </div>
          <div class="col pt-4 ml-auto mr-auto" @click="save">
            <n-button size="lg" :block="true" :round="true" type="success">Save</n-button>
          </div>
        </div>
      </card>
    </div>
  </div>
</template>
<script>

import UserAPI from "~/api/UserAPI";
import NotificationsAPI from "@/api/NotificationsAPI";

export default {
  layout: "admin",
  middleware: ["check-auth", "auth"],
  components: {
  },
  data() {
    return {
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
      message: "",
      alertType: "info",
      isLoading: false
    };
  },
  methods: {
    save(){
      console.log("Save");
      this.message = '';
      if(this.currentPassword.length > 0 && this.newPassword.length >= 6 && !this.newPassword.localeCompare(this.confirmPassword)){
        this.isLoading = true;
        let data = {"currentPassword":this.currentPassword,"newPassword":this.newPassword};
        UserAPI.updatePassword(this.$store, data)
            .then(response => {
              console.log("Update Password Response");
              console.log(response);
              if(!response.status.localeCompare("success")) {
                this.alertType = 'info';
                this.message = 'Password Successfully changed.';
              }else{
                this.alertType = 'danger';
                this.message = response.message;
              }
              this.isLoading = false;
            })
            .catch((error) => {
              console.log("Error Updating Password");
              console.log(error);
              this.alertType = 'danger';
              this.message = error;
              this.isLoading = false;
            });
      }else{
        this.alertType = 'danger';
        if(this.currentPassword.length === 0){
          this.message = "You must enter your current password.";
        }else {
          if(this.newPassword.length < 6) {
            this.message = "New password must be at least 6 characters.";
          }else{
            this.message = "New password and confirm password must match.";
          }
        }
      }
    }
  },
};
</script>
<style scoped lang="scss">
</style>
