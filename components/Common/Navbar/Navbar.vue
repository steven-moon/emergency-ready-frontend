<template>
  <nav :class="classes" class="navbar navbar-expand-lg" >
    <div class="container">
      <div class="navbar-translate">
        <slot v-bind="slotData"></slot>
        <navbar-toggle-button
          :toggled="showMenu"
          @click.native.stop="toggle"
        ></navbar-toggle-button>
      </div>
      <div
        v-if="$slots['navbar-menu'] || $scopedSlots['navbar-menu']"
        id="navigation"
        class="collapse navbar-collapse show"
      >
        <ul v-click-outside="close" class="navbar-nav" :class="menuClasses">
          <slot name="navbar-menu" v-bind="slotData"></slot>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import { CollapseTransition } from 'vue2-transitions'
import NavbarToggleButton from './NavbarToggleButton'
let resizeTimeout
function resizeThrottler(actualResizeHandler) {
  // ignore resize events as long as an actualResizeHandler execution is in the queue
  if (!resizeTimeout) {
    resizeTimeout = setTimeout(() => {
      resizeTimeout = null
      actualResizeHandler()

      // The actualResizeHandler will execute at a rate of 15fps
    }, 66)
  }
}

export default {
  name: 'Navbar',
  components: {
    CollapseTransition,
    NavbarToggleButton
  },
  props: {
    transparent: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: 'relative'
    },
    menuClasses: {
      type: [String, Object, Array]
    },
    colorOnScroll: {
      type: Number,
      default: 0
    },
    type: {
      type: String,
      default: 'white',
      validator(value) {
        return [
          'white',
          'black',
          'gray',
          'default',
          'primary',
          'danger',
          'success',
          'warning',
          'info'
        ].includes(value)
      }
    }
  },
  provide() {
    return {
      closeNavbar: this.close
    }
  },
  data() {
    return {
      showMenu: false,
      extraNavClasses: '',
      currentScrollValue: 0
    }
  },
  computed: {
    slotData() {
      return {
        toggle: this.toggle,
        open: this.open,
        close: this.close,
        isToggled: this.showMenu
      }
    },
    classes() {
      const color = `bg-${this.type}`
      let navPosition = `navbar-${this.position}`
      const colorOnScrollTransparent =
        this.colorOnScroll && this.currentScrollValue < this.colorOnScroll

      if (this.position === 'fixed') {
        navPosition = 'fixed-top'
      }

      return [
        {'nav-open' : this.showMenu},
        { 'navbar-transparent': this.transparent || colorOnScrollTransparent },
        { [color]: !this.transparent && this.colorOnScroll === 0 },
        navPosition,
        this.extraNavClasses
      ]
    }
  },
  mounted() {
    document.addEventListener('scroll', this.scrollListener)
  },
  beforeDestroy() {
    document.removeEventListener('scroll', this.scrollListener)
  },
  methods: {
    setNav(value) {
      const eventToTrigger = this.showMenu ? 'open' : 'close'
      this.showMenu = !this.showMenu;
      this.$emit(eventToTrigger)
    },
    toggle() {
      this.setNav(!this.showMenu)
    },
    open() {
      this.setNav(true)
    },
    close() {
      if (this.showMenu === false) {
        return
      }
      this.setNav(false)
    },
    handleScroll() {
      const scrollValue =
        document.body.scrollTop || document.documentElement.scrollTop
      this.currentScrollValue = scrollValue
      if (this.colorOnScroll > 0 && scrollValue > this.colorOnScroll) {
        this.extraNavClasses = `bg-${this.type}`
      } else if (this.extraNavClasses) {
        this.extraNavClasses = ''
      }
    },
    scrollListener() {
      resizeThrottler(this.handleScroll)
    }
  }
}
</script>
<style></style>
