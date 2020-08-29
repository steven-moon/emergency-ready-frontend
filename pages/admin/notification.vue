<template>
  <div v-if="isLoading" class="section container">
    <tile :loading="isLoading"/>
  </div>
  <div v-else class="section container" id="javascriptComponents">
    <div class="main">
      <div class="col">
        <h6>Notification Title</h6>
          <fg-input
              v-model="notificationTitle"
              placeholder="Title"
              type="text"
          ></fg-input>
      </div>
      <div class="col">
        <drop-down>
          <n-button slot="title"
                    class="dropdown-toggle notification-type"
                    type="success"
                    data-toggle="dropdown"
                    round>
            <h6 v-if="notificationType">
              {{notificationType.name}}
            </h6>
            <h6 v-else>
              Select Notification Type
            </h6>
          </n-button>
          <div v-for="type in notificationTypes" :key="type.uuid">
            <a class="dropdown-item" @click="setType(type)">{{ type.name }}</a>
          </div>
        </drop-down>
      </div>
      <div class="col quill-editor-container">
        <h6>Notification Body</h6>
        <div class="quill-editor"
             :content="notificationBody"
             @change="onEditorChange($event)"
             v-quill:myQuillEditor="editorOptions">
        </div>
      </div>
    </div>
    <div class="footer-container">
      <div class="row">
        <div class="col-6 cell submit-button">
          <span @click="saveNotification">
            <n-button type="success">
              <i class="now-ui-icons files_single-copy-04"></i> Submit
              Notification
            </n-button>
          </span>
        </div>
        <div class="col-6 cell datepicker-container">
          <fg-input>
          <el-date-picker
            type="datetime"
            popper-class="date-picker date-picker-primary"
            placeholder="Schedule Notification"
            v-model="pickers.dateTimePicker"
          >
          </el-date-picker>
        </fg-input>
        </div>
      </div>
      <div class="row">
        <div class="col-12 cell return-button">
          <span @click="returnToNotifications">
            <n-button type="success" :wide="true">
              <i class="now-ui-icons tech_mobile"></i> Return To Notifications
            </n-button>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * @ The external dependecies.
 */
import moment from "moment";
import {mapGetters} from "vuex";

/**
* @ The internal dependecies.
*/
import { Button, Modal, FormGroupInput,DropDown } from "@/components/UIKit";
import { Popover, Tooltip, DatePicker, TimeSelect } from "element-ui";

import NotificationsAPI from "@/api/NotificationsAPI";



export default {
  layout: "admin",
  middleware: ["check-auth", "auth"],
  components: {
    Modal,
    [Button.name]: Button,
    [DatePicker.name]: DatePicker,
    [FormGroupInput.name]: FormGroupInput,
    [TimeSelect.name]: TimeSelect,
    [DropDown.name]: DropDown,
  },
  data() {
    return {
      isLoading: true,
      notification: null,
      notificationTitle: null,
      notificationBody: null,
      notificationType: null,
      uuid: null,
      add: true,
      editorOptions: {
        theme: 'snow',
        modules: {
          toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            ['blockquote', 'code-block'],
            [{ 'header': 1 }, { 'header': 2 }],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['link', 'image'],
          ]
        }
      },
      modals: {
        classic: false,
      },
      pickers: {
        dateTimePicker: "",
        datePicker: "",
        timePicker: "",
      },
    };
  },
  computed: {
    ...mapGetters('notifications', {
      notificationTypes: 'getNotificationTypes',
    }),
    ...mapGetters({
      user: 'user',
    }),
  },
  methods: {
    onEditorChange({ editor, html, text }) {
      this.notificationBody = html;
      console.log("Editor text changed");
      console.log(html);
    },

    formatDate(value) {
      if(value) {
        return moment(value).format('MM/DD/YYYY hh:mm:ss');
      }else{
        return moment().format('MM/DD/YYYY hh:mm:ss');
      }
    },
    setType(type){
      this.notificationType = type;
    },
    returnToNotifications(){
      window.location.href = "/admin/notifications";
    },
    saveNotification(){
      console.log("BEGIN: saveNotifications");
      let notification = {};
      notification.title = this.notificationTitle;
      notification.body = this.notificationBody;
      notification.isHTML = 1;
      if(this.notificationType){
        notification.notification_type_id = this.notificationType.uuid;
      }else if(this.notificationTypes.count > 0){
        this.notificationType = this.notificationTypes[0];
        notification.notification_type_id = this.notificationType.uuid;
      }

      if(this.add){
        if(this.user && this.user.company_app_ids && this.user.company_app_ids.count > 0){
          notification.company_app_id = this.user.company_app_ids[0];
        }
        console.log("add notification");
        console.log(notification);

        this.isLoading = true;
        NotificationsAPI.addNotification(this.$store,notification)
            .then(notification => {
              console.log("add notification successfully")
              //this.isLoading = false;
              if (notification && notification.uuid) {
                window.location.href = "/admin/notification?id=" + notification.uuid;
              }else{
                this.isLoading = false;
              }

            })
            .catch((error) => {
              console.log("Error adding notification in notification.vue");
              console.log(error);
              this.isLoading = false;
            });
      }else{
        notification.uuid = this.uuid;
        console.log("update notification");
        console.log(notification);

        this.isLoading = true;
        NotificationsAPI.updateNotification(this.$store,notification,this.uuid)
            .then(notification => {
              console.log("update notification successfully")
              this.isLoading = false;
            })
            .catch((error) => {
              console.log("Error updating notification in notification.vue");
              console.log(error);
              this.isLoading = false;
            });
      }
    }
  },
  created(){
    if (this.$route.query.id) {
      this.uuid = this.$route.query.id;
      this.add = false;
    }else{
      this.uuid = null;
      this.add = true;
    }
  },
  mounted() {
    if(this.uuid) {
      this.isLoading = true;
      NotificationsAPI.getNotification(this.$store,this.uuid)
          .then(notification => {
            this.notification = notification;
            this.notificationBody = notification.body;
            this.isLoading = false;
            this.notificationTitle = notification.title;
            if(notification.type){
              this.notificationType = notification.type;
            }
          })
          .catch((error) => {
            console.log("Error getting notifications in notifications.vue");
            console.log(error);
            this.isLoading = false;
          });
    }else{
      this.isLoading = false;
    }

    NotificationsAPI.getNotificationTypes(this.$store);
  }
};
</script>

<style lang="scss">
#javascriptComponents {
  .modal-buttons,
  .popover-buttons,
  .tooltip-buttons {
    .btn + .btn {
      margin-left: 3px;
    }
  }
}

.main {
  height: 500px;

  h6 {
    display: block;
    font-weight: 600;
    font-size: 16px;
    color: #000;
    line-height: 1.38;
    margin-bottom: 13px;
  }
}

.notification-type{
  width: 100%;
  h6 {
    display: block;
    font-weight: 600;
    font-size: 16px;
    color: white;
    line-height: 1.38;
    margin-bottom: 13px;
  }
}

.footer-container{
  padding: 25px;

  .cell {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .submit-button{
    width: 100%;
  }

  .datepicker-container {
    width: 100%;
  }

  span {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .return-button{
    padding: 10px;

    .btn-wd{
      width: 100%;
    }
  }
}

</style>
