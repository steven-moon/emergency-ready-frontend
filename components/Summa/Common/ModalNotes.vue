<template>
      <transition  v-else name="modal">
         <div class="modal-mask">
            <div @click="closeModal" class="modal__overlay"></div>
            <div class="modal-wrapper modal-notes">
               <div v-if="isLoading">
                  <tile :loading="isLoading"/>
               </div>
               <div class="modal-container" v-else>
                  <div class="modal__head">
                     <div class="modal__head-actions">
                        <button @click="addNewNote" class="btn btn--with-icon btn--add">
                           <i class="ico-plus">
                              <svg height="14" viewBox="0 0 14 14" width="14" xmlns="http://www.w3.org/2000/svg">
                                 <path
                                    d="M8.4 8.4v4.599A1 1 0 0 1 7.405 14h-.81a.993.993 0 0 1-.995-1.001V8.4H1.001A1 1 0 0 1 0 7.405v-.81c0-.55.44-.995 1.001-.995H5.6V1.001A1 1 0 0 1 6.595 0h.81c.55 0 .995.44.995 1.001V5.6h4.599A1 1 0 0 1 14 6.595v.81c0 .55-.44.995-1.001.995H8.4z"
                                    fill="#1D6383" fill-rule="evenodd"/>
                              </svg>
                           </i>

                           <span>Add Note</span>
                        </button>
                     </div>

                     <div class="modal__head-title">
                        <h5>Notes on Employee</h5>
                     </div>
                  </div>

                  <div class="modal__body">
                     <div class="list-notes">
                        <ul>
                           <li :class="{current: note.current}" :key="note.uuid" v-for="note in notes"
                               v-if="!note.deleted">
                              <a @click="setVisibleNote(note.uuid)" href="#">
                                 <h6>{{note.title}}</h6>

                                 <p>{{note.updated_at | formatDate }}</p>
                              </a>
                           </li>
                        </ul>
                     </div>

                     <div class="note-container">
                        <template v-if="addNoteState">
                           <div class="note">
                              <div class="note__body">
                                 <label class="form__label hidden" for="field-new-note-title">new-note-title</label>

                                 <div class="form__controls">
                                    <input class="field" id="field-new-note-title" name="field-new-note-title"
                                           placeholder="Note Title"
                                           type="text" v-model="currentNote.title">
                                 </div>

                                 <label class="form__label hidden" for="field-new-note-desc">note-desc</label>

                                 <div class="form__controls">
                                 <textarea class="textarea" id="field-new-note-desc" name="field-new-note-desc"
                                           placeholder="This is note description" v-model="currentNote.body"></textarea>
                                 </div>
                              </div>

                              <div class="note__actions">
                                 <ul>
                                    <li>
                                       <button @click="save" class="btn  btn--medium">
                                          <span class="text">Create note</span>
                                       </button>
                                    </li>
                                    <li>
                                       <button @click="closeModal" class="btn btn--medium">
                                          <span class="text">Close Notes</span>
                                       </button>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                        </template>

                        <template v-if="!addNoteState">
                           <template v-if="editMode === false">
                              <div class="note">
                                 <div class="note__body">
                                    <div class="note__content">
                                       <h6>Title</h6>
                                       <h5>{{currentNote.title}}</h5>
                                       <h6>Description</h6>
                                       <p>{{currentNote.body | truncate}}</p>
                                    </div>
                                 </div>

                                 <div class="note__actions">
                                    <ul>
                                       <li>
                                          <button @click="removeNote"
                                                  class="btn btn--with-icon btn--remove btn--medium">
                                             <i class="ico-close-red">
                                                <svg height="16" viewBox="0 0 16 16" width="16"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                   <path
                                                      d="M16 1.611L14.389 0 8 6.389 1.611 0 0 1.611 6.389 8 0 14.389 1.611 16 8 9.611 14.389 16 16 14.389 9.611 8z"
                                                      fill="#F03E41" fill-rule="evenodd"/>
                                                </svg>
                                             </i>

                                             <span class="text">Delete</span>
                                          </button>
                                       </li>


                                       <li>
                                          <button @click="toggleEdit"
                                                  class="btn btn--with-icon btn--edit btn--medium">
                                             <i class="ico-pen">
                                                <svg height="17" width="16" xmlns="http://www.w3.org/2000/svg"
                                                     xmlns:xlink="http://www.w3.org/1999/xlink">
                                                   <g fill="#1D6283" fill-rule="evenodd">
                                                      <path
                                                         d="M0 14.067v3.43h3.333l9.83-10.118L9.83 3.948 0 14.067zm15.74-9.342a.93.93 0 0 0 0-1.29l-2.08-2.14a.867.867 0 0 0-1.253 0l-1.626 1.674 3.333 3.43 1.626-1.674z"/>
                                                   </g>
                                                </svg>
                                             </i>

                                             <span class="text">Edit</span>
                                          </button>
                                       </li>

                                       <li>
                                          <button @click="closeModal" class="btn btn--medium">
                                             <span class="text">Close Notes</span>
                                          </button>
                                       </li>
                                    </ul>
                                 </div>
                              </div>
                           </template>

                           <template v-if="editMode === true">
                              <div class="note">
                                 <div class="note__body">
                                    <label class="form__label hidden" for="field-note-title">note-title</label>

                                    <div class="form__controls">
                                       <input class="field" id="field-note-title" name="field-note-title"
                                              placeholder="Note Title"
                                              type="text" v-model="currentNote.title">
                                    </div>

                                    <label class="form__label hidden" for="field-note-desc">note-desc</label>

                                    <div class="form__controls">
                                    <textarea class="textarea" id="field-note-desc" name="field-note-desc"
                                              placeholder="This is note description"
                                              v-model="currentNote.body"></textarea>
                                    </div>
                                 </div>

                                 <div class="note__actions">
                                    <ul>
                                       <li>
                                          <button @click="togglePrintView" class="btn btn--medium">
                                             <span class="text">Cancel</span>
                                          </button>
                                       </li>

                                       <li>
                                          <button @click="save" class="btn btn--medium">
                                             <span class="text">Save</span>
                                          </button>
                                       </li>

                                       <li>
                                          <button @click="closeModal" class="btn btn--medium">
                                             <span class="text">Close Notes</span>
                                          </button>
                                       </li>
                                    </ul>
                                 </div>
                              </div>
                           </template>
                        </template>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </transition>
