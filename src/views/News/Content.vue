<template>
  <div class="hl-news-content-page">
    <div class="hl-breadcrumb container-full margin-block">
      <div class="container">
        <router-link to="/index">首页</router-link>>
        <router-link to="/news">新闻动态</router-link>>
        正文
      </div>
    </div>

    <div class="container hl-news-content">
      <h2>{{ title }}</h2>
      <p class="hl-time-author">时间：{{ time }} 作者：{{ author }}</p>
      <el-divider />
      <div class="hl-content" v-html="content" />
      <el-divider />
    </div>
    <div class="container footer margin-block">
      <div class="right">
        <a @click="$router.go(-1)">BACK</a>
      </div>
      <div class="left">
        <p>
          上一篇 |
          <router-link :to="prev.url">{{ prev.title }}</router-link>
        </p>
        <p>
          下一篇 |
          <router-link :to="next.url">{{ next.title }}</router-link>
        </p>
      </div>
      <div class="share">
        <span>分享</span>
        <a :href="qq" target="_blank">
          <img src="../../assets/images/share-qq.png" alt srcset />
        </a>
        <a :href="qqzone" target="_blank">
          <img src="../../assets/images/share-qzone.png" alt srcset />
        </a>
        <a :href="weibo" target="_blank">
          <img src="../../assets/images/share-weibo.png" alt srcset />
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import './style.scss';

export default {
  data() {
    return {
      title: '习声回响｜自古英雄出少年',
      time: '2020-02-09 12:13',
      author: '比心',
      des: '“自古英雄出少年。”少年儿童是祖国的未来、中华民族的希望，要从小树立远大志向、培育美好心灵，为实现中华民族伟大复兴的中国梦时刻准备着。',
      content: '<p class="one-p">“自古英雄出少年。”少年儿童是祖国的未来、中华民族的希望，要从小树立远大志向、培育美好心灵，为实现中华民族伟大复兴的中国梦时刻准备着。</p><p class="one-p">习近平总书记历来心系少年儿童成长与发展，对祖国的未来寄予厚望。在他看来，培养好少年儿童是一项战略任务，事关长远。</p><p class="one-p">“小树苗”如何成长为“参天大树”？中国特色社会主义事业合格建设者和可靠接班人如何培养造就？一起来听听总书记怎么说。</p>',
      prev: {
        title: '习声回响 自古英雄出少年',
        url: '/'
      },
      next: {
        title: '习声回响 自古英雄出少年',
        url: '/'
      }
    }
  },
  computed: {
    qq() {
      return 'https://connect.qq.com/widget/shareqq/index.html?url=' +
          encodeURIComponent(location.href) +
          '&title=' +
          this.title +
          '&desc=' +
          this.des
    },
    qqzone() {
      return 'https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=' +
          encodeURIComponent(location.href) +
          '&title=' +
          this.title +
          '&summary=' +
          this.des
    },
    weibo() {
      return 'https://service.weibo.com/share/share.php?url=' +
          encodeURIComponent(location.href) +
          '&title=' +
          this.title
    }
  },
  mounted() {

  },
  methods: {

  }
}
</script>
