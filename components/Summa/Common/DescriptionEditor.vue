<template>
   <div class="quill-editor-container">
      <h6>Description</h6>
      <div class="quill-editor"
         :content="description"
         @change="onEditorChange($event)"
         v-quill:myQuillEditor="editorOptions">
      </div>
   </div>
</template>

<script>
	export default {
		props: ['descriptionProp'],

		data() {
			return {
				description: '',
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

		methods: {
			onEditorChange({ editor, html, text }) {
				this.description = html;

				this.$emit('changeDescription', this.description);
			}
		},
      mounted() {
		   this.description = this.descriptionProp;
      }
   }
</script>
