import axios from 'axios'
import CommonAPI from './CommonAPI'
import clonedeep from 'lodash.clonedeep';

function addHelperVars(item, index, arr) {
    arr[index] = item;
}

const apiName = 'CommentsAPI';


const instance = {

    addComment(store, source, data){
        return CommonAPI.addItem(store.getters.getAuthToken, source + '-comments', data)
            .then(response => {
                return response;
            })
            .catch((error) => {
                console.log("error in " + apiName + ": " + error);
            });
    },
    getComments(store, source, parent_uuid) {
        let params = "?parent_id=" + parent_uuid;
        return CommonAPI.getAll(store.getters.getAuthToken, source + '-comments', params)
            .then(items => {
                const clonedItems = clonedeep(items);

                store.commit(source + 'store/setComments', clonedItems);
                return items;
            })
            .catch((error) => {
                console.log("error in " + apiName + ": " + error);
            });
    },
    getComment(store, source, uuid) {
        let params = "?uuid" + uuid;
        return CommonAPI.getAll(store.getters.getAuthToken, source + '-comments', params)
            .then(items => {
                const clonedItems = clonedeep(items);

                store.commit(source + 'store/setComment', clonedItems);
                return items;
            })
            .catch((error) => {
                console.log("error in " + apiName + ": " + error);
            });
    },
    updateComment(store, source, data, uuid){
        return CommonAPI.updateItem(store.getters.getAuthToken, source + '-comments', data, uuid)
            .then(response => {
                store.commit(source + 'store/editComment', response.data);
            })
            .catch((error) => {
                console.log("error in " + apiName + ": " + error);
            });
    },
    deleteComment(store, source, uuid, force = false){
        console.log("Begin: deleteComment");
        return CommonAPI.deleteItem(store.getters.getAuthToken, source + '-comments', uuid, force)
            .then(response => {
                store.commit(source + 'store/deleteComment', uuid);
                return response;
            })
            .catch((error) => {
                console.log("error in " + apiName + ": " + error);
            });
    },

};

export default instance;
