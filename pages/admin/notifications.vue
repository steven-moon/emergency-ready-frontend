<template>
  <div v-if="isLoading" class="section">
    <tile :loading="isLoading"/>
  </div>
  <div v-else class="section">
    <div class="container">
      <div class="col-md-10 ml-auto mr-auto">
        <card type="blog">
          <h6 class="category text-primary">Notifications Portal</h6>
          <h5 class="card-title">
            This Is Your One-Way Communication With Your Community.
          </h5>
          <div class="card-footer">
            <div class="author">
              <img
                v-lazy="'img/mike.jpg'"
                alt="..."
                class="avatar img-raised"
              />
              <span>Steve M.</span>
            </div>
            <div class="stats stats-right">
              <i class="now-ui-icons tech_watch-time"></i> Last notification
              sent 5 minutes ago
            </div>
          </div>
        </card>
      </div>
      <tabs type="success" class="col-md-10 ml-auto mr-auto">
        <tab-pane label="Scheduled">
          <div class="create-notification">
            <n-button
              type="success"
              round
              simple
              @click.native="createNotification"
            >
              <i class="now-ui-icons"></i> Create Notification
            </n-button>
          </div>
          <card class="card-plain">
            <div class="row">
              <div class="col-sm-12">
                <el-table ref="scheduledTable" :data="tableData">
                  <el-table-column
                    min-width="50"
                    type="index"
                  ></el-table-column>
                  <el-table-column
                    min-width="200"
                    align="left"
                    prop="title"
                    label="Title"
                  >
                  </el-table-column>
                  <el-table-column
                    min-width="120"
                    align="left"
                    prop="date"
                    label="Date"
                  >
                  </el-table-column>
                  </el-table-column>
                  <el-table-column
                    min-width="150"
                    header-align="right"
                    label="Actions"
                  >
                    <template slot-scope="scope">
                      <div class="text-right table-actions">
                        <el-tooltip
                          content="Edit"
                          :open-delay="300"
                          placement="top"
                        >
                          <span @click="() => handleEdit(scope.$index, scope.row)">
                            <n-button type="success" round simple size="sm" icon>
                              <i class="now-ui-icons ui-2_settings-90"></i>
                            </n-button>
                          </span>
                        </el-tooltip>

                        <el-tooltip
                          content="Delete"
                          :open-delay="300"
                          placement="top"
                        >
                          <span
                            @click="() => handleDelete(scope.$index, scope.row)"
                          >
                            <n-button type="danger" round simple size="sm" icon>
                              <i class="now-ui-icons ui-1_simple-remove"></i>
                            </n-button>
                          </span>
                        </el-tooltip>
                      </div>
                    </template>
                  </el-table-column>
                </el-table>
              </div>
            </div>
          </card>
        </tab-pane>
        <tab-pane label="Previous">
          <div class="create-notification">
            <n-button type="success" round simple @click.native="createNotification">
              <i class="now-ui-icons"></i> Create Notification
            </n-button>
          </div>
          <card class="card-plain">
            <div class="row">
              <div class="col-sm-12">
                <el-table ref="previousTable" :data="tableData">
                  <el-table-column
                    min-width="50"
                    type="index"
                  ></el-table-column>
                  <el-table-column
                    min-width="250"
                    align="left"
                    prop="title"
                    label="Title"
                  >
                  </el-table-column>
                  <el-table-column
                    min-width="60"
                    align="left"
                    prop="date"
                    label="Date"
                  >
                  </el-table-column>
                  <el-table-column
                    min-width="150"
                    header-align="right"
                    label="Actions"
                  >
                    <div class="text-right table-actions">
                      <el-tooltip
                        content="Edit"
                        :open-delay="300"
                        placement="top"
                        style="font-family: san-serif;"
                      >
                        <span @click="() => handleEdit(scope.$index, scope.row)">
                          <n-button type="success" round simple size="sm" icon>
                            <i class="now-ui-icons ui-2_settings-90"></i>
                          </n-button>
                        </span>
                      </el-tooltip>

                      <el-tooltip
                        content="Delete"
                        :open-delay="300"
                        placement="top"
                      >
                        <span
                          @click="() => handleDelete(scope.$index, scope.row)"
                        >
                          <n-button type="danger" round simple size="sm" icon>
                            <i class="now-ui-icons ui-1_simple-remove"></i>
                          </n-button>
                        </span>
                      </el-tooltip>
                    </div>
                  </el-table-column>
                </el-table>
              </div>
            </div>
          </card>
        </tab-pane>
      </tabs>
    </div>
    <!-- Delete Modal -->
    <modal :show.sync="modalDelete" headerClasses="justify-content-center">
      <h4 slot="header" class="title title-up">Delete Notification</h4>
      <p>
        Once you delete the notification you cannot get it back and will need to
        create a new notification. Already sent notifications cannot be deleted.
      </p>
      <template slot="footer">
        <n-button type="default">Cancel</n-button>
        <n-button type="danger" @click.native="modalDelete = false"
          >Delete</n-button
        >
      </template>
    </modal>
  </div>
