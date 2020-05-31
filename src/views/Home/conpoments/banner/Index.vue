<template>
  <div class="index-banner margin-block container-full">
    <swiper ref="mySwiper" :options="swiperOption" :not-next-tick="notNextTick">
      <!-- slides -->

      <swiper-slide v-for="k in data" :key="k.title" :style="{ background: k.img }">
        <div class="content">
          <h3>{{ k.title }}</h3>
          <p>{{ k.des }}</p>
        </div>
      </swiper-slide>

      <!-- Optional controls -->

      <div slot="pagination" class="swiper-pagination" />
    </swiper>
  </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
require('swiper/dist/css/swiper.css');
import './style.scss';

export default {
  name: 'Carrousel',
  components: {
    swiper,
    swiperSlide,
  },
  props: {
    data: {
      type: Array,
      default: function de() {
        return [];
      },
    },
  },
  data() {
    return {
      // NotNextTick is a component's own property, and if notNextTick is set to true, the component will not instantiate the swiper through NextTick, which means you can get the swiper object the first time (if you need to use the get swiper object to do what Things, then this property must be true)
      // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
      notNextTick: true,
      swiperOption: {
        // swiper options 所有的配置同swiper官方api配置
        autoplay: 3000,
        // direction: 'vertical',
        grabCursor: true,
        setWrapperSize: true,
        autoHeight: true,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        // prevButton: '.swiper-button-prev',
        // nextButton: '.swiper-button-next',
        // scrollbar: '.swiper-scrollbar',
        // mousewheelControl: true,
        observeParents: true,
        // slidesPerView: 4,
        // slidesPerGroup: 1,
        // if you need use plugins in the swiper, you can config in here like this
        // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
        debugger: true,
        // swiper callbacks
        // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
        onTransitionStart(swiper) {
          // console.log(swiper);
        },
        // more Swiper configs and callbacks...
        // ...
      },
    };
  },

  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
  },
  mounted() {},
};
</script>
