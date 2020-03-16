<template>
   <div :class="{
					'form__section--expanded': isSectionExpanded
				}"
        class="form__section"
   >
      <div class="form__section__head">
         <div class="form__section__icon">
            <i>
               <svg height="17" viewBox="0 0 8.5 17" width="8.5" xmlns="http://www.w3.org/2000/svg">
                  <path
                     d="M7.341,3.864V12.75a3.091,3.091,0,0,1-6.182,0V3.091a1.932,1.932,0,0,1,3.864,0V11.2a.773.773,0,1,1-1.545,0V3.864H2.318V11.2a1.932,1.932,0,1,0,3.864,0V3.091A3.091,3.091,0,0,0,0,3.091V12.75a4.25,4.25,0,0,0,8.5,0V3.864Z"/>
               </svg>
            </i>
         </div><!-- /.form__section__icon -->

         <h6 class="form__section__title">Files</h6><!-- /.form__section__title -->


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

      <div class="form__section__body" v-if="isSectionExpanded">
         <div class="field-upload">
            <input id="task-attachments" name="task-attachments" type="file">

            <label for="task-attachments">+ Add an Attachment</label>
         </div><!-- /.field-upload -->

         <template v-if="items && items.length > 0">
            <ul class="list-attachments">
               <li :key="item.id" v-for="item in items">
                  {{item.name}}
               </li>
            </ul><!-- /.list-attachments -->
         </template>
      </div><!-- /.form__section__body -->
   </div><!-- /.form__section -->
</template>

<script>
   export default {

      name: 'FileSection',
      props: ['source','items','parentUUID'],
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
