<template>

   <div :class="{'sidebar--collapsed': isSidebarCollapsed}"
        class="sidebar sidebar-nav">
      <div class="sidebar__inner">
         <nav class="navigation">
            <ul>
               <li class="black-icons">
                  <a href="/dashboards/">
                     <i class="cc-icons tim-icons icon-chart-pie-36"></i>
                     Dashboards
                  </a>
               </li>
               <li>
                  <a href="/time/">
                     <i>
                        <svg height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
                           <path
                              d="M9.99 0C4.47 0 0 4.48 0 10s4.47 10 9.99 10C15.52 20 20 15.52 20 10S15.52 0 9.99 0zM10 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H9v6l5.25 3.15.75-1.23-4.5-2.67V5z"
                              fill="#637280" fill-rule="evenodd"/>
                        </svg>
                     </i>

                     Time Tracking
                  </a>
               </li>

               <li>
                  <a href="/board/">
                     <i>
                        <svg height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                           <path
                              d="M8.82.5h6.68v5H8.82v-5zm0 15V7.18h6.68v8.32H8.82zm-8.32 0v-5h6.68v5H.5zm0-6.68V.5h6.68v8.32H.5z"
                              fill="#637280" fill-rule="evenodd"/>
                        </svg>
                     </i>

                     Boards
                  </a>
               </li>

               <li>
                  <a href="/tasks/">
                     <i>
                        <svg height="16" viewBox="0 0 19 16" width="19" xmlns="http://www.w3.org/2000/svg">
                           <path
                              d="M2 6.5C1.17 6.5.5 7.17.5 8S1.17 9.5 2 9.5 3.5 8.83 3.5 8 2.83 6.5 2 6.5zm0-6C1.17.5.5 1.17.5 2S1.17 3.5 2 3.5 3.5 2.83 3.5 2 2.83.5 2 .5zm0 12.17a1.33 1.33 0 1 0-.001 2.659A1.33 1.33 0 0 0 2 12.67zM5 15h14v-2H5v2zm0-6h14V7H5v2zm0-8v2h14V1H5z"
                              fill="#637280" fill-rule="evenodd"/>
                        </svg>
                     </i>

                     My Task
                  </a>
               </li>

               <li class="black-icons">
                  <a href="/projects/">
                     <i class="cc-icons tim-icons icon-spaceship"/>

                     Projects
                  </a>
               </li>

               <li class="black-icons">
                  <a href="/reports/">
                     <i class="cc-icons tim-icons icon-chart-bar-32"></i>

                     Reports
                  </a>
               </li>

               <li :class="{parent: true, 'dropdown-open': this.isDropdownOpen && !this.isSidebarCollapsed}" class="parent">
                  <a @click="toggleDropdownMenu" href="#">
                     <i>
                        <svg height="12" viewBox="0 0 20 12" width="20" xmlns="http://www.w3.org/2000/svg">
                           <path
                              d="M13.32 6.82c.72 0 1.52.107 2.4.32.973.253 1.767.58 2.38.98.72.48 1.08 1.02 1.08 1.62v2.08h-5V9.74c0-1.133-.547-2.093-1.64-2.88.187-.027.447-.04.78-.04zm-6.64 0c.72 0 1.513.107 2.38.32.973.253 1.76.58 2.36.98.72.48 1.08 1.02 1.08 1.62v2.08H.82V9.74c0-.6.36-1.14 1.08-1.62.613-.4 1.407-.727 2.38-.98.88-.213 1.68-.32 2.4-.32zm0-1.64c-.44 0-.853-.113-1.24-.34a2.536 2.536 0 0 1-.92-.92c-.227-.387-.34-.8-.34-1.24 0-.44.113-.853.34-1.24.227-.387.533-.693.92-.92a2.412 2.412 0 0 1 2.47 0c.38.227.68.53.9.91.22.38.33.797.33 1.25 0 .453-.11.87-.33 1.25-.22.38-.52.683-.9.91-.38.227-.79.34-1.23.34zm6.64 0c-.44 0-.853-.113-1.24-.34a2.536 2.536 0 0 1-.92-.92c-.227-.387-.34-.8-.34-1.24 0-.44.113-.853.34-1.24.227-.387.533-.693.92-.92.387-.227.8-.34 1.24-.34.44 0 .853.113 1.24.34.387.227.693.533.92.92.227.387.34.8.34 1.24 0 .44-.113.853-.34 1.24a2.536 2.536 0 0 1-.92.92c-.387.227-.8.34-1.24.34z"
                              fill="#637280" fill-rule="evenodd"/>
                        </svg>
                     </i>

                     CRM
                  </a>

                  <ul class="dropdown">
                     <li>
                        <a href="/leads/">
                           Leads
                        </a>
                     </li>

                     <li>
                        <a href="/companies/">
                           Companies
                        </a>
                     </li>

                     <li>
                        <a href="/people/">
                           People
                        </a>
                     </li>
                  </ul>
               </li>

               <li class="black-icons">
                  <a href="/notifications/">
                     <i>
                        <svg width="14" height="17" viewBox="0 0 14 17" xmlns="http://www.w3.org/2000/svg">
                           <path d="M11.68 11.26l1.68 1.68v.82H0v-.82l1.68-1.68V7.12c0-1.307.327-2.433.98-3.38.667-.973 1.593-1.607 2.78-1.9v-.58c0-.347.12-.643.36-.89S6.333 0 6.68 0s.643.123.89.37.37.543.37.89v.58c1.173.293 2.093.933 2.76 1.92.653.947.98 2.067.98 3.36v4.14zm-5 5c-.467 0-.863-.16-1.19-.48A1.564 1.564 0 0 1 5 14.62h3.36c0 .453-.167.84-.5 1.16-.333.32-.727.48-1.18.48z" fill="#637280" fill-rule="evenodd"/>
                        </svg>
                     </i>

                     Notifications
                  </a>
               </li>
            </ul>
         </nav>
         <div class="sidebar__actions hidden-xs">
            <a @click.prevent="toggleSidebarCollapse(!isSidebarCollapsed)" href="#">
               {{ isSidebarCollapsed ? '>>' : '<<' }}
            </a>
         </div><!-- /.sidebar__actions -->
      </div>
   </div>
