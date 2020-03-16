const namespaced = true;
import clonedeep from 'lodash.clonedeep';

export default {
   namespaced,
   state: {
      people: [],
      editedPersonIndex: null,
      notes: [],
      contacts: [],
      personStatuses: [],
      person: {uuid: "-1", first_name: "", last_name: "", email: "", phone: ""},
      emptyPerson: {uuid: "-1", first_name: "", last_name: "", email: "", phone: ""},
      history: [],
      historyTypes: [],
      attachments: [],
      comments: [],
   },
   getters: {
      person(state) {
         return state.person
      },
      people(state) {
         return state.people
      },
      personStatuses(state){
         return state.personStatuses
      },
      editedPersonIndex(state) {
         return state.editedPersonIndex
      },
      notes(state) {
         return state.notes;
      },
      contacts(state) {
         return state.contacts;
      },
      history(state) {
         return state.history;
      },
      historyTypes(state){
         return state.historyTypes;
      },
      attachments(state) {
         return state.attachments;
      },
      comments(state) {
         return state.comments;
      },
   },
   mutations: {
      reset(state) {
         console.log("Reset People Store");
         state.people = [];
         state.person = clonedeep(state.emptyPerson);
         state.personStatuses = [];
         state.editedPersonIndex = null;
         state.notes = [];
         state.contacts = [];
         state.history = [];
         state.attachments = [];
         state.comments = [];
      },
      resetChildren(state){
         console.log("BEGIN: resetChildren in personstore");
         state.notes = [];
         state.contacts = [];
         state.history = [];
         state.attachments = [];
         state.comments = [];
      },
      setPerson(state, person) {
         state.person = person;
      },
      setPeople(state, people) {
         state.people = people;
      },
      setPersonStatuses(state, personStatuses){
         state.personStatuses = personStatuses;
      },
      setEditedPersonIndex(state, index) {
         state.editedPersonIndex = index;
      },
      setNotes(state, notes) {
         state.notes = notes;
      },
      setContacts(state, contacts) {
         state.contacts = contacts;
      },
      setHistory(state, history) {
         state.history = history;
      },
      setHistoryTypes(state, historyTypes) {
         state.historyTypes = historyTypes;
      },
      setAttachments(state, attachments) {
         state.attachments = attachments;
      },
      setComments(state, comments) {
         state.comments = comments;
      },

      editComment(state, newComment) {
         const comments = state.comments;
         const commentIndex = comments.findIndex(comment => comment.id === newComment.id);

         comments[commentIndex] = newComment;

         commit('setComments', comments);
      },

      deleteComment(state, uuid) {
         let comments = state.comments;
         const commentIndex = comments.findIndex(comment => comment.uuid === uuid);

         comments.splice(commentIndex, 1);

         commit('setComments', comments);
      },

      editHistory(state, newHistoryItem) {
         const history = state.history;
         const historyItemIndex = history.findIndex(historyItem => historyItem.id === newHistoryItem.id);

         history[historyItemIndex] = newHistoryItem;

         commit('setHistory', history);
      },

      deleteHistory(state, uuid) {
         let history = state.history;
         const historyItemIndex = history.findIndex(historyItem => historyItem.uuid === uuid);

         history.splice(historyItemIndex, 1);

         commit('setHistory', history);
      }
   },
   actions: {
      reset({commit}) {
         commit('reset');
      },
      resetChildren({commit}) {
         commit('resetChildren');
      },
      setPerson({commit}, payload) {
         commit('setPerson', payload);
      },
      setPeople({commit}, payload) {
         commit('setPeople', payload);
      },
      setPersonStatuses({commit}, payload) {
         commit('setPersonStatuses', payload);
      },
      setEditedPersonIndex({commit}, payload) {
         commit('setEditedPersonIndex', payload);
      },
      setNotes({commit}, payload) {
         commit('setNotes', payload);
      },
      setContacts({commit}, payload) {
         commit('setContacts', payload);
      },
      setHistory({commit}, payload) {
         commit('setHistory', payload);
      },
      setHistoryTypes({commit}, payload) {
         commit('setHistoryTypes', payload);
      },
      setAttachments({commit}, payload) {
         commit('setAttachments', payload);
      },
      setComments({commit}, payload) {
         commit('setComments', payload);
      },
   }
};



