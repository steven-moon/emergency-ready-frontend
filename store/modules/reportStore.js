const namespaced = true;
import clonedeep from 'lodash.clonedeep';

export default {
   namespaced,
   state: {
      totals: [],
      countries: [],
      reports: [
         {name:"Covid19 Overview", link:"/dashboards/"},
         {name:"Covid19 Overview by Country", link:"/dashboards/country"},
         {name:"Covid19 Trends", link:"/dashboards/trends/"},
         {name:"Covid19 Trends by Country", link:"/dashboards/trends/country"}
      ]


   },
   getters: {
      totals(state) {
         return state.totals
      },
      countries(state) {
         return state.countries
      },
      reports(state) {
         return state.reports
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



