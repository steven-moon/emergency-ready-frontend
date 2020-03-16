<template>
   <div class="history">
      <div class="history__head" v-if="history">
         <div class="history__author">
            <Avatar :user="history.user"/>
         </div><!-- /.history__author -->


         <span class="history__type">{{history.history_type.name}}</span><!-- /.history__date -->

         <span class="history__date">{{history.formatted_date}}</span><!-- /.history__date -->

         <a @click.prevent="edit = true" class="btn-edit-small" v-if="!edit && user && history.user.uuid === user.uuid">
            <i>
               <svg height="11" viewBox="0 0 11 11" width="11" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink">
                  <path
                     d="M0 7.126v1.875h1.974l5.82-5.53-1.973-1.875L0 7.126zm9.321-5.105a.48.48 0 0 0 0-.705L8.09.146a.544.544 0 0 0-.742 0l-.963.915 1.974 1.875.963-.915z"
                     fill="none" fill-rule="evenodd" stroke="#1D6383"/>
               </svg>
            </i>
         </a>

         <a @click.prevent="deleteHistory(history)" class="btn-delete-small" v-if="!edit && user && history.user.uuid === user.uuid">
            <i>
               <svg height="12" viewBox="0 0 16 16" width="12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 1.611L14.389 0 8 6.389 1.611 0 0 1.611 6.389 8 0 14.389 1.611 16 8 9.611 14.389 16 16 14.389 9.611 8z" fill="#F03E41" fill-rule="evenodd"></path>
               </svg>
            </i>
         </a>
      </div><!-- /.history__head -->

      <div class="history__body" v-if="history">
         <div class="history__entry" v-html="history.note" v-if="!edit">
         </div><!-- /.history__entry -->

         <div class="history__edit" v-if="edit">
            <history-editor :source="source" :historyProp="history" @changeHistory="newHistory => history = newHistory"/>

            <div class="history__actions">
               <div class="row">
                  <div class="col-6">
                     <button @click.prevent="edit = false" class="btn btn-task-form">
                        Cancel
                     </button>
                  </div>
                  <div class="col-6">
                     <button @click.prevent="saveHistory" class="btn btn-task-form">
                        Save History
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div><!-- /.history__body -->
   </div><!-- /.history -->
</template>

<script>
   import Avatar from '~/components/Summa/Common/Avatar';
   import HistoryAPI from '~/api/HistoryAPI';
   import HistoryEditor from '~/components/Summa/Common/Sections/History/HistoryEditor';
   import {mapGetters} from "vuex";
   import moment from "moment";

   export default {

      name: 'History',
      props: ['historyProp','source'],
      components: {
         Avatar,
         HistoryEditor
      },
      data () {
         return {
            edit: false,
            history: null
         }
      },
      computed: {
         ...mapGetters({
            user: 'user',
         })
      },
      methods: {
         saveHistory() {
            let data = {
               'uuid': this.history.uuid,
               'note': this.history.note,
               'history_date': this.history.formatted_date,
               'history_type_id': this.history.history_type_id
            };

            HistoryAPI.updateHistory(this.$store, this.source, data, this.history.uuid);

            this.edit = false;
         },

         deleteHistory() {
            if (confirm('Are you sure you want to delete this item?')) {
               HistoryAPI.deleteHistory(this.$store, this.source, this.history.uuid);
            }
         },
         formatDate(value) {
            if(value) {
               return moment(value).format('MM/DD/YYYY hh:mm:ss');
            }else{
               return moment().format('MM/DD/YYYY hh:mm:ss');
            }
         }
      },
      mounted() {
         this.history = this.historyProp;

         this.history.formatted_date = this.formatDate(this.history.history_date);
      }
   }
</script>
