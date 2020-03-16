<template>
	<header :class="{header: true, disabled: !this.$store.getters.isUserLoggedIn}">
		<a href="#" @click.prevent="toggleMenu" class="logo"
			:class="{
				'logo--collapsed': isSidebarCollapsed
			}"
		>
			<i>
				<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
					<g fill="#1D6383" fill-rule="evenodd">
						<path d="M26.242 0H13.758C9.797 0 7.816 0 5.683.674a8.382 8.382 0 0 0-5.009 5.01C0 7.814 0 9.795 0 13.757v12.484c0 3.961 0 5.942.674 8.074a8.381 8.381 0 0 0 5.01 5.01C7.815 40 9.796 40 13.757 40h12.484c3.961 0 5.943 0 8.075-.674a8.38 8.38 0 0 0 5.01-5.01C40 32.184 40 30.203 40 26.242V13.758c0-3.962 0-5.943-.674-8.075a8.381 8.381 0 0 0-5.01-5.009C32.186 0 30.204 0 26.243 0m0 2.694c3.753 0 5.489 0 7.205.53a5.673 5.673 0 0 1 3.328 3.329c.531 1.716.531 3.451.531 7.205v12.484c0 3.753 0 5.489-.53 7.205a5.675 5.675 0 0 1-3.329 3.328c-1.716.531-3.452.531-7.205.531H13.758c-3.753 0-5.488 0-7.205-.53a5.676 5.676 0 0 1-3.328-3.329c-.531-1.716-.531-3.452-.531-7.205V13.758c0-3.754 0-5.489.53-7.205a5.673 5.673 0 0 1 3.329-3.328c1.717-.531 3.452-.531 7.205-.531h12.484"/>
						<path d="M8.21 17.041c.135.098.336.217.605.358.27.14.603.281 1 .421.397.141.85.26 1.356.358.507.098 1.06.146 1.66.146 1.063 0 1.824-.156 2.282-.467.459-.312.688-.754.688-1.329 0-.28-.052-.52-.156-.715a1.439 1.439 0 0 0-.459-.504 2.571 2.571 0 0 0-.733-.34 8.3 8.3 0 0 0-.98-.22l-2.018-.366a8.563 8.563 0 0 1-1.484-.385 4.642 4.642 0 0 1-1.266-.678 3.199 3.199 0 0 1-.88-1.036c-.22-.41-.33-.902-.33-1.476 0-.514.095-1.002.285-1.467.189-.464.492-.868.907-1.21.416-.342.941-.614 1.577-.816.635-.202 1.405-.302 2.31-.302.66 0 1.234.036 1.723.11.49.073.905.161 1.247.266.342.104.617.21.825.32.208.11.36.196.459.257.195.134.354.281.476.44a.878.878 0 0 1 .184.55c0 .281-.086.54-.257.78-.171.238-.33.406-.477.503a2.634 2.634 0 0 0-.522-.412 4.944 4.944 0 0 0-.88-.43 7.972 7.972 0 0 0-1.22-.35 7.387 7.387 0 0 0-1.521-.146c-.55 0-1.012.043-1.385.128-.372.086-.669.205-.889.358-.22.153-.379.336-.477.55a1.727 1.727 0 0 0-.146.724c0 .465.18.828.54 1.09.361.264.963.475 1.807.633l2.053.385c1.332.245 2.334.645 3.007 1.201.672.557 1.008 1.36 1.008 2.411 0 .587-.117 1.116-.348 1.586-.233.47-.572.877-1.018 1.22-.446.341-1.002.604-1.668.788-.667.183-1.433.275-2.301.275-.733 0-1.406-.058-2.017-.174a11.688 11.688 0 0 1-1.632-.422 8.222 8.222 0 0 1-1.888-.908l.953-1.705zM32.017 24.045c-.137-.828-.315-1.491-.52-1.916l-1.36.878-5.951 3.841a1.439 1.439 0 0 0 .002 2.42l5.975 3.846 1.323.85c.208-.413.39-1.075.528-1.908l-2.27-1.554-3.574-2.445 3.566-2.446 2.281-1.566z"/>
					</g>
				</svg>
			</i>

		</a>

		<div class="header__inner d-flex justify-content-between">
			<div class="search" v-if="isUserLoggedIn">
				<form action="?" method="get">
					<label for="q" class="hidden">Search</label>

					<div class="form__controls">
						<vue-autosuggest
							class="search__field"
							:suggestions="filteredOptions"
							@selected="onSelected"
							:render-suggestion="renderSuggestion"
							:get-suggestion-value="getSuggestionValue"
							:input-props="{id:'autosuggest__input', onInputChange: onInputChange, placeholder:'Search ...'}"/>

						<i class="search__icon">
							<img src="/images/ico-magnifier@2x.png" width="26" height="26"  alt="">
						</i>
					</div>
				</form>
			</div>

			<div class="header__actions" v-if="this.$store.getters.isUserLoggedIn">
				<div class="dropdown dropdown--user" :class="{'dropdown--open': this.isDropdownOpen}">
					<a href="#" class="dropdown__toggle" @click.prevent="toggleDropdown">
                  <Avatar @click.prevent="toggleDropdown"
                     :user="user"
                  />
					</a>

						<ul class="dropdown__list" :class="{'pad__top': this.isDropdownOpen}" >
							<li>
								<a href="/settings/profile">
									<span>My Profile</span>
								</a>
							</li>

                     <li>
                        <a href="/notifications/">
                           <span>Notifications</span>
                        </a>
                     </li>

                     <li>
                        <a href="/admin/">
                           <span>Admin</span>
                        </a>
                     </li>

                     <li>
                        <a href="#" @click.prevent="handleUserLogOut">
                           <span>Log out</span>
                        </a>
                     </li>

                     <li>
                        <a href="" @click.prevent="toggleDropdown">
                           <span>Close</span>
                        </a>
                     </li>
						</ul>
				</div>
			</div>
		</div>
	</header>
