<template>
    <div>
        <base-header class="pb-6">
            <div class="row align-items-center py-4">
                <div class="col-lg-6 col-7">
                    <h6 class="h2 text-white d-inline-block mb-0">Send Notification</h6>
<!--                    <nav aria-label="breadcrumb" class="d-none d-md-inline-block ml-md-4">-->
<!--                        <route-breadcrumb/>-->
<!--                    </nav>-->
                </div>
            </div>
        </base-header>

        <div class="container-fluid mt--6">
            <div class="row">
                <div class="col-lg-6 col-md-8 col-sm-10 ml-auto mr-auto">
                    <div class="card-wrapper">
                        <!-- Form controls -->
                        <div class="card">
                            <!-- Card header -->
                            <div class="card-header">
                                <h3 class="mb-0">Notification Details</h3>
                            </div>
                            <!-- Card body -->
                            <div class="card-body">
                                <form>

                                    <base-input label="Title" placeholder="Enter Title"/>

                                    <base-input label="Notification Type">
                                        <select class="form-control">
                                            <option>Link</option>
                                            <option>HTML</option>
                                            <option>Plain Text</option>
                                        </select>
                                    </base-input>

                                    <base-input label="Notification Text">
                                        <textarea class="form-control" id="textBody" rows="3"></textarea>
                                    </base-input>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'form-elements',
        layout: 'argon-dashboard-layout',
        components: {
        },
        data() {
            return {
                inputs: {
                    file: []
                },
                checkboxes: {
                    unchecked: false,
                    checked: true,
                    uncheckedDisabled: false,
                    checkedDisabled: true
                },
                radios: {
                    radio1: 'checked',
                    radio2: 'checked'
                }
            }
        },
        methods: {
            filesChange(files) {
                this.inputs.file = files
            }
        }
    }
</script>
