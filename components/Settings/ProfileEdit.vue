<template>
   <section class='section-profile'>
      <div class="shell">
         <div v-if="isLoading === true"  class="section__inner">
            <tile :loading="isLoading"/>
         </div>
         <div class="section__inner">
            <div class="section__title">
               <h5>Edit Profile</h5>
            </div>

            <div class="section__group">

               <div class="profile-pic" v-if="user">
                  <img v-lazy="user.signed_profile_url" alt="Profile Image"/>
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
    import {mapGetters} from 'vuex';
    import clonedeep from 'lodash.clonedeep';
    import {email, minLength, required, sameAs} from 'vuelidate/lib/validators';


    /**
     * @ The internal dependecies.
     */
    import formValidationMixin from '~/plugins/form-validation';
    import Field from '~/components/Summa/Common/Field';
    import CommonAPI from '~/api/CommonAPI';
    import UserAPI from '~/api/UserAPI';



    export default {
        name: 'ProfileEdit',
        mixins: [
            validationMixin,
            formValidationMixin
        ],
        components: {
            Field,
        },
        validations: {
            form: {
                first_name: {required},
                last_name: {required},
                email: {required, email},
                phone: (minLength(10))
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
                isLoading: false,
                form: {
                    "first_name": null,
                    "last_name": null,
                    "email": null,
                   "signed_profile_url": null
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
            ...mapGetters(['isSidebarCollapsed', 'isUserLoggedIn', 'user']),
            uploadUrl() {

                var url = "users/profile-pic";
                url = CommonAPI.getBaseURL(url, this.user.uuid, "");
                console.log("UploadUrl: " + url);
                return url;
            },
            profilePicUrl() {
                var url = "users/profile-pic";
                url = CommonAPI.getBaseURL(url, this.user.uuid, "");
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

                if (this.user.uuid && this.user.uuid.length > 10) {
                    UserAPI.update(this.$store, this.form, this.user.uuid)
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

                UserAPI.update(this.$store, this.form, this.user.uuid)
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
                //console.log(form);
                this.isLoading = true;
            },
            handleUploaded(response, form) {
               console.log("BEGIN: handleUploaded in profile edit");
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
                        var userResponse = response.data.user;
                        this.$cookies.set("authToken", userResponse.api_token, {
                            path: '/',
                            maxAge: 60 * 60 * 24 * 7
                        });
                        this.$cookies.set("userId", userResponse.email, {path: '/', maxAge: 60 * 60 * 24 * 7});
                        this.$cookies.set("user", JSON.stringify(userResponse), {
                            path: '/',
                            maxAge: 60 * 60 * 24 * 7
                        });


                        this.$store.commit('setAuthToken', userResponse.api_token);
                        this.$store.commit('setUserID', userResponse.email);
                        this.$store.commit('setUser', userResponse);

                        console.log('set user: ');
                        console.log(userResponse);
                    }else{
                        console.log("Response user not set")
                    }

                }else{
                    console.log("Response not successful")
                }
            }
        },
        mounted() {
            this.form = clonedeep(this.user);
        },
        created() {
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
