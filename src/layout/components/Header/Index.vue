<template>
  <header class="container-full hl-header" :class="{ menuColor, fixedTop,isIndex }">
    <div class="container">
      <div class="hl-logo">
        <router-link to="/index" title="狐狸小说">
          <img src="../../../assets/images/logo.png" alt="狐狸小说logo" />
        </router-link>
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
                <router-link
                  v-if="k.path"
                  :to="k.path"
                  @click.native.stop="handleSetActive(i + 1)"
                >{{ k.title }}</router-link>
                <a v-else @click.stop="handleSwitchChild(i + 1)">{{ k.title }}</a>
                <ul v-if="k.child && k.child.length > 0 && !k.hiddenChild">
                  <li v-for="kk in k.child" v-show="!kk.hidden" :key="kk.title" :class="kk.class">
                    <router-link :to="kk.path" @click.native="handleSetActive(i + 1)">{{ kk.title }}</router-link>
                  </li>
                </ul>
              </li>
            </template>
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
  { title: '首页', path: '/index', name: 'index' },
  {
    title: '产品',
    // path: '/product',
    name: 'product',
    child: [
      {
        title: '一起看书',
        path: '/products/books',
        name: 'books',
        class: 'hl-yiqikanshu',
        menuColor: true,
      },
      {
        title: '美哒私聊',
        path: '/products/privatechat',
        name: 'privatechat',
        class: 'hl-meida',
        menuColor: true,
      },
    ],
  },
  {
    title: '新闻动态',
    path: '/news',
    name: 'news',
    hiddenChild: true,
    child: [
      {
        title: '新闻内容',
        path: '/news/:id',
        name: 'news content',
        menuColor: true,
        hidden: true,
      },
    ],
  },
  { title: '关于我们', path: '/aboutus', name: 'aboutus' },
  { title: '加入我们', path: '/joinus', name: 'joinus' },
  { title: '联系我们', path: '/contractus', name: 'contractus' },
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
    if (item.name === path) {
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

function findName(data, name) {
  let value = false;
  function res(data) {
    for (let i = 0; i < data.length; i += 1) {
      if (data[i].name === name) {
        value = data[i].menuColor;
        return;
      }
      if (data[i].child) {
        res(data[i].child);
      }
    }
  }
  res(data);
  return value;
}

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
      isIndex: false,
    };
  },
  computed: {},
  watch: {
    $route(to) {
      this.setMenuColor(findName(this.menu, to.name), to.name);
    },
    scrollTop() {
      if (this.scrollTop >= 100) {
        this.fixedTop = true;
      } else {
        this.fixedTop = false;
      }
    },
  },
  mounted: function a() {
    const { name } = this.$route;
    this.activeIndex = dfs(this.menu, name);
    this.setMenuColor(findName(this.menu, name), name);
    window.onclick = () => {
      this.showChild = [];
    };

    window.onscroll = () => {
      const scrollTop =
        document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
      this.scrollTop = scrollTop;
    };
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
      this.handleSwitchChild(index);
      this.showNav = !this.showNav;
      this.activeIndex = index;
    },
    setMenuColor(bool, name) {
      if (document.documentElement.clientWidth <= 577 && name !== 'index') {
        document.body.style.paddingTop = '60px';
        this.isIndex = false;
      } else {
        document.body.style.paddingTop = '0px';
        this.isIndex = true;
      }
      if (bool) {
        this.menuColor = true;
      } else {
        this.menuColor = false;
      }
    },
  },
};
</script>
