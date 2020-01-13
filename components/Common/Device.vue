<template>
  <div class="device device-iphone-8">
    <div class="device-frame">
      <swiper
        :page-transition="pageTransition"
        :loop="loop"
        :autoplay="autoplay"
        :interval="interval"
        :show-indicator="showIndicator"
      >
        <swiper-item
          v-for="(image, index) in images"
          :key="index"
        >

          <img class="device-content" :src="image">
        </swiper-item>
      </swiper>
    </div>
    <div class="device-stripe"></div>
    <div class="device-header"></div>
    <div class="device-sensors"></div>
    <div class="device-btns"></div>
    <div class="device-power"></div>
  </div>
</template>
<script>
  import initParallax from '@/utils/initParallax'
  import Device from '@/components/Common/Device'

  const PAGE_TRANSITIONS = [
    'move',
    'fade',
    'cover',
    'carousel',
    'scale',
    'glue',
    'cube',
    'push',
    'three'
  ];

  export default {
    name: 'device',
    props: {
      images: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        loop: true,
        autoplay: true,
        interval: 2500,
        showIndicator: true,
        pageTransition: PAGE_TRANSITIONS[6],
        pageTransitions: PAGE_TRANSITIONS,
      };
    },
    mounted() {
      initParallax();
    }
  }
</script>

<style lang="scss">
  .device {
    transform: scale(0.7);
    transform-origin: top left;
  }
</style>


