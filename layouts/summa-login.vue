<template>
  <div class="summa wrapper">
     <notifications></notifications>
    <div :class="{main : true, 'show-sidebar': this.mobileMenuShow && $mq === 'mobile'}">


      <div class="content">

        <nuxt />

      </div>
    </div>

    <modal-manager></modal-manager>
  </div>
</template>

<script>
  import HeaderContainer from '~/components/Summa/Common/HeaderContainer';
  import SidebarContainer from '~/components/Summa/Common/SidebarContainer';
  import ModalManager from '~/components/Summa/Common/ModalManager';

  export default {
    components: {
      HeaderContainer,
      SidebarContainer,
      ModalManager
    },
    data () {
      return {
        login: false,
        mobileMenuShow: false
      }
    },
    computed: {
    },
    methods: {
      btnMenuToggle (value) {
        this.mobileMenuShow = !this.mobileMenuShow;
      }
    },
    created() {
    },
  }

</script>

<style lang="scss">
  body {
    margin: 0;
  }
</style>



