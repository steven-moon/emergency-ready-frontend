const namespaced = true
import clonedeep from 'lodash.clonedeep'


export default {
  namespaced,
  state: {
    images: [],
    aboutUs: {
      emergencyReadyApp: {
        title: 'Emergency Ready App',
        description: 'Base App for all Custom Builds',
        deviceImage: '/img/featured/emergency-ready-1.png',
        deviceImages: ['/img/featured/emergency-ready-1.png'],
        appStoreLink: 'https://apps.apple.com/us/app/emergency-ready/id1480621536?ls=1',
        playStoreLink: 'https://play.google.com/store/apps/details?id=com.clevercoding.theemergencyapp'
      },
      title: 'The Emergency Ready App allows users to access emergency information on the go.',
      subtitle: 'Hear is a little be about the emergeny app',
      description: 'This is the description',
      backgroundUrl: 'img/project/project9.jpg',
      cards: [
        {
          title: 'Emergency Ready Features',
          description: '',
          backgroundUrl: 'img/project/project8.jpg',
          badgeText: '',
          layout: 'left',
          info: [
            {
              title: "Interactive Kits",
              description: "Users can create interactive emergency kits.",
              icon: 'now-ui-icons ui-2_chat-round',
              type: 'primary'
            },
            {
              title: 'Emergency Plans',
              description: 'Users can create custom emergency plans.',
              icon: 'now-ui-icons business_chart-pie-36',
              type: 'primary'
            },
            {
              title: 'Make a Kit',
              description: 'The app includes checklist for pre made emergency kits.',
              icon: 'now-ui-icons design-2_ruler-pencil',
              type: 'primary'
            }
          ]
        },
        {
          title: 'Custom Versions',
          description: '',
          backgroundUrl: 'img/project/project9.jpg',
          badgeText: '',
          layout: 'right',
          info: [
            {
              title: 'Custom Brand',
              description: 'You can hire us to create a custom branded version of the Emergency Ready App for your company or government agency using your icons, splash screens, and logos.',
              icon: 'now-ui-icons users_single-02',
              type: 'primary'
            },
            {
              title: 'Custom Contact Info',
              description: 'You can customize the contact info that goes into your custom version of the app.  For example you could have city, county and state contact info like:   police departments, fire departments, etc',
              icon: 'now-ui-icons business_chart-bar-32',
              type: 'primary'
            },
            {
              title: 'Flexibility',
              description: 'You can chose what type of contact info to share: like email, phone, facebook group and or webiste. You can also have us add your own custom content or edit the ones include.',
              icon: 'now-ui-icons arrows-1_refresh-69',
              type: 'primary'
            }
          ]
        }
      ]

    },
    founderData: {
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
    featuredAppsPage: {
      title: 'Featured Apps',
      mutedText: '',
      description: 'Here are a few of the projects we have helped develop',
      backgroundUrl: 'img/project/project9.jpg',
      cards: [

        {
          title: 'Emergency Ready App',
          description: '',
          category: '',
          backgroundUrl: '/img/featured/i-calq-image-1.jpg',
          image: '/img/featured/i-calq-image-1.jpg',
          icon: 'now-ui-icons ui-1_send',
          link: '/featured/emergency-ready-app',
          linkText: 'Learn More',
          badgeText: '',
          layout: '',
          info: []
        },
        {
          title: 'Utah County Emergency Management',
          description: '',
          category: '',
          backgroundUrl: '/img/featured/i-calq-image-1.jpg',
          image: '/img/featured/i-calq-image-1.jpg',
          icon: 'now-ui-icons ui-1_send',
          link: '/featured/utah-county-emergency-management',
          linkText: 'Learn More',
          badgeText: '',
          layout: '',
          info: []
        },
        {
          title: 'Tooele County Emergency Management',
          description: '',
          category: '',
          backgroundUrl: '/img/featured/i-calq-image-1.jpg',
          image: '/img/featured/i-calq-image-1.jpg',
          icon: 'now-ui-icons ui-1_send',
          link: '/featured/tooele-county-emergency-management',
          linkText: 'Learn More',
          badgeText: '',
          layout: '',
          info: []
        },
      ]

    },
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
    aboutUs(state) {
      return clonedeep(state.aboutUs)
    },
    featuredAppsPage(state) {
      return clonedeep(state.featuredAppsPage)
    },
    founderData(state) {
      return clonedeep(state.founderData)
    },
  },
  mutations: {
    reset(state) {
      console.log('Reset Page Data Store')

      //Reset data and child array to base state
    }

  },
  actions: {
    reset({ commit }) {
      commit('reset')
    }
  }
}


function yearsTitle() {
  return yearsInBusiness() + ' years'
}

function yearsDescription() {
  return 'Founded in 2008 we have been creating Mobile and Web Apps for ' + yearsInBusiness() + 'years.'
}

function yearsInBusiness() {
  return (new Date().getFullYear() - 2008)
}

