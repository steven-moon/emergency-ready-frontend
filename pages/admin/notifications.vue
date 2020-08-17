<template>
  <div class="section">
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
              @click.native="modalNotice = true"
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
                    min-width="100"
                    align="left"
                    prop="title"
                    label="Title"
                  >
                  </el-table-column>
                  <el-table-column
                    min-width="80"
                    align="left"
                    prop="date"
                    label="Date"
                  >
                  </el-table-column>
                  <el-table-column
                    min-width="350"
                    prop="desc"
                    align="left"
                    label="Description"
                  >
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
                          <n-button type="success" round simple size="sm" icon>
                            <i class="now-ui-icons ui-2_settings-90"></i>
                          </n-button>
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
            <n-button type="success" round simple @click.native="notice = true">
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
                    min-width="100"
                    align="left"
                    prop="title"
                    label="Title"
                  >
                  </el-table-column>
                  <el-table-column
                    min-width="80"
                    align="left"
                    prop="date"
                    label="Date"
                  >
                  </el-table-column>
                  <el-table-column
                    min-width="350"
                    prop="desc"
                    align="left"
                    label="Description"
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
                        <n-button type="success" round simple size="sm" icon>
                          <i class="now-ui-icons ui-2_settings-90"></i>
                        </n-button>
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
    <!-- Edit/Create Modal -->
    <modal
      :show.sync="modalNotice"
      footerClasses="justify-content-center"
      type="notice"
    >
      <h5 slot="header" class="modal-title">
        Create a new notification
      </h5>
      <template>
        <div class="instruction">
          <div class="row">
            <div class="col-sm-6 col-md-11 col-lg-12">
              <fg-input placeholder="Notification Title" v-model="form.title">
              </fg-input>
              <div class="html-picker">
                <label>Plain text or HTML</label>
                <n-switch
                  v-model="form.htmlSwitch"
                  type="success"
                  on-text="Plain"
                  off-text="HTML"
                ></n-switch>
              </div>
              <textarea
                v-model="form.message"
                class="create-notification__textarea"
                name="name"
                rows="6"
                cols="120"
                placeholder="Write your message here..."
              ></textarea>
              <hr />
              <n-checkbox v-model="form.checkbox" @click="clearDates"
                >Schedule Notification Delivery</n-checkbox
              >
              <div class="send-later__container">
                <fg-input>
                  <el-date-picker
                    :disabled="!form.checkbox"
                    type="date"
                    placeholder="Date Picker"
                    v-model="form.datePicker"
                  >
                  </el-date-picker>
                </fg-input>
                <div class="div__spacer"></div>
                <fg-input>
                  <el-time-select
                    :disabled="!form.checkbox"
                    placeholder="Time Picker"
                    v-model="form.timePicker"
                  >
                  </el-time-select>
                </fg-input>
                <drop-down>
                  <n-button
                    slot="title"
                    class="dropdown-toggle"
                    type="default"
                    data-toggle="dropdown"
                    round
                    simple
                    :disabled="!form.checkbox"
                  >
                    EST
                  </n-button>
                  <a
                    v-for="zone in timeZones"
                    :key="zone"
                    :class="zone === form.timeZone ? 'highlighted' : ''"
                    class="dropdown-item"
                    >{{ zone }}</a
                  >
                </drop-down>
              </div>
            </div>
          </div>
        </div>
      </template>
      <div class="footer-container">
        <n-button
          type="success"
          round
          style="margin: 0;"
          @click.native="notice = false"
          >Submit</n-button
        >
      </div>
    </modal>
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

export default {
  layout: "admin",
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
  data() {
    return {
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
      tableData: [
        {
          title: "Volcano",
          desc: "Find cover! There will be ash and smoke in the air.",
          date: "01/12/2020:2:15a.m.",
          active: false,
        },
        {
          title: "Flood",
          desc: "If you are in the metro district find high ground.",
          date: "01/12/2020:2:15a.m.",
          active: false,
        },
        {
          title: "Fire",
          desc: "The winds are blowing north. EVACUATE NOW.",
          date: "01/12/2020:2:15a.m.",
          active: false,
        },
        {
          title: "Earthquake",
          desc: "Desaster re;ief crews are scouting downed power lines.",
          date: "01/12/2020:2:15a.m.",
          active: true,
        },
        {
          title: "Riots",
          desc: "We will be keeping protestors out of neighborhoods.",
          date: "01/12/2020:2:15a.m.",
          active: true,
        },
      ],
    };
  },
  methods: {
    handleDelete(index, row) {
      this.selectRow = row;
      this.modalsDelete = true;
    },

    handleEdit(index, row) {
      this.selectRow = row;
      this.modalsNotice = true;
    },

    clearDates() {
      this.form.datePicker = "";
      this.form.timePicker = "";
      this.form.timeZone = "";
    },
  },
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
