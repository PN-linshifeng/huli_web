<template>
  <div>
    <banner :data="bannerData" />
    <about :title="aboutData.title" :des="aboutData.des" :data="aboutData.data" />
    <copyright :title="copyrightData.title" :des="copyrightData.des" :data="copyrightData.data" />
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
      bannerData: [
        {
          title: '想象不止，探索不止',
          des: '狐狸传媒，文创之路探索无止境',
          img: require('../../assets/images/index-banner-01.jpg'),
        },
        {
          title: '想象不止，探索不止2',
          des: '狐狸传媒，文创之路探索无止境',
          img: require('../../assets/images/index-banner-01.jpg'),
        },
        {
          title: '想象不止，探索不止3',
          des: '狐狸传媒，文创之路探索无止境',
          img: require('../../assets/images/index-banner-01.jpg'),
        },
      ],
      copyrightData: {
        title: '全版权运营',
        des:
          '《武极仙》你是否有个武侠梦？你是否幻想过飞檐走壁、开山裂石？浩瀚的星海，星辰幻灭，暗无天地，星辰的颤抖与崩碎，星系的挪移变换，平静下暗藏着什么样的波涛？',
        data: [
          {
            id: 1,
            path: '#',
            img: require('../../assets/images/hs/104.png'),
          },
          {
            id: 2,
            path: '#',
            img: require('../../assets/images/hs/104.png'),
          },
          {
            id: 3,
            path: '#',
            img: require('../../assets/images/hs/104.png'),
          },
          {
            id: 4,
            path: '#',
            img: require('../../assets/images/hs/104.png'),
          },
          {
            id: 5,
            path: '#',
            img: require('../../assets/images/hs/104.png'),
          },
          {
            id: 6,
            path: '#',
            img: require('../../assets/images/hs/104.png'),
          },
          {
            id: 7,
            path: '#',
            img: require('../../assets/images/hs/104.png'),
          },
        ],
      },
      aboutData: {
        title: '关于我们',
        des:
          '公司注册资金一亿人民币，是在原赛高集团各业务板块基础上组件的综合性企业集团，旗下拥有地产、酒店、写字楼、商业等多个业务单元，是在经开区创始、发展壮大的知名民营行业，其围绕张家堡环岛打造的熙地港、写字楼、洲际酒店等...',
        data: [
          {
            title: '作者成长',
            img: require('../../assets/images/index-about-1.png'),
            des:
              '完善的原创扶持和作者培养体系，优厚的作者福利，持续性挖掘优秀创作力量，祝你成就笔尖梦想。',
          },
          {
            title: '作者成长2',
            img: require('../../assets/images/index-about-2.png'),
            des:
              '完善的原创扶持和作者培养体系，优厚的作者福利，持续性挖掘优秀创作力量，祝你成就笔尖梦想。',
          },
          {
            title: '作者成长3',
            img: require('../../assets/images/index-about-3.png'),
            des:
              '完善的原创扶持和作者培养体系，优厚的作者福利，持续性挖掘优秀创作力量，祝你成就笔尖梦想。',
          },
        ],
      },
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
