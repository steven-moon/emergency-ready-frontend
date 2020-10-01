<template>
  <navbar type="success" menu-classes="ml-auto">
    <div class="navbar-translate">
      <a class="navbar-brand" href="/">Emergency Ready App</a>
      <!--      <button class="navbar-toggler" type="button" data-toggle="collapse"-->
      <!--              data-target="#example-navbar-info" aria-controls="navbarSupportedContent"-->
      <!--              aria-expanded="false" aria-label="Toggle navigation">-->
      <!--        <span class="navbar-toggler-bar bar1"></span>-->
      <!--        <span class="navbar-toggler-bar bar2"></span>-->
      <!--        <span class="navbar-toggler-bar bar3"></span>-->
      <!--      </button>-->
    </div>
    <template slot="navbar-menu">
      <li class="nav-item">
        <a class="nav-link" href="/">
          <p>Home</p>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/contact-us">
          <p>Contact Us</p>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/blog">
          <p>Blog</p>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/custom-branded-emergency-ready-app">
          <p>Custom Branded App</p>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/send-emergency-notifications">
          <p>Send Notifications</p>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/emergency-response-plans">
          <p>Emergency Response Plans</p>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/contacts-info-in-emergency-ready-app">
          <p>Contacts Info in Custom App</p>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/interactive-emergency-preparedness-kits">
          <p>Interactive Emergency Kits</p>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/hazard-guides">
          <p>Hazard Guides</p>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/auth/login">
          <p>Login</p>
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
