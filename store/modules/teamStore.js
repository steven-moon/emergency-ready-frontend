const namespaced = true
import clonedeep from 'lodash.clonedeep'


export default {
  namespaced,
  state: {
    data: null,
    baseData: {
      title: "Meet our Leadership Team",
      description: "",
      backgroundUrl: "img/project/project21.jpg",
      cardImage: "",
    },
    childArray: null,
    baseChildArray: [
      {
        name: "Steven Moon",
        title: "CEO & Founder" ,
        image: "img/steve-moon.jpeg",
        description: "Steve founded Clever Coding in 2006. He created one of the first 2000 apps on the Apple appstore " +
          "in the summer of 2008. He has been creating Mobile Apps since then. Steve is proficient in " +
          "native iOS development, native Android development, General PHP, PHP API Framework" +
          "Lumen/Laravel, and Vue.js Reactive Frontend Web app development.",
        twitter: "",
        linkedin: ""
      },
      {
        name: "Ryan Moulton",
        title: "Chief iOS Architect" ,
        image: "img/james.jpg",
        link: "/bios/Ryan-Moulton",
        description: "Ryan oversees all iOS development for Clever Coding. He has been creating native iOS App since" +
          "        2008. Ryan created Flash apps before becoming an iOS developer. He is also proficient in" +
          "        native Android development, General PHP, PHP API Framework Lumen/Laravel, and Vue.js Reactive" +
          "        Frontend Web app development.",
        twitter: "",
        linkedin: ""
      },
      {
        name: "Gene DeMan",
        title: "Chief Android Architect" ,
        image: "img/james.jpg",
        link: "/bios/Gene-DeMan",
        description: "Gene oversees all Android development for Clever Coding. He has been creating native Android" +
          "        App since 2010. Gene is also proficient in native iOS development, General PHP, PHP API" +
          "        Framework Lumen/Laravel, and Vue.js Reactive Frontend Web app development.",
        twitter: "",
        linkedin: ""
      },
    ],
    ceoData: {
      title: "Meet our CEO & Founder",
      description: "Steve is a graduate of BYU. He founded Clever Coding in 2008.",
      backgroundUrl: "img/project/project9.jpg",
      cardImage: "",
      childArray: [
        {
          name: "Steven Moon",
          title: "CEO & Founder" ,
          image: "img/steve-moon.jpeg",
          link: "/bios/Steve-Moon",
          description: "In the summer of 2000 Steve got his first software development job in BYU's IT Department. Working on the school's PeopleSoft Team." +
            "<br/>" +
            "<br/>" +
            "He then work for a consulting firm installing a cutting edge PeopleSoft HR plugin at Oklahoma Univerity, University of Houston and BYU EFY." +
            "<br/>" +
            "<br/>" +
            "In the summer of 2008 when Apple opened up the App Store to third party developers Steve could immediate see what a game changer the iPhone would be.  After creating one of the first 2000 apps on the App Store Steve quit he job and founded Clever Coding."+
            "<br/>" +
            "<br/>" +
            "Steve's passion at work is learning new technologies and coding as often as he can.  Steve did a lot of web development prior to starting Clever Coding but for the first 9 years of the business primarily did Native iOS and Native Android Development.  The last few years he has feel in love with creating Reactive Web Apps that uses highly scalable Cloud APIs build using Amazon Web Services"+
            "<br/>" +
            "<br/>" +
            "Steve still personally talks to all new potential clients and personally puts together a free no obligation quote based on the experience he has gained estimating and overseeing hundreds of projects",
          twitter: "",
          linkedin: ""
        }
      ]
    },
  },
  getters: {
    childArray(state) {
      //Make sure data and childArray are not null
      checkForNull(state);

      //getChildArray limited by NumToFetch
      return getChildArray(state);
    },
    data(state) {
      //Make sure data and childArray are not null
      checkForNull(state);

      return (limit) => {
        //add the child array to data before returning data
        var response = clonedeep(state.data);
        //getChildArray limited by NumToFetch
        response['childArray'] = getChildArray(state,limit);

        return response
      }

    },
    ceoData (state){
      return clonedeep(state.ceoData);
    }
  },
  mutations: {
    reset(state) {
      console.log('Reset Testimonials Store');

      //Reset data and child array to base state
      state.data = clonedeep(state.baseData);
      state.childArray = clonedeep(state.baseChildArray);
    },
    setData(state, data) {
      state.data = clonedeep(data);
    },
    setChildArray(state, children) {
      state.childArray = clonedeep(children);
    },
  },
  actions: {
    reset({ commit }) {
      commit('reset')
    },
    setData({ commit }, payload) {
      commit('setData', payload)
    },
    setChildArray({ commit }, payload) {
      commit('setChildArray', payload)
    },
  }
}


//Helper function to make sure data and childArray are not null
function checkForNull (state) {
  if(state.data === null){
    state.data = clonedeep(state.baseData);
  }
  if(state.childArray === null){
    state.childArray = clonedeep(state.baseChildArray);
  }
}

//Helper function to getChildArray by limit
function getChildArray(state,limit){
  if(limit > 0 && limit < state.childArray.length){
    var subArray = [];
    for(var i = 0; i < limit; i++){
      subArray.push(clonedeep(state.childArray[i]));
    }
    return subArray;
  }else{
    return clonedeep(state.childArray);
  }
}



