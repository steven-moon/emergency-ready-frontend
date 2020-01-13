const namespaced = true
import clonedeep from 'lodash.clonedeep'


export default {
  namespaced,
  state: {
    page: 'Not Set',
    utahCounty: {
      title: "Utah County Emergency Management",
      description: "<p>Here are some screen shots from the custom branded emergency app we created for the Utah County Emergency Management organization.</p>",
      images: [
        '/img/featured/i-calq-screenshot-image-1.jpg',
        '/img/featured/i-calq-screenshot-image-2.jpg',
        '/img/featured/i-calq-screenshot-image-3.jpg',
      ],
      info1: {
        title: "",
        description: "",
        icon: "now-ui-icons design-2_html5",
      },
      info2: {
        title: "",
        description: "",
        icon: "now-ui-icons design_palette",
      },
      info3: {
        title: "",
        description: "",
        icon: "now-ui-icons design-2_ruler-pencil",
      },
      info4: {
        title: "",
        description: "",
        icon: "now-ui-icons files_single-copy-04",
      }

    },
    tooeleCounty: {
      title: "Tooele County Emergency Management",
      description: "<p>Here are some screen shots from the custom branded emergency app we created for the Tooele County Emergency Management organization.</p>",
      images: [
        '/img/featured/i-calq-screenshot-image-1.jpg',
        '/img/featured/i-calq-screenshot-image-2.jpg',
        '/img/featured/i-calq-screenshot-image-3.jpg',
      ],
      info1: {
        title: "",
        description: "",
        icon: "now-ui-icons design-2_html5",
      },
      info2: {
        title: "",
        description: "",
        icon: "now-ui-icons design_palette",
      },
      info3: {
        title: "",
        description: "",
        icon: "now-ui-icons design-2_ruler-pencil",
      },
      info4: {
        title: "",
        description: "",
        icon: "now-ui-icons files_single-copy-04",
      }

    },
  },
  getters: {
    data(state) {
      if (state.page === 'utah-county-emergency-management') {
        return clonedeep(state.utahCounty)
      }else if (state.page === 'tooele-county-emergency-management') {
        return clonedeep(state.tooeleCounty)
      }
    },
  },
  mutations: {
    reset(state) {
      console.log('Reset Featured App Data Store')

      //Reset data and child array to base state
    },
    setPage(state, page) {
      state.page = page.toLowerCase();
    }

  },
  actions: {
    reset({ commit }) {
      commit('reset')
    },
    setPage({ commit }, payload) {
      commit('setPage', payload)
    }
  }
}


