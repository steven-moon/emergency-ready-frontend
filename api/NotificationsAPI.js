import CommonAPI from './CommonAPI'
import clonedeep from 'lodash.clonedeep';


function addHelperVars(item, index, arr) {
    item.editMode = false;
    item.showModal =false;
    item.selected = false;
    item.active = true;
    arr[index] = item;
}


const instance = {
    getNotifications(store){
        let params = "";
        return CommonAPI.getAll(store.getters.getAuthToken, notifications ,params)
            .then(items => {
                items.forEach(addHelperVars);
                console.log("get items. committing notifications");
                console.log(items);

                const clonedItems = clonedeep(items);

                store.dispatch('setNotifications', {
                    notifications: clonedItems,
                });

                return items;
            })
            .catch((error) => {
                console.log("error in NotificationAPI.js: " + error);
            });
    },
    getNotification(store, itemId){
        return CommonAPI.getOne(store.getters.getAuthToken, 'notifictions', itemId)
            .then(item => {
                console.log("get item. committing notification");
                console.log(item);

                const clonedItem = clonedeep(item);

                store.dispatch('setNotification', {
                    notification: clonedItem,
                });

                return item;
            })
            .catch((error) => {
                console.log("error in NotificationAPI.js: " + error);
            });
    },
    addNotifiction(store, data){
        return CommonAPI.addItem(store.getters.getAuthToken, 'notifictions', data)
            .then(item => {
                console.log("add notifiction: ");
                console.log(item);


                const clonedItem = clonedeep(item);
                store.dispatch('setNotification', {
                    notification: clonedItem,
                });

                return item;
            })
            .catch((error) => {
                console.log("error in NotificationAPI.js: " + error);
            });
    },
    updateNotification(store, data, uuid){
        return CommonAPI.updateItem(store.getters.getAuthToken, 'notifictions', data, uuid)
            .then(response => {
                //console.log("update response: " + response);
                //const cloneItem = clonedeep(data);
                //store.commit(itemStore + '/' + setModel, cloneItem);
                return response;
            })
            .catch((error) => {
                console.log("error in NotificationAPI.js: " + error);
                return error;
            });
    },
    deleteNotification(store, itemId){
        return CommonAPI.deleteItem(store.getters.getAuthToken, 'notifictions', itemId)
            .then(response => {
                console.log("delete response: " + response);
                //const cloneItem = clonedeep(data);
                //store.commit(itemStore + '/' + setModel, cloneItem);
                return response;
            })
            .catch((error) => {
                console.log("error in NotificationAPI.js: " + error);
            });
    },
};

export default instance;
