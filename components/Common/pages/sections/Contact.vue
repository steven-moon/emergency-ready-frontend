<template>
    <div class="cd-section" id="contactus" v-if="withMap">
        <div class="contactus-2">
<!--            <gmap-map-->
<!--                    :center="center"-->
<!--                    :options="options"-->
<!--                    :zoom="9.5"-->
<!--                    class="map"-->
<!--                    id="map"-->
<!--                    map-type-id="roadmap">-->
<!--                <gmap-marker :position="center">-->
<!--                </gmap-marker>-->
<!--            </gmap-map>-->
            <div class="col-md-9 col-lg-8 col-sm-11 pt-5 mr-auto ml-auto">
                <card header-classes="text-center pt-3" raised style="min-height: 660px;" type="contact" v-if="isLoading">
                    <h4 class="card-title pt-2" slot="header">Contact Us</h4>
                    <div class="row">
                        The Emergency Ready App is a product of Clever Coding LLC.  Clever Coding has been creating mobile and web apps since 2008 for clients around the world.  Please contact us today to learn more about a custom branded version of the Emergency Ready App or any other custom app developer needs.
                    </div>
                    <div class="row">
                        <div class="col-md-10 ml-auto mr-auto">
                            <tile :loading="isLoading"></tile>
                        </div>
                    </div>
                </card>
                <card header-classes="text-center pt-3" raised style="min-height: 660px;" type="contact"
                      v-else-if="contactResponseMessage">
                    <h4 class="card-title pt-2" slot="header">Contact Us</h4>
                    <div class="row">
                        The Emergency Ready App is a product of Clever Coding LLC.  Clever Coding has been creating mobile and web apps since 2008 for clients around the world.  Please contact us today to learn more about a custom branded version of the Emergency Ready App or any other custom app developer needs.
                    </div>
                    <div class="row">
                        <div class="col-md-10 ml-auto mr-auto">{{contactResponseMessage}}</div>
                    </div>
                </card>
                <card header-classes="text-center pt-3" raised style="min-height: 660px;" type="contact" v-else>
                    <h4 class="card-title pt-2" slot="header">Contact Us</h4>
                    <div class="row">
                        The Emergency Ready App is a product of Clever Coding LLC.  Clever Coding has been creating mobile and web apps since 2008 for clients around the world.  Please contact us today to learn more about a custom branded version of the Emergency Ready App or any other custom app development needs.
                    </div>

                    <div class="row">
                        <div class="col-md-6">
                            <info-section icon="now-ui-icons tech_mobile"
                                          type="success">
                                <h5 class="info-title">Contact Info</h5>
                                <p><a href="mailto:contact@clevercoding.com">contact@clevercoding.com</a>
                                    <br> <a href="tel:(801) 901-0231">(801) 901-0231</a>
                                    <br> Mon - Fri, 9:00 am - 5:00 pm
                                </p>
                            </info-section>
                        </div>
                        <div class="col-md-6">
                            <info-section icon="now-ui-icons location_pin"
                                          type="success">
                                <h4 class="info-title">Based in</h4>
                                <p class="description"> Lehi, UT
                                    <br> 84043
                                </p>
                            </info-section>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 pl-2 pr-2">
                            <label>Name</label>
                            <fg-input
                                    addon-left-icon="now-ui-icons users_circle-08"
                                    placeholder="Name..."
                                    v-model="name"
                            >
                            </fg-input>
                        </div>
                        <div class="col-md-6 pl-2 pr-2">
                            <label>Email address</label>
                            <fg-input
                                    addon-left-icon="now-ui-icons ui-1_email-85"
                                    placeholder="Email ..."
                                    v-model="email">
                            </fg-input>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 pl-2 pr-2">
                            <label>Company/Organization</label>
                            <fg-input
                                    addon-left-icon="now-ui-icons business_briefcase-24"
                                    placeholder="Company/Organization Name..."
                                    v-model="company">
                            </fg-input>
                        </div>
                        <div class="col-md-6 pl-2 pr-2">
                            <label>Phone</label>
                            <fg-input
                                    addon-left-icon="now-ui-icons tech_mobile"
                                    placeholder="Phone Here..."
                                    v-model="phone">
                            </fg-input>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12 pl-2 pr-2">
                            <br/>
                            <label>How did you hear about us?</label>
                        </div>
                        <div class="col-md-12 pr-2">
                            <el-select class="select-success"
                                       placeholder="Select Option"
                                       v-model="sourceSelect.value">
                                <el-option :key="option.label"
                                           :label="option.label"
                                           :value="option.value"
                                           class="select-success"
                                           v-for="option in sourceSelect.options">
                                </el-option>
                            </el-select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12 pl-2 pr-2">
                            <br/>
                            <label>Description</label>
                            <textarea class="form-control" cols="80" name="name" placeholder="..."
                                      rows="4"
                                      v-model="summary"></textarea>
                        </div>
                    </div>
                    <div class="row"><br></div>
                    <div class="row">
                        <div class="col-12 right">
