<template>
	<div class="popup-actions">
		<div class="popup--container">
			<slot name="close"></slot>
			<slot name="actions"></slot>
		</div>
	</div>
</template>

<script>
export default {

  name: 'PopupActions',

  data () {
    return {

    }
  }
}
</script>
