<template>
   <div :class="{
					'form__section--expanded': isSectionExpanded
				}"
        class="form__section"
   >
      <div class="form__section__head">
         <div class="form__section__icon">
            <i>
               <svg height="16" id="ic_query_builder"
                    viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                     <clipPath id="clock">
                        <path
                           d="M6.66,13.333a6.667,6.667,0,1,1,6.673-6.667A6.671,6.671,0,0,1,6.66,13.333Zm.007-12A5.333,5.333,0,1,0,12,6.667,5.339,5.339,0,0,0,6.667,1.333ZM9.5,9.433h0L6,7.333v-4H7v3.5l3,1.78-.5.819Z"
                           fill="none"
                           id="Mask" transform="translate(0 0)"/>
                     </clipPath>
                     <clipPath id="clock-2">
                        <rect height="33.333" id="Black" width="33.333"/>
                     </clipPath>
                  </defs>
                  <rect data-name="ic_query_builder background" fill="rgba(0,0,0,0)" height="16"
                        id="ic_query_builder_background" width="16"/>
                  <path
                     d="M6.66,13.333a6.667,6.667,0,1,1,6.673-6.667A6.671,6.671,0,0,1,6.66,13.333Zm.007-12A5.333,5.333,0,1,0,12,6.667,5.339,5.339,0,0,0,6.667,1.333ZM9.5,9.433h0L6,7.333v-4H7v3.5l3,1.78-.5.819Z"
                     data-name="Mask"
                     fill="none"
                     id="Mask-2" transform="translate(1.333 1.333)"/>
                  <g clip-path="url(#clock)" transform="translate(1.333 1.333)">
                     <g data-name="🎨 Color" id="_Color" transform="translate(-10 -10)">
                        <rect data-name="🎨 Color background" fill="rgba(0,0,0,0)" height="33.333"
                              id="_Color_background" width="33.333"/>
                        <rect data-name="Black" height="33.333" id="Black-2" width="33.333"/>
                     </g>
                  </g>
               </svg>
            </i>
         </div><!-- /.form__section__icon -->

         <h6 class="form__section__title">History <span class="section__tag" v-if="items && items.length > 0">{{items.length}}</span></h6><!-- /.form__section__title -->

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

      <div class="form__body pt-3 pb-3" v-if="isSectionExpanded">
         <add-history :source="source" :parentUUID="parentUUID"/>
      </div><!-- /.form__foot -->

      <div class="form__body" v-if="isSectionExpanded && items && items.length > 0">
         <history v-for="item in items" :key="item.uuid" :historyProp="item" :source="source"/>
      </div><!-- /.form__section__body -->
   </div><!-- /.form__section -->
</template>

<script>
   import AddHistory from './AddHistory';
   import History from './History';

   export default {

      name: 'HistorySection',
      props: ['source','items','parentUUID'],
      components: {
         AddHistory,
         History
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
