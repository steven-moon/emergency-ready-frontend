<template>
	<div>
		<!-- New Row Form -->
		<table-row-form v-if="showEmptyRow" :addNewData="true" :data="this.newData" @addNew="this.addRowItem"/>

		<!-- Current data  -->
		<template v-for="(rowItem, i) in this.data">
			<template v-if="rowItem.edit === false">
				<table-row-print :key="rowItem + i" :data="rowItem" :addNewData="false" @removeRowItemEmited="removeRowItem"></table-row-print>
			</template>

			<template v-else>
				<table-row-form :key="rowItem + i" :index="i" :itemsCount="getRowsNumber" :data="rowItem" :addNewData="false" @cancelEmited="cancelToggle" ></table-row-form>
			</template>
		</template>
	</div>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    import TableRowForm from '~/components/Common/TableRowForm.vue'
    import TableRowPrint from '~/components/Common/TableRowPrint.vue'

    export default {
		props: ["data", "itemId", "dataCategory", "showEmptyRow"],
		components: {
			TableRowForm,
			TableRowPrint
		},
		name: 'TableData',
		data () {
			return {
				newData: {
					id: '',
					name: '',
					role: '',
					email: '',
					phone: '',
					edit: false,
					showModal: false
				}
			}
		},
		computed: {
			...mapGetters({
				leads: 'getLeads',
				persons: 'getPersonList',
				projects: 'getProjectList',
				editedLeadIndex: 'getEditedLeadIndex'
			}),
			getRowsNumber() {
				return this.data.length
			}
		},
		methods: {
			...mapActions([
				'updateObject',
				'addObject',
				"removeObject"
			]),
			cancelToggle(dataOrigin) {
				dataOrigin = {
					...dataOrigin,
					edit: false,
					showModal: false
				}

 				this.updateObject({
 					selector: `${this.dataCategory}`,
 					item: dataOrigin
 				});
			},
			removeRowItem(id) {
				this.removeObject({
					selector: `${this.dataCategory}`,
					id: id
				})
			},
			addRowItem() {
				this.newData = {
					...this.newData,
					id: `${this.dataCategory}${Date.now()}`,
					itemId: this.itemId
				}

				this.addObject({
					selector: `${this.dataCategory}`,
					item: this.newData,
				});

				this.newData = {
					id: '',
					name: '',
					role: '',
					email: '',
					phone: '',
					edit: false,
					showModal: false
				}
			}
		}
	}
</script>
