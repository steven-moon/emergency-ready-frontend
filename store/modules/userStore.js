const namespaced = true;

const ADD_OBJECT = 'ui/add-object';
const REMOVE_OBJECT = 'ui/remove-object';
const UPDATE_OBJECT = 'ui/update-object';

const updateData = (
    state,
    item,
    array
) => {
    const index = state[array].findIndex(el => el.id === item.id);
    state[array].splice(index, 1, item);
};

const addData = (
    state,
    obj,
    array
) => {
    state[array].unshift(obj);
};

const removeData = (
    state,
    id,
    array
) => {
    const index = state[array].findIndex(item => item.id === id);

    state[array].splice(index, 1);
};


export default {
    namespaced,
    state: {
        dataList: null,
        editedIndex: null,
        notes: [],
    },
    getters: {
        dataList: state => state.dataList,
        notes: state => state.notes,
        editedIndex: state => state.editedIndex,
        currentItem: state => state.dataList[0],
        //currentEnv: (state, getters, rootState, rootGetters) => rootState.env // accessing a property from the "root" state
    },
    mutations: {
       reset(state){
          console.log("Reset board");
          state.editedIndex = null;
          state.notes = [];
          state.dataList = null;

       },
        setDataList(state, dataList) {
            state.dataList = dataList;
        },
        setEditedIndex(state, index) {
            state.editedIndex = index;
        },
        setCurrentItem(state, currentItem) {
            state.currentItem = currentItem;
        },


        [ADD_OBJECT]: (state, payload) => addData(state, payload.item, payload.selector),

        [REMOVE_OBJECT]: (state, payload) => removeData(state, payload.id, payload.selector),

        [UPDATE_OBJECT]: (state, payload) => updateData(state, payload.item, payload.selector),
    },
    actions: {
       reset({commit}) {
          commit('reset');
       },
        setDataList({ commit }, payload) {
            commit('setDataList', payload );
        },
        setEditedIndex({ commit }, payload) {
            commit('setEditedIndex', payload );
        },
        setCurrentItem({ commit }, payload) {
            commit('setCurrentItem', payload );
        },
        setNotes({ commit }, payload) {
            commit('setNotes', payload );
        },

        addObject({commit}, payload) {
            commit(ADD_OBJECT, payload)
        },

        removeObject({commit}, payload) {
            commit(REMOVE_OBJECT, payload)
        },

        updateObject({commit}, payload) {
            commit(UPDATE_OBJECT, payload)
        },
    }
};




