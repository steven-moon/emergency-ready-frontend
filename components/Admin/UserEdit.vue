<template>
   <section class='section-profile'>
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
               <span>BACK TO USERS</span>
            </button>
         </div>
      </div>

      <div class="shell">
         <div v-if="isLoading === true"  class="section__inner">
            <tile :loading="isLoading"/>
         </div>
         <div class="section__inner">
            <div class="section__title">
               <h5>Edit Profile</h5>
            </div>

            <div class="section__group">

               <div class="profile-pic">
                  <img v-lazy="form.signed_profile_url" alt="Profile Image"/>
               </div>

               <div class="profile-pic-btns">
                  <avatar-cropper
                                  @uploading="handleUploading"
                                  @uploaded="handleUploaded"
                                  @error="handlerError"
                                  uploadFormName ="profile_image"
                                  trigger="#pick-avatar"
                                  :upload-url="uploadUrl"
                                  :upload-headers="postHeaders"
                                  :labels="{ 'submit': 'Submit', 'cancel': 'Cancel'}"/>

<!--                  <my-upload :headers="postHeaders"-->
<!--                             :height="512"-->
<!--                             :params="postParms"-->
<!--                             :url="uploadUrl"-->
<!--                             :width="512"-->
<!--                             @crop-success="cropSuccess"-->
<!--                             @crop-upload-fail="cropUploadFail"-->
<!--                             @crop-upload-success="cropUploadSuccess"-->
<!--                             field="profile_image"-->
<!--                             img-format="png"-->
<!--                             lang-type="en"-->
<!--                             v-model="show"></my-upload>-->

                  <button id="pick-avatar" class="btn btn--with-icon btn--save btn--wide">
                     <i class="ico-save">
                        <svg height="21" viewBox="0 0 20 21" width="20" xmlns="http://www.w3.org/2000/svg"
                             xmlns:xlink="http://www.w3.org/1999/xlink">
                           <path
                              d="M23.778 8H8.21c-1.233 0-2.2 1-2.2 2.222L6 25.778C6 27 6.978 28 8.211 28h15.567C25 28 26 27 26 25.778V10.222C26 9 25 8 23.778 8zm0 13.333h-4.445c0 1.845-1.5 3.334-3.333 3.334a3.336 3.336 0 0 1-3.333-3.334H8.21v-11.11h15.567v11.11zm-3.334-5.555h-2.222v-3.334h-4.444v3.334h-2.222L16 20.222l4.444-4.444z"
                              fill="#1D6283" fill-rule="evenodd" transform="translate(-6 -7.29)"/>
                        </svg>
                     </i>

                     <span class="text">Upload Photo</span>
                  </button>

                  <button @click="" class="btn btn--with-icon btn--red btn--wide">
                     <i class="ico-close-red">
                        <svg height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                           <path
                              d="M16 1.611L14.389 0 8 6.389 1.611 0 0 1.611 6.389 8 0 14.389 1.611 16 8 9.611 14.389 16 16 14.389 9.611 8z"
                              fill="#F03E41" fill-rule="evenodd"/>
                        </svg>
                     </i>

                     <span class="text">Remove Photo</span>
                  </button>
               </div>

            </div>

            <div v-if="form">
               <form action="" method="post">
                  <div class="section__group">
                     <div class="form__row">
                        <div class="form__col form__col--1of2">
                           <div class="form__controls">
                              <field
                                 id="field-profile-first-name"
                                 label="First Name"
                                 placeholder="John"
                                 v-model="form.first_name"
                                 withAsterisk
                              />
                           </div>
                        </div>

                        <div class="form__col form__col--1of2">
                           <div class="form__controls">
                              <field
                                 id="field-profile-last-name"
                                 label="Last Name"
                                 placeholder="Smith"
                                 v-model="form.last_name"
                                 withAsterisk
                              />
                           </div>
                        </div>
                     </div>
                     <div class="form__row">
                        <div class="form__col form__col--1of2">
                           <div class="form__controls">
                              <field
                                 id="field-profile-email"
                                 label="Email Address"
                                 placeholder="email@domain.com"
                                 v-model="form.email"
                              />
                           </div>
                        </div>
                        <div class="form__col form__col--1of2">
                           <div class="form__controls">
                              <field
                                 id="field-profile-phone"
                                 label="Phone"
                                 placeholder="801-123-3000"
                                 v-model="form.phone"
                              />
                           </div>
                        </div>
                     </div>
                  </div>

                  <div class="section__actions" v-if="edit">
                     <button @click.prevent="save" class="btn btn--with-icon btn--save btn--wide">
                        <i class="ico-save">
                           <svg height="21" viewBox="0 0 20 21" width="20" xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink">
                              <path
                                 d="M23.778 8H8.21c-1.233 0-2.2 1-2.2 2.222L6 25.778C6 27 6.978 28 8.211 28h15.567C25 28 26 27 26 25.778V10.222C26 9 25 8 23.778 8zm0 13.333h-4.445c0 1.845-1.5 3.334-3.333 3.334a3.336 3.336 0 0 1-3.333-3.334H8.21v-11.11h15.567v11.11zm-3.334-5.555h-2.222v-3.334h-4.444v3.334h-2.222L16 20.222l4.444-4.444z"
                                 fill="#1D6283" fill-rule="evenodd" transform="translate(-6 -7.29)"/>
                           </svg>
                        </i>

                        <span class="text">Save</span>
                     </button>
                  </div>
               </form>

               <form action="" method="post">
                  <div class="section__group">
                     <h5 class="inner-section-title">Change Password</h5>
                     <div class="form__row">

                        <div class="form__col form__col--1of2">
                           <div class="form__controls">
                              <field
                                 id="field-profile-new-password"
                                 label="New Password"
                                 placeholder=""
                                 v-model="newPassForm.password"
                                 type="password"
                              />
                           </div>
                        </div>

                        <div class="form__col form__col--1of2">
                           <div class="form__controls">
                              <field
                                 id="field-profile-confirm-new-password"
                                 label="Confirm New Password"
                                 placeholder=""
                                 v-model="newPassForm.repeatPassword"
                                 type="password"
                              />
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="section__actions" v-if="edit">
                     <button @click.prevent="changePassword" class="btn btn--with-icon btn--save btn--wide">
                        <i class="ico-save">
                           <svg height="21" viewBox="0 0 20 21" width="20" xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink">
                              <path
                                 d="M23.778 8H8.21c-1.233 0-2.2 1-2.2 2.222L6 25.778C6 27 6.978 28 8.211 28h15.567C25 28 26 27 26 25.778V10.222C26 9 25 8 23.778 8zm0 13.333h-4.445c0 1.845-1.5 3.334-3.333 3.334a3.336 3.336 0 0 1-3.333-3.334H8.21v-11.11h15.567v11.11zm-3.334-5.555h-2.222v-3.334h-4.444v3.334h-2.222L16 20.222l4.444-4.444z"
                                 fill="#1D6283" fill-rule="evenodd" transform="translate(-6 -7.29)"/>
                           </svg>
                        </i>

                        <span class="text">Change Password</span>
                     </button>
                  </div>
               </form>
               <form action="" method="post">
                  <div class="section__group pt-4">
                     <div class="form__row pl-3 pr-3">
                        <sections v-if="this.uuid !== 'new'" source="person"  :files="files" :history="history" :comments="comments" :parentUUID="form.person_id"/>
                     </div>
                  </div>
               </form>
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
    import {mapGetters} from 'vuex';
    import clonedeep from 'lodash.clonedeep';
    import {email, minLength, required, sameAs} from 'vuelidate/lib/validators';
    let $ = JQuery;


    /**
     * @ The internal dependecies.
     */
    import formValidationMixin from '~/plugins/form-validation';
    import Field from '~/components/Summa/Common/Field';
    import CommonAPI from '~/api/CommonAPI';
    import UserAPI from '~/api/UserAPI';
    import Sections from '~/components/Summa/Common/Sections/Sections';
    import PersonAPI from '~/api/PersonAPI';

    export default {
        name: 'UseEdit',
        props: ["uuid"],
        mixins: [
            validationMixin,
            formValidationMixin
        ],
        components: {
            Field,
           Sections
        },
        validations: {
            form: {
                first_name: {required},
                last_name: {required},
                email: {required, email},
                phone: (minLength(10)),

            },
            newPassForm: {
                password: {required, minLength: minLength(6)},
                repeatPassword: {
                    required,
                    sameAsPassword: sameAs('password')
                },
            }
        },
        data() {
            return {
                edit: true,
                isLoading: true,
                form: {
                   "uuid": "new",
                    "first_name": null,
                    "last_name": null,
                    "email": null,
                   "signed_profile_url": ''
                },
                newPassForm: {
                    password: null,
                    repeatPassword: null
                },
                image: "",
                show: false,
                imgDataUrl: '' // the datebase64 url of created image
            }
        },

        computed: {
            ...mapGetters(['isSidebarCollapsed', 'isUserLoggedIn']),
           ...mapGetters('personstore', {
              history: 'history',
              files:'attachments',
              comments: 'comments'
           }),
            uploadUrl() {

                var url = "users/profile-pic";
                url = CommonAPI.getBaseURL(url, this.uuid, "");
                console.log("UploadUrl: " + url);
                return url;
            },
            profilePicUrl() {
                var url = "users/profile-pic";
                url = CommonAPI.getBaseURL(url, this.uuid, "");
                console.log("UploadUrl: " + url);
                return url;
            },
            postHeaders() {

                return CommonAPI.getBaseHeaders(this.$store);
            },
        },
        methods: {
            save() {
                this.$v.$touch();

                //if (this.$v.$invalid) return;

                this.isLoading = true;


                console.log("Save");
                console.log(this.form);

                if (this.uuid.length > 10) {
                    UserAPI.update(this.$store, this.form, this.uuid)
                        .then(response => {
                            console.log("Got update user response");
                            this.isLoading = false;
                            this.processResponse(response);
                            this.$emit('switchToPrintMode');
                        })
                        .catch((error) => {
                            console.log("error in update user: " + error);
                            this.isLoading = false;
                        });
                } else {
                    UserAPI.add(this.$store, this.form)
                        .then(response => {
                            console.log("Got add user response");
                            this.isLoading = false;
                            this.processResponse(response);
                            //this.$emit('switchToPrintMode');
                        })
                        .catch((error) => {
                            console.log("error in add user: " + error);
                            this.isLoading = false;
                        });
                }

            },
            changePassword() {
                console.log("Change Password");
                console.log(this.newPassForm);

                this.isLoading = true;

                this.form = {
                    ...this.form,
                    newPassword: this.newPassForm.password,
                };

                UserAPI.update(this.$store, this.form, this.uuid)
                    .then(response => {
                        console.log("Got update user response");
                        this.isLoading = false;
                        this.processResponse(response);
                        this.$emit('switchToPrintMode');
                    })
                    .catch((error) => {
                        console.log("error in update user: " + error);
                        this.isLoading = false;
                    });
            },
            toggleShow() {
                this.show = !this.show;
            },
            handleUploading(form) {
                //form.append('uuid', this.user.uuid);
                console.log("BEGIN: handleUploading");
                console.log(form);
                this.isLoading = true;
            },
            handleUploaded(response, form) {
                // update user avatar attribute
                this.isLoading = false;
                this.processResponse(response);
            },
            handlerError(message, type, error) {
                if (type === 'upload') {
                    // xhr.response...
                }
                console.log(error);
                this.isLoading = false;
            },
            processResponse(response){
                console.log("BEGIN: processResponse");
                console.log(response);
                if (response.status === 'success') {
                    if (response.data && response.data.user) {

                       this.form = response.data.user;

                        console.log('set user: ');
                        console.log(userResponse);
                    }else{
                        console.log("Response user not set")
                    }

                }else{
                    console.log("Response not successful")
                }
            },
           goBack() {
              window.location.href = "/admin/users/"
           }
        },
        mounted() {
        },
        created() {
           this.$store.commit('personstore/resetChildren');
           if(this.uuid.length > 10){
              UserAPI.getOne(this.$store,this.uuid).then( response =>{
                 //if(response.status === 'success'){
                    console.log("User getOne success");
                    const clonedItems = clonedeep(response);
                    console.log(clonedItems);
                    this.form = clonedItems;
                    this.isLoading = false;
                    console.log("In UserEdit .vue mounted. Load Children Data. person_id =");
                    console.log(this.form.person_id);
                    PersonAPI.getChildrenRecords(this.$store, this.form.person_id);


                 //}else{
                 //   console.log("User get one not success");
                 //   console.log(response);
                 //   this.isLoading = false;
                 //}
              });
           }else{
              this.isLoading = false;
           }
        },
        beforeCreate() {
        },
        setImage() {
            console.log("BEGIN: setImage");
        },
        startImageResize() {
            console.log("BEGIN: startImageResize");
        },
        endImageResize() {
            console.log("BEGIN: endImageResize");
        }
    }
</script>
