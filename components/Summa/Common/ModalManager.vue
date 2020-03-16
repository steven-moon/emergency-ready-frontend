<template>
   <div>
      <div class="modal-default" v-if="getModal.visible">
         <div class="modal-backdrop" @click="closeModal"></div>

         <div class="modal__inner">
            <component :is="getModal.component"/>
         </div><!-- /.modal__inner -->
      </div><!-- /.modal-default -->
   </div>
</template>

<script>

   /**
    * @ The internal dependecies.
    */
   import ModalWizard from '~/components/Summa/Common/ModalWizard.vue';
   import ModalNormal from '~/components/Summa/Common/ModalNormal.vue';
   import ModalImageUpload from '~/components/Summa/Common/ModalImageUpload.vue';

   import {mapGetters} from 'vuex';

   export default {

      name: 'ModalManager',

      components: {
         ModalWizard,
         ModalNormal,
         ModalImageUpload
      },
      computed: {
         ...mapGetters({
            getModal: "getModal",
         }),
      },
      methods: {
         closeModal(){
            this.$store.commit('closeModal');
            if (typeof(this.$route.params.taskId) !== 'undefined' && typeof(this.$route.params.projectId) !== 'undefined') {
               this.$router.push(`/board/${this.$route.params.projectId}`);
            }
         },
      },
   }
</script>
