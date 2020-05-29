<template>
  <div>
    <banner />
  </div>
</template>
<script>
import banner from './conpoments/banner/Index';

// import '@/assets/scss/idangerous.swiper2.7.6.css';

export default {
  name: 'carrousel',
  data() {
    return {};
  },
  components: {
    banner,
  },
  // you can find current swiper instance object like this, while the notNextTick property value must be true
  // 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，同时notNextTick必须为true
};
</script>