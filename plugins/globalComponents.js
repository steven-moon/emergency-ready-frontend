/**
 * You can register global components here
 */

import Card from '@/components/Common/Cards/Card'

import Button from '@/components/Common/Button'
import Comment from '@/components/Common/Comment'
import FormGroupInput from '@/components/Common/Inputs/formGroupInput'
import InfoSection from '@/components/Common/InfoSection'
import Badge from '@/components/Common/Badge'
import Checkbox from '@/components/Common/Inputs/Checkbox'
import { Select, Option, Carousel, CarouselItem } from 'element-ui'



const globalComponents = {
  install (Vue) {
    Vue.component('fg-input', FormGroupInput);
    Vue.component('card', Card);
    Vue.component('n-button',Button);
    Vue.component('comment',Comment);
    Vue.component('info-section',InfoSection);
    Vue.component('n-checkbox',Checkbox);
    Vue.component('el-select',Select);
    Vue.component('el-option',Option);
    Vue.component('badge',Badge);
    Vue.component('el-carousel',Carousel);
    Vue.component('el-carousel-item',CarouselItem);
  }
}

export default globalComponents
