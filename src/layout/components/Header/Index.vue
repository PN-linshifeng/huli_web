<template>
  <header class="container-full hl-header" :class="{ menuColor, fixedTop: scrollTop >= 100 }">
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
            <template v-for="(k, i) in menu">
              <li
                v-if="!k.hidden"
                :key="k.title"
                :class="{
                  active: activeIndex === i + 1,
                  'el-has-child': k.child && !k.hiddenChild,
                  'hl-open': showChild.indexOf(i + 1) >= 0,
                }"
              >
                <router-link v-if="k.path" :to="k.path" @click.native.stop="handleSetActive(i + 1)">
                  {{ k.title }}
                </router-link>
                <a v-else @click.stop="handleSwitchChild(i + 1)">{{ k.title }}</a>
                <ul v-if="k.child && k.child.length > 0 && !k.hiddenChild">
                  <li v-for="kk in k.child" v-show="!kk.hidden" :key="kk.title" :class="kk.class">
                    <router-link :to="kk.path" @click.native="handleSetActive(i + 1)">
                      {{ kk.title }}
                    </router-link>
                  </li>
                </ul>
              </li>
            </template>
          </ul>
          <div class="hl-copy hidden-ipad-up">
            Copyright © 2020 狐狸文化传媒
          </div>
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
  { title: '首页', path: '/index' },
  {
    title: '产品',
    // path: '/product',
    child: [
      { title: '一起看书', path: '/product', class: 'hl-yiqikanshu' },
      { title: '美哒私聊', path: '/', class: 'hl-meida' },
    ],
  },
  {
    title: '新闻动态',
    path: '/news',
    hiddenChild: true,
    child: [
      {
        title: '新闻内容',
        path: '/news/:id',
        class: 'hl-yiqikanshu',
        hidden: true,
      },
    ],
  },
  { title: '关于我们', path: '/about' },
  { title: '加入我们', path: '/join' },
  { title: '联系我们', path: '/contact' },
];

const dfs = function a(data, path) {
  let indexActive;
  let find = false;
  const queue = [...data];
  let n = queue.length;
  while (queue.length !== 0 || find !== true) {
    const item = queue.shift();
    --n;
    item.index = item.index || data.length - n;
    find = true;
    if (item.path === path) {
      find = true;
      indexActive = item.index;
    }
    if (item.child) {
      for (let i = 0; i < item.child.length; i += 1) {
        queue.push({ ...item.child[i], index: item.index });
      }
    }
  }
  return indexActive;
};

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
  computed: {},
  watch: {
    $route(to, from) {
      if (to.path === '/product') {
        this.menuColor = 'hl-block';
      } else {
        this.menuColor = '';
      }
    },
  },
  mounted: function a() {
    const { name } = this.$route;
    this.activeIndex = dfs(menu, name);
    window.onclick = () => {
      this.showChild = [];
    };

    document.body.onscroll = () => {
      const scrollTop =
        document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
      this.scrollTop = scrollTop;
    };
  },
  methods: {
    handleSwitchChild(index) {
      console.log(index);
      const flaIndex = this.showChild.indexOf(index);

      if (flaIndex >= 0) {
        this.showChild.splice(flaIndex, 1);
      } else if (document.documentElement.clientWidth >= 768) {
        this.showChild = [index];
      } else {
        this.showChild.push(index);
      }
      console.log(flaIndex, this.showChild);
    },
    handleSetActive(index) {
      this.handleSwitchChild(index);
      this.showNav = !this.showNav;
      this.activeIndex = index;
    },
  },
};
</script>