<!--                            <vue-recaptcha-->
<!--                                    :loadRecaptchaScript="true"-->
<!--                                    :sitekey="sitekey"-->
<!--                                    @verify="onVerify"-->
<!--                                    ref="invisibleRecaptcha"-->
<!--                                    size="invisible">-->
                                <n-button class="pull-right" round type="success" @click.native="submitForm">Send Message</n-button>
<!--                            </vue-recaptcha>-->
                        </div>
                    </div>

                </card>
            </div>
        </div>
    </div>
    <div class="cd-section" id="contactus" v-else>
        <div class="contactus-1 section-image" style="background-image: url('img/contact1.jpg'); min-height: 660px;">
            <div class="container">
                <div class="row" v-if="isLoading">
                    <div class="col-md-10 ml-auto mr-auto">
                        <card header-classes="text-center" raised type="contact">
                            <h4 class="card-title" slot="header">Contact Us</h4>
                            <div class="row">
                                <div class="col-md-10 ml-auto mr-auto">
                                    <tile :loading="isLoading"></tile>
                                </div>
                            </div>
                        </card>
                    </div>
                </div>
                <div class="row" v-else-if="contactResponseMessage">
                    <div class="col-md-10 ml-auto mr-auto">
                        <card header-classes="text-center" raised style="min-height: 300px;" type="contact">
                            <h4 class="card-title" slot="header">Contact Us</h4>
                            <div class="row">
                                <div class="col-md-10 ml-auto mr-auto">
                                    {{contactResponseMessage}}
                                </div>
                            </div>
                        </card>
                    </div>
                </div>
                <div class="row" style="min-height: 660px;" v-else>
                    <div class="col-md-5">
                        <h2 class="title"></h2>
                        <info-section icon="now-ui-icons location_pin"
                                      type="success">
                            <h4 class="info-title">Contact Info</h4>
                            <p class="description">
                                <br> <a href="mailto:contact@clevercoding.com">contact@clevercoding.com</a>
                                <br> <a href="tel:(801) 901-0231">(801) 901-0231</a>
                                <br> Mon - Fri, 9:00 am - 5:00 pm
                            </p>
                        </info-section>

                        <info-section icon="now-ui-icons tech_mobile"
                                      type="success">
                            <h4 class="info-title">Based in</h4>
                            <p class="description"> Lehi, UT
                                <br> 84043
                            </p>
                        </info-section>
                    </div>
                    <div class="col-md-5 ml-auto mr-auto">
                        <card header-classes="text-center" raised type="contact">
                            <h4 class="card-title" slot="header">Contact Us</h4>


                            <div class="form-group">
                                <label>Name</label>
                                <fg-input addon-left-icon="now-ui-icons users_circle-08"
                                          placeholder="Name..."
                                          v-model="name">
                                </fg-input>
                            </div>
                            <div class="form-group">
                                <label>Email address</label>
                                <fg-input addon-left-icon="now-ui-icons ui-1_email-85"
                                          placeholder="Email ..."
                                          v-model="email">
                                </fg-input>
                            </div>
                            <div class="form-group">
                                <label>Company/Organization</label>
                                <fg-input
                                        addon-left-icon="now-ui-icons business_briefcase-24"
                                        placeholder="Company/Organization Name..."
                                        v-model="company">
                                </fg-input>
                            </div>
                            <div class="form-group">
                                <label>Phone</label>
                                <fg-input
                                        addon-left-icon="now-ui-icons cc-icons cc-icon-mobile-phone"
                                        placeholder="Phone Here..."
                                        v-model="phone">
                                </fg-input>
                            </div>
                            <div class="form-group">
                                <label>How did you hear about us?</label>
                                <el-select class="select-primary"
                                           placeholder="Select Option"
                                           v-model="sourceSelect.value">
                                    <el-option :key="option.label"
                                               :label="option.label"
                                               :value="option.value"
                                               class="select-primary"
                                               v-for="option in sourceSelect.options">
                                    </el-option>
                                </el-select>
                            </div>
                            <div class="form-group">
                                <label>Details</label>
                                <textarea class="form-control" cols="80" name="name" placeholder="..."
                                          rows="4"
                                          v-model="summary"></textarea>

                            </div>
                            <div class="row">
                                <div class="col-12 right" >
