<template>
   <span v-if="user && user.signed_profile_url" :style="thestyle" :class="theclass">
      <img v-lazy="user.signed_profile_url" alt="">
   </span>
	<span v-else-if="user"  class="dashboard avatar"
		:style="{'background-color': user.hex_color, thestyle}">
		{{ initials }}
	</span><!-- /.avatar -->
   <span v-else  class="dashboard avatar">
	</span><!-- /.avatar -->
</template>

<script>
	export default {
		name: 'Avatar',
		props: {
			user: {
			   default: null
         },
         thestyle: {
			   type: String,
            required: false,
            default: ''
         },

         theclass: {
            type: String,
            required: false,
            default: 'dashboard avatar'
         }
		},
		computed: {
			initials() {
			   if(this.user && this.user.name) {
               const parts = this.user.name.split(' ');

               let initials = '';

               for (var i = 0; i < 2; i++) {
                  initials += parts[i][0];
               }

               return initials;
            }else{
			      return "";
            }
			}
		},
      methods: {
         getRandomColor() {

            //https://www.color-hex.com

            //Bootstrap
            //Pastels
            //Blues
            //Best of Metro


            var colors = [
               '#d9534f',
               '#f9f9f9',
               '#5bc0de',
               '#5cb85c',
               '#428bca',
               '#ffb3ba',
               '#ffdfba',
               '#ffffba',
               '#baffc9',
               '#bae1ff',
               '#011f4b',
               '#03396c',
               '#005b96',
               '#6497b1',
               '#b3cde0',
               '#00aba9',
               '#a200ff',
               '#1ba1e2',
               '#f09609',
            ];

            return colors[Math.floor(Math.random()*colors.length)];

            // var letters = '0123456789ABCDEF';
            // var color = '#';
            // for (var i = 0; i < 6; i++) {
            //    color += letters[Math.floor(Math.random() * 16)];
            // }
         }
      }
	}
</script>
