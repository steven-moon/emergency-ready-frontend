/**
 * External dependencies.
 */
import Vue from 'vue';

export default {
	CLEAR_NOTIFICATIONS(state) {
		state.notifications = [];
	},

	CLEAR_NOTIFICATION(state) {
		state.notifications = null;
	},

	ADD_NOTIFICATION(state, payload) {
		const { notification } = payload;

		state.notifications.push(notification);
	},

	REMOVE_NOTIFICATION(state, payload) {
		const { notification } = payload;

		//Vue.delete(state.snapshots, snapshot.id);
	},

	SET_NOTIFICATIONS(state, payload) {
		const {notifications} = payload;

		state.notifications = notifications;
	},

	SET_NOTIFICATION(state, payload) {
		const {notification} = payload;

		state.notification = notification;
	},
};
