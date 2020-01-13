<template>
  <div class="wrapper landing-page">
    <project-wrapper whichProject="2" :data="featuredAppsPage"/>
    <contact-us :withMap="true"/>
    <subscribe :showImage="true"/>
  </div>
</template>


<script>
  /**
   * @ The external dependecies.
   */
  import {mapGetters} from 'vuex';

  /**
   * @ The internal dependecies.
   */
  import ProjectWrapper from '@/components/Common/SectionTemplates/Project/ProjectWrapper'
  import ContactUs from '@/components/Sections/ContactUs'
  import Subscribe from '@/components/Sections/Subscribe'


  export default {
    name: 'featured-apps',
    components: {
      ProjectWrapper,
      ContactUs,
      Subscribe
    },
    head () {
      return {
        title: this.title,
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          { hid: 'description', name: 'description', content: 'We\'ve had one of the first Apple apps on the market, and we didn\'t stop there. Explore some of our latest featured apps that Clever Coding designed.' }
        ]
      }
    },
    data() {
      return {
        title: "Featured Apps"
      }
    },
    computed: {
      ...mapGetters('pageDataStore', {
        featuredAppsPage: 'featuredAppsPage'
      }),
    },
    mounted() {
    }
  }
</script>
