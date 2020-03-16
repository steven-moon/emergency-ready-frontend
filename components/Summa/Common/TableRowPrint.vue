<template>
	<div class="table-row">
		<div class="cell">
			<div class="row__entry">
				<h6>{{data.name}}</h6>
			</div>
		</div>

		<div class="cell">
			<div class="row__entry">
				{{data.role}}
			</div>
		</div>

		<div class="cell">
			<div class="row__entry">
				{{data.email}}
			</div>
		</div>

		<div class="cell cell--with-actions cell--flex">
			<div class="row__entry">
				{{data.phone}}
			</div>

			<div class="row__actions">
				<div class="popup-holder">
					<button type="button" class="btn-modal hidden-xs" @click="data.showModal = true">
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

					<popup-actions
						:class="{'popup-actions--left': true}"
						v-if="data.showModal"
						@close="data.showModal = false"
					>
						<template slot="close">
							<span class="overlay-close" @click="data.showModal = false"></span>
						</template>

						<template slot="actions">
							<div class="actions">
								<ul>
									<li>
										<button class="btn btn--with-icon btn--edit btn--medium" @click="data.edit = true">
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
										<button class="btn btn--with-icon btn--remove btn--medium" @click.prevent="removeEmit">
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
    import PopupActions from '~/components/Summa/Common/PopupActions.vue';

    export default {
		props: ["data", "addNewData"],
		name: 'TableRowPrint',
		components: {
			PopupActions
		},

		data () {
			return {

			}
		},
		methods: {
			removeEmit() {
				this.$emit("removeRowItemEmited", this.data.id);
			}
		}
	}
</script>
