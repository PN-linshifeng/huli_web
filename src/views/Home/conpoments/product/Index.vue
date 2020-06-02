<template>
  <div class="hl-index-product container-full">
    <div class="container">
      <h3>旗下产品</h3>

      <div class="tabs">
        <span class="active">一起看书</span>
        <span>
          <router-link to="/products/privatechat">美哒私聊</router-link>
        </span>
      </div>
      <div class="content">
        <div class="txt">
          <h3>一起看书</h3>
          <p>海量正版小说，免费又好看，看书还能赚钱；类型全面，超多类小说专属推送，精品好说看不停，从此告别书荒。</p>
          <router-link to="/products/books">了解更多</router-link>
        </div>
        <div class="img">
          <img src="../../../../assets/images/yiqikanshu.png" alt="一起看书" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import './style.scss';
export default {};
</script>
