import CommonAPI from './CommonAPI'
import clonedeep from 'lodash.clonedeep';

const models = 'users';
const path = 'users';
const model = 'user';
const setModels = 'setUsers';
const setModel = 'setUser';
const apiName = 'UserAPI';
const itemStore = 'userStore';

function addHelperVars(item, index, arr) {
    item.editMode = false;
    item.showModal =false;
    item.selected = false;
    item.active = true;
    arr[index] = item;
}


const instance = {
    getAll(store){
        let params = "?status=1&per-page=50&roles=App,Admin";
        return CommonAPI.getAll(store.getters.getAuthToken, path ,params)
            .then(items => {
                items.forEach(addHelperVars);
                console.log("get items. committing " + models);
                const clonedItems = clonedeep(items);

                store.commit(itemStore + '/' + setModels, clonedItems);
                return items;
            })
            .catch((error) => {
                console.log("error in " + apiName + ": " + error);
            });
    },
    getOne(store, itemId){
        return CommonAPI.getOne(store.getters.getAuthToken, path, itemId)
            .then(item => {
                console.log("get item. committing " + model);
                const clonedItem = clonedeep(item);
                //store.commit(itemStore + '/' + setModel, clonedItem);
                return item;
            })
            .catch((error) => {
                console.log("error in " + apiName + ": " + error);
            });
    },
    add(store, data){
        return CommonAPI.addItem(store.getters.getAuthToken, path, data)
            .then(response => {
                console.log("add response: " + JSON.stringify(response));
                //const cloneItem = clonedeep(data);
                //store.commit(itemStore + '/' + setModel, cloneItem);
                return response.data;
            })
            .catch((error) => {
                console.log("error in " + apiName + ": " + error);
            });
    },
    update(store, data, uuid){
        return CommonAPI.updateItem(store.getters.getAuthToken, path, data, uuid)
            .then(response => {
                //console.log("update response: " + response);
                //const cloneItem = clonedeep(data);
                //store.commit(itemStore + '/' + setModel, cloneItem);
                return response;
            })
            .catch((error) => {
                console.log("error in " + apiName + ": " + error);
                return error;
            });
    },
    delete(store, itemId){
        return CommonAPI.deleteItem(store.getters.getAuthToken, path, itemId)
            .then(response => {
                console.log("delete response: " + response);
                //const cloneItem = clonedeep(data);
                //store.commit(itemStore + '/' + setModel, cloneItem);
                return response;
            })
            .catch((error) => {
                console.log("error in " + apiName + ": " + error);
            });
    },

    // getUserStatuses(store){
    //     let params = null;
    //     return CommonAPI.getAll(store.getters.getAuthToken, 'user-statuses',params)
    //         .then(items => {
    //             console.log("get items. committing user-statues:");
    //             const clonedItems = clonedeep(items);
    //
    //             store.commit(itemStore + '/setUserStatuses', clonedItems);
    //             return items;
    //         })
    //         .catch((error) => {
    //             console.log("error in " + apiName + ": " + error);
    //         });
    // },

    // getDropDownValues(store){
    //     axios.all([this.getCompanyTypes(store), this.getFirstContactTypes(store),
    //     this.getUserPotentials(store), this.getSourceOfUsers(store),
    //     this.getUserStatuses(store)])
    //         .then(axios.spread(function (companyTypes, firstContactTypes, userPotentials, sourceOfUsers, userStatues) {
    //             var response = [];
    //             response['companyTypes'] = companyTypes;
    //             response['firstContactTypes'] = firstContactTypes;
    //             response['userPotentials'] = userPotentials;
    //             response['sourceOfUsers'] = sourceOfUsers;
    //             response['userStatues'] = userStatues;
    //             return response;
    //
    //         }));
    // },
    //
    // getDropDownValuesOld(store){
    //     axios.all([this.getCompanyTypes(store), this.getFirstContactTypes(store),
    //         this.getUserPotentials(store), this.getSourceOfUsers(store),
    //         this.getUserStatuses(store)])
    //         .then(axios.spread(function (companyTypes, firstContactTypes, userPotentials, sourceOfUsers, userStatues) {
    //             var response = [];
    //             response['companyTypes'] = companyTypes;
    //             response['firstContactTypes'] = firstContactTypes;
    //             response['userPotentials'] = userPotentials;
    //             response['sourceOfUsers'] = sourceOfUsers;
    //             response['userStatues'] = userStatues;
    //             return response;
    //
    //         }));
    // }



};

export default instance;
