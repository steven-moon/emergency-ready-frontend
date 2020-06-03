<template>
  <div>
    <home></home>
    <contact-us></contact-us>
  </div>
</template>
<script>
  /**
   * @ The external dependecies.
   */

  import Home from '@/components/EmergencyReady/Home';
  import ContactUs from '@/components/Common/pages/sections/Contact';


  export default {
    layout: 'argon-dashboard-layout',
    name: 'home-page',
    head () {
      return {
        title: "Emergency Ready App",
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          { hid: 'description', name: 'description', content: 'Contact us about have a custom Emergency Ready App created for your business or government agency.' }
        ]
      }
    },
    components: {
      ContactUs,
      Home
    },
  };

</script>
