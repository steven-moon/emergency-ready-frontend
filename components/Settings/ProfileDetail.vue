<template>
   <div>
      <section v-if="!isLoading" :class="{'section-profile': true, 'modal-open': showModal}">
         <div class="shell">
            <div class="section__inner">
               <div class="section__title">
                  <h5>Profile</h5>
               </div>

               <div class="section__group">

                  <div class="profile-pic" v-if="user" >
                     <img v-lazy="user.signed_profile_url"/>
                  </div>

               </div>

               <div>
                  <form action="" method="post">
                     <div class="section__group">
                        <div class="form__row">
                           <div class="form__col form__col--1of2">
                              <div class="text-box">
                                 <h6>First Name</h6>

                                 <h5 v-if="user">{{user.first_name}}</h5>
                              </div>
                           </div>

                           <div class="form__col form__col--1of2">
                              <div class="text-box">
                                 <h6>Last Name</h6>

                                 <h5 v-if="user">{{user.last_name}}</h5>
                              </div>
                           </div>
                        </div>

                        <div class="form__row">
                           <div class="form__col form__col--1of2">
                              <div class="text-box">
                                 <h6>Email</h6>

                                 <h5 v-if="user">{{user.email}}</h5>
                              </div>
                           </div>

                           <div class="form__col form__col--1of2">
                              <div class="text-box">
                                 <h6>Phone</h6>

                                 <h5 v-if="user">{{user.phone}}</h5>
                              </div>
                           </div>
                        </div>
                     </div>


                     <div class="section__actions">
                        <div class="col-md-6">
                           <button @click.prevent="switchToEditMode" class="form__btn btn--with-icon btn--save btn--wide">
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
                           </button>
                        </div>

                        <div class="col-md-6">
                           <button @click.prevent="handleUserLogOut" class="form__btn__red btn--with-icon btn--save btn--wide">
                              <i class="ico-close-red">
                                 <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 1.611L14.389 0 8 6.389 1.611 0 0 1.611 6.389 8 0 14.389 1.611 16 8 9.611 14.389 16 16 14.389 9.611 8z" fill="#F03E41" fill-rule="evenodd"/>
                                 </svg>
                              </i>

                              <span class="text">Logout</span>
                           </button>
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

    import {mapActions, mapGetters} from 'vuex';


    /**
     * @ The internal dependecies.
     */
    import Field from '~/components/Summa/Common/Field';



    export default {
        name: 'Profile',
        props: ["uuid", "add"],
        components: {
            Field,
        },
        data() {
            return {
                showModal: false,
                edit: false,
                isLoading: true,
            }
        },

        computed: {
            ...mapGetters(['isSidebarCollapsed', 'isUserLoggedIn', 'user'])
        },
        methods: {
           ...mapActions([
              'logout'
           ]),
            switchToEditMode() {
                this.$emit("switchToEditMode");
            },
            profilePicUrl(){

            },
           handleUserLogOut(){
              this.logout();
              window.location.href = "/login";
           }
        },
        mounted() {
           this.isLoading = false;
        },
        created() {
        },
        beforeCreate() {
        },
    }
</script>
