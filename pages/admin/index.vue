<template>
  <div class="section section-basic mt-5" id="basic-elements">
    <div class="col-md-6 ml-auto mr-auto">
      <card type="profile">
        <!-- <img slot="avatar" class="img img-raised" src="img/mike.jpg" /> -->
        <div class="card-body">
          <h4 class="card-title">Admin Home Page</h4>
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
            <div class="row">
              <div class="col-sm-10 ml-auto mr-auto" @click="goToURL('/admin/notification-types')">
                <n-button size="lg" :block="true" :round="true" type="success">Notification Types</n-button>
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
  middleware: ["check-auth", "auth"],
  components: {
    [Button.name]: Button
  },
  data() {
    return {
      title: 'Admin Home - Emergency Ready App',
      description: "Emergency Ready admin home page",
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
