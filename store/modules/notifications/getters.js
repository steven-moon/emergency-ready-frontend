export default {
	/**
	 * Returns the notifications.
	 *
	 * @param  {Object} state
	 * @return {Object}
	 */
	getNotifications(state) {
		return state.notifications;
	},

	/**
	 * Returns the notification.
	 *
	 * @param  {Object} state
	 * @return {Object}
	 */
	getNotification(state) {
		return state.notification;
	},
};
