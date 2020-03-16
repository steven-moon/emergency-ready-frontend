<template>
   <div class="history-add">
      <div v-if="isLoading === true">
         <tile :loading="isLoading"/>
      </div>
      <form v-else>
         <div class="history__body">
            <div class="history__author">
               <Avatar :user="user"/>
            </div><!-- /.history__author -->

            <history-editor :source="source" @changeHistory="newHistory => history = newHistory" />
         </div><!-- /.history__body -->

         <div class="history__actions">
            <button @click.prevent="addHistory" class="btn btn-task-form">
               <i>
                  <svg height="14" viewBox="0 0 14 14" width="14" xmlns="http://www.w3.org/2000/svg">
                     <path
                        d="M8.4 8.4v4.599A1 1 0 0 1 7.405 14h-.81a.993.993 0 0 1-.995-1.001V8.4H1.001A1 1 0 0 1 0 7.405v-.81c0-.55.44-.995 1.001-.995H5.6V1.001A1 1 0 0 1 6.595 0h.81c.55 0 .995.44.995 1.001V5.6h4.599A1 1 0 0 1 14 6.595v.81c0 .55-.44.995-1.001.995H8.4z"
                        fill="#1D6383" fill-rule="evenodd"/>
                  </svg>
               </i>

               Add History
            </button>
         </div><!-- /.history__actions -->
      </form>
   </div><!-- /.history-add -->
</template>


<script>
   import {mapGetters} from "vuex";
   import clonedeep from 'lodash.clonedeep';

   import Avatar from '~/components/Summa/Common/Avatar';
   import HistoryAPI from '~/api/HistoryAPI';
   import Field from '~/components/Summa/Common/Field';
   import HistoryEditor from '~/components/Summa/Common/Sections/History/HistoryEditor';
   import moment from "moment";


   export default {

      name: 'AddHistory',
      props: ['source','parentUUID'],
      components: {
         Avatar,
         Field,
         HistoryEditor
      },
      computed: {
         ...mapGetters({
            user: 'user',
         })
      },
      data() {
         return {
            isLoading: false,
            history: {
               historyDate: null,
               formatted_date: null,
               historyType: null,
               history_type_object: {uuid: "none", name: ""},
               history_type_id: null,
               note: ""
            }
         }
      },
      methods: {
         addHistory() {
            console.log("Add Add History");
            this.isLoading = true;
            let data = {
               'parent_id': this.parentUUID,
               'note': this.history.note,
               'history_date': this.history.formatted_date,
               'history_type_id': this.history.history_type_id
            };
            console.log(data);
            HistoryAPI.addHistory(this.$store, this.source,  data)
               .then(response => {
                  console.log(response);
                  if (response.status === 'success') {
                     if (response.data) {
                        this.$store.commit(this.source + 'store/setHistory', clonedeep(response.data));
                        this.history.note = '';
                        this.history.history_type_id = null;
                        this.history.history_type_object = {uuid: "none", name: ""};
                     } else {
                        console.log("Response Data Not Set in AddHistory")
                     }
                  }
                  this.isLoading = false;
               })
               .catch((error) => {
                  console.log("error in AddHistory" + error);
                  this.isLoading = false;
               });
         }
      },
      mounted() {
         console.log("AddHistory Mounted");
      }
   }
</script>
