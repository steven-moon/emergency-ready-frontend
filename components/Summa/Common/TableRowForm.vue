<template>
	<div class="table-row">
		<div class="cell">
			<field
				class="field-wrapper--small"
				placeholder="Person"
				id="field-person"
				:is-invalid="fieldError(['name'])"
				:is-required="requiredField(['name'])"
				v-model.trim="$v.form.name.$model"
			/>
		</div>

		<div class="cell">
			<field
				class="field-wrapper--small"
				is-select
				placeholder="Role"
				id="field-role"
				:is-invalid="fieldError(['role'])"
				:is-required="requiredField(['role'])"
				v-model.trim="$v.form.role.$model"
				:options="[
					'CEO',
					'VP of Engineering',
					'Project Manager'
				]"
			/>
		</div>

		<div class="cell">
			<field
				class="field-wrapper--small"
				placeholder="Email"
				id="field-email"
				:is-invalid="fieldError(['email'])"
				:is-required="requiredField(['email'])"
				v-model.trim="$v.form.email.$model"
			/>
		</div>

		<div class="cell cell--with-actions cell--flex">
			<field
				class="field-wrapper--small"
				placeholder="Phone"
				id="field-phone"
				:is-invalid="fieldError(['phone'])"
				:is-required="requiredField(['phone'])"
				v-model.trim="$v.form.phone.$model"
			/>

			<div class="row__actions">
				<button v-if="addNewData === true" type="button" class="btn btn--only-icon btn--only-icon-small btn--add-small" @click.prevent="addData">
					<i class="ico-plus">
						<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path d="M22.558 13.756h-8.8v8.8h-4.4v-8.8h-8.8v-4.4h8.8v-8.8h4.4v8.8h8.8z" fill="#1D6383"/>
						</svg>
					</i>
				</button>

				<button v-if="addNewData === false" type="button" class="btn btn--only-icon btn--only-icon-small btn--save-small" @click.prevent="save">
					<i class="ico-save">
						<svg width="25" height="25" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
							<path d="M22.222 0H2.764C1.222 0 .014 1.25.014 2.778L0 22.222A2.765 2.765 0 0 0 2.764 25h19.458A2.786 2.786 0 0 0 25 22.222V2.778A2.786 2.786 0 0 0 22.222 0zm0 16.667h-5.555a4.17 4.17 0 0 1-4.167 4.166 4.17 4.17 0 0 1-4.167-4.166h-5.57V2.777h19.46v13.89zm-4.166-6.945h-2.778V5.556H9.722v4.166H6.944l5.556 5.556 5.556-5.556z" fill="#1D6383"/>
						</svg>
					</i>
				</button>

				<button v-if="addNewData === false" type="button" class="btn btn--only-icon btn--only-icon-small btn--cancel-small" @click.prevent="cancelEmit">
					<i class="ico-cancel">
						<svg width="25" height="24" viewBox="0 0 24 25" xmlns="http://www.w3.org/2000/svg">
							<path d="M25 2.417L22.482 0 12.5 9.583 2.518 0 0 2.417 9.982 12 0 21.583 2.518 24l9.982-9.583L22.482 24 25 21.583 15.018 12z" fill="#1D6383"/>
						</svg>
					</i>
				</button>
			</div>
		</div>
	</div>
</template>

<script>
    import {validationMixin} from 'vuelidate';
    import {email, numeric, required} from 'vuelidate/lib/validators';

    import formValidationMixin from '~/plugins/form-validation';
    import Field from '~/components/Summa/Common/Field';

    export default {
		props: ["data", "addNewData", "index", "itemsCount"],
		name: 'TableRowForm',
		components: {
			Field
		},
		mixins: [
			validationMixin,
			formValidationMixin
		],
		validations: {
			form: {
				name: { required },
				role: { required },
				email: { required, email },
				phone: { required, numeric }
			}
		},
		data () {
			return {
				form: {}
			}
		},
		created() {
			this.form = this.data;
			this.cachedUser = Object.assign({}, this.data);
		},
		computed: {
			dropdownPlacement() {
				return this.itemsCount - this.index <= 3 // last 3 items
			}
		},
		methods: {
			save() {
				this.data.edit = false;
				this.data.showModal = false;
			},
			addData() {
				this.$v.$touch();

				if ( this.$v.$invalid ) return;

				this.$emit("addNew");

				this.form = this.cachedUser;
				this.$v.$reset();
			},
			cancelEmit() {
				this.$emit("cancelEmited", this.cachedUser);
			}
		}
	}
</script>
