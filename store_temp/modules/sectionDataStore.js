const namespaced = true
import clonedeep from 'lodash.clonedeep'


export default {
  namespaced,
  state: {
    whoIsCleverCoding: {
      title: 'Who is Clever Coding?',
      description: 'We are an app development company focused on iOS, Android and Web App Development.  We are dedicated to delivering',
      backgroundUrl: 'img/project/project9.jpg',
      cards: [
        {
          title: 'Clever Coding Advantages',
          description: '',
          backgroundUrl: 'img/project/project8.jpg',
          badgeText: 'Advantages',
          layout: 'left',
          info: [
            {
              title: yearsTitle(),
              description: yearsDescription(),
              icon: 'now-ui-icons ui-2_chat-round',
              type: 'primary'
            },
            {
              title: 'Senior Developers',
              description: 'Our average developer has 9+ years of mobile/web experience and 15+ years of overall development experience.',
              icon: 'now-ui-icons business_chart-pie-36',
              type: 'primary'
            },
            {
              title: 'Experience',
              description: 'Since 2008 we have worked on 400+ projects.  These projects span all industries and technologies.',
              icon: 'now-ui-icons design-2_ruler-pencil',
              type: 'primary'
            }
          ]
        },
        {
          title: 'Our Focus',
          description: 'We are focused on delivering high quality apps.  We work hard to be efficient in our approach and being highly productive for all hours billed',
          backgroundUrl: 'img/project/project9.jpg',
          badgeText: 'Focus',
          layout: 'right',
          info: [
            {
              title: 'Customer Focused',
              description: 'We work hard to make sure and take care of our customers.',
              icon: 'now-ui-icons users_single-02',
              type: 'primary'
            },
            {
              title: 'Long Term Partnership',
              description: 'Our focus with new clients it to form a long term partnership. Our overage customer has been working with us for 5+ years',
              icon: 'now-ui-icons business_chart-bar-32',
              type: 'primary'
            },
            {
              title: 'Limited Projects',
              description: 'We only accept a limited number of new clients each year. We focus on partnering with companies looking to form long term partnerships.  We limit the number of new clients so that we can focus on providing a high quality of personal service to each client.',
              icon: 'now-ui-icons arrows-1_refresh-69',
              type: 'primary'
            }
          ]
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
          title: 'i-calQ',
          description: 'i-calQ has developed the world’s first smartphone-based point-of-care integrated mobile diagnosis and decision support system. Our point of care technology performs in minutes many of the diagnostic tests routinely used in clinical medicine and interprets these results using rules-based decision trees.',
          category: 'Medical',
          backgroundUrl: '/img/featured/i-calq-image-1.jpg',
          image: '/img/featured/i-calq-image-1.jpg',
          icon: 'now-ui-icons ui-1_send',
          link: '/featured/i-calQ',
          linkText: 'Learn More',
          badgeText: 'Medical',
          layout: '',
          info: []
        },
        {
          title: 'Carnival',
          description: 'The Carnival Cruise Line Fun Squad app lets cruise entertainment directors play Trivial Pursuit and Speak Out games during the cruise',
          category: 'Entertainment',
          backgroundUrl: '/img/featured/carnival-image-2.jpg',
          image: '/img/featured/carnival-image-2.jpg',
          icon: 'now-ui-icons ui-1_send',
          link: '/featured/carnival',
          linkText: 'Learn More',
          badgeText: 'Entertainment',
          layout: '',
          info: []
        },
        {
          title: 'Maverik',
          description: '“Prepare yourself for perks, prizes, freebies and more from Maverik — Adventure’s First Stop. The Maverik Adventure Club Rewards app puts all the benefits of the Adventure Club card™ and the Adventure Club Nitro Debit™ card at your fingertips."',
          category: 'Business',
          backgroundUrl: '/img/featured/maverik-image-3.jpg',
          image: '/img/featured/maverik-image-3.jpg',
          icon: 'now-ui-icons ui-1_send',
          link: '/featured/maverik',
          linkText: 'Learn More',
          badgeText: 'Business',
          layout: '',
          info: []
        },
        {
          title: 'BYU',
          description: 'BYU Cougars is the official app of the BYU Athletics Department. ' +
            'Available for free on iPad and iPhone, this app makes it easy for Cougar Nation to get up-to-date information on all 19 BYU teams',
          category: 'Entertainment',
          backgroundUrl: '/img/featured/byu-image-4.jpg',
          image: '/img/featured/byu-image-4.jpg',
          icon: 'now-ui-icons ui-1_send',
          link: '/featured/byu',
          linkText: 'Learn More',
          badgeText: 'Entertainment',
          layout: '',
          info: []
        },
        {
          title: 'ShowScoop',
          description: 'ShowScoop Concerts rate how bands perform live. Never go to a bad concert again.' +
            ' ' +
            'With ShowScoop you can rate concerts, share photos of the show, keep track of the shows you\'ve seen, follow your friend\'s reviews, and never waste your money on a bad concert ticket again.\n' +
            ' ' +
            'You can read about the app in Wired, Forbes, CNN, The Huffington Post, PC Magazine, Appolicious among many others.',
          category: 'Entertainment',
          backgroundUrl: '/img/featured/showscoop-image-5.jpg',
          image: '/img/featured/showscoop-image-5.jpg',
          icon: 'now-ui-icons ui-1_send',
          link: '/featured/showscoop',
          linkText: 'Learn More',
          badgeText: 'Entertainment',
          layout: '',
          info: []
        },
        {
          title: 'Roots Magic',
          description: 'Your family tree at your fingertips!' +
            ' ' +
            'Now you can easily take and show off your family history with you wherever you go. RootsMagic lets you carry your genealogy on your iPhone, iPad, and iPod touch!',
          category: 'Reference',
          backgroundUrl: '/img/featured/roots-image-6.jpg',
          image: '/img/featured/roots-image-6.jpg',
          icon: 'now-ui-icons ui-1_send',
          link: '/featured/rootsmagic',
          linkText: 'Learn More',
          badgeText: 'Reference',
          layout: '',
          info: []
        },
        {
          title: 'Heritage Makers',
          description: 'Heritage Makers allows you to upload the photos on your iPhone directly to your Studio account. This streamlined photo manager\'s simple interface also allows you to browse, organize, copy delete and move photos. It\'s the easy way to keep your pictures safe, organized and ready to use in creative Heritage Makers projects and keepsakes.',
          category: 'Shopping',
          backgroundUrl: '/img/featured/hm-image-7.jpg',
          image: '/img/featured/hm-image-7.jpg',
          icon: 'now-ui-icons ui-1_send',
          link: '/featured/heritage-makers.php',
          linkText: 'Learn More',
          badgeText: 'Shopping',
          layout: '',
          info: []
        },
        {
          title: 'Who\'s Your Caddy',
          description: 'Who\'s Your Caddy is your own Caddy when you play golf. Who\'s Your Caddy includes video and written Caddy Tips on playing each hole.',
          category: 'Sports',
          backgroundUrl: '/img/featured/caddy-image-8.jpg',
          image: '/img/featured/caddy-image-8.jpg',
          icon: 'now-ui-icons ui-1_send',
          link: '/featured/caddy',
          linkText: 'Learn More',
          badgeText: 'Sports',
          layout: '',
          info: []
        },
        {
          title: 'Paper Pilot',
          description: 'Paper Pilot is a 3D flying game built with the game engine Unity\n' +
            ' ' +
            'It has risen as high as the #2 free app on the App Store and has been downloaded millions of times\n' +
            ' ' +
            'Paper Pilot has been featured by Apple',
          category: 'Games',
          backgroundUrl: '/img/featured/paper-pilot-image-9.jpg',
          image: '/img/featured/paper-pilot-image-9.jpg',
          icon: 'now-ui-icons ui-1_send',
          link: '/featured/paper-pilot',
          linkText: 'Learn More',
          badgeText: 'Games',
          layout: '',
          info: []
        },
        {
          title: 'First Words',
          description: 'First Words is an educational app for young children.' +
            ' ' +
            'The app has been featured many times by Apple in the education section of the App Store',
          category: 'Educational',
          backgroundUrl: '/img/featured/first-words-image-10.jpg',
          image: '/img/featured/first-words-image-10.jpg',
          icon: 'now-ui-icons ui-1_send',
          link: '/featured/first-words',
          linkText: 'Learn More',
          badgeText: 'Educational',
          layout: '',
          info: []
        }
      ]

    },
  },
  getters: {
    whoIsCleverCoding(state) {
      return clonedeep(state.whoIsCleverCoding)
    },
    featuredAppsPage(state){
      return clonedeep(state.featuredAppsPage)
    }
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

