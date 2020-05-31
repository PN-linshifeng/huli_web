<template>
  <div class="container-full hl-index-copyright">
    <div class="bg">
      <div class="item" />
      <div class="item" />
      <div class="item" />
      <div class="item" />
      <div class="item" />
    </div>
    <div class="container">
      <div class="box">
        <h3>全版权运营</h3>
        <p>
          《武极仙》你是否有个武侠梦？你是否幻想过飞檐走壁、开山裂石？浩瀚的星海，星辰幻灭，暗无天地，星辰的颤抖与崩碎，星系的挪移变换，平静下暗藏着什么样的
          波涛？
        </p>
        <div class="content">
          <swiper ref="mySwiper" :options="swiperOption" :not-next-tick="notNextTick" class="book">
            <!-- slides -->
            <swiper-slide>
              <a href="#">
                <img src="../../../../assets/images/hs/104.png" />
              </a>
            </swiper-slide>
            <swiper-slide>
              <a href="#">
                <img src="../../../../assets/images/hs/104.png" />
              </a>
            </swiper-slide>
            <swiper-slide>
              <a href="#">
                <img src="../../../../assets/images/hs/104.png" />
              </a>
            </swiper-slide>
            <swiper-slide>
              <a href="#">
                <img src="../../../../assets/images/hs/104.png" />
              </a>
            </swiper-slide>
            <swiper-slide>
              <a href="#">
                <img src="../../../../assets/images/hs/104.png" />
              </a>
            </swiper-slide>
            <swiper-slide>
              <a href="#">
                <img src="../../../../assets/images/hs/104.png" />
              </a>
            </swiper-slide>
            <swiper-slide>
              <a href="#">
                <img src="../../../../assets/images/hs/104.png" />
              </a>
            </swiper-slide>

            <!-- Optional controls -->
          </swiper>
          <div class="pagination-book">
            <div class="swiper-button-prev" />
            <div class="swiper-button-next" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
require('swiper/dist/css/swiper.css');
import './style.scss';

export default {
  components: {
    swiper,
    swiperSlide,
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
        // pagination: '.swiper-pagination',
        paginationClickable: true,
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next',
        // scrollbar: '.swiper-scrollbar',
        // mousewheelControl: true,
        // observeParents: true,
        slidesPerView: 4,
        slidesPerGroup: 1,
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
  // you can find current swiper instance object like this, while the notNextTick property value must be true
  // 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，同时notNextTick必须为true
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
  },
  mounted() {
    if (document.documentElement.clientWidth <= 577) {
      this.swiperOption.slidesPerView = 3;
    }
    // you can use current swiper instance object to do something(swiper methods)
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    // console.log('this is current swiper instance object', this.swiper);
    // this.swiper.slideTo(3, 1000, false);
  },
};
</script>