<!--                                    <vue-recaptcha-->
<!--                                            :loadRecaptchaScript="true"-->
<!--                                            :sitekey="sitekey"-->
<!--                                            @verify="onVerify"-->
<!--                                            ref="invisibleRecaptcha"-->
<!--                                            size="invisible">-->
                                        <n-button class="pull-right" round type="primary" @click.native="submitForm">Send Message</n-button>
<!--                                    </vue-recaptcha>-->
                                </div>
                            </div>
                        </card>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


    import { API_KEY, SITE_KEY } from '@/constants'
    // import Vue from 'vue'
    // import * as VueGoogleMaps from '~/node_modules/vue2-google-maps'
    import VueRecaptcha from 'vue-recaptcha'
    import CommonAPI from '~/api/CommonAPI'

    // Vue.use(VueGoogleMaps, {
    //     load: {
    //         key: API_KEY
    //     }
    // })
    export default {
        name: 'contact-us',
        props: {
            withMap: {
                type: Boolean,
                default: true
            }
        },
        components: {
            VueRecaptcha
        },
        data() {
            return {
                sitekey: SITE_KEY,
                name: '',
                email: '',
                company: '',
                phone: '',
                typeProject: '',
                summary: '',
                sourceSelect: {
                    value: 'Select ...',
                    options: [
                        {
                            value: 'Referral',
                            label: 'Referral'
                        },
                        {
                            value: 'Search Engine',
                            label: 'Search Engine'
                        },
                        {
                            value: 'Google Ad',
                            label: 'Google Ad'
                        },
                        {
                            value: 'Billboard',
                            label: 'Billboard'
                        },
                        {
                            value: 'Facebook',
                            label: 'Facebook'
                        },
                        {
                            value: 'LinkedIn',
                            label: 'LinkedIn'
                        },
                        {
                            value: 'Twitter',
                            label: 'Twitter'
                        },
                        {
                            value: 'Instagram',
                            label: 'Instagram'
                        },
                        {
                            value: 'Other',
                            label: 'Other'
                        }

                    ]
                },
                center: {
                    lat: 40.414950,
                    lng: -112.323795
                },
                options: {
                    styles: [{
                        'featureType': 'water',
                        'elementType': 'geometry',
                        'stylers': [{
                            'color': '#e9e9e9'
                        }, {
                            'lightness': 17
                        }]
                    }, {
                        'featureType': 'landscape',
                        'elementType': 'geometry',
                        'stylers': [{
                            'color': '#f5f5f5'
                        }, {
                            'lightness': 20
                        }]
                    }, {
                        'featureType': 'road.highway',
                        'elementType': 'geometry.fill',
                        'stylers': [{
                            'color': '#ffffff'
                        }, {
                            'lightness': 17
                        }]
                    }, {
                        'featureType': 'road.highway',
                        'elementType': 'geometry.stroke',
                        'stylers': [{
                            'color': '#ffffff'
                        }, {
                            'lightness': 29
                        }, {
                            'weight': 0.2
                        }]
                    }, {
                        'featureType': 'road.arterial',
                        'elementType': 'geometry',
                        'stylers': [{
                            'color': '#ffffff'
                        }, {
                            'lightness': 18
                        }]
                    }, {
                        'featureType': 'road.local',
                        'elementType': 'geometry',
                        'stylers': [{
                            'color': '#ffffff'
                        }, {
                            'lightness': 16
                        }]
                    }, {
                        'featureType': 'poi',
                        'elementType': 'geometry',
                        'stylers': [{
                            'color': '#f5f5f5'
                        }, {
                            'lightness': 21
                        }]
                    }, {
                        'featureType': 'poi.park',
                        'elementType': 'geometry',
                        'stylers': [{
                            'color': '#dedede'
                        }, {
                            'lightness': 21
                        }]
                    }, {
                        'elementType': 'labels.text.stroke',
                        'stylers': [{
                            'visibility': 'on'
                        }, {
                            'color': '#ffffff'
                        }, {
                            'lightness': 16
                        }]
                    }, {
                        'elementType': 'labels.text.fill',
                        'stylers': [{
                            'saturation': 36
                        }, {
                            'color': '#333333'
                        }, {
                            'lightness': 40
                        }]
                    }, {
                        'elementType': 'labels.icon',
                        'stylers': [{
                            'visibility': 'off'
                        }]
                    }, {
                        'featureType': 'transit',
                        'elementType': 'geometry',
                        'stylers': [{
                            'color': '#f2f2f2'
                        }, {
                            'lightness': 19
                        }]
                    }, {
                        'featureType': 'administrative',
                        'elementType': 'geometry.fill',
                        'stylers': [{
                            'color': '#fefefe'
                        }, {
                            'lightness': 20
                        }]
                    }, {
                        'featureType': 'administrative',
                        'elementType': 'geometry.stroke',
                        'stylers': [{
                            'color': '#fefefe'
                        }, {
                            'lightness': 17
                        }, {
                            'weight': 1.2
                        }]
                    }]

                },
                isLoading: false,
                contactResponseMessage: null
            }
        },
        methods: {
            submitForm() {
              console.log("submit form");
                this.$gtag('event', 'contact_form_submitted');
                this.$gtag('event', 'conversion', {'send_to': 'AW-1039818342/-euOCPnN3sIBEOa86e8D'});


                console.log('Submit Form')

                var formData = {
                    name: this.name,
                    email: this.email,
                    phone: this.phone,
                    company: this.company,
                    summary: this.summary,
                    source: this.sourceSelect.value,
                    lead_type: 'ER Contact Form',
                    first_contact_type: 'ER Contact Form',
                    lead_status: 'New',
                    source_site: 'emergencyreadyapp.com',
                    page_url: this.pageUrl,
                     pages_viewed: [],
                    campaign: '',
                    file_url: '',
                    file_name: ''
                }

                this.isLoading = true
                CommonAPI.sendContactUsForm(formData)
                    .then(response => {
                        if (response.status >= 200 && response.status < 300) {
                            this.contactResponseMessage = 'Thank you for contacting us.  Someone will reach out to you in the next couple of business days..'
                        } else {
                            this.contactResponseMessage = 'There was an error.  Please try again later.'
                        }
                        this.isLoading = false
                    })
                    .catch((error) => {
                        this.contactResponseMessage = 'There was an error.  Please try again later.'
                        this.isLoading = false
                    })
            },
            onVerify(response) {
                console.log(response)
                this.submitForm()
            }
        },
        computed: {},
        mounted() {

        },
        created() {

          this.pageUrl = this.$route.path;
        }
    }
</script>
<style>
    .grecaptcha-badge { opacity:0;}
</style>
