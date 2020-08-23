import Vue from 'vue'
import Vuex from 'vuex'
import clonedeep from "lodash.clonedeep";

/**
 * Internal dependencies.
 */
import notifications from './modules/notifications';

Vue.use(Vuex);

const namespaced = true;

const createStore = () => {
   return new Vuex.Store({
      namespaced,
      modules: {
          notifications,
      },
      state: {
          images: [],
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
         appUsers: [{id:"0",name:""}],
          emergencyReadyApp: {
              title: 'Emergency Ready App',
              description: 'Base App for all Custom Builds',
              deviceImage: '/img/featured/emergency-ready-1.png',
              deviceImages: ['/img/featured/emergency-ready-1.png'],
              appStoreLink: 'https://apps.apple.com/us/app/emergency-ready/id1480621536?ls=1',
              playStoreLink: 'https://play.google.com/store/apps/details?id=com.clevercoding.theemergencyapp'
          }
      },
      getters: {
          images(state){
              console.log("GET IMAGES")
              if(state.images.length > 0){
                  console.log(state.images)
                  return state.images;
              }
              var imageArray = [];
              imageArray.push("/img/project/project1.jpg");
              imageArray.push("/img/project/project2.jpg");
              imageArray.push("/img/project/project3.jpg");
              imageArray.push("/img/project/project4.jpg");
              imageArray.push("/img/project/project5.jpg");
              imageArray.push("/img/project/project6.jpg");
              imageArray.push("/img/project/project7.jpg");
              imageArray.push("/img/project/project8.jpg");
              imageArray.push("/img/project/project9.jpg");
              imageArray.push("/img/project/project10.jpg");
              imageArray.push("/img/project/project11.jpg");
              imageArray.push("/img/project/project12.jpg");
              imageArray.push("/img/project/project13.jpg");
              imageArray.push("/img/project/project14.jpg");
              imageArray.push("/img/project/project15.jpg");
              imageArray.push("/img/project/project16.jpg");
              imageArray.push("/img/project/project17.jpg");
              imageArray.push("/img/project/project18.jpg");
              imageArray.push("/img/project/project19.jpg");
              imageArray.push("/img/project/project20.jpg");
              imageArray.push("/img/project/project21.jpg");
              imageArray.push("/img/project/project22.jpg");
              imageArray.push("/img/project/project23.jpg");
              imageArray.push("/img/project/project24.jpg");
              imageArray.push("/img/project/project25.jpg");


              imageArray.push("img/backgrounds/bg1.jpg");
              imageArray.push("img/backgrounds/bg2.jpg");
              imageArray.push("img/backgrounds/bg3.jpg");
              imageArray.push("img/backgrounds/bg4.jpg");
              imageArray.push("img/backgrounds/bg5.jpg");
              imageArray.push("img/backgrounds/bg6.jpg");
              imageArray.push("img/backgrounds/bg7.jpg");
              imageArray.push("img/backgrounds/bg8.jpg");
              imageArray.push("img/backgrounds/bg9.jpg");
              imageArray.push("img/backgrounds/bg10.jpg");
              imageArray.push("img/backgrounds/bg11.jpg");
              imageArray.push("img/backgrounds/bg12.jpg");
              imageArray.push("img/backgrounds/bg13.jpg");
              imageArray.push("img/backgrounds/bg14.jpg");
              imageArray.push("img/backgrounds/bg15.jpg");
              imageArray.push("img/backgrounds/bg16.jpg");
              imageArray.push("img/backgrounds/bg17.jpg");
              imageArray.push("img/backgrounds/bg18.jpg");
              imageArray.push("img/backgrounds/bg19.jpg");
              imageArray.push("img/backgrounds/bg20.jpg");
              imageArray.push("img/backgrounds/bg21.jpg");
              imageArray.push("img/backgrounds/bg22.jpg");
              imageArray.push("img/backgrounds/bg23.jpg");
              imageArray.push("img/backgrounds/bg24.jpg");
              imageArray.push("img/backgrounds/bg25.jpg");
              imageArray.push("img/backgrounds/bg26.jpg");
              imageArray.push("img/backgrounds/bg27.jpg");
              imageArray.push("img/backgrounds/bg28.jpg");
              imageArray.push("img/backgrounds/bg29.jpg");
              imageArray.push("img/backgrounds/bg30.jpg");
              imageArray.push("img/backgrounds/bg31.jpg");
              imageArray.push("img/backgrounds/bg32.jpg");
              imageArray.push("img/backgrounds/bg33.jpg");
              imageArray.push("img/backgrounds/bg34.jpg");
              imageArray.push("img/backgrounds/bg35.jpg");
              imageArray.push("img/backgrounds/bg36.jpg");
              imageArray.push("img/backgrounds/bg37.jpg");
              imageArray.push("img/backgrounds/bg38.jpg");
              imageArray.push("img/backgrounds/bg39.jpg");
              imageArray.push("img/backgrounds/bg40.jpg");
              imageArray.push("img/backgrounds/bg41.jpg");
              imageArray.push("img/backgrounds/bg42.jpg");
              imageArray.push("img/backgrounds/bg43.jpg");
              imageArray.push("img/backgrounds/bg44.jpg");
              imageArray.push("img/backgrounds/bg45.jpg");
              imageArray.push("img/backgrounds/bg46.jpg");
              imageArray.push("img/backgrounds/bg47.jpg");
              imageArray.push("img/backgrounds/bg48.jpg");
              imageArray.push("img/backgrounds/bg49.jpg");
              imageArray.push("img/backgrounds/bg50.jpg");


              console.log("set images")
              state.images = clonedeep(imageArray);

              console.log(state.images)
              return state.images;
          },
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

         },
          emergencyReadyApp(state){
              return state.emergencyReadyApp;
          },
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
