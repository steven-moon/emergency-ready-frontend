const namespaced = true;
import clonedeep from 'lodash.clonedeep';

export default {
   namespaced,
   state: {
      totals: [],
   },
   getters: {
      totals(state) {
         return state.totals
      },
   },
   mutations: {
      reset(state) {
         console.log("Reset People Store");
         state.totals = [];
      },
      setTotals(state, totals) {
         state.totals = totals;
      },
   },
   actions: {
      reset({commit}) {
         commit('reset');
      },
      setTotals({commit}, payload) {
         commit('setTotals', payload);
      },
   }
};



