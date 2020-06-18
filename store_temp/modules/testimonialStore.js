const namespaced = true
import clonedeep from 'lodash.clonedeep'


export default {
  namespaced,
  state: {
    data: null,
    baseData: {
      title: 'Testimonials',
      description: 'We have had the privilege of working with some great clients from around the world. We always work hard to do an amazing job for our clients and provide incomparable service. But don’t just take our word for it. Here is what a few of our clients had to say after working with us.',
      shortDescription: '',
      backgroundUrl: '',
      cardImage: '',
    },
    childArray: null,
    baseChildArray: [
      {
        name: 'Duff Tittle, Associate Athletics Director - Communications',
        title: 'BRIGHAM YOUNG UNIVERSITY',
        image: 'img/testimonials/testimonial-avatar-5.png',
        description: '<blockquote>We had a great experience working with Clever Coding during the creation of the BYU Cougars mobile app. The team at Clever Coding was extremely skilled, innovative and very easy to work with. From conceptual design through launch of the mobile app our experience was fantastic. I highly recommend Clever Coding.</blockquote>'
      },
      {
        name: 'Timothy Lyon, CEO',
        title: 'RED MAT MEDIA',
        image: 'img/testimonials/testimonial-avatar-1.png',
        description: '<blockquote>Working with Clever Coding has been perfect for us. They are very creative and responsive. They have helped us with many different apps. We worked with other app developers in the past and did not have a positive experience, with Clever Coding it has been great from the beginning.</blockquote>'
      },
      {
        name: 'Micah Smurthwaite, Founder',
        title: 'SHOWSCOOP',
        image: 'img/testimonials/testimonial-avatar-6.png',
        description: '<blockquote>In terms of design and functionality, the Clever Coding Team guided my project from concept to execution. They balance best-in-class knowledge of technical skills with creative solutions to deliver superior results.</blockquote>'
      },
      {
        name: 'Shelby Meinzer, Founder',
        title: 'MINDTAPP',
        image: 'img/testimonials/testimonial-avatar-7.png',
        description: '<blockquote>Working with Clever Coding has been an all around amazing experience. The group that Steve has put together is a very talented and hard working crew. They are also incredibly easy to work with and bring a lot to the table. Clever Coding can cover everything from design to development and deployment, they even gave me tips on how to market my app. I will go back to Clever Coding for all my iOS development needs.</blockquote>'
      },
      {
        name: 'Brad Ainge, Owner',
        title: 'POSITIVE DISCIPLINE',
        image: 'img/testimonials/testimonial-avatar-3.png',
        description: '<blockquote>Working with Clever Coding has been a wonderful experience. They provided all the functionality we needed in our app and even added some additional features that made it even better. They were able to create versions for Apple devices as well as Android. I would highly recommend Clever Coding and we plan on working with them in the future.</blockquote>'
      },
      {
        name: 'Luke Biesinger, CEO',
        title: 'UNIVERSITY VALUES',
        image: 'img/testimonials/testimonial-avatar-9.png',
        description: '<blockquote>We had an excellent experience working with Clever Coding and are very satisfied with the three apps they have built for us over the past two years. We especially appreciate their high levels of integrity, communication, and competency.</blockquote>'
      },
      {
        name: 'Larry Myler, CEO',
        title: 'BY MONDAY, INC.',
        image: 'img/testimonials/testimonial-avatar-8.png',
        description: '<blockquote>So few app development companies deliver what they promise, but Clever Coding performed beyond my expectations. I will be using them again very soon.</blockquote>'
      },
      {
        name: 'Shaw Phillips, Owner and CEO',
        title: 'HEARTS FOR HOSPICE AND HOME HEALTH',
        image: 'img/testimonials/testimonial-avatar-4.png',
        description: '<blockquote>When we started looking at an iTunes Apps we didn’t know where to go. We called Clever Coding, not only did they make every need we had come true, but did it at a very fair price. We have had lots of business from our App due to the great design Clever Coding did for us. Very pleased customer!</blockquote>'
      },
      {
        name: 'Bruce Buzbee, President',
        title: 'ROOTSMAGIC, INC.',
        image: 'img/testimonials/testimonial-avatar-2.png',
        description: '<blockquote>When we decided to create a companion iPhone / iPad app for our RootsMagic desktop software, we looked at a number of different companies, both US and overseas. We had narrowed our decision down to two companies, but chose Clever Coding based on the positive feedback we got from another company they had done work for.</blockquote>' +
          '<blockquote>Choosing Clever Coding was the best decision we could have made. They were easy to work with, and were more than capable of handling the complicated code and algorithms we threw at them. They helped us design a user interface that was both intuitive and nice to look at, and were able to point out potential pitfalls before we ran into them.</blockquote>' +
          '<blockquote>The bottom line? We were so pleased with their work that we hired them to create our Android app as well.</blockquote>'
      },


    ]
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



