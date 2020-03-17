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
        Emergency Ready App
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
              title="Pages"
              icon="now-ui-icons design_app"
              class="nav-item"
      >
        <a href="/" class="dropdown-item"><i class="now-ui-icons travel_info"/> Home</a>
        <a href="/featured-apps" class="dropdown-item"><i class="now-ui-icons  cc-icons cc-icon-cockade"/>Featured</a>
        <a href="/blog" class="dropdown-item"><i class="now-ui-icons emoticons_satisfied"/> Blog</a>
        <a href="/contactus" class="dropdown-item"><i class="now-ui-icons design_bullet-list-67"/>Contact Us</a>
        <a href="/samples" class="dropdown-item"><i class="now-ui-icons gestures_tap-01"/>Samples</a>
        <a href="/black" class="dropdown-item"><i class="now-ui-icons ui-1_calendar-60"/>Black Dashboard</a>
        <a href="/argon" class="dropdown-item"><i class="now-ui-icons travel_istanbul"/>Argon Dashboard</a>
        <a href="/ui-kit" class="dropdown-item"><i class="now-ui-icons design_image"/>UI Kit</a>
      </drop-down>
    </template>
  </navbar>
</template>

<script>
import { Popover } from 'element-ui'
import DropDown from '@/components/Common/Dropdown'
import NavbarToggleButton from '@/components/Common/Navbar/NavbarToggleButton'
import Navbar from '@/components/Common/Navbar/Navbar'
import NavLink from '@/components/Common/Navbar/NavLink'

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
