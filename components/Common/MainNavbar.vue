<template>
  <navbar
    position="fixed"
    :transparent="false"
    :color-on-scroll="colorOnScroll"
    menu-classes="ml-auto"
    type="gray"
  >
    <template slot-scope="{ toggle, isToggled }">
      <nuxt-link v-popover:popover1 class="navbar-brand" to="/">
        Clever Coding
      </nuxt-link>
      <el-popover
        ref="popover1"
        popper-class="popover"
        placement="bottom"
        width="300"
        trigger="hover"
      >
        <div class="popover-body">
          Designed and Coded by Clever Coding LLC
        </div>
      </el-popover>
    </template>
    <template slot="navbar-menu">
      <drop-down
        tag="li"
        title="Company"
        icon="now-ui-icons design_app"
        class="nav-item"
      >
          <a href="/about" class="dropdown-item"><i class="now-ui-icons travel_info"></i> About Us</a>
        <a href="/featured-apps" class="dropdown-item"><i class="now-ui-icons  cc-icons cc-icon-cockade"></i> Featured Apps</a>
        <a href="/testimonials" class="dropdown-item"><i class="now-ui-icons emoticons_satisfied"></i> Testimonials</a>
        <a href="/our-approach" class="dropdown-item"><i class="now-ui-icons design_bullet-list-67"></i> Our Approach</a>
        <a href="/billing-models" class="dropdown-item"><i class="now-ui-icons shopping_cart-simple"></i> Billing Models</a>
        <a href="/blog" class="dropdown-item"><i class="now-ui-icons objects_planet"></i> Blog</a>
        <a href="/careers" class="dropdown-item"><i class="now-ui-icons cc-icons cc-icon-privacy-policy "></i> Careers</a>
      </drop-down>
      <drop-down
        tag="li"
        title="Development Services"
        icon="now-ui-icons tech_mobile"
        class="nav-item"
      >

        <a href="/mobile-app-developers" class="dropdown-item"><i class="now-ui-icons tech_mobile"></i> Mobile App Development</a>
        <a href="/web-developers" class="dropdown-item"><i class="now-ui-icons objects_globe"></i> Web Development</a>
        <a href="/prototyping" class="dropdown-item"><i class="now-ui-icons education_atom"></i> Prototyping &amp; UX/UI Design</a>
        <a href="/design-to-html-frontend-coding" class="dropdown-item"><i class="now-ui-icons design-2_html5"></i> Design to HTML Frontend Coding</a>
        <a href="/design-to-reactive-frontend-coding" class="dropdown-item"><i class="now-ui-icons design-2_ruler-pencil"></i> Design to Reactive
          (React, Angular & Vue) Frontend Coding</a>
        <a href="/customdevelopment" class="dropdown-item"><i class="now-ui-icons tech_laptop"></i> Custom Development</a>
      </drop-down>
      <drop-down
        tag="li"
        title="Other Services"
        icon="now-ui-icons tech_laptop"
        class="nav-item"
      >
        <a href="/maintenance-support" class="dropdown-item"><i class="now-ui-icons ui-2_settings-90"></i> Maintenance &amp;
          Support</a>
        <a href="/project-rescues" class="dropdown-item"><i class="now-ui-icons health_ambulance"></i> Project Rescues</a>
        <a href="/dedicated-resources" class="dropdown-item"><i class="now-ui-icons business_badge"></i> Dedicated Resources</a>
        <a href="/legacy-upgrades" class="dropdown-item"><i class="now-ui-icons objects_spaceship"></i> Legacy Upgrades</a>
      </drop-down>
      <li class="nav-item">
        <a
          class="nav-link btn btn-default btn-primary"
          href="/contactus"
        >
          <p>Contact Us</p>
        </a>
      </li>

      <!--      <li class="nav-item">-->
      <!--        <nav-link to="/featured-apps">-->
      <!--          <i class="now-ui-icons ui-2_chat-round"></i> Featured Apps-->
      <!--        </nav-link>-->
      <!--      </li>-->
      <!--      <li class="nav-item">-->
      <!--        <nav-link to="/testimonials">-->
      <!--          <i class="now-ui-icons ui-2_chat-round"></i> Testimonials-->
      <!--        </nav-link>-->
      <!--      </li>-->
      <!--      <li class="nav-item">-->
      <!--        <nav-link to="/careers">-->
      <!--          <i class="now-ui-icons ui-2_chat-round"></i> Careers-->
      <!--        </nav-link>-->
      <!--      </li>-->
      <!--      <li class="nav-item">-->
      <!--        <nav-link to="/contactus">-->
      <!--          <i class="now-ui-icons ui-2_chat-round"></i> Contact Us-->
      <!--        </nav-link>-->
      <!--      </li>-->
    </template>
  </navbar>
</template>

<script>
import { Popover } from 'element-ui'
import { DropDown, NavbarToggleButton, Navbar, NavLink } from '@/components'
export default {
  name: 'MainNavbar',
  components: {
    DropDown,
    Navbar,
    NavbarToggleButton,
    NavLink,
    [Popover.name]: Popover
  },
  props: {
    transparent: Boolean,
    colorOnScroll: Number
  }
}
</script>

<style scoped></style>
