<template>
	<div class="comment__field">
		<div class="quill-editor"
			:content="comment"
			@change="onEditorChange($event)"
			v-quill:myQuillEditor="editorOptions">
		</div>
	</div><!-- /.comment__field -->
</template>

<script>
	export default {
		props: ['commentProp'],

		data() {
			return {
				comment: '',
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
				this.comment = html;

				this.$emit('changeComment', this.comment);
			}
		},
      mounted() {
		   this.comment = this.commentProp;
      }
   }
</script>
