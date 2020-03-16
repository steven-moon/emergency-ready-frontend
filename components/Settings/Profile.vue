<template>
   <div>
      <profile-edit v-if="edit"  @switchToPrintMode="switchToPrintMode"/>
      <profile-detail v-else @switchToEditMode="switchToEditMode"/>
   </div>
</template>

<script>

   import ProfileDetail from '~/components/Settings/ProfileDetail.vue'
   import ProfileEdit from '~/components/Settings/ProfileEdit.vue'


   export default {
      layout: "default",
      middleware: ["check-auth", "auth"],
      components: {
         ProfileDetail,
         ProfileEdit
      },
      data() {
         return {
            edit: false,
         }
      },
      computed: {},
      methods: {
         switchToEditMode() {
            this.edit = true;
         },
         switchToPrintMode() {
            this.edit = false;
         },
      },
      created() {
      },
   }
</script>
