import axios from 'axios'
import clonedeep from 'lodash.clonedeep';

import {store} from '~/store'

function addHelperVars(item, index, arr) {
    item.editMode = false;
    item.showModal = false;
    item.selected = false;
    item.active = true;
    arr[index] = item;
}

function addUserName(item, index, arr) {
    item.name = item.person.first_name + " " + item.person.last_name;
    arr[index] = item;
}

const instance = {
    getAllPost(authToken, path, data) {
        let params = null;
        let baseUrl = this.getBaseURL(path, '', params);
        let config = this.getBaseAPIConfig(authToken);

        //axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
        axios.defaults.withCredentials = false;

        return axios.post(baseUrl, data, config)
            .then(response => {
                return response.data;
            })
            .catch((error) => {
                console.log(error);
                return error;
            });
    },
    getAll(authToken, path, params, offset = 0, limit = 200) {

        let baseUrl = this.getBaseURL(path, '', params, offset, limit);
        let config = this.getBaseAPIConfig(authToken);

        axios.defaults.withCredentials = false;

        return axios.get(baseUrl, config)
            .then(response => {
                // console.log("GetAll2");
                //             // console.log(path);
                //             // console.log(response);
                return response.data.data;
            })
            .catch((error) => {
                console.log(error);
                return error;
            });
    },
    getOne(authToken, path, uuid, withAppends = false) {
        //console.log('getAll. authToken: ' + store.getters.getAuthToken);
        let params = null;
        if (withAppends) {
            params = "?with_appends=1"
        }
        let baseUrl = this.getBaseURL(path, uuid, params);
        let config = this.getBaseAPIConfig(authToken);

        axios.defaults.withCredentials = false;

        return axios.get(baseUrl, config)
            .then(response => {
                return response.data.data;
            })
            .catch((error) => {
                console.log(error);
                return error;
            });
    },
    updateItem(authToken, path, data, uuid) {
        let params = null;
        let baseUrl = this.getBaseURL(path, uuid, params);
        let config = this.getBaseAPIConfig(authToken);

        axios.defaults.withCredentials = false;

        //console.log("updateItem. config = " + config);

        return axios.put(baseUrl, data, config)
            .then(response => {
                console.log("update item.  axios call successful");
                console.log(response);
                return response.data;
            })
            .catch((error) => {
                console.log(error);
                return error;
            });
    },
    addItem(authToken, path, data) {
        let params = null;
        let baseUrl = this.getBaseURL(path, '', params);
        let config = this.getBaseAPIConfig(authToken);

        axios.defaults.withCredentials = false;

        return axios.post(baseUrl, data, config)
            .then(response => {
                return response.data.data;
            })
            .catch((error) => {
                console.log(error);
                return error;
            });
    },
    deleteItem(authToken, path, uuid, force) {

        let params = null;
        if (force) {
            params = "?force_delete=true"
        }
        let baseUrl = this.getBaseURL(path, uuid, params);
        let config = this.getBaseAPIConfig(authToken);
        axios.defaults.withCredentials = false;

        return axios.delete(baseUrl, config)
            .then(response => {
                return response;
            })
            .catch((error) => {
                console.log(error);
                return error;
            });
    },
    getBaseURL(path, uuid, params, offset = 0, limit = 20) {
        let baseUrl = '';

        //console.log("document.domain: " + document.domain);
        if (process.env.baseUrl) {
            baseUrl = process.env.baseUrl;
        } else {
            baseUrl = 'http://localhost:8080/api/';
        }

        baseUrl = baseUrl + 'api/' + path;

        if (params && params.length > 0) {
            baseUrl = baseUrl + params;

            if (uuid != null && uuid.length > 0) {
                baseUrl = baseUrl + '&uuid=' + uuid + '&offset=' + offset + '&limit=' + limit;
            } else {
                baseUrl = baseUrl + '&offset=' + offset + '&limit=' + limit;
            }
        } else if (uuid != null && uuid.length > 0) {
            baseUrl = baseUrl + '?uuid=' + uuid + '&offset=' + offset + '&limit=' + limit;
        } else {
            baseUrl = baseUrl + '?offset=' + offset + '&limit=' + limit;
        }

        console.log("base url: " + baseUrl);
        return baseUrl;
    },
    getBaseAPIConfig(authToken) {
        //console.log('getBaseAPIConfig. authToken: ' + store.getters.getAuthToken);

        if(authToken && authToken.length > 0) {
            return {
                headers: this.getBaseHeaders(authToken),
                responseType: 'json'
            };
        }else{
            return {
                headers: this.getBaseHeadersNoAuth(),
                responseType: 'json'
            };
        }
    },
    getBaseFileAPIConfig(theStore) {
        //console.log('getBaseAPIConfig. authToken: ' + store.getters.getAuthToken);

        return {
            headers: this.getBaseFileHeaders(authToken),
            responseType: 'json'
        };
    },
    getBaseHeadersNoAuth() {

        return {
            "api-auth": "12,34,644",
        }
    },
    getBaseHeaders(authToken) {

        return {
            "api-auth": "12,34,644",
            "Authorization": "Bearer " + authToken,
            "api_token": authToken,

        }
    },
    getBaseFileHeaders(authToken) {
        console.log("getBaseFileHeaders in CommonAPI");
        return {
            "api-auth": "12,34,644",
            "Authorization": "Bearer " + authToken,
            "api_token": authToken,
            'Content-Type': 'multipart/form-data',
            'content-type': 'multipart/form-data'
        }
    },
    getBaseAPIConfigWithTransform(authToken) {
        //console.log('getBaseAPIConfig. authToken: ' + store.getters.getAuthToken);

        return {
            headers: this.getBaseHeaders(authToken),
            transformResponse: (res) => {
                res.forEach(addHelperVars);

                return res;
            },
            responseType: 'json'
        };
    },
    getAppUsers(store, authToken) {
        console.log("GetAppUsers");
        return this.getAll(authToken, 'users', "")
            .then(items => {
                //  items.forEach(addUserName);
                //console.log("get items. committing users");
                //console.log(items);
                const clonedItems = clonedeep(items);

                console.log(clonedItems);
                store.commit('setAppUsers', clonedItems);
                return items;
            })
            .catch((error) => {
                console.log("error in commonAPI getAppUsers: " + error);
                return error;
            });
    },
    login(store, email, password) {
        let baseUrl = this.getBaseURL("login", "", "");

        return axios.post(baseUrl, {email: email, password: password})
            .then(response => {
                //return response.data;
                return response.data;
            })
            .catch((error) => {
                console.log(error);
                return error;
            });
    },
    signup(store, form) {
        let baseUrl = this.getBaseURL("signup", "", "");

        axios.defaults.withCredentials = false;

        var data = {
            email: form.email,
            first_name: form.first_name,
            last_name: form.last_name,
            password: form.password,
            phone: form.phone
        };

        return axios.post(baseUrl, data)
            .then(response => {
                //return response.data;
                return response.data;

            })
            .catch((error) => {
                console.log(error);
                return error;
            });
    },
    forgotPassword(store, email) {
        let baseUrl = this.getBaseURL("generate-reset-token", "", "");

        axios.defaults.withCredentials = true;

        return axios.post(baseUrl, {email: email})
            .then(response => {
                //return response.data;
                return response.data;
            })
            .catch((error) => {
                console.log(error);
                return error;
            });
    },
    resetPassword(store, token, password) {
        let baseUrl = this.getBaseURL("reset-password", "", "");

        axios.defaults.withCredentials = false;

        return axios.post(baseUrl, {token: token, password: password})
            .then(response => {
                //return response.data;
                return response.data;
            })
            .catch((error) => {
                console.log(error);
                return error;
            });
    },
    sendContactUsForm(formData) {
        console.log('BEGIN: sendContactUsForm');
        return axios.post(
            process.env.baseUrl + "api/contact-us", formData
        )
            .then(response => {
                console.log(response);
                if (response.status >= 200 && response.status < 300) {
                    console.log("Send Contact Form Was Successful")
                } else {
                    console.log("error in sendMail: " + response.statusText);
                }
                return response;
            })
            .catch((error) => {
                console.log("error in sendMail: " + error);
                return error;
            });
    },
    sendSubscribeForm(formData) {
        console.log('BEGIN: sendSubscribeForm');
        return axios.post(
            process.env.baseUrl + "api/subscribe", formData
        )
            .then(response => {
                if (response.status >= 200 && response.status < 300) {
                    console.log(response);
                } else {
                    console.log("error in sendMail: " + response.statusText);
                }
                return response;
            })
            .catch((error) => {
                console.log("error in sendMail: " + error);
                return error;
            });
    },
};

export default instance;
