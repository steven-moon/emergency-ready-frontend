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
          { hid: 'description', name: 'description', content: 'Emergency Ready' }
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
