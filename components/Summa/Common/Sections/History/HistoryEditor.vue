<template>
   <div class="history__field">
      <div class="row">
         <div class="col-6">
            <field
               @input="updateDate"
               is-datepicker
               label="Date"
               placeholder="09/03/2018"
               v-model="history.history_date"
            />
         </div>
         <div class="col-6">
            <field
               :options="historyTypes"
               @select="updateHistoryType"
               id="field-history-type"
               is-select
               label="History Type"
               placeholder="Select History Type"
               selectLabel="name"
               v-model="history.history_type_object"
               withAsterisk
            />
         </div>
      </div>
      <div class="row">
         <div class="col-12">
            <div class="quill-editor"
                 :content="history.note"
                 @change="onEditorChange($event)"
                 v-quill:myQuillEditor="editorOptions">
            </div>
         </div>
      </div>
   </div><!-- /.history__field -->
</template>

<script>

   import Field from '~/components/Summa/Common/Field';
   import {mapGetters} from "vuex";
   import moment from "moment";

	export default {
		props: ['historyProp','source'],
      components: {
         Field
      },
		data() {
			return {
            history: {
               historyDate: null,
               formatted_date: null,
               history_date: moment(),
               history_type: null,
               history_type_object: {uuid: "none", name: ""},
               history_type_id: null,
               note: ""
            },
				editorOptions: {
					theme: 'snow',
					modules: {
						toolbar: [
							['bold', 'italic', 'underline', 'strike'],
							['blockquote', 'code-block'],
							[{ 'header': 1 }, { 'header': 2 }],
							[{ 'list': 'ordered' }, { 'list': 'bullet' }],
							['link', 'image'],
						]
				   }
				}
			}
		},

      computed: {
         ...mapGetters(['user']),
         ...mapGetters('leadstore', {leadHistoryTypes: 'historyTypes',}),
         ...mapGetters('bugstore', {bugHistoryTypes: 'historyTypes',}),
         ...mapGetters('companystore', {companyHistoryTypes: 'historyTypes',}),
         ...mapGetters('taskstore', {taskHistoryTypes: 'historyTypes',}),
         ...mapGetters('personstore', {personHistoryTypes: 'historyTypes',}),
         ...mapGetters('projectstore', {projectHistoryTypes: 'historyTypes',}),
         historyTypes(){
            if (this.source === 'lead') {
               return this.leadHistoryTypes;
            } else if (this.source === 'bug') {
               return this.bugHistoryTypes;
            } else if (this.source === 'client' || this.source === 'company') {
               return this.companyHistoryTypes;
            } else if (this.source === 'task') {
               return this.taskHistoryTypes;
            } else if (this.source === 'person') {
               return this.personHistoryTypes;
            } else if (this.source === 'project') {
               return this.projectHistoryTypes;
            }else{
               return [];
            }
         }
      },
		methods: {
		   updateDate(value) {
            console.log("updateDate:");
            console.log(value);
            this.history.formatted_date = this.formatDate(value);
            this.$emit('changeHistory', this.history);
         },
         updateHistoryType(value) {
            console.log("updateHistoryType: ");
            console.log(value);
            this.history.history_type_id = value.uuid;
            this.history.history_type_object = value;
            this.$emit('changeHistory', this.history);
         },
			onEditorChange({ editor, html, text }) {
				this.history.note = html;

				this.$emit('changeHistory', this.history);
			},
         formatDate(value) {
            if(value) {
               return moment(value).format('MM/DD/YYYY hh:mm:ss');
            }else{
               return moment().format('MM/DD/YYYY hh:mm:ss');
            }
         }
		},
      mounted() {
		   if(this.historyProp && this.historyProp.uuid.length > 0) {
            this.history = this.historyProp;
            this.history.history_type_object = this.historyProp.history_type;
            this.history.formatted_date = this.formatDate(this.history_date);
         }else{
            this.history.formatted_date = this.formatDate();
         }
		   console.log("HistoryEditor: Mounted");
		   console.log(this.history);
      }
   }
</script>
