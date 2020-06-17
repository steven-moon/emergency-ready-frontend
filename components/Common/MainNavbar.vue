<template>
  <navbar position="fixed"
          :transparent="transparent"
          :color-on-scroll="colorOnScroll"
          menu-classes="ml-auto">
    <template slot-scope="{toggle, isToggled}">
      <nuxt-link v-popover:popover1 class="navbar-brand" to="/">
        Emergency Ready App
      </nuxt-link>
      <el-popover
              ref="popover1"
              popper-class="popover"
              placement="bottom"
              width="300"
              trigger="hover">
        <div class="popover-body">Created by Clever Coding LLC</div>
      </el-popover>
    </template>
    <template slot="navbar-menu">
      <drop-down tag="li" title="Learn More" icon="now-ui-icons files_paper" class="nav-item">
        <nav-link to="/">
          <i class="now-ui-icons shopping_box"></i> Home
        </nav-link>
        <nav-link to="/contact-us">
          <i class="now-ui-icons shopping_box"></i> Contact Us
        </nav-link>
        <nav-link to="/blog">
          <i class="now-ui-icons text_align-left"></i> Blog
        </nav-link>
      </drop-down>
    </template>
    <template slot="navbar-menu">
      <drop-down tag="li" title="Features" icon="now-ui-icons files_paper" class="nav-item">
        <nav-link to="/custom-branded-emergency-ready-app">
          <i class="now-ui-icons ui-2_settings-90"></i> Custom Branded App
        </nav-link>
        <nav-link to="/send-emergency-notifications">
          <i class="now-ui-icons sport_user-run"></i> Send Emergency Notifications
        </nav-link>
        <nav-link to="/emergency-response-plans">
          <i class="now-ui-icons education_paper"></i> Emergency Response Plans
        </nav-link>
        <nav-link to="/contacts-info-in-emergency-ready-app">
          <i class="now-ui-icons business_money-coins"></i> Add Your Contacts Info
        </nav-link>
        <nav-link to="/interactive-emergency-preparedness-kits">
          <i class="now-ui-icons ui-2_chat-round"></i> Interactive Preparedness Kits
        </nav-link>
        <nav-link to="/hazard-guides">
          <i class="now-ui-icons ui-2_chat-round"></i> Hazard Guides
        </nav-link>
      </drop-down>
    </template>
  </navbar>
</template>

<script>
  import { DropDown, NavbarToggleButton, Navbar, NavLink } from '@/components/UIKit';
  import { Popover } from 'element-ui'
  export default {
    name: 'main-navbar',
    props: {
      transparent: Boolean,
      colorOnScroll: Number,
    },
    components: {
      DropDown,
      Navbar,
      NavbarToggleButton,
      NavLink,
      [Popover.name]: Popover
    }
  }
</script>

<style scoped>

</style>
