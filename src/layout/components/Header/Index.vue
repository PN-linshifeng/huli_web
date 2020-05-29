<template>
  <header class="container-full hl-header">
    <div class="container">
      <div class="hl-logo">
        <a href="/" title="狐狸小说">
          <img src="../../../assets/images/logo.png" alt="狐狸小说logo" />
        </a>
      </div>

      <div class="hl-mian">
        <input type="checkbox" v-model="showNav" id="checkboxNav" hidden />
        <nav class="hl-nav">
          <label for="checkboxNav" class="hidden-ipad-up">
            <i class="el-icon-close"></i>
          </label>
          <ul>
            <li @click.stop="handleShow('1')">
              <router-link to="/" @click.native="handleShowNav">首页</router-link>
            </li>
            <li
              class="el-has-child"
              :class="showChild.indexOf('2')>=0?'active':''"
              @click.stop="handleShow('2')"
            >
              <a title="产品中心">产品中心</a>
              <ul>
                <li class="hl-yiqikanshu">
                  <router-link to="/" @click.native="handleShowNav">一起看书</router-link>
                </li>
                <li class="hl-meida">
                  <router-link to="/" @click.native="handleShowNav">美哒私聊</router-link>
                </li>
              </ul>
            </li>
            <li @click.stop="handleShow('3')">
              <router-link to="/" @click.native="handleShowNav">新闻动态</router-link>
            </li>
            <li @click.stop="handleShow('4')">
              <router-link to="/" @click.native="handleShowNav">关于我们</router-link>
            </li>
            <li @click.stop="handleShow('5')">
              <router-link to="/" @click.native="handleShowNav">加入我们</router-link>
            </li>
            <li @click.stop="handleShow('6')">
              <router-link to="/" @click.native="handleShowNav">联系我们</router-link>
            </li>
          </ul>
          <div class="hl-copy hidden-ipad-up">Copyright © 2020 狐狸文化传媒</div>
        </nav>
        <label for="checkboxNav" class="hidden-ipad-up">
          <i class="el-icon-s-unfold"></i>
        </label>
      </div>
    </div>
  </header>
</template>
<script>
import './style.scss';

export default {
  data() {
    return {
      activeIndex: '1', // 当前切换
      showChild: [], // 显示下拉
      showNav: true, // 收显示nav
    };
  },
  mounted: function() {
    window.onclick = () => {
      this.showChild = [];
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
    handleShowNav() {
      this.showNav = !this.showNav;
    },
  },
};
</script>