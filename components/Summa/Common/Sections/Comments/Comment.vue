<template>
    <div class="comment">
        <div class="comment__head">
            <div class="comment__author">
                <Avatar :user="item.user"/>
            </div><!-- /.comment__author -->

            <span class="comment__date">{{item.formatted_date}}</span><!-- /.comment__date -->

            <a @click.prevent="edit = true" class="btn-edit-small" v-if="!edit && user && item.user_id === user.uuid">
                <i>
                    <svg height="11" viewBox="0 0 11 11" width="11" xmlns="http://www.w3.org/2000/svg"
                         xmlns:xlink="http://www.w3.org/1999/xlink">
                        <path
                                d="M0 7.126v1.875h1.974l5.82-5.53-1.973-1.875L0 7.126zm9.321-5.105a.48.48 0 0 0 0-.705L8.09.146a.544.544 0 0 0-.742 0l-.963.915 1.974 1.875.963-.915z"
                                fill="none" fill-rule="evenodd" stroke="#1D6383"/>
                    </svg>
                </i>
            </a>

            <a @click.prevent="deleteComment(item)" class="btn-delete-small" v-if="!edit && user && item.user_id === user.uuid">
                <i>
                    <svg height="12" viewBox="0 0 16 16" width="12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 1.611L14.389 0 8 6.389 1.611 0 0 1.611 6.389 8 0 14.389 1.611 16 8 9.611 14.389 16 16 14.389 9.611 8z" fill="#F03E41" fill-rule="evenodd"></path>
                    </svg>
                </i>
            </a>
        </div><!-- /.comment__head -->

        <div class="comment__body">
            <div class="comment__entry" v-html="comment" v-if="!edit">
            </div><!-- /.comment__entry -->

            <div class="comment__edit" v-if="edit">
                <comment-editor :commentProp="comment" @changeComment="newComment => comment = newComment"/>

                <div class="comment__actions">
                    <button @click.prevent="saveComment" class="btn btn-task-form">
                        Save Comment
                    </button>
                </div>
            </div>
        </div><!-- /.comment__body -->
    </div><!-- /.comment -->
</template>

<script>
    import {mapGetters} from "vuex";

    import Avatar from '~/components/Summa/Common/Avatar';
    import CommentsAPI from '~/api/CommentsAPI';
    import CommentEditor from '~/components/Summa/Common/Sections/Comments/CommentEditor';

    export default {
        name: 'Comment',
        props: ['source', 'item'],
        components: {
            Avatar,
            CommentEditor
        },
        data: () => ({
            edit: false,
            comment: '',
        }),
        computed: {
            ...mapGetters({
                user: 'user',
            })
        },
        methods: {
            saveComment() {
                const data = {
                    'comment_id': this.item.uuid,
                    'comment': this.comment
                };
                CommentsAPI.updateComment(this.$store, this.source, data, this.item.uuid);

                this.edit = false;
            },

            deleteComment(comment) {
                if (confirm('Are you sure you want to delete this item?')) {
                    CommentsAPI.deleteComment(this.$store, this.source, this.item.uuid);
                }
            }
        },
        mounted() {
            this.comment = this.item.comment;
        }
    }
</script>
