<template>
  <div class="section section-javascript" id="javascriptComponents">
    <n-button type="success" @click.native="modals.login = true">
      <i class="now-ui-icons users_single-02"></i> Login Modal
    </n-button>
    <modal
      :show.sync="modals.login"
      modal-classes="modal-login"
      class="modal-success"
    >
      <div
        class="card card-plain card-login"
        data-background-color=""
        slot="base-content"
      >
        <div class="modal-header justify-content-center">
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-hidden="true"
          >
            <i class="now-ui-icons ui-1_simple-remove"></i>
          </button>
          <div class="header header-primary text-center">
            <div class="logo-container">
              <img v-lazy="'img/now-logo.png'" alt="" />
            </div>
          </div>
        </div>
        <div class="modal-body">
          <form class="form" method="" action="">
            <div class="card-body">
              <fg-input
                class="no-border input-lg"
                addon-left-icon="now-ui-icons users_circle-08"
                placeholder="First Name..."
              >
              </fg-input>

              <fg-input
                class="no-border input-lg"
                type="password"
                addon-left-icon="now-ui-icons ui-1_lock-circle-open"
                placeholder="Password..."
              >
              </fg-input>
            </div>
          </form>
        </div>
        <div class="modal-footer text-center">
          <a
            href="#pablo"
            class="btn btn-neutral btn-round btn-lg btn-block text-success"
            >Get Started</a
          >
        </div>
      </div>
    </modal>
  </div>
</template>
<script>
import {
  Button,
  Modal,
  FormGroupInput
} from "@/components";

export default {
  components: {
    Modal,
    [FormGroupInput.name]: FormGroupInput,
  },
  data() {
    return {
      modals: {
        login: false,
      },
    };
  },
};
</script>
<style lang="scss">
#javascriptComponents {
  .modal-buttons {
    .btn + .btn {
      margin-left: 3px;
    }
  }
}
</style>
