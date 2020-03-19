const namespaced = true;
import clonedeep from 'lodash.clonedeep';

export default {
   namespaced,
   state: {
      totals: [],
      countries: []


   },
   getters: {
      totals(state) {
         return state.totals
      },
      countries(state) {
         return state.countries
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
      setCountries(state, countries) {
         state.countries = countries;
      },
   },
   actions: {
      reset({commit}) {
         commit('reset');
      },
      setTotals({commit}, payload) {
         commit('setTotals', payload);
      },
      setCountries({commit}, payload) {
         commit('setCountries', payload);
      },
   }
};



