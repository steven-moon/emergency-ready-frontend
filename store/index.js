import Vue from 'vue'
import Vuex from 'vuex'


import pageDataStore from './modules/pageDataStore';
import featuredAppDataStore from './modules/featuredAppDataStore';

Vue.use(Vuex);


const namespaced = true;

const createStore = () => {
   return new Vuex.Store({
      namespaced,
      modules: {
         pageDataStore: pageDataStore,
         featuredAppDataStore: featuredAppDataStore
      },
      state: {
         userId: null,
         authToken: null,
         user: null,
         modal: {
            visible: false,
            component: 'ModalTask',
            modalData: null,
         },
         isSidebarCollapsed: true,
         basePage: '',
         appUsers: [{id:"0",name:""}]
      },
      getters: {
         userId(state) {
            return state.userId;
         },
         user(state) {
            return state.user;
         },
         isUserLoggedIn(state) {
            return state.authToken != null;
         },
         isSidebarCollapsed(state) {
            return state.isSidebarCollapsed
         },
         getModal(state) {
            return state.modal
         },
         getAuthToken(state) {
            return state.authToken
         },
         appUsers(state) {
            return state.appUsers
         },
         basePage(state){
            return state.basePage;
         }
      },
      mutations: {
         // User
         setUser(state, user) {
            //console.log("Set User in mutations");
            //console.log(user);
            state.user = user;
         },
         setUserID(state, userId) {
            console.log(userId);
            state.userId = userId;
         },
         setBasePage(state, basePage){
            state.basePage = basePage;
         },
         setAuthToken(state, authToken) {
            //console.log("action setAuthToken");
            state.authToken = authToken;
         },
         toggleSidebarCollapse(state) {
            state.isSidebarCollapsed = !state.isSidebarCollapsed;
         },
         setAppUsers(state, payload) {
            state.appUsers = payload
         },
         openModal(state, payload) {
            state.modal.visible = true;

            state.modal.component = payload.component;
            if(payload.modalData) {
               state.modal.modalData = payload.modalData;
            }else{
               state.modal.modalData = null;
            }

            if(payload.basePage){
               state.basePage = payload.basePage;
            }else{
               state.basePage = '';
            }
         },
         closeModal(state) {
            state.modal.visible = false;
         },
         clearToken(state) {
            state.authToken = null;
         },
         logout(state) {
            console.log("Log out Mutation called");
         },
         //    state('clearToken');
         //    this.$cookies.remove("userId");
         //    this.$cookies.remove("authToken");
         //    if (process.client) {
         //       localStorage.removeItem("userId");
         //       localStorage.removeItem("authToken");
         //    }
         //
         //    this.taskstore.reset();
         //    this.boardstore.reset();
         //    this.projectstore.reset();
         //    this.leadstore.reset();
         //    this.timestore.reset();
         // },
      },
      actions: {

         setUser({commit}, payload) {

            //console.log("action setUser");
            this.$cookies.set("user", JSON.stringify(payload));
            localStorage.setItem("user", payload);
            commit('setUser', payload);
         },
         setAuthToken({commit}, payload) {
            //console.log("action setAuthToken");
            localStorage.setItem("authToken", payload);
            ///this.$cookies.set("authToken", payload
            commit('setAuthToken', payload);
         },
         setUserID({commit}, payload) {

            commit("setUserID", payload);
            this.$cookies.set("userId", payload);
            //Cookie.set("userId", payload);

            //TO-DO: implement real security
            //commit("setAuthToken", payload);
            // localStorage.setItem("authToken", payload);
            // Cookie.set("authToken", payload);

            // localStorage.setItem("token", result.data.access_token);
            // localStorage.setItem("refresh_token", result.data.refresh_token);
            // Cookie.set("jwt", result.data.access_token);
            // Cookie.set("refresh_token", result.data.refresh_token);
         },
         async nuxtServerInit({commit}, {req, res, app}) {
            //initAuth(vuexContext, req) {
            //console.log("initAuth Call");
            let userId;
            let authToken;
            let user;
            //console.log(req.headers);
            if (req && req.headers && req.headers.cookie) {
               const userIdCookie = req.headers.cookie
                  .split(";")
                  .find(c => c.trim().startsWith("userId="));

               if (userIdCookie) {
                  userId = userIdCookie.split("=")[1];
               }

               const tokenCookie = req.headers.cookie
                  .split(";")
                  .find(c => c.trim().startsWith("authToken="));

               if (tokenCookie) {
                  authToken = tokenCookie.split("=")[1];
               }

               const userCookie = req.headers.cookie
                  .split(";")
                  .find(c => c.trim().startsWith("user="));

               if (userCookie) {
                  //console.log("userCookie");
                  var userJson = decodeURIComponent(userCookie.split("=")[1]);
                  //console.log(userJson);
                  //user = userJson;
                  try {
                     user = JSON.parse(userJson);
                  } catch(e) {
                     user = null;
                     console.log("JSON Parse Error");
                     console.log(e);
                     //alert(e); // error in the above string (in this case, yes)!
                  }
               }


            } else if (process.client) {
               userId = localStorage.getItem("userId");
               authToken = localStorage.getItem("authToken");
               try {
                  user = JSON.parse(localStorage.getItem("user"));
               } catch(e) {
                  user = null;
                  console.log("JSON Parse Error");
                  console.log(e);
                  //alert(e); // error in the above string (in this case, yes)!
               }
            }

            if (userId) {
               commit("setUserID", userId);
            }

            if (user) {
               commit("setUser", user);
            }

            if (authToken) {
               commit("setAuthToken", authToken);
            } else {
               console.log("authtoken cookie was not set")
            }

         },
         logout(vuexContext) {
            console.log("Log out action called");
            vuexContext.commit("clearToken");
            this.$cookies.remove("userId");
            this.$cookies.remove("authToken");
            this.$cookies.remove("user");
            if (process.client) {
               localStorage.removeItem("userId");
               localStorage.removeItem("authToken");
               localStorage.removeItem("user");
            }

            vuexContext.commit('taskstore/reset');
            vuexContext.commit('boardstore/reset');
            vuexContext.commit('projectstore/reset');
            vuexContext.commit('leadstore/reset');
            vuexContext.commit('timestore/reset');
         },
         // logout({commit}) {
         //    commit('logout');
         // },
         toggleSidebarCollapse({commit}) {
            commit('toggleSidebarCollapse');
         },
         openModal({commit}, payload) {
            commit('openModal', payload);
         },

         closeModal({commit}) {
            commit('closeModal');
         },
         setAppUsers({commit}, payload) {
            commit('setAppUsers', payload);
         },
         setBasePage({commit}, payload) {
            commit('setBasePage', payload);
         },
      }
   })
};

export default createStore;
