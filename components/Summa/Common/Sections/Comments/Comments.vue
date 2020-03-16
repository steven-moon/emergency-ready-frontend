<template>
	<div class="comments">
		<comment :key="item.uuid" v-for="item in items" :item="item" :source="source"/>
	</div><!-- /.comments -->
</template>

<script>

   import Comment from './Comment';

	export default {
		name: 'Comments',
      props: ['source','items'],
      components: {
         Comment,
      },
	}
</script>