</template>
<script>
import moment from 'moment';

import {
  Card,
  Button,
  Modal,
  Switch,
  DropDown,
  Tabs,
  TabPane,
} from "@/components";
import {
  Table,
  TableColumn,
  Tooltip,
  TimeSelect,
  DatePicker,
} from "element-ui";

import NotificationsAPI from "~/api/NotificationsAPI";
import UtilsMixin from "~/mixins/utils";


export default {
  layout: "admin",
  middleware: ["check-auth", "auth"],
  components: {
    Card,
    Modal,
    [Table.name]: Table,
    [TableColumn.name]: TableColumn,
    [Tooltip.name]: Tooltip,
    [Button.name]: Button,
    [Switch.name]: Switch,
    [DatePicker.name]: DatePicker,
    [TimeSelect.name]: TimeSelect,
    [DropDown.name]: DropDown,
    Tabs,
    TabPane,
  },
  mixins: [UtilsMixin],
  data() {
    return {
      isLoading: true,
      modalNotice: false,
      modalDelete: false,
      selectedRow: {},
      form: {
        title: "",
        htmlSwitch: true,
        message: "",
        checkbox: false,
        datePicker: "",
        timePicker: "",
        timeZone: "EST",
      },
      timeZones: [
        "AST",
        "EST",
        "CST",
        "MST",
        "PST",
        "AKST",
        "HST",
        "HAST",
        "SST",
        "CHST",
      ],
      notifications: []
    };
  },
  computed: {
    tableData(){
      let data = [];

      this.notifications.forEach(note => {
         let row = {};
         row.uuid = note.uuid;
         row.title = note.title;
         row.date = this.formatDate(note.created_at);
         data.push(row);
      })

      return data;

    }
  },
  methods: {
    handleDelete(index, row) {
      this.selectRow = row;
      this.modalsDelete = true;
    },

    handleEdit(index, row) {
      console.log("Handle Edit");
      console.log(row);
      this.selectRow = row;
      window.location.href = "/admin/notification?id=" + row.uuid;
    },

    createNotification(){
      window.location.href = "/admin/notification";
    },

    clearDates() {
      this.form.datePicker = "";
      this.form.timePicker = "";
      this.form.timeZone = "";
    },

    formatDate(value) {
      if(value) {
        return moment(value).format('MM/DD/YYYY hh:mm:ss');
      }else{
        return moment().format('MM/DD/YYYY hh:mm:ss');
      }
    }
  },
  mounted() {
    this.isLoading = true;
    NotificationsAPI.getNotifications(this.$store)
        .then(notifications => {
          this.notifications = notifications;
          this.isLoading = false;
        })
        .catch((error) => {
          console.log("Error getting notifications in notifications.vue");
          console.log(error);
          this.isLoading = false;
        });

    NotificationsAPI.getNotificationTypes(this.$store);
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
