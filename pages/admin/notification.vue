<template>
  <div class="section section-javascript" id="javascriptComponents">
    <div class="container">
      <h3 class="title">Create Notification</h3>
      <textarea id="w3review" name="w3review" rows="4" cols="130"> </textarea>
      <div class="row" id="modals">
        <div class="modal-buttons">
          <n-button type="success" @click.native="modals.classic = true">
            <i class="now-ui-icons files_single-copy-04"></i> Submit
            Notification
          </n-button>
        </div>
        <br />
        <div class="datepicker-container">
          <fg-input>
            <el-date-picker
              type="datetime"
              popper-class="date-picker date-picker-primary"
              placeholder="Date Time Picker"
              v-model="pickers.dateTimePicker"
            >
            </el-date-picker>
          </fg-input>
        </div>

        <br />
      </div>
    </div>
    <!-- <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor> -->
    <!-- Classic Modal -->
    <modal :show.sync="modals.classic" headerClasses="justify-content-center">
      <h4 slot="header" class="title title-up">Create Notification</h4>
      <p>Are you sure you want to send the notification?</p>
      <template slot="footer">
        <n-button>Yes</n-button>
        <n-button type="danger" @click.native="modals.classic = false"
          >Cancel</n-button
        >
      </template>
    </modal>
  </div>
</template>

<script>
import { Button, Modal, FormGroupInput } from "@/components/UIKit";
import { Popover, Tooltip, DatePicker, TimeSelect } from "element-ui";

//Rich text editor component for notifications
// import CKEditor from "@ckeditor/ckeditor5-vue";

export default {
  layout: "admin",
  middleware: ["check-auth", "auth"],
  components: {
    Modal,
    [Button.name]: Button,
    [DatePicker.name]: DatePicker,
    [FormGroupInput.name]: FormGroupInput,
    [TimeSelect.name]: TimeSelect,
  },
  data() {
    return {
      editor: ClassicEditor,
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

.datepicker-container {
  margin: auto;
  padding: 12px;
}
</style>
