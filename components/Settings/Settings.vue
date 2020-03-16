<template>
	<div>
		<section class="section-default section-profile">
			<div class="shell">
				<div class="section__inner">
					<div class="section__title">
						<h5>Settings Page</h5>
					</div>

					<div class="section__group">
						<div>
							<a href="/admin/default-values">Default Values</a>
						</div>

						<div>
							<a href="/admin/">Admin</a>
						</div>

                  <div>
                     <a href="/settings/profile">Profile</a>
                  </div>
					</div>
					<div class="section__group ">
						<h5>Settings</h5>

						<div class="row">
							<div class="col-10">
								<image src="#" alt="Profile Image" class="rounded col-2"></image>
								<div class="col-10">
									<p>Name</p>
									<p>Role</p>
								</div>
							</div>
							<div class="col-2">
								<button class="btn btn--only-icon">
									<i class="ico-pen">
										<svg width="16" height="17" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
											<g fill="#1D6283" fill-rule="evenodd">
												<path d="M0 14.067v3.43h3.333l9.83-10.118L9.83 3.948 0 14.067zm15.74-9.342a.93.93 0 0 0 0-1.29l-2.08-2.14a.867.867 0 0 0-1.253 0l-1.626 1.674 3.333 3.43 1.626-1.674z"/>
											</g>
										</svg>
									</i>
								</button>
							</div>
						</div>
					</div>
					<div class="section__group">
						<h5></h5>
						<div class="settings_bottom">
							<button class="form__btn__red form__btn--with-icon">
								<i class="ico-close-red">
									<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
										<path d="M16 1.611L14.389 0 8 6.389 1.611 0 0 1.611 6.389 8 0 14.389 1.611 16 8 9.611 14.389 16 16 14.389 9.611 8z" fill="#F03E41" fill-rule="evenodd"/>
									</svg>
								</i> Log Out
							</button>
						</div>
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

    import {validationMixin} from 'vuelidate';
    import JQuery from 'jquery';
    import {mapGetters} from 'vuex';
    /**
     * @ The internal dependecies.
     */
    import formValidationMixin from '~/plugins/form-validation';
    import Field from '~/components/Summa/Common/Field';

    let $ = JQuery;


    export default {
        name: 'Settings',
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
        data () {
            return {}
        },

        computed: {
        },
        methods: {
        },
        mounted() {
        },
        created() {
        },
		beforeCreate() {
		},
    }
</script>
