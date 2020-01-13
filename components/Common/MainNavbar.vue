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
        Emergency Ready
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
        <a href="/about" class="dropdown-item"><i class="now-ui-icons travel_info"></i> Home</a>
          <a href="/about" class="dropdown-item"><i class="now-ui-icons travel_info"></i> About Us</a>
        <a href="/blog" class="dropdown-item"><i class="now-ui-icons objects_planet"></i> Blog</a>
      </drop-down>

      <li class="nav-item">
        <a
          class="nav-link btn btn-default btn-primary"
          href="/contactus"
        >
          <p>Contact Us</p>
        </a>
      </li>
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