</template>

<script>
   import {mapGetters, mapActions} from 'vuex';
   import {VueAutosuggest} from 'vue-autosuggest';

   export default {

      name: 'SidebarContainer',

      components: {
         VueAutosuggest
      },

      data() {
         return {
            isDropdownOpen: false,
            selected: "",
            filteredOptions: [],
            suggestions: [
               {
                  data: [
                     {id: 1, name: "First Suggestion"},
                     {id: 2, name: "Second Suggestion (Mouse Over)"},
                     {id: 3, name: "Third Suggestion"},
                     {id: 4, name: "Fourth Suggestion"}
                  ]
               }
            ]
         }
      },
      computed: {
         ...mapGetters(['isSidebarCollapsed'])
      },
      methods: {
         ...mapActions(['toggleSidebarCollapse']),
         toggleDropdownMenu() {
            this.isDropdownOpen = !this.isDropdownOpen
             if(this.isDropdownOpen && this.isSidebarCollapsed){
                 this.toggleSidebarCollapse();
             }else if(!this.isDropdownOpen && !this.isSidebarCollapsed){
                 this.toggleSidebarCollapse();
             }
         },
         onInputChange(text, oldText) {
            if (text === null) {
               return;
            }
            const filteredData = this.suggestions[0].data.filter(option => {
               return option.name.toLowerCase().indexOf(text.toLowerCase()) > -1;
            });

            this.filteredOptions = [{data: filteredData}];
         },
         onSelected(item) {
            this.selected = item;
         },
         renderSuggestion(suggestion) {
            const character = suggestion.item;
            return character.name; //(<span>{character.name}</span>);

            const html = '<span>' + character.name + '</span>';

            return character.name;
         },
         getSuggestionValue(suggestion) {
            return suggestion.item.name;
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
