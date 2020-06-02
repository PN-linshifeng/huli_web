<template>
  <div class="hl-news-page">
    <div class="hl-title-bg">
      <div class="content">
        <h3>新闻动态</h3>
      </div>
    </div>
    <div class="container">
      <news-list :data="data" />
      <el-pagination
        :pager-count="5"
        background
        layout="prev, pager, next"
        :total="1000"
        class="hl-margin-block"
      />
    </div>
  </div>
</template>
<script>
import newsList from '@/components/News/List';
import './style.scss';

export default {
  components: {
    newsList,
  },
  data() {
    return {
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
        {
          id: 4,
          title: '发送到发是的阿斯蒂芬4',
          des:
            '这一块加起来比前一块，大概是它的两倍。而且我们是要推动这些资金用于保就业、民生和市场主体，支撑居民的收入。',
          time: '2020-09-09',
          img: require('../../assets/images/hs/n1.png'),
        },
        {
          id: 5,
          title: '发送到发是的阿斯蒂芬5',
          des:
            '这一块加起来比前一块，大概是它的两倍。而且我们是要推动这些资金用于保就业、民生和市场主体，支撑居民的收入。',
          time: '2020-09-09',
          img: require('../../assets/images/hs/n2.png'),
        },
        {
          id: 6,
          title: '发送到发是的阿斯蒂芬6',
          des:
            '这一块加起来比前一块，大概是它的两倍。而且我们是要推动这些资金用于保就业、民生和市场主体，支撑居民的收入。',
          time: '2020-09-09',
          img: require('../../assets/images/hs/n3.png'),
        },
      ],
    };
  },
};
</script>
