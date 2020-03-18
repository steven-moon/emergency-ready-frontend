import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import reportStore from './modules/reportStore';
import userStore from './modules/userStore';
import cityStore from './modules/cityStore';
import testimonialStore from './modules/testimonialStore';
import teamStore from './modules/teamStore';
import projectPageDataStore from './modules/projectPageDataStore';
import pageDataStore from './modules/pageDataStore';
import sectionDataStore from './modules/sectionDataStore';
import featuredAppDataStore from './modules/featuredAppDataStore';


const namespaced = true;

const createStore = () => {
   return new Vuex.Store({
      namespaced,
      modules: {
         reportStore: reportStore,
         userStore: userStore,
        cityStore: cityStore,
        teamStore: teamStore,
        testimonialStore: testimonialStore,
        projectPageDataStore: projectPageDataStore,
        pageDataStore: pageDataStore,
        sectionDataStore: sectionDataStore,
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
            if(state.user) {
               console.log("get user state.user != null");
               return state.user;
            }else if (process.client) {
                  console.log("get user state.user = null process is client");
                  var user = null;
                  try {
                     user = JSON.parse(localStorage.getItem("user"));
                  } catch(e) {
                     user = null;
                     console.log("JSON Parse Error");
                     console.log(e);
                     //alert(e); // error in the above string (in this case, yes)!
                  }
                  return user;
            }else {
               console.log("get user return null");
               return null;
            }

         }
         ,
         isUserLoggedIn(state) {
            return state.authToken != null;
         },
         isSidebarCollapsed(state) {
            return state.isSidebarCollapsed;
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
            state.authToken = authToken;
         },
         toggleSidebarCollapse(state, payload) {
            state.isSidebarCollapsed = payload;
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
         initAuth(state, req) {
            //console.log("initAuth Call");
            let userId;
            let authToken;
            let user;

            // console.log(req.headers);
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
                  authToken = decodeURIComponent(tokenCookie.split("=")[1]);
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
               state.userId = userId;
               //commit("setUserID", userId);
            }

            if (user) {
               state.user = user;
               //commit("setUser", user);
            }

            if (authToken) {
               state.authToken = authToken;
               //commit("setAuthToken", authToken);
            } else {
               console.log("authtoken cookie was not set")
            }

            // Change sidebar toggled state
            const isSidebarCollapsedCookie = this.$cookies.get('isSidebarCollapsed') !== undefined ? this.$cookies.get('isSidebarCollapsed') : true;

            state.isSidebarCollapsed = isSidebarCollapsedCookie;
            //commit("toggleSidebarCollapse", isSidebarCollapsedCookie);
         },
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
            this.$cookies.set("authToken", payload);
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
            commit("initAuth", req);
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
         toggleSidebarCollapse({commit}, payload) {
            this.$cookies.set("isSidebarCollapsed", payload);
            commit('toggleSidebarCollapse', payload);
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
         initAuth({commit}, payload) {
            commit('initAuth', payload);
         },
      }
   })
};

export default createStore;
