<template>
  <div class="section section-basic mt-5" id="basic-elements">
    <div class="col-md-6 ml-auto mr-auto">
      <card type="profile">
        <!-- <img slot="avatar" class="img img-raised" src="img/mike.jpg" /> -->
        <div class="card-body">
          <h4 class="card-title">Admin Home Page</h4>

          <p class="card-description">
            Welcome to the admin home page.
          </p>
          <br />
          <div id="inputs">
            <div class="row">
              <div class="col-sm-10 ml-auto mr-auto" @click="goToURL('/admin/profile')">
                  <n-button size="lg" :block="true" :round="true" type="success">View Profile</n-button>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-10 ml-auto mr-auto" @click="goToURL('/admin/notifications')">
                  <n-button size="lg" :block="true" :round="true" type="success">View Notifications</n-button>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-10 ml-auto mr-auto" @click="goToURL('/admin/notification')">
                  <n-button size="lg" :block="true" :round="true" type="success">New Notification</n-button>
              </div>
            </div>
          </div>
        </div>
      </card>
    </div>
  </div>
</template>
<script>
import { Button } from "@/components/UIKit";

export default {
  layout: "admin",
  components: {
    [Button.name]: Button
  },
  data() {
    return {
    };
  },
  methods: {
    goToURL(link) {
      console.log("goToURL: " + link)
      if(link) {
        window.location.href = link;
      }
    }
  },
};
</script>
<style scoped lang="scss">
</style>
