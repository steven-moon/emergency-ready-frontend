<template>
    <div class="tabs-container">
        <div class="content-wrap hide-nav-on-mobile">
<!--			<div class="nav-wrapper">-->
<!--				<ul class="nav">-->
<!--					<li>-->
<!--						<a href="/users/1/">Clever Coding</a>-->
<!--					</li>-->

<!--					<li>-->
<!--						<a href="/users/2/">Summa Coding</a>-->
<!--					</li>-->

<!--					<li>-->
<!--						<a href="/users/3/">Company Three</a>-->
<!--					</li>-->
<!--				</ul>&lt;!&ndash; /.nav &ndash;&gt;-->
<!--			</div>&lt;!&ndash; /.nav-wrapper &ndash;&gt;-->

			<section class="section section-users section-users--users" v-if="showUsersEdit === false">
				<div class="section__content">
					<div class="page__head" v-if="$mq === 'mobile'">
						<h3>Users</h3>
					</div>

					<div class="table-base table-base--users">
						<div class="table__head">
							<div class="table-row">
                        <div class="cell cell--size1"></div>

								<div class="cell cell--size2">
									<span>Name</span>
								</div>

                <div class="cell cell--size2 cell--1of3">
                   <span>Email</span>
                </div>

								<div class="cell cell--size2 cell--1of4">
									<span>Role</span>
								</div>

								<div class="cell cell--size2">
									<span>Phone</span>
								</div>


                        <div class="cell cell--size7 cell--flex"></div>
							</div>
						</div>

						<div class="table__body">
							<paginate name="users" :container="this" :list="users"
                               class="users-list" :per="pageSize">
                        <table-row-users v-for="user in paginated('users')" :key="user.uuid" :user="user"
                                         @clicked="handleEditModalOpen" @editToggle="handleEditMode"/>
							</paginate>
						</div>
					</div>
				</div>
			</section>
		</div>  <!-- /.content-wrap -->
    </div>
</template>

<script>
    /**
     * @ The external dependecies.
     */

    import {validationMixin} from 'vuelidate';
    import JQuery from 'jquery';
    import {mapGetters} from "vuex";
    /**
     * @ The internal dependecies.
     */
    import formValidationMixin from '~/plugins/form-validation';
    import Field from '~/components/Summa/Common/Field';
    import TableRowUsers from '~/components/Admin/TableRowUsers.vue';

    let $ = JQuery;


    export default {
        name: 'Users',
        mixins: [
            validationMixin,
            formValidationMixin
        ],
        components: {
            Field,
            TableRowUsers,
        },
        // validations: {
        //     form: {
        //         reportData: {
        //             name: { required },
        //             company_type: { required }
        //         }
        //     }
        // },
        data () {
            return {
                date: null,
				pageSize: 4,
				currentPage: 1,
				paginate: ['users'],
				showUsersEditModal: false,
				showUsersEdit: false,
				// users: [
            //         {
            //             uuid: 1,
            //             name: 'Matt Ivie',
            //             role: "Web Developer",
            //             phone_number: "218-966-2766",
            //             email: "matt@clevercoding.com"
            //         }
            //     ]
            //
            }
        },

       computed: {
          ...mapGetters({
             users: 'appUsers',
          }),
       },
        methods: {
            handleEditModalOpen(){
				   this.showUsersEditModal = !this.showUsersEditModal
            },
            handleEditMode() {
				   this.showUsersEdit = true
			   },
           editUser(uuid){
              window.location.href = '/admin/users/user?action=edit&id=' + uuid;
           }
        },
		mounted() {
		},
		created() {
		},
		beforeCreate() {
		},
    }
</script>
