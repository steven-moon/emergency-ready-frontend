<template>
         <image-uploader
            :autoRotate=true
            :capture="false"
            :className="['fileinput', { 'fileinput--loaded' : hasImage }]"
            :debug="1"
            :maxWidth="512"
            :preview=false
            :quality="0.7"
            @input="setImage"
            @onComplete="endImageResize"
            @onUpload="startImageResize"
            accept="video/*,image/*"
            doNotResize="['gif', 'svg']"
            outputFormat="verbose"
         ></image-uploader>
      <!--		<div class="modal-frame__content">-->
      <!--			<h4 class="modal-frame__title">Upload Image</h4>&lt;!&ndash; /.modal-frame__title &ndash;&gt;-->

      <!--			<div class="modal-frame__entry">-->
      <!--				<p>Choose an image and upload it here!</p>-->
      <!--			</div>&lt;!&ndash; /.modal-frame__entry &ndash;&gt;-->

      <!--			<div class="modal-frame__actions">-->
      <!--				<input type="file" @change="onFileChange" class="form-control">-->
      <!--				<button class="btn btn-success btn-block" @click="upload">Upload</button>-->
      <!--			</div>&lt;!&ndash; /.modal-frame__actions &ndash;&gt;-->
      <!--		</div>&lt;!&ndash; /.modal-frame__content &ndash;&gt;-->
</template>

<script>

    export default {
        name: 'ModalImageUpload',
        props: ['upload_path'],
        data() {
            return {
                image: "",
                hasImage: false
            }
        },
        methods: {
            onFileChange(e) {
                let files = e.target.files || e.dataTransfer.files;
                if (!files.length)
                    return;
                this.createImage(files[0]);
            },
            createImage(file) {
                let reader = new FileReader();
                let vm = this;
                reader.onload = (e) => {
                    vm.image = e.target.result;
                };
                reader.readAsDataURL(file);
            },
            upload() {
                axios.post('/api/upload', {image: this.image}).then(response => {

                });
            },
            setImage() {
                console.log("BEGIN: setImage");
            },
            startImageResize() {
                console.log("BEGIN: startImageResize");
            },
            endImageResize() {
                console.log("BEGIN: endImageResize");
            }
        }
    }
</script>
