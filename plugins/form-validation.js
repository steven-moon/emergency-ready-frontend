 export default {
	/**
	 * The dynamic properties of the component
	 *
	 * @type {Object}
	 */
	computed: {
		fieldError() {
			return (array) => this.query(array).$error;
		},

		requiredField() {
			return (array) => this.query(array).$dirty && !this.query(array).required
		},

		fieldParams(array) {
			return (array) => this.query(array).$params.required;
		},

		query() {
			return (array) => {
				let query = this.$v.form;

				for (let i = 0; i < array.length; i++) {
					query = query[array[i]];
				}

				return query;
			}
		}
	}
}
