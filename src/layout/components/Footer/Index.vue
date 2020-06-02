<template>
  <div class="container-full hl-footer">
    <div class="container link-box">
      <div class="right">
        <div class="share">
          <h3 class="hidden-ipad-up">关注我们</h3>
          <a href="#">
            <img src="../../../assets/images/weibo.png" alt="新浪微博" />
          </a>
          <a href="#">
            <img src="../../../assets/images/weixin.png" alt="微信" />
          </a>
        </div>
        <div class="contact hidden-ipad-down">
          <p>地址：关西南宁市东盟财经广场1号楼601</p>
          <p>电话：000-00000000</p>
          <p>邮箱：hr@hulimedia.com</p>
        </div>
      </div>
      <div class="left">
        <div class="item hidden-ipad-down">
          <img src="../../../assets/images/footer-logo.png" alt="logo" srcset />
        </div>
        <div class="item" :class="showChild.indexOf('1')>=0?'active':''">
          <h3 @click.stop="handleShow('1')">产品中心</h3>
          <ul>
            <li>
              <router-link to="/products/books">狐狸小说</router-link>
            </li>
            <li>
              <router-link to="/products/privatechat">美哒私聊</router-link>
            </li>
          </ul>
        </div>
        <div class="item" :class="showChild.indexOf('2')>=0?'active':''">
          <h3 @click.stop="handleShow('2')">关于我们</h3>
          <ul>
            <li>
              <router-link to="/aboutus">公司简介</router-link>
            </li>
            <li>
              <router-link to="/news">新闻动态</router-link>
            </li>
          </ul>
        </div>
        <div class="item" :class="showChild.indexOf('3')>=0?'active':''">
          <h3 @click.stop="handleShow('3')">联系我们</h3>
          <ul>
            <li>
              <router-link to="/contractus">联系我们</router-link>
            </li>
            <li>
              <router-link to="/joinus">加入我们</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="copyright">
      <div class="container">Copyright © 2020 广西狐狸文化传媒有限公司. 桂ICP2000776号-1</div>
    </div>
  </div>
</template>
<script>
import './style.scss';
export default {
  data() {
    return {
      showChild: [], // 显示下拉
    };
  },
  methods: {
    handleShow(index) {
      const flaIndex = this.showChild.indexOf(index);
      if (flaIndex >= 0) {
        this.showChild.splice(flaIndex, 1);
      } else {
        this.showChild.push(index);
      }
      this.activeIndex = index;
    },
  },
};
</script>
