<template>
   <div
      :class="[
			{
				'field-wrapper': true,
				'is-not-valid': isInvalid || isRequired,
				'is-valid': value && !isInvalid,
				'is-filled': value
			},
			size && `field-wrapper--${size}`
		]"
      @click="$emit('click', $event)">
      <label
         :for="id"
         class="field-label"
         v-if="label">
			<span>
				{{ label }}

				<button
               @click.prevent
               class="field-tooltip field-tooltip--static"
               v-if="labelTooltip"
               v-tooltip="{
						content: labelTooltip,
						trigger: 'click',
						autoHide: true
					}">
					<svg height="14" viewBox="0 0 20 20" width="14" xmlns="http://www.w3.org/2000/svg">
						<g fill="none" fill-rule="nonzero">
							<path
                        d="M10 .085C4.523.085.085 4.523.085 10.001c0 5.48 4.438 9.92 9.916 9.92 5.48 0 9.92-4.44 9.92-9.913 0-5.477-4.44-9.915-9.913-9.915L10 .085z"
                        fill="#637280"/>
							<path d="M9 4.16v2.01h2.02V4.16H9zM7.39 7.38v2.01H9v4.43H7.39v2.01h5.23v-2.01h-1.61V7.38H7.39z"
                           fill="#FFF"/>
						</g>
					</svg>
				</button>
			</span>

         <span class="field-asterisk" v-if="withAsterisk">Required</span>
      </label>

      <div class="field-holder">
         <client-only>

            <div class="datepicker-holder" v-if="isDatepicker" >
               <datepicker
                  format="MM/DD/YYYY"
                  :id="id"
                  :placeholder="placeholder"
                  :value="value"
                  lang="en"
                  :editable="false"
                  width="100%"
                  @input="$emit('input', $event)"

               />
            </div><!-- /.datepicker-holder -->


            <div class="select" v-if="isSelect">
               <multiselect
                  :allow-empty="false"
                  :close-on-select="true"
                  :id="id"
                  :label="selectLabel"
                  :options="options"
                  :placeholder="placeholder"
                  :searchable="false"
                  :show-labels="false"
                  :track-by="trackById"
                  :value="value"
                  @select="$emit('select', $event)"
               />
            </div><!-- /.select -->
         </client-only>


         <div class="field" v-if="disabled">
            <div class="pt-2">
               {{value}}
            </div>
         </div>
         <div v-else>
            <input
               :class="[
                  'field',
                  fieldVariant && `field--${fieldVariant}`
               ]"
               :id="id"
               :placeholder="placeholder"
               :type="type"
               :value="value"
               @input="$emit('input', $event.target.value)"
               v-bind="$attrs"
               v-if="!isSelect && !isDatepicker && !isTextarea"
            />


            <textarea
               :class="[
                  'field textarea',
                  fieldVariant && `field--${fieldVariant}`
               ]"
               :id="id"
               :placeholder="placeholder"
               :type="type"
               :value="value"
               @input="$emit('input', $event.target.value)"
               v-bind="$attrs"
               v-if="isTextarea"
            />

            <button
               class="field-tooltip"
               type="button"
               v-if="!isRequired && isInvalid && errorMessage && !isSelect && !isDatepicker"
               v-tooltip="{
                  content: errorMessage,
                  trigger: $mq === 'mobile' ? 'click' : 'hover',
                  placement: 'bottom-center',
                  classes: ['danger'],
                  targetClasses: ['it-has-a-tooltip'],
                  offset: 5
               }">X
            </button>

            <button
               class="field-tooltip"
               type="button"
               v-if="!isRequired && isInvalid && !errorMessage && !isSelect && !isDatepicker">X
            </button>

            <button
               class="field-tooltip field-tooltip--success"
               type="button"
               v-if="value && !isInvalid && !isSelect && !isDatepicker">
               <svg height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                     <path d="M762 365c-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11-4.925-11-11-11m0 20.625a9.625 9.625 0 0 1-9.625-9.625 9.625 9.625 0 0 1 9.625-9.625 9.625 9.625 0 0 1 9.625 9.625 9.625 9.625 0 0 1-9.625 9.625"
                           id="a-thick"/>
                     <path d="M768.875 371.917a.687.687 0 0 0-.97 0l-7.63 7.597-4.126-4.125a.7.7 0 0 0-1.024.948l5.122 5.122 8.628-8.573a.687.687 0 0 0 0-.97"
                           id="b-thick"/>
                  </defs>
                  <g transform="translate(-751 -365)">
                     <use fill="#1d6283" xlink:href="#a-thick"/>
                     <g>
                        <use fill="#1d6283" xlink:href="#b-thick"/>
                     </g>
                  </g>
               </svg>
            </button>
         </div>
      </div><!-- /.field-holder -->
   </div><!-- /.field-message -->
</template>

<script>
   /**
    * @ The external dependecies.
    */
   import moment from 'moment';
   import Vue from 'vue';

   /**
    * @ The internal dependecies.
    */
   //import Datepicker from 'vue2-datepicker';
   import ClientOnly from 'vue-client-only';

   // import Multiselect from 'nuxt-vue-multiselect';
   // Vue.component('multiselect', Multiselect);

   export default {
      /**
       * The name of the component.
       *
       * @type {String}
       */
      name: 'Field',

      /**
       * The imported components.
       *
       * @type {Object}
       */
      components: {
         ClientOnly
         //Datepicker: () => import('vuejs-datepicker')
      },

      //Datepicker: () => import('vuejs-datepicker')

      /**
       * The properties that can be passed to the component.
       *
       * @type {Object}
       */
      props: {
         id: {
            type: String,
            default: () => {
            }
         },
         label: {
            type: String,
            default: () => {
            }
         },
         selectLabel: {
            type: String,
            default: () => {
            }
         },
         size: {
            type: String,
            default: () => {
            }
         },
         labelTooltip: {
            type: String,
            default: () => {
            }
         },
         options: {
            type: Array,
            default: () => {
            }
         },
         isSelect: {
            type: Boolean,
            default: false
         },
         isTextarea: {
            type: Boolean,
            default: false
         },
         isDatepicker: {
            type: Boolean,
            default: false
         },
         placeholder: {
            type: String,
            default: () => {
            }
         },
         fieldVariant: {
            type: String,
            default: () => {
            }
         },
         withAsterisk: {
            type: Boolean,
            default: false
         },
         errorMessage: {
            type: String,
            default: () => {
            }
         },
         message: {
            type: String,
            default: () => {
            }
         },
         value: {
            type: null,
            default: () => {
            }
         },
         type: {
            type: String,
            default: 'text'
         },
         isRequired: {
            type: Boolean,
            default: false
         },
         isInvalid: {
            type: Boolean,
            default: false
         },
         disabled: {
            type: Boolean,
            default: false
         },
         trackById: {
            type: String,
            default: 'uuid'
         }


      },

      /**
       * The public API of the component.
       *
       * @type {Object}
       */
      methods: {
         customFormatter(date) {
            return moment(date).format('MM/DD/YYYY');
         }
      }
   }
</script>
