<template>
   <div>
      <section class='section-profile'>
         <user-edit :uuid="uuid" v-if="edit"  @switchToPrintMode="switchToPrintMode"/>
         <user-detail :uuid="uuid" v-else @switchToEditMode="switchToEditMode"/>
      </section>
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
   import UserDetail from '~/components/Admin/UserDetail.vue'
   import UserEdit from '~/components/Admin/UserEdit.vue'
   import Sections from '~/components/Summa/Common/Sections/Sections';

   export default {
      layout: "default",
      middleware: ["check-auth", "auth"],
      components: {
         UserDetail,
         UserEdit,
         Sections
      },
      data() {
         return {
            isLoading: false,
            edit: false,
            uuid: "new",
            person_id: "new",
         }
      },
      computed: {
      },
      methods: {
         switchToEditMode() {
            this.edit = true;
         },
         switchToPrintMode() {
            this.edit = false;
         },
      },
      created() {
         if (this.$route.query.id) {
            this.uuid = this.$route.query.id;
         }

         var action = this.$route.query.action;

         if (action === 'edit' && this.uuid !== "new"){
            this.edit = true;
         }else if (action === 'view' && this.uuid !== "new") {
            this.edit = false;
         } else {
            this.edit = true;
            this.uuid = "new";
         }
      },
      mounted() {
      }
   }
</script>
