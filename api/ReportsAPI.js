import CommonAPI from './CommonAPI'
import clonedeep from 'lodash.clonedeep';

const apiName = 'ReportsAPI';



const instance = {

    getTotals(store, params) {

        return CommonAPI.getAllPost(store.getters.getAuthToken, 'covid-reports', params)
            .then(response => {
                const clonedData = clonedeep(response.data);

                store.commit('reportStore/setTotals', clonedData);
                return response;
            })
            .catch((error) => {
                console.log("error in " + apiName + ": " + error);
            });
    },
    getCountryList(store) {

        return CommonAPI.getAll(store.getters.getAuthToken, 'covid-country-list', "")
            .then(items => {
                console.log("Get Country List")
                const clonedItems = clonedeep(items);
                console.log(items);

                store.commit('reportStore/setCountries', clonedItems);
                return items;
            })
            .catch((error) => {
                console.log("error in " + apiName + ": " + error);
            });
    },

};

export default instance;
