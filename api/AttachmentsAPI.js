import axios from 'axios'
import CommonAPI from './CommonAPI'
import clonedeep from 'lodash.clonedeep';

function addHelperVars(item, index, arr) {
    arr[index] = item;
}


const instance = {

    addAttachment(store, source, data){
        return CommonAPI.addItem(store.getters.getAuthToken, source + '-attachments', data)
            .then(response => {
                return response;
            })
            .catch((error) => {
                console.log("error in " + apiName + ": " + error);
            });
    },
    getAttachments(store, source, parent_uuid) {
        let params = "?parent_id=" + parent_uuid;
        return CommonAPI.getAll(store.getters.getAuthToken, source + '-attachments', params)
            .then(items => {
                const clonedItems = clonedeep(items);

                store.commit(source + 'store/setAttachments', clonedItems);
                return items;
            })
            .catch((error) => {
                console.log("error in " + apiName + ": " + error);
            });
    },
    getAttachment(store, source, uuid) {
        let params = "?uuid" + uuid;
        return CommonAPI.getAll(store.getters.getAuthToken, source + '-attachments', params)
            .then(items => {
                return items;
            })
            .catch((error) => {
                console.log("error in " + apiName + ": " + error);
            });
    },
    updateAttachment(store, source, data, uuid){
        console.log("Begin: updateAttachment");
        //console.log("CompanyAP. updateCompany called. data = " + JSON.stringify(data));
        return CommonAPI.updateItem(store.getters.getAuthToken, source + '-attachments', data, uuid)
            .then(items => {
                // const clonedItems = clonedeep(items);
                //
                // store.commit(source + 'store/setAttachments', clonedItems);
                return items;
            })
            .catch((error) => {
                console.log("error in " + apiName + ": " + error);
            });
    },
    deleteAttachment(store, source, uuid, force = false){
        console.log("Begin: deleteAttachment");
        return CommonAPI.deleteItem(store.getters.getAuthToken, source + '-attachments', uuid, force)
            .then(response => {
                console.log("delete response: ");
                console.log(response);
                // const cloneItem = clonedeep(data);
                // store.commit(itemstore + '/' + setModel, cloneItem);
                return response;
            })
            .catch((error) => {
                console.log("error in " + apiName + ": " + error);
            });
    },

};

export default instance;
