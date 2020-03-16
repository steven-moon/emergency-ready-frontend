<template>
   <div>
      <section :class="{'section-profile': true, 'modal-open': showModal}">
         <div class="shell">
            <div class="section__inner">
               <div class="section__title">
                  <h5>Profile</h5>
               </div>

               <div class="section__group">

                  <div class="profile-pic">
                     <img v-lazy="user.signed_profile_url">
                  </div>

               </div>

               <div>
                  <form action="" method="post">
                     <div class="section__group">
                        <div class="form__row">
                           <div class="form__col form__col--1of2">
                              <div class="text-box">
                                 <h6>First Name</h6>

                                 <h5>{{user.first_name}}</h5>
                              </div>
                           </div>

                           <div class="form__col form__col--1of2">
                              <div class="text-box">
                                 <h6>Last Name</h6>

                                 <h5>{{user.last_name}}</h5>
                              </div>
                           </div>
                        </div>

                        <div class="form__row">
                           <div class="form__col form__col--1of2">
                              <div class="text-box">
                                 <h6>Email</h6>

                                 <h5>{{user.email}}</h5>
                              </div>
                           </div>

                           <div class="form__col form__col--1of2">
                              <div class="text-box">
                                 <h6>Phone</h6>

                                 <h5>{{user.phone}}</h5>
                              </div>
                           </div>
                        </div>
                     </div>


                     <div class="section__actions">
                        <a @click.prevent="switchToEditMode" class="btn btn--with-icon btn--save btn--wide" href=''>
                           <i class="ico-pen">
                              <svg height="17" width="16" xmlns="http://www.w3.org/2000/svg"
                                   xmlns:xlink="http://www.w3.org/1999/xlink">
                                 <g fill="#1D6283" fill-rule="evenodd">
                                    <path
                                       d="M0 14.067v3.43h3.333l9.83-10.118L9.83 3.948 0 14.067zm15.74-9.342a.93.93 0 0 0 0-1.29l-2.08-2.14a.867.867 0 0 0-1.253 0l-1.626 1.674 3.333 3.43 1.626-1.674z"/>
                                 </g>
                              </svg>
                           </i>

                           <span class="text">Edit</span>
                        </a>
                     </div>

                     <div class="section__group">
                        <div class="form__row">
                           <sections v-if="this.uuid !== 'new'" source="person"  :files="files" :history="history" :comments="comments" :parentUUID="user.person_id"/>
                        </div>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </section>
   </div>
</template>

<script>
    /**
     * @ The external dependecies.
     */

    import JQuery from 'jquery';
    import {mapGetters} from 'vuex';
    import clonedeep from "lodash.clonedeep";
    let $ = JQuery;

    /**
     * @ The internal dependecies.
     */
    import Field from '~/components/Summa/Common/Field';
    import UserAPI from '~/api/UserAPI'
    import Sections from '~/components/Summa/Common/Sections/Sections';
    import PersonAPI from '~/api/PersonAPI';



    export default {
        name: 'UserDetail',
        props: ["uuid"],
        components: {
            Field,
           Sections
        },
        data() {
            return {
                showModal: false,
                isLoading: true,
               user: {
                  signed_profile_url: '',
                  first_name: '',
                  last_name: '',
                  email: '',
                  phone: ''
               }
            }
        },

        computed: {
            ...mapGetters(['isSidebarCollapsed', 'isUserLoggedIn']),
           ...mapGetters('personstore', {
              history: 'history',
              files:'attachments',
              comments: 'comments'
           }),
        },
        methods: {
            switchToEditMode() {
                this.$emit("switchToEditMode");
            },
            profilePicUrl(){

            }
        },
        mounted() {
        },
        created() {
           this.$store.commit('personstore/resetChildren');
           if(this.uuid.length > 10){
              UserAPI.getOne(this.$store,this.uuid).then( response =>{
                 //if(response['status'] === 'success'){
                    console.log("User getOne success");
                    const clonedItems = clonedeep(response);
                    console.log(clonedItems);
                    this.user = clonedItems;
                    this.isLoading = false;
                 console.log("In UserDetail .vue mounted. Load Children Data. person_id =");
                 console.log(this.user.person_id);
                 PersonAPI.getChildrenRecords(this.$store, this.user.person_id);

                 //}else{
                   // console.log("User get one not success");
                    //this.isLoading = false;
                 //}
              });
           }else{
              this.isLoading = false;
           }
        },
        beforeCreate() {
        },
    }
</script>
