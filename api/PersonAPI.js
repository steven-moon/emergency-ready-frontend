import axios from 'axios';
import CommonAPI from './CommonAPI';
import AttachmentsAPI from './AttachmentsAPI';
import CommentsAPI from './CommentsAPI';
import HistoryAPI from './HistoryAPI';
import clonedeep from 'lodash.clonedeep';

const models = 'people';
const path = 'people';
const model = 'person';
const setModels = 'setPeople';
const setModel = 'setPerson';
const apiName = 'PersonAPI';
const itemstore = 'personstore';

function addHelperVars(item, index, arr) {
    item.editMode = false;
    item.showModal = false;
    item.selected = false;
    item.active = true;
    arr[index] = item;
}


const instance = {
    getPeople(store) {
        let params = "?person_status=Active&per-page=50";
        return CommonAPI.getAll(store.getters.getAuthToken, path, params)
            .then(items => {
                items.forEach(addHelperVars);
                console.log("get items. committing " + models);
                const clonedItems = clonedeep(items);

                store.commit(itemstore + '/' + setModels, clonedItems);
                return items;
            })
            .catch((error) => {
                console.log("error in " + apiName + ": " + error);
            });
    },
    getPerson(store, uuid) {
        return CommonAPI.getOne(store.getters.getAuthToken, path, uuid)
            .then(item => {
                console.log("get person. committing " + model);
                console.log(item);
                const clonedItem = clonedeep(item);
                console.log(item);
                store.commit(itemstore + '/' + setModel, clonedItem);
                return item;
            })
            .catch((error) => {
                console.log("error in " + apiName + ": " + error);
            });
    },
    addPerson(store, data) {
        return CommonAPI.addItem(store.getters.getAuthToken, path, data)
            .then(response => {
                //console.log("add response: " + JSON.stringify(response));
                //const cloneItem = clonedeep(data);
                //store.commit(itemstore + '/' + setModel, cloneItem);
                return response;
            })
            .catch((error) => {
                console.log("error in " + apiName + ": " + error);
            });
    },
    updatePerson(store, data, itemId) {
        //console.log("PersonAP. updatePerson called. data = " + JSON.stringify(data));
        return CommonAPI.updateItem(store.getters.getAuthToken, path, data, itemId)
            .then(response => {
                //console.log("update response: " + response);
                //const cloneItem = clonedeep(data);
                //store.commit(itemstore + '/' + setModel, cloneItem);
                return response;
            })
            .catch((error) => {
                console.log("error in " + apiName + ": " + error);
            });
    },
    deletePerson(store, itemId) {
        return CommonAPI.deleteItem(store.getters.getAuthToken, path, itemId)
            .then(response => {
                console.log("delete response: " + response);
                //const cloneItem = clonedeep(data);
                //store.commit(itemstore + '/' + setModel, cloneItem);
                return response;
            })
            .catch((error) => {
                console.log("error in " + apiName + ": " + error);
            });
    },

    getPersonStatuses(store) {
        let params = null;
        return CommonAPI.getAll(store.getters.getAuthToken, 'people-statuses', params)
            .then(items => {
                console.log("get items. committing people-statues:");
                const clonedItems = clonedeep(items);

                store.commit(itemstore + '/setPeopleStatuses', clonedItems);
                return items;
            })
            .catch((error) => {
                console.log("error in " + apiName + ": " + error);
            });
    },

    getValues(store, taskId) {
        axios.all([this.getDropDownValues(store), this.getChildrenRecords(store, taskId)]);
    },

    getDropDownValues(store) {
        return axios.all([
            this.getPersonStatuses(store),
            HistoryAPI.getHistoryTypes(store, 'person')]
        )
            .then(axios.spread(function (personStatuses) {
                var response = [];
                response['personStatuses'] = personStatuses;
                response['status'] = "success";
                return response;

            }));
    },

    getChildrenRecords(store, uuid) {
        return axios.all([
            AttachmentsAPI.getAttachments(store, 'person', uuid),
            CommentsAPI.getComments(store, 'person', uuid),
            HistoryAPI.getHistory(store, 'person', uuid)]
        )
            .then(axios.spread(function (files, comments, history) {
                var response = [];
                response['files'] = files;
                response['comments'] = comments;
                response['history'] = history;
                response['status'] = "success";
                console.log("BEGIN: getChildren in response");
                console.log(response);
                return response;

            }));
    },
};

export default instance;
