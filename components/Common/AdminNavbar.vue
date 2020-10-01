<template>
  <navbar type="success" menu-classes="ml-auto">
    <div class="navbar-translate">
      <a class="navbar-brand" href="/admin/">Emergency Ready App</a>
<!--            <button class="navbar-toggler" type="button" data-toggle="collapse"-->
<!--                    data-target="#example-navbar-info" aria-controls="navbarSupportedContent"-->
<!--                    aria-expanded="false" aria-label="Toggle navigation">-->
<!--              <span class="navbar-toggler-bar bar1"></span>-->
<!--              <span class="navbar-toggler-bar bar2"></span>-->
<!--              <span class="navbar-toggler-bar bar3"></span>-->
<!--            </button>-->
    </div>
    <template slot="navbar-menu">
      <li class="nav-item">
        <a class="nav-link" href="/admin/">
          <p>Admin Home</p>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/admin/profile">
          <p>Profile</p>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/admin/notifications">
          <p>View Notifications</p>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/admin/notification">
          <p>Send New Notification</p>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/admin/notification-types">
          <p>Notification Types</p>
        </a>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="/auth/login?action=logout">
        <p>Logout</p>
      </a>
    </li>
    </template>
  </navbar>

  <!--    <template slot="navbar-menu">-->
  <!--      <drop-down tag="li" title="Features" icon="now-ui-icons files_paper" class="nav-item">-->
  <!--        <nav-link to="/custom-branded-emergency-ready-app">-->
  <!--          <i class="now-ui-icons ui-2_settings-90"></i> Custom Branded App-->
  <!--        </nav-link>-->
  <!--        <nav-link to="/send-emergency-notifications">-->
  <!--          <i class="now-ui-icons sport_user-run"></i> Send Emergency Notifications-->
  <!--        </nav-link>-->
  <!--        <nav-link to="/emergency-response-plans">-->
  <!--          <i class="now-ui-icons education_paper"></i> Emergency Response Plans-->
  <!--        </nav-link>-->
  <!--        <nav-link to="/contacts-info-in-emergency-ready-app">-->
  <!--          <i class="now-ui-icons business_money-coins"></i> Add Your Contacts Info-->
  <!--        </nav-link>-->
  <!--        <nav-link to="/interactive-emergency-preparedness-kits">-->
  <!--          <i class="now-ui-icons ui-2_chat-round"></i> Interactive Preparedness Kits-->
  <!--        </nav-link>-->
  <!--        <nav-link to="/hazard-guides">-->
  <!--          <i class="now-ui-icons ui-2_chat-round"></i> Hazard Guides-->
  <!--        </nav-link>-->
  <!--      </drop-down>-->
  <!--    </template>-->
  <!--  </navbar>-->
</template>

<script>
import {
  DropDown,
  NavbarToggleButton,
  Navbar,
  NavLink,
} from "@/components/UIKit";
import { Popover } from "element-ui";
export default {
  name: "main-navbar",
  props: {
    transparent: Boolean,
    colorOnScroll: Number,
  },
  components: {
    DropDown,
    Navbar,
    NavbarToggleButton,
    NavLink,
    [Popover.name]: Popover,
  },
};
</script>

<style scoped></style>
