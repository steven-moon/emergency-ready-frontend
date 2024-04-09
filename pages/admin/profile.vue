<template>
  <div v-if="isLoading" class="section">
    <tile :loading="isLoading"/>
  </div>
  <div v-else class="section section-basic mt-5" id="basic-elements">
    <div class="col-md-6 ml-auto mr-auto">
      <card type="profile">
        <!-- <img slot="avatar" class="img img-raised" src="img/mike.jpg" /> -->
        <div class="card-body" v-if="useChain">
          <h4 class="card-title">User Wallet:</h4>


          <p class="card-description wallet-address" v-if="userAddress">
             {{userAddress}}
          </p>

          <div class="col pt-4">
            <h6>Notifications S.C. Address:</h6>
            <fg-input
                v-model="notificationsContractAddress"
                placeholder="Notification Contract Addressd"
            ></fg-input>
          </div>
          <div class="col">
            <h6>Notifications Categories S.C. Address:</h6>
            <fg-input
                v-model="notificationCategoryContractAddress"
                placeholder="Notification Category Contract Address"
            ></fg-input>
          </div>
          <div class="col" v-if="message">
              <base-alert :type="alertType">{{message}}</base-alert>
          </div>
          <div class="col pt-4 ml-auto mr-auto" @click="saveBlockchain">
            <n-button size="lg" :block="true" :round="true" type="success">Save</n-button>
          </div>
        </div>
       <div class="card-body" v-else>
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
import BlockChainMixin from "~/mixins/blockchain";

export default {
  layout: "admin",
  middleware: ["check-auth", "auth"],
 mixins: [BlockChainMixin],
  components: {
  },
  data() {
    return {
      title: 'Profile - Emergency Ready App',
      description: "",
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
      message: "",
      alertType: "info",
     isLoading: false
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
    },
   async saveBlockchain(){

     if(this.notificationCategoryContractAddress.length === 0 || this.notificationsContractAddress.length === 0){
      this.message = "Please fill out contract addresses"
      return;
     }

    try {
     await this.userTrackerContract.addUser(this.userAddress, this.notificationCategoryContractAddress, this.notificationsContractAddress);
     console.log("User added successfully");
    } catch (error) {
     console.error("Error adding user:", error);
    }
   },
  },
};
</script>
<style scoped lang="scss">
 .wallet-address{
  color: #0b0b0b;
 }
</style>
