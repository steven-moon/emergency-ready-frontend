<template>
    <div class="section section-notifications" id="notifications">
        <div class="space"></div>
        <div class="container">
            <h4>Notifications</h4>
        </div>
        <div class="alert alert-success" role="alert">
            <div class="container">
                <div class="alert-icon">
                    <i class="now-ui-icons ui-2_like"></i>
                </div>
                <strong>Well done!</strong> You successfully read this important alert message.
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">
                                    <i class="now-ui-icons ui-1_simple-remove"></i>
                                </span>
                    </button>
            </div>
        </div>
        <div class="alert alert-info" role="alert">
            <div class="container">
                <div class="alert-icon">
                    <i class="now-ui-icons travel_info"></i>
                </div>
                <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">
                                    <i class="now-ui-icons ui-1_simple-remove"></i>
                                </span>
                    </button>
            </div>
        </div>
        <div class="alert alert-warning" role="alert">
            <div class="container">
                <div class="alert-icon">
                    <i class="now-ui-icons ui-1_bell-53"></i>
                </div>
                <strong>Warning!</strong> Better check yourself, you're not looking too good.
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">
                                    <i class="now-ui-icons ui-1_simple-remove"></i>
                                </span>
                    </button>
            </div>
        </div>
        <div class="alert alert-danger" role="alert">
            <div class="container">
                <div class="alert-icon">
                    <i class="now-ui-icons objects_support-17"></i>
                </div>
                <strong>Oh snap!</strong> Change a few things up and try submitting again.
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">
                                    <i class="now-ui-icons ui-1_simple-remove"></i>
                                </span>
                    </button>
            </div>
        </div>

    


    </div>
</template>

<script>
import { Card, Button, Modal, FormGroupInput, Collapse, CollapseItem } from '@/components/UIKit';
import { Popover, Tooltip, DatePicker, TimeSelect } from 'element-ui';



export default {
    components: {
        Card,
        Modal,
        CollapseItem,
        Collapse,
        [Button.name]: Button,
        [Popover.name]: Popover,
        [Tooltip.name]: Tooltip,
        [DatePicker.name]: DatePicker,
        [FormGroupInput.name]: FormGroupInput,
        [TimeSelect.name]: TimeSelect
    },
    data() {
        return {
            modals: {
                classic: false,
                notice: false,
                mini: false,
                login: false
            },

            pickers: {
                dateTimePicker: '',
                datePicker: '',
                timePicker: ''
            },


            methods: {
                select: function() {
                    divID = this.id // ??
                    alert(divID)
                },
                del(id) {
                    fetch(`/api/item/${id}`, { method: "DELETE" })
                },
            }
        }


    }
}
</script>

<style lang="scss">
#javascriptComponents {
    .modal-buttons,
    .popover-buttons,
    .tooltip-buttons {
        .btn+.btn {
            margin-left: 3px;
        }
    }
}
</style>
