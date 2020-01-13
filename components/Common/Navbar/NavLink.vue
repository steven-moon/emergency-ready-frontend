<template>
  <component
    :is="componentType"
    :to="to"
    class="dropdown-item"
    @click.native.stop="closeNav"
  >
    <slot></slot>
  </component>
</template>
<script>
export default {
  name: 'NavLink',
  inject: ['closeNavbar', 'closeDropDown'],
  props: {
    to: {
      type: [String, Object],
      default: undefined
    }
  },
  computed: {
    componentType() {
      return this.to ? 'nuxt-link' : 'a'
      //return 'a'
    }
  },
  methods: {
    closeNav() {
      if (this.closeNavbar) {
        this.closeNavbar()
      }
      if (this.closeDropDown) {
        this.closeDropDown()
      }
    }
  }
}
</script>
<style></style>