</template>

<script>
   import {mapActions} from "vuex";
   import clonedeep from 'lodash.clonedeep';
   import NoteAPI from '~/api/NoteAPI';
   import moment from 'moment';

   export default {

      name: 'Modal',
      props: [
         "notes", "apiPath", "parentId", "parentFieldName","getEndpoint","noteSetPath","parentName"
      ],
      filters: {
         formatDate(value) {
            if (value) {
               return moment(value).format('MMM D')

            }
         },
         truncate: function(value) {
            if (value.length > 600) {
               value = value.substring(0, 599) + '...';
            }
            return value
         }
      },


      data() {
         return {
            addNoteState: true,
            editMode: false,
            isLoading: false,
            isFormNotesVisible: false,
            currentNote: {
               uuid: '-1',
               edit: false,
               title: '',
               body: '',
               deleted: false,
               current: false,
            }
         }
      },

      methods: {
         ...mapActions([
            'addObject',
            'removeObject',
            'updateObject'
         ]),
         closeModal() {
            this.$emit("closeModal")
         },
         toggleEdit() {
            console.log("Toggle Edit");
            this.editMode = true;

         },
         togglePrintView() {
            console.log("togglePrintView");
            // RESET THE NOTE OBJECT
            this.currentNote = clonedeep(this.notes.find(note => note.current === true));
            this.editMode = false;
         },
         assignNoteData() {
            console.log("assignNoteData");
            this.currentNote = clonedeep(this.notes.find(note => note.current === true));
         },
         setVisibleNote(uuid) {
            console.log("Set Visible Note");
            console.log(uuid);
            this.addNoteState = false;
            this.notes.filter((note) => {
               if (note.uuid === uuid) {
                  //console.log("found match");
                  note.current = true;
                  this.currentNote = clonedeep(note);
                  this.editMode = false;
               } else {
                  //console.log("Not a Match")
                  note.current = false
               }
            });
            //this.assignNoteData();
         },

         addNewNote() {
            console.log("addNewNote");
            this.addNoteState = true;
            this.notes.forEach(note => {
               note.current = false
            });

            this.currentNote = {
               uuid: '-1',
               edit: false,
               title: '',
               body: '',
               current: true,
               deleted: false,
            }
         },
         formatDay(d) {
            if (d > 3 && d < 21) return 'th';
            switch (d % 10) {
               case 1:
                  return "st";
               case 2:
                  return "nd";
               case 3:
                  return "rd";
               default:
                  return "th";
            }
         },
         setCurrentNoteStatus(uuid) {
            this.addNoteState = false;
            var findReplacement = false;
            if (uuid === null) {
               findReplacement = true;
            }
            this.notes.forEach(note => {
               if (uuid != null && note.uuid === uuid) {
                  note.current = true;
                  this.currentNote = clonedeep(note);
               } else if (findReplacement) {
                  findReplacement = false;
                  note.current = true;
                  this.currentNote = clonedeep(note);
               } else {
                  note.current = false;
               }
            });

            if (findReplacement) {
               this.addNoteState = true;
               this.currentNote = {
                  uuid: '-1',
                  edit: false,
                  title: '',
                  body: '',
                  current: true,
                  deleted: false,
               }
            }
         },
         removeNote() {
            this.isLoading = true;
            console.log("removeNote");
            //this.$emit("removeNote");
            this.editMode = false;
            this.currentNote.deleted = true;
            NoteAPI.deleteNote(this.$store, this.apiPath, this.currentNote.uuid, false)
               .then(response => {
                  console.log("delete response: ");
                  console.log(response);
                  this.updateNotesFromServer(null);

               })
               .catch((error) => {
                  console.log("error in removeNote: " + error);
                  this.isLoading = false;
               });
         },
         forceDelete() {
            this.isLoading = true;
            console.log("forceDelete");
            this.editMode = false;
            NoteAPI.deleteNote(this.$store, this.apiPath, this.currentNote.uuid, true)
               .then(response => {
                  console.log("delete response: ");
                  console.log(response);
                  this.updateNotesFromServer(null);
               })
               .catch((error) => {
                  console.log("error in forceDelete: " + error);
                  this.isLoading = false;
               });
         },
         save() {
            this.isLoading = true;
            console.log("save");
            this.isLoading = true;
            this.editMode = false;
            console.log("Begin Save");
            const updatedNote = clonedeep(this.currentNote);
            updatedNote[this.parentFieldName] = this.parentId;

            if (updatedNote.uuid !== "-1") {
               console.log("Update Note");
               NoteAPI.updateNote(this.$store, this.apiPath, updatedNote, updatedNote.uuid)
                  .then(response => {
                     if (response.status === 'success') {
                        this.updateNotesFromServer(updatedNote.uuid);
                     } else {
                        this.isLoading = false;
                     }
                  })
                  .catch((error) => {
                     this.isLoading = false;
                     console.log("error in updateNote: " + error);
                  });
            } else {
               console.log("Add Note");
               NoteAPI.addNote(this.$store, this.apiPath, updatedNote)
                  .then(response => {
                     console.log(response);
                     //this.$emit('switchToPrintMode');
                     if (response.status === 'success') {
                        this.updateNotesFromServer(null);
                     } else {
                        this.isLoading = false;
                     }
                  })
                  .catch((error) => {
                     this.isLoading = false;
                     console.log("error in Add Note: " + error);
                  });
            }
         },
         updateNotesFromServer(current_uuid) {
            console.log("updateNotes from Server");
            this.isLoading = true;
            var params = "?" + this.parentFieldName + "="  + this.parentId;
            console.log(params);
            NoteAPI.getNotes(this.$store, this.getEndpoint, this.noteSetPath, params)
               .then(response => {
                  //console.log(response);
                  if (current_uuid === null) {
                     this.setCurrentNoteStatus(null);
                  } else {
                     this.setCurrentNoteStatus(current_uuid);
                  }
                  this.isLoading = false;
               })
               .catch((error) => {
                  console.log("error in update notes from server: " + error);
                  this.isLoading = false;
               });

         }
      }
   }
</script>
