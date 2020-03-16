<template>
   <div class="sections sections-form">
      <history-section :source="source" v-if="includeSection('historySection')" :items="history" :parentUUID="parentUUID"/>
      <comment-section :source="source" v-if="includeSection('commentSection')" :items="comments" :parentUUID="parentUUID"/>
      <file-section :source="source" v-if="includeSection('fileSection')" :items="files" :parentUUID="parentUUID"/>
   </div>
</template>

<script>
   /**
    * The external dependencies
    */
   import { mapGetters } from 'vuex';

   /**
    * The internal dependencies
    */
   import FileSection from '~/components/Summa/Common/Sections/Files/FileSection';
   import HistorySection from '~/components/Summa/Common/Sections/History/HistorySection';
   import CommentSection from '~/components/Summa/Common/Sections/Comments/CommentSection';

   export default {
      name: 'Sections',
      props: ['source','files','history','comments','parentUUID'],
      components: {
         FileSection,
         HistorySection,
         CommentSection
      },
      methods: {
         includeSection(type){
            if(type === 'timeSection' &&
               this.source === 'task'){
               return true;
            }else if(type === 'fileSection' &&
               (this.source === 'task' ||
                  this.source === 'lead2' ||
                  this.source === 'company'||
                  this.source === 'person' ||
                  this.source === 'project')){
               return true;
            }else if(type === 'bugSection' &&
               this.source === 'task2'){
               return true;
            }else if(type === 'commentSection' &&
               (this.source === 'task' ||
                  this.source === 'lead' ||
                  this.source === 'company'||
                  this.source === 'person' ||
                  this.source === 'project')){
               return true;
            }else if(type === 'historySection' &&
               (this.source === 'task' ||
                  this.source === 'lead' ||
                  this.source === 'company'||
                  this.source === 'person' ||
                  this.source === 'project')){
               return true;
            }

            return false;

         },
      }
   }
</script>
