<template>
   <section class="section-admin">
      <div>
         <div v-if="$mq === 'mobile'" class="page__head">
            <a href="#" class="btn btn--only-icon btn--back-small" @click.prevent="goBack">
               <i>
                  <svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                     <path  d="M14 6.125H3.351l4.891-4.891L7 0 0 7l7 7 1.234-1.234L3.35 7.875H14z" fill="#1D6283"/>
                  </svg>
               </i>
            </a>
            <h3>Admin Page</h3>
         </div>
         <div v-else class="section-top-actions">
            <button class="btn btn--with-icon btn--back btn--wide" @click.prevent="goBack">
               <i>
                  <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                     <path d="M16 7H3.83l5.59-5.59L8 0 0 8l8 8 1.41-1.41L3.83 9H16z" fill="#1D6383" fill-rule="evenodd"/>
                  </svg>
               </i>
               <span>BACK HOME</span>
            </button>
         </div>
      </div>

      <div class="shell">
         <div class="section__inner">
            <div class="section__title col-12">
               <h5>Admin Page </h5>
            </div>
            <div class="section__group">
               <div class="col-12 align-content-center">
                        <div class="col-12 pb-4 pt-4">
                           <button class="form__btn form__btn--with-icon col-md-6 center" @click.prevent="goToUsers">
                              <i class="ico-pen">
                                 <svg height="17" width="16" xmlns="http://www.w3.org/2000/svg"
                                      xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <g fill="#1D6283" fill-rule="evenodd">
                                       <path
                                          d="M0 14.067v3.43h3.333l9.83-10.118L9.83 3.948 0 14.067zm15.74-9.342a.93.93 0 0 0 0-1.29l-2.08-2.14a.867.867 0 0 0-1.253 0l-1.626 1.674 3.333 3.43 1.626-1.674z"/>
                                    </g>
                                 </svg>
                              </i> Users
                           </button>
                        </div>
                        <div class="col-12">
                           <button class="form__btn form__btn--with-icon col-md-6 center" @click.prevent="goToDefaultValues">
                              <i class="ico-pen">
                                 <svg height="17" width="16" xmlns="http://www.w3.org/2000/svg"
                                      xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <g fill="#1D6283" fill-rule="evenodd">
                                       <path
                                          d="M0 14.067v3.43h3.333l9.83-10.118L9.83 3.948 0 14.067zm15.74-9.342a.93.93 0 0 0 0-1.29l-2.08-2.14a.867.867 0 0 0-1.253 0l-1.626 1.674 3.333 3.43 1.626-1.674z"/>
                                    </g>
                                 </svg>
                              </i> Default Values
                           </button>
                        </div>
                     </div>
            </div>
         </div>
      </div>
   </section>
</template>

<script>
   /**
    * @ The external dependecies.
    */

   import {validationMixin} from 'vuelidate';
   import JQuery from 'jquery';
   import {mapGetters} from "vuex";


   /**
    * @ The internal dependecies.
    */
   import formValidationMixin from '~/plugins/form-validation';
   import Field from '~/components/Summa/Common/Field';

   let $ = JQuery;


   export default {
      name: 'Admin',
      mixins: [
         validationMixin,
         formValidationMixin
      ],
      components: {
         Field,
      },
      // validations: {
      //     form: {
      //         reportData: {
      //             name: { required },
      //             company_type: { required }
      //         }
      //     }
      // },
      data() {
         return {}
      },

      computed: {},
      methods: {
         goToDefaultValues(){
            window.location.href = "/admin/default-values/"
         },
         goToUsers(){
            window.location.href = "/admin/users/"
         },
         goBack(){
            window.location.href = "/"
         }
      },
      mounted() {
      },
      created() {
      },
      beforeCreate() {
      },
   }
</script>
