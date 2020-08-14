<template>
  <div class="ui-kit-container">
    <navbar type="success" menu-classes="ml-auto">
      <div class="navbar-translate">
        <a class="navbar-brand" href="/">Emergency Ready App</a>
      </div>
      <template slot="navbar-menu">
      </template>
    </navbar>
    <nuxt />
  </div>
</template>
<script>
import {Navbar} from "@/components/UIKit";
  export default {
    components: {
      Navbar,
    }
  }
</script>
<style lang="scss">
  body {
    margin: 0;
  }
</style>