</template>

<script>

	import { mapActions, mapGetters } from "vuex";
	import { VueAutosuggest } from 'vue-autosuggest';

   import Avatar from '~/components/Summa/Common/Avatar';


	export default {

		name: 'HeaderContainer',

		components: {
			VueAutosuggest,
         Avatar
		},

		data () {
			return {
				isDropdownOpen: false,
				selected: "",
				filteredOptions: [],
				suggestions: [
					{
						data: [
							{ id: 1, name: "First Suggestion" },
							{ id: 2, name: "Second Suggestion (Mouse Over)" },
							{ id: 3, name: "Third Suggestion" },
							{ id: 4, name: "Fourth Suggestion" }
						]
					}
				]
			}
		},
		computed: {
			...mapGetters(['isSidebarCollapsed','isUserLoggedIn','user'])
		},
		methods: {
			...mapActions([
				'logout'
			]),
			toggleMenu (event) {
				this.$emit('clicked', true)
			},
			toggleDropdown () {
				this.isDropdownOpen = !this.isDropdownOpen
			},
			handleUserLogOut () {
				this.logout();
  				this.isDropdownOpen = false
				window.location.href = "/login";
			},
			onInputChange(text, oldText) {
				if (text === null) {
					return;
				}
				const filteredData = this.suggestions[0].data.filter(option => {
					return option.name.toLowerCase().indexOf(text.toLowerCase()) > -1;
				});

				this.filteredOptions = [{ data: filteredData }];
			},
			onSelected(item) {
				this.selected = item;
			},
			renderSuggestion(suggestion) {
                const character = suggestion.item;

                return character.name; //(<span>{character.name}</span>);

				//const html = '<span>' + character.name + '</span>';
				//return character.name;


			},
			getSuggestionValue(suggestion) {
				return suggestion.item.name;
			}
		},
		mounted() {
			// if(!this.isUserLoggedIn){
			// 	var path = window.location.pathname;
			// 	var page = path.split("/").pop();
			// 	console.log( page );
      //
			// 	if(page != 'login.html') {
			// 		window.location.href = "/login.html";
			// 	}
			// }
		},
		created() {
		},
		beforeCreate() {
		},
	}
</script>
