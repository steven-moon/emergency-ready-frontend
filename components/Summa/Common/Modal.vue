<template>
	<transition name="modal">
		<div class="modal-mask" @click.prevent="closeModal">
			<div class="modal-wrapper">
				<div class="modal-container">
					<slot name="close"></slot>
					<slot name="actions"></slot>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
export default {

  name: 'Modal',

  data () {
    return {

    }
  },
   methods: {
     closeModal(){
        console.log("Close Modal in Modal.vue")
        this.$store.commit('closeModal');
     }
   }
}
</script>
