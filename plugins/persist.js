import createPersistedState from 'vuex-persistedstate'

// export default ({store}) => {
//   window.onNuxtReady(() => {
//     createPersistedState({
//         key: 'vuex',
//     })(store)
//   })
// }

export default ({store}) => {
   createPersistedState({

   })(store)
}
