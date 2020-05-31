<template>
  <div>
    <banner />
    <about />
    <copyright />
    <product />
    <cooperation :title="cooperationData.title" :data="cooperationData.data" />
    <news :title="newsData.title" :data="newsData.data" />
  </div>
</template>
<script>
import banner from './conpoments/banner/Index';
import about from './conpoments/about/Index';
import copyright from './conpoments/copyright/Index';
import product from './conpoments/product/Index';
import cooperation from './conpoments/cooperation/Index';
import news from './conpoments/news/Index';

export default {
  name: 'Carrousel',
  components: {
    banner,
    about,
    copyright,
    product,
    cooperation,
    news,
  },
  data() {
    return {
      cooperationData: {
        title: '合作伙伴',
        data: [
          {
            title: '宏宇天成',
            img: require('../../assets/images/cooperation-hongyu.png'),
          },
          {
            title: '阿里巴巴文学',
            img: require('../../assets/images/cooperation-ali.png'),
          },
          {
            title: '凤凰文学',
            img: require('../../assets/images/cooperation-fenghuang.png'),
          },
          {
            title: '百度',
            img: require('../../assets/images/cooperation-baidu.png'),
          },
          {
            title: '阿里云',
            img: require('../../assets/images/cooperation-ali2.png'),
          },
          {
            title: '腾讯',
            img: require('../../assets/images/cooperation-qq1.png'),
          },
          {
            title: '腾讯阅读',
            img: require('../../assets/images/cooperation-qq.png'),
          },
          {
            title: '起点',
            img: require('../../assets/images/cooperation-qidian.png'),
          },
          {
            title: '抖音',
            img: require('../../assets/images/cooperation-douyin.png'),
          },
          {
            title: '头条',
            img: require('../../assets/images/cooperation-toutiao.png'),
          },
        ],
      },
      newsData: {
        title: '新闻动态',
        data: [
          {
            id: 1,
            title: '发送到发是的阿斯蒂芬',
            des:
              '这一块加起来比前一块，大概是它的两倍。而且我们是要推动这些资金用于保就业、民生和市场主体，支撑居民的收入。',
            time: '2020-09-09',
            img: require('../../assets/images/hs/n1.png'),
          },
          {
            id: 2,
            title: '发送到发是的阿斯蒂芬2',
            des:
              '这一块加起来比前一块，大概是它的两倍。而且我们是要推动这些资金用于保就业、民生和市场主体，支撑居民的收入。',
            time: '2020-09-09',
            img: require('../../assets/images/hs/n2.png'),
          },
          {
            id: 3,
            title: '发送到发是的阿斯蒂芬3',
            des:
              '这一块加起来比前一块，大概是它的两倍。而且我们是要推动这些资金用于保就业、民生和市场主体，支撑居民的收入。',
            time: '2020-09-09',
            img: require('../../assets/images/hs/n3.png'),
          },
        ],
      },
    };
  },
};
</script>
