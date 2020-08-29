/**
 * External dependencies
 */
import { debounce, isEmpty } from 'lodash';


export default {

	setNotifications({commit, dispatch}, payload) {
		const { notifications } = payload;

		commit('SET_NOTIFICATIONS', { notifications });

	},

	setNotification({commit, dispatch}, payload) {
		const { notification } = payload;

		commit('SET_NOTIFICATION', { notification });

	},

	clearNotifications({commit, dispatch}) {
		commit('CLEAR_NOTIFICATIONS');
	},

	clearNotification({commit, dispatch}) {
		commit('CLEAR_NOTIFICATION');
	},

	addNotification({commit, dispatch}, payload) {
		const { notification } = payload;

		commit('ADD_NOTIFICATION', { notification });
	},

	removeNotification({commit, dispatch}, payload) {
		const { notification } = payload;

		commit('REMOVE_NOTIFICATION', { notification });
	},

	setNotificationTypes({commit, dispatch}, payload) {
		const { notificationTypes } = payload;

		commit('SET_NOTIFICATION_TYPES', { notificationTypes });

	},
};
