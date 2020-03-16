<template>
	<div class='table-row'>
		<div class="cell cell--size1" @click.prevent="edit">

			<Avatar theclass='' thestyle="border:1px solid #000;border-radius:3px;width:50px;height:50px;" :user="user"/>

		</div>

		<div class="cell cell--size2" @click.prevent="edit">
			<div class="user-entry">{{user.name}}</div>
		</div>

      <div class="cell cell--size2 cell--1of3" @click.prevent="edit">
         <div class="user-entry">{{user.email}}</div>
      </div>

		<div class="cell cell--size2 cell--1of4" @click.prevent="edit">
			<div class="user-entry">{{user.role}}</div>
		</div>

		<div class="cell cell--size2" @click.prevent="edit">
			<div class="user-entry">{{user.phone}}</div>
		</div>


		<div class="cell cell--size7 cell--flex">
			<div class="row-entry"></div>
			<div class="row__actions" @click.stop>
				<div class="popup-holder">
					<button type="button" class="btn-modal hidden-xs" @click.prevent="showModal = true">
						<i>
							<svg width="29" height="7" viewBox="0 0 29 7" xmlns="http://www.w3.org/2000/svg">
								<g transform="rotate(90 14.5 15)" fill="#1D6383" fill-rule="nonzero">
									<circle cx="3" cy="26" r="3"/>
									<circle cx="3" cy="14.656" r="3"/>
									<circle cx="3" cy="3.656" r="3"/>
								</g>
							</svg>
						</i>
					</button>

					<a class="btn-edit-small visible-xs-block" @click.prevent="edit">
						<i>
							<svg width="11" height="11" viewBox="0 0 11 11" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
								<path d="M0 7.126v1.875h1.974l5.82-5.53-1.973-1.875L0 7.126zm9.321-5.105a.48.48 0 0 0 0-.705L8.09.146a.544.544 0 0 0-.742 0l-.963.915 1.974 1.875.963-.915z" stroke="#1D6383" fill="none" fill-rule="evenodd"/>
							</svg>
						</i>
					</a>

					<popup-actions class='popup-actions--left' v-if="showModal" @close="showModal = false">
						<template slot="close">
                     <span class="overlay-close" @click="showModal = false"/>
						</template>

						<template slot="actions">
							<div class="actions">
								<ul>
									<li>
										<button class="btn btn--with-icon btn--edit btn--medium" @click.prevent="edit">
											<i class="ico-pen">
												<svg width="16" height="17" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
													<g fill="#1D6283" fill-rule="evenodd">
														<path d="M0 14.067v3.43h3.333l9.83-10.118L9.83 3.948 0 14.067zm15.74-9.342a.93.93 0 0 0 0-1.29l-2.08-2.14a.867.867 0 0 0-1.253 0l-1.626 1.674 3.333 3.43 1.626-1.674z"/>
													</g>
												</svg>
											</i>

											<span class="text">Edit</span>
										</button>
									</li>

									<li>
										<button class="btn btn--with-icon btn--remove btn--medium" @click.prevent="remove">
											<i class="ico-close-red">
												<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
													<path d="M16 1.611L14.389 0 8 6.389 1.611 0 0 1.611 6.389 8 0 14.389 1.611 16 8 9.611 14.389 16 16 14.389 9.611 8z" fill="#F03E41" fill-rule="evenodd"/>
												</svg>
											</i>

											<span class="text">Delete</span>
										</button>
									</li>
								</ul>
							</div>
						</template>
					</popup-actions>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapGetters, mapActions } from "vuex";
	import moment from 'moment';
	import PopupActions from '~/components/Summa/Common/PopupActions.vue';
   import Avatar from '~/components/Summa/Common/Avatar';

	export default {
		props: ['user'],
		name: 'UserTable',
		components: {
			PopupActions,
         Avatar
		},
		data () {
			return {
            showModal: false
			}
		},
		computed: {
			...mapGetters({
				persons: 'getPersonList',
				projects: 'getProjectList',
				sidebar: 'getSidebarState',
				editedUserIndex: 'getEditedUserIndex'
			}),

			formatDate(date) {
				return date;
			}
		},
		methods: {

			edit() {
            window.location.href = '/admin/users/user?action=edit&id=' + this.user.uuid;
			},
			remove() {
			},

		},

	}
</script>
