import axios from 'axios'
import CommonAPI from './CommonAPI'
import clonedeep from 'lodash.clonedeep';

const apiName = 'HistoryAPI';


function addHelperVars(item, index, arr) {
    arr[index] = item;
}


const instance = {

    addHistory(store, source, data){
        return CommonAPI.addItem(store.getters.getAuthToken, source + '-history', data)
            .then(response => {
                return response;
            })
            .catch((error) => {
                console.log("error in " + apiName + ": " + error);
            });
    },
    getHistory(store, source, parent_uuid) {
        let params = "?parent_id=" + parent_uuid;
        return CommonAPI.getAll(store.getters.getAuthToken, source + '-history', params)
            .then(items => {
                const clonedItems = clonedeep(items);

                store.commit(source + 'store/setHistory', clonedItems);
                return items;
            })
            .catch((error) => {
                console.log("error in " + apiName + ": " + error);
            });
    },
    updateHistory(store, source, data, uuid){
        return CommonAPI.updateItem(store.getters.getAuthToken, source + '-history', data, uuid)
            .then(response => {
                store.commit(source + 'store/editHistory', response.data);
            })
            .catch((error) => {
                console.log("error in " + apiName + ": " + error);
            });
    },
    deleteHistory(store, source, uuid, force = false){
        console.log("Begin: deleteHistory");
        return CommonAPI.deleteItem(store.getters.getAuthToken, source + '-history', uuid, force)
            .then(response => {
               store.commit(source + 'store/deleteHistory', uuid);
               return response;
            })
            .catch((error) => {
                console.log("error in " + apiName + ": " + error);
            });
    },
    getHistoryTypes(store, source){
        console.log("Begin: getHistoryTypes");
        let params = null;
        return CommonAPI.getAll(store.getters.getAuthToken, source + '-history-types',params)
            .then(items => {
                const clonedItems = clonedeep(items);

                store.commit(source + 'store/setHistoryTypes', clonedItems);
                return items;
            })
            .catch((error) => {
                console.log("error in " + apiName + ": " + error);
            });
    },

};

export default instance;
