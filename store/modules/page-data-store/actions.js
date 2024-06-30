export default {
	reset({ commit }) {
		commit('reset')
	},
	addPageView({ commit, state }, page) {
		commit("addPageView", page);
	},
};
