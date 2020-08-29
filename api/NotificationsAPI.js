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
        return CommonAPI.getAll(store.getters.getAuthToken, 'notifications' ,params)
            .then(items => {
                items.forEach(addHelperVars);
                console.log("get items. committing notifications");
                console.log(items);

                if(items) {
                    const clonedItems = clonedeep(items);

                    store.dispatch('notifications/setNotifications', {
                        notifications: clonedItems,
                    });

                    return items;
                }else{
                    return [];
                }
            })
            .catch((error) => {
                console.log("error in NotificationAPI.js: " + error);
                return error;
            });
    },
    getNotification(store, itemId){
        return CommonAPI.getOne(store.getters.getAuthToken, 'notifications', itemId)
            .then(item => {
                console.log("get item. committing notification");
                console.log(item);

                const clonedItem = clonedeep(item);

                store.dispatch('notifications/setNotification', {
                    notification: clonedItem,
                });

                return item;
            })
            .catch((error) => {
                console.log("error in NotificationAPI.js: " + error);
            });
    },
    addNotification(store, data){
        return CommonAPI.addItem(store.getters.getAuthToken, 'notifications', data)
            .then(item => {
                console.log("add notifiction: ");
                console.log(item);


                const clonedItem = clonedeep(item);
                store.dispatch('notifications/setNotification', {
                    notification: clonedItem,
                });

                return item;
            })
            .catch((error) => {
                console.log("error in NotificationAPI.js: " + error);
            });
    },
    updateNotification(store, data, uuid){
        return CommonAPI.updateItem(store.getters.getAuthToken, 'notifications', data, uuid)
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
        return CommonAPI.deleteItem(store.getters.getAuthToken, 'notifications', itemId)
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
    getNotificationTypes(store){
        let params = "";
        return CommonAPI.getAll(store.getters.getAuthToken, 'notification-types' ,params)
            .then(items => {
                items.forEach(addHelperVars);
                console.log("get items. committing notification types");
                console.log(items);

                if(items) {
                    const clonedItems = clonedeep(items);

                    store.dispatch('notifications/setNotificationTypes', {
                        notificationTypes: clonedItems,
                    });

                    return items;
                }else{
                    return [];
                }
            })
            .catch((error) => {
                console.log("error in NotificationAPI.js: " + error);
                return error;
            });
    },
};

export default instance;
