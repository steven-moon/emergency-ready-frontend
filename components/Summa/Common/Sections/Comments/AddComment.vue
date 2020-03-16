<template>
   <div class="comment-add">
      <div v-if="isLoading === true">
         <tile :loading="isLoading"/>
      </div>
      <form v-else>
         <div class="comment__body">
            <div class="comment__author">
               <Avatar :user="user"/>
            </div><!-- /.comment__author -->

            <comment-editor @changeComment="newComment => comment = newComment" />
         </div><!-- /.comment__body -->

         <div class="comment__actions">
            <button @click.prevent="addComment" class="btn btn-task-form">
               <i>
                  <svg height="14" viewBox="0 0 14 14" width="14" xmlns="http://www.w3.org/2000/svg">
                     <path
                        d="M8.4 8.4v4.599A1 1 0 0 1 7.405 14h-.81a.993.993 0 0 1-.995-1.001V8.4H1.001A1 1 0 0 1 0 7.405v-.81c0-.55.44-.995 1.001-.995H5.6V1.001A1 1 0 0 1 6.595 0h.81c.55 0 .995.44.995 1.001V5.6h4.599A1 1 0 0 1 14 6.595v.81c0 .55-.44.995-1.001.995H8.4z"
                        fill="#1D6383" fill-rule="evenodd"/>
                  </svg>
               </i>

               Add Comment
            </button>
         </div><!-- /.comment__actions -->
      </form>
   </div><!-- /.comment-add -->
</template>


<script>
   import {mapGetters} from "vuex";
   import clonedeep from 'lodash.clonedeep';

   import Avatar from '~/components/Summa/Common/Avatar';
   import CommentsAPI from '~/api/CommentsAPI';
   import CommentEditor from '~/components/Summa/Common/Sections/Comments/CommentEditor';

   export default {

      name: 'AddComment',
      props: ['source','parentUUID'],
      components: {
         Avatar,
         CommentEditor
      },
      data() {
         return {
            comment: "",
            isLoading: false,
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
         ...mapGetters(['user'])
      },
      methods: {
         addComment(source) {
            this.isLoading = true;
            let data = {
               'parent_id': this.parentUUID,
               'comment': this.comment
            };
            CommentsAPI.addComment(this.$store, this.source, data)
               .then(response => {
                  console.log(response);
                  if (response.status === 'success') {
                     if(response.data) {
                        this.$store.commit(this.source + 'store/setComments', clonedeep(response.data));
                        this.comment = '';
                     }else{
                        console.log("Response Data Not Set in AddComment")
                     }
                  }
                  this.isLoading = false;
               })
               .catch((error) => {
                  console.log("error in AddComment" + error);
                  this.isLoading = false;
               });
         },

         onEditorChange({ editor, html, text }) {
            this.comment = html;
         }
      }
   }
</script>
