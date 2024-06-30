export default {
	reset(state) {
		console.log('Reset Page Data Store')

		//Reset data and child array to base state
	},
	addPageView(state, page) {
		let data = {
			page: page,
			timestamp: new Date().toLocaleString('en-US', { timeZone: 'America/Denver' }),
		}

		console.log("addPageView: ");
		console.log(data);
		state.pagesViewed.push(data)
	},
};
