<template>
   <div :class="{
					'form__section--expanded': isSectionExpanded
				}"
        class="form__section"
   >
      <div class="form__section__head">
         <div class="form__section__icon">
            <i>
               <svg height="13" viewBox="0 0 14 13" width="14" xmlns="http://www.w3.org/2000/svg">
                  <path
                     d="M3.329,13a.61.61,0,0,1-.229-.045.591.591,0,0,1-.369-.549v-2.38H1.024A1.011,1.011,0,0,1,0,9.092V.935A1.011,1.011,0,0,1,1.024,0H13.146A.856.856,0,0,1,14,.934V9.092a.856.856,0,0,1-.854.934H6.565l-2.813,2.8A.6.6,0,0,1,3.329,13ZM1.2,1.19V8.836H3.329a.6.6,0,0,1,.6.595v1.538L5.894,9.011a.6.6,0,0,1,.423-.175H12.8V1.19ZM7,6.628H3.415a.595.595,0,1,1,0-1.19H7a.595.595,0,1,1,0,1.19Zm3.585-2.38H3.415a.594.594,0,1,1,0-1.189h7.17a.594.594,0,1,1,0,1.189Z"/>
               </svg>
            </i>
         </div><!-- /.form__section__icon -->

         <h6 class="form__section__title">Comments <span class="section__tag" v-if="items && items.length > 0">{{items.length}}</span></h6><!-- /.form__section__title -->

         <a @click.prevent="isSectionExpanded = !isSectionExpanded"
            class="form__section__toggle"
            href="#"
         >
            <svg height="6" viewBox="0 0 10 6" width="10"
                 xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
               <defs>
                  <path
                     d="M203.406 100.47L198.798 96l-4.608 4.47a.61.61 0 0 0 .018.902c.271.244.702.237.962-.017l3.628-3.521 3.632 3.521c.261.254.692.261.962.017a.61.61 0 0 0 .018-.902z"
                     id="vv22a"/>
               </defs>
               <g>
                  <g transform="rotate(-180 102 51)">
                     <use fill="#c7c7c7" xlink:href="#vv22a"/>
                  </g>
               </g>
            </svg>
         </a>
      </div><!-- /.form__section__head -->

      <div class="form__body" v-if="isSectionExpanded && items && items.length > 0">
         <Comments :items="items" :source="source"/>
      </div><!-- /.form__section__body -->

      <div class="form__foot pt-3" v-if="isSectionExpanded">
         <add-comment :source="source" :parentUUID="parentUUID"/>
      </div><!-- /.form__foot -->
   </div><!-- /.form__section -->

</template>

<script>

   import Comments from './Comments';
   import AddComment from './AddComment';

   export default {

      name: 'CommentSection',
      props: ['source','items','parentUUID'],
      components: {
         Comments,
         AddComment
      },
      data () {
         return {
            isSectionExpanded: false,
         }
      },
      methods: {
         addNew(){
            console.log("BEGIN: addNew")
         }
      }
   }
</script>
