<template>
  <div class="product_chat">
    <swiper
      ref="mySwiper"
      :options="swiperOption"
      :not-next-tick="notNextTick"
      style="height:400px"
    >
      <!-- slides -->
      <swiper-slide>
        <el-row class="container" :gutter="40">
          <el-col :sm="12" class="content-text">
            <h2>交友APP</h2>
            <p>高颜值聊天交友平台</p>
            <p>跟喜欢的女神打招呼</p>
            <div>
              <el-button size="small" type="primary" round><img src="../../../assets/images/products/iphone_icon.png" /> iphone下载</el-button>
              <el-button size="small" type="primary" round><img src="../../../assets/images/products/android_icon.png" /> Android下载</el-button>
              <el-button size="small" type="primary" class="hidden-xs-only"><img src="../../../assets/images/products/er_icon.png" /></el-button>
            </div>
          </el-col>
          <el-col :sm="12" class="content-img">
            <img src="../../../assets/images/products/chat_banner.png" alt="" />
          </el-col>
        </el-row>
      </swiper-slide>
      <!-- Optional controls -->
      <!-- <div slot="pagination" class="swiper-pagination" /> -->
    </swiper>
    <div class="container-full">
      <el-row class="container">
        <el-col :sm="12" class="content-text">
          <h2>恋爱脱单</h2>
          <p>来这里遇见甜甜的恋爱</p>
        </el-col>
        <el-col :sm="12" class="content-img">
          <img src="../../../assets/images/products/chat_0.png" alt="" />
        </el-col>
      </el-row>
    </div>
    <div class="container-full">
      <el-row class="container">
        <el-col :sm="12" class="content-text">
          <h2>视频聊天</h2>
          <p>和陌生美女一对一、随时聊你想聊</p>
        </el-col>
        <el-col :sm="12" class="content-img">
          <img src="../../../assets/images/products/chat_1.png" alt="" />
        </el-col>
      </el-row>
    </div>
    <div class="container-full">
      <el-row class="container">
        <el-col :sm="12" class="content-text">
          <h2>女神私房生活</h2>
          <p>随时查看女神的私密照片、视频</p>
        </el-col>
        <el-col :sm="12" class="content-img">
          <img src="../../../assets/images/products/chat_2.png" alt="" />
        </el-col>
      </el-row>
    </div>
    <div class="container-full">
      <el-row class="container">
        <el-col :sm="12" class="content-text">
          <h2>真实认证美女</h2>
          <p>官方认证真实美女，随时与你互动</p>
        </el-col>
        <el-col :sm="12" class="content-img">
          <img src="../../../assets/images/products/chat_3.png" alt="" />
        </el-col>
      </el-row>
    </div>
    <div class="download_layout">
      <h2>高质量、高颜值的聊天交友平台</h2>
      <div class="download_btns">
        <el-button size="small" type="primary" round><img src="../../../assets/images/products/iphone_b_icon.png" /> iphone下载</el-button>
        <el-button size="small" type="primary" round><img src="../../../assets/images/products/android_b_icon.png" /> Android下载</el-button>
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
  // you can find current swiper instance object like this, while the notNextTick property value must be true
  // 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，同时notNextTick必须为true
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
  },
}
</script>
