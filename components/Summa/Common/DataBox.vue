<template>
   <div>

      <div class="list-categories" v-if="$mq === 'mobile' && !edit">
         <ul>
            <li>
               <a href="#" @click.prevent="modalToggle">
                  <span>Notes</span>

                  <span class="count">{{notes.length}}</span>
               </a>
            </li>

            <li>
               <a href="#">
                  <span>History</span>

                  <span class="count">{{history.length}}</span>
               </a>
            </li>

            <li>
               <a href="#">
                  <span>Documents</span>

                  <span class="count">{{documents.length}}</span>
               </a>
            </li>

            <li>
               <a :href="'/crm/common/contacts-mobile.html?:id=' +  this.itemId">
                  <span>Contacts</span>

                  <span class="count">{{contacts.length}}</span>
               </a>
            </li>
         </ul><!-- /.list-categories -->
      </div><!-- /.list-categories -->

      <div class="data-box">
         <div class="table-data">
            <vue-tabs class="vue-tabs--alt" v-if="$mq !== 'mobile'">
               <v-tab title="Contacts">
                  <div class="table__head">
                     <div class="table-row">
                        <div class="cell">
                           <span>Name</span>
                        </div>

                        <div class="cell">
                           <span>Role</span>
                        </div>

                        <div class="cell">
                           <span>Email</span>
                        </div>

                        <div class="cell">
                           <span>Phone</span>
                        </div>
                     </div>
                  </div>

                  <div class="table__body">
                     <table-data :data="contacts" :dataCategory="'contacts'" :itemId="itemId"
                                 :showEmptyRow="this.isEmptyRowVisible"/>
                  </div>
               </v-tab>

               <v-tab title="Documents">
                  <div class="table__head">
                     <div class="table-row">
                        <div class="cell">
                           <span>Name</span>
                        </div>

                        <div class="cell">
                           <span>URL</span>
                        </div>
                     </div>
                  </div>

                  <div class="table__body">
                     <table-data :data="documents" :dataCategory="'documents'" :itemId="itemId"
                                 :showEmptyRow="this.isEmptyRowVisible"/>
                  </div>
               </v-tab>

               <v-tab title="History">
                  <div class="table__head">
                     <div class="table-row">
                        <div class="cell">
                           <span>Date</span>
                        </div>

                        <div class="cell">
                           <span>Description</span>
                        </div>
                     </div>
                  </div>

                  <div class="table__body">
                     <table-data :data="history" :dataCategory="'history'" :itemId="itemId"
                                 :showEmptyRow="this.isEmptyRowVisible"/>
                  </div>
               </v-tab>

               <div class="v-tab-actions">
                  <button @click.prevent="hideEmptyRow" class="btn btn--only-icon btn--only-icon-small btn--cancel-small"
                          type="button"
                          v-if="this.isEmptyRowVisible === true">
                     <i class="ico-cancel">
                        <svg height="24" viewBox="0 0 24 25" width="25" xmlns="http://www.w3.org/2000/svg">
                           <path
                              d="M25 2.417L22.482 0 12.5 9.583 2.518 0 0 2.417 9.982 12 0 21.583 2.518 24l9.982-9.583L22.482 24 25 21.583 15.018 12z"
                              fill="#1D6383"/>
                        </svg>
                     </i>
                  </button>

                  <button @click.prevent="showEmptyRow" class="btn btn--only-icon btn--only-icon-small btn--add-small"
                          type="button" v-if="this.isEmptyRowVisible === false">
                     <i class="ico-plus">
                        <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                           <path d="M22.558 13.756h-8.8v8.8h-4.4v-8.8h-8.8v-4.4h8.8v-8.8h4.4v8.8h8.8z" fill="#1D6383"/>
                        </svg>
                     </i>
                  </button>
               </div>
            </vue-tabs>
         </div>
      </div>
   </div>
</template>

<script>

   import TableData from '~/components/Common/TableData.vue';

   export default {
      name: 'DataBox',
      components: {
         TableData,
      },
      props: ["edit",
         "contacts",
         "itemId",
         "documents",
         "history",
         "notes"],
      data() {
         return {
            isEmptyRowVisible: false,
         }
      },
      methods: {
         showEmptyRow() {
            this.isEmptyRowVisible = true
         },
         hideEmptyRow() {
            this.isEmptyRowVisible = false
         },
         modalToggle() {
            this.$emit('modalToggle');
         },
      }
   }

</script>
