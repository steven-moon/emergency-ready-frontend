<template>
  <div v-if="isLoading" class="section">
    <tile :loading="isLoading"/>
  </div>
  <div v-else class="section">
    <div class="container">
      <div class="col-md-10 ml-auto mr-auto">

        <h2 class="category text-success">Notification Types</h2>
      </div>
          <div class="create-notification">
            <n-button
              type="success"
              round
              simple
              @click.native="createNotificationType"
            >
              <i class="now-ui-icons"></i> Create Notification Type
            </n-button>
          </div>
          <card class="card-plain">
            <div class="row" v-for="type in tableData" :key="type.uuid">
              <div class="col-9">
                <fg-input
                    v-model="type.name"
                    placeholder="Title"
                    type="text"
                    @input="inputChanged(type)"
                ></fg-input>
              </div>
              <div v-if="showSaveButton(type)" class="col-3">
                <span @click="() => updateNotificationType(type)">
                  <n-button type="success" round simple size="sm" icon>
                    <i class="now-ui-icons education_agenda-bookmark"></i>
                  </n-button>
                </span>
              </div>
              <div v-else class="col-3">
                <span v-if="type.uuid !== 'new'" @click="() => handleDelete(type)">
                  <n-button type="danger" round simple size="sm" icon>
                    <i class="now-ui-icons ui-1_simple-remove"></i>
                  </n-button>
                </span>
              </div>
            </div>
          </card>
    </div>
  </div>
</template>
<script>
import moment from 'moment';

import {
  Card,
  Button,
  Modal,
  DropDown,
  Tabs,
  TabPane,
} from "@/components";
import {
  Tooltip,
} from "element-ui";

import NotificationsAPI from "~/api/NotificationsAPI";


export default {
  layout: "admin",
  middleware: ["check-auth", "auth"],
  components: {
    Card,
    Modal,
    [Tooltip.name]: Tooltip,
    [Button.name]: Button,
    [DropDown.name]: DropDown,
    Tabs,
    TabPane,
  },
  data() {
    return {
      isLoading: true,
      modalNotice: false,
      modalDelete: false,
      selectedRow: null,
      notificationTypes: []
    };
  },
  computed: {
    tableData(){
      let data = [];

      this.notificationTypes.forEach(type => {
        let row = {};
        row.uuid = type.uuid;
        row.name = type.name;
        row.originalName = type.originalName;
        data.push(row);
      })

      return data;
    }
  },
  methods: {
    handleDelete(row) {
      console.log("Handle Delete");
      this.selectedRow = row;

      if (confirm("Deleting a notification can not be undone.  It will remove the notification in the admin and from inside your users app.  Press OK to delete.")) {
        this.deleteConfirmed()
      } else {
        console.log("Delete Canceled")
      }

    },
    deleteConfirmed(){
      console.log("Delete Confirmed");
      this.isLoading = true;
      NotificationsAPI.deleteNotificationType(this.$store, this.selectedRow.uuid)
          .then(response => {
            this.removeSelectedRow();
            this.isLoading = false;
          })
          .catch((error) => {
            console.log("Error deleting Notification in notifications.vue");
            console.log(error);
            alert(error);
            this.isLoading = false;
          });
    },

    removeSelectedRow(){
      console.log(this.selectedRow);
      for(let i = 0; i < this.notificationTypes.length; i++) {
        if(this.notificationTypes[i].uuid === this.selectedRow.uuid) {
          this.notificationTypes.splice(i, 1);
          break;
        }
      }

      this.selectedRow = null;
    },

    handleEdit(index, row) {
      console.log("Handle Edit");
      console.log(row);
      window.location.href = "/admin/notification?id=" + row.uuid;
    },

    createNotificationType(){
      console.log("Create Notification Type");
      this.notificationTypes.unshift({"name":"","uuid":"new","originalName":"123new"})
    },

    showSaveButton(type){
      return type.originalName.localeCompare(type.name);
    },

    updateNotificationType(type){
      console.log("Update Notification Type");
      this.isLoading = true;
      if(type.uuid !== 'new'){
        NotificationsAPI.updateNotificationType(this.$store, type,type.uuid)
            .then(response => {
              console.log("update notification successfully");
              console.log(response);
              this.isLoading = false;
              type.originalName = type.name;
            })
            .catch((error) => {
              console.log("Error adding notification in notification.vue");
              console.log(error);
              this.isLoading = false;
            });
      }else{
        let notification = {"name":type.name};
        NotificationsAPI.addNotificationType(this.$store, notification)
            .then(notification => {
              console.log("add notification successfully")
              window.location.href = "/admin/notification-types";
            })
            .catch((error) => {
              console.log("Error adding notification in notification.vue");
              console.log(error);
              this.isLoading = false;
            });
      }
    },

    inputChanged(item){
      this.notificationTypes.forEach(type => {
        if(type.uuid === item.uuid) {
          type.name = item.name;
        }
      });
    },


    formatDate(value) {
      if(value) {
        return moment(value).format('M/D/YYYY');
      }else{
        return moment().format('M/D/YYYY');
      }
    }
  },
  mounted() {
    this.isLoading = true;
    NotificationsAPI.getNotificationTypes(this.$store)
        .then(notificationTypes => {
          this.notificationTypes = notificationTypes;
          this.notificationTypes.forEach(type => {
              type.originalName = type.name;
          });
          this.isLoading = false;
        })
        .catch((error) => {
          console.log("Error getting notification types in notification-types.vue");
          console.log(error);
          this.isLoading = false;
        });

  }
};
</script>
<style lang="scss" scoped>
.create-notification {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

hr {
  border-top: 1px solid #f0f0f000;
}

.html-picker {
  margin-left: 8px;
  display: flex;
  align-items: center;
  label {
    margin-right: 16px;
  }
}

.footer-container {
  margin-top: 32px;
  display: flex;
  justify-content: flex-end;
}

.create-notification__textarea {
  width: 100%;
  padding: 10px 18px 10px 18px;
  background-color: transparent;
  border: 1px solid #e3e3e3;
  border-radius: 20px;
  color: #2c2c2c;
  line-height: normal;
  font-size: 0.8571em;
  transition: color 0.3s ease-in-out, border-color 0.3s ease-in-out,
    background-color 0.3s ease-in-out;
}

.send-later__container {
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  button {
    margin: 0;
    margin-bottom: 10px;
  }
  .highlighted {
    background-color: gray;
  }
}
</style>
