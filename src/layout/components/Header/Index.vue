<template>
  <header class="container-full hl-header" :class="{menuColor,fixedTop:scrollTop>=100}">
    <div class="container">
      <div class="hl-logo">
        <a href="/" title="狐狸小说">
          <img src="../../../assets/images/logo.png" alt="狐狸小说logo" />
        </a>
      </div>

      <div class="hl-mian">
        <input id="checkboxNav" v-model="showNav" type="checkbox" hidden />
        <nav class="hl-nav">
          <label for="checkboxNav" class="hidden-ipad-up">
            <i class="el-icon-close" />
          </label>
          <ul>
            <li v-for="(k,i) in menu" :key="k.title" :class="{active:activeIndex===(i+1),'el-has-child':k.child,'hl-open':showChild.indexOf(i+1)>=0}">
              <router-link v-if="k.path" :to="k.path" @click.native="handleSetActive(i+1)">{{ k.title }}</router-link>
              <a v-else @click.stop="handleSwitchChild(i+1)">{{ k.title }}</a>
              <ul v-if="k.child">
                <li v-for="kk in k.child" :key="kk.title" :class="kk.class">
                  <router-link :to="kk.path" @click.native="handleSetActive(i+1)">{{ kk.title }}</router-link>
                </li>
              </ul>
            </li>
          </ul>
          <div class="hl-copy hidden-ipad-up">Copyright © 2020 狐狸文化传媒</div>
        </nav>
        <label for="checkboxNav" class="hidden-ipad-up">
          <i class="el-icon-s-unfold" />
        </label>
      </div>
    </div>
  </header>
</template>
<script>
import './style.scss';
const menu = [
  { title: '首页', path: '/' },
  {
    title: '产品',
    // path: '/product',
    child: [
      { title: '一起看书', path: '/products/books', class: 'hl-yiqikanshu' },
      { title: '美哒私聊', path: '/products/privatechat', class: 'hl-meida' },
    ],
  },
  { title: '新闻动态', path: '/' },
  { title: '关于我们', path: '/aboutus' },
  { title: '加入我们', path: '/joinus' },
  { title: '联系我们', path: '/contractus' },
];

export default {
  data() {
    return {
      activeIndex: '1', // 当前切换
      showChild: [], // 显示下拉
      showNav: false, // 收显示nav
      menu,
      menuColor: '',
      fixedTop: '',
      scrollTop: '',
    };
  },
  computed: {

  },
  watch: {
    $route(to, from) {
      if (to.path === '/product') {
        this.menuColor = 'hl-block'
      } else {
        this.menuColor = ''
      }
    },
  },
  mounted: function() {
    window.onclick = () => {
      this.showChild = [];
    };

    document.body.onscroll = () => {
      const scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
      this.scrollTop = scrollTop;
    }
  },
  methods: {
    handleSwitchChild(index) {
      const flaIndex = this.showChild.indexOf(index);

      if (flaIndex >= 0) {
        this.showChild.splice(flaIndex, 1);
      } else if (document.documentElement.clientWidth >= 768) {
        this.showChild = [index];
      } else {
        this.showChild.push(index);
      }
    },
    handleSetActive(index) {
      this.showNav = !this.showNav;
      this.activeIndex = index;
    },
  }
};
</script>
