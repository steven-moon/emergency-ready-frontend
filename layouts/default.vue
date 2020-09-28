<template>
  <div class="ui-kit-container">
    <main-navbar :color-on-scroll="0"></main-navbar>
    <nuxt />
    <app-links></app-links>
    <contact-us></contact-us>
<!--    <subscribe :showImage="true"></subscribe>-->
    <main-footer></main-footer>
<!--    <div v-html="chatlio"></div>-->
  </div>
</template>
<script>
  import MainNavbar from "@/components/Common/MainNavbar.vue";
  import MainFooter from "@/components/Common/MainFooter.vue";
  //import ContactUs from '@/components/Sections/ContactUs'
  import ContactUs from '@/components/Common/pages/sections/Contact';
  import AppLinks from '@/components/Common/pages/sections/AppLinks';
  import Subscribe from '@/components/Sections/Subscribe'
  export default {
    components: {
      AppLinks,
      MainFooter,
      MainNavbar,
      ContactUs,
      Subscribe,
    },
    data() {
      return {
        chatlio: "<script type=\"text/javascript\"> window._chatlio = window._chatlio||[]; !function(){ var t=document.getElementById(\"chatlio-widget-embed\");if(t&&window.ChatlioReact&&_chatlio.init)return void _chatlio.init(t,ChatlioReact);for(var e=function(t){return function(){_chatlio.push([t].concat(arguments)) }},i=[\"configure\",\"identify\",\"track\",\"show\",\"hide\",\"isShown\",\"isOnline\", \"page\", \"open\", \"showOrHide\"],a=0;a<i.length;a++)_chatlio[i[a]]||(_chatlio[i[a]]=e(i[a]));var n=document.createElement(\"script\"),c=document.getElementsByTagName(\"script\")[0];n.id=\"chatlio-widget-embed\",n.src=\"https://w.chatlio.com/w.chatlio-widget.js\",n.async=!0,n.setAttribute(\"data-embed-version\",\"2.3\"); n.setAttribute('data-widget-id','724baddb-0066-4402-6c37-d4a2cb1d1650');c.parentNode.insertBefore(n,c); }(); <\/script>",
      }
    },
  }
</script>
<style lang="scss">
  body {
    margin: 0;
  }
</style>
