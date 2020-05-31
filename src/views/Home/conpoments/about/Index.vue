<template>
  <div class="container margin-block hl-index-about">
    <h3 class="hl-hd-block">
      关于我们
    </h3>
    <div class="info">
      <p>
        公司注册资金一亿人民币，是在原赛高集团各业务板块基础上组件的综合性企业集团，旗下拥有地产、酒店、写字楼、商业等多个业务单元，是在经开区创始、发展壮大的知名民营行业，其围绕张家堡环岛打造的熙地港、写字楼、洲际酒店等...
      </p>
    </div>
    <div class="items">
      <ul>
        <li v-for="k in items" :key="k.title">
          <div class="box">
            <div class="img">
              <img :src="k.img" :alt="k.title" />
            </div>
            <h4>
              {{ k.title }}
            </h4>
            <p>{{ k.des }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import './style.scss';

export default {
  data() {
    return {
      items: [
        {
          title: '作者成长',
          img: require('../../../../assets/images/index-about-1.png'),
          des:
            '完善的原创扶持和作者培养体系，优厚的作者福利，持续性挖掘优秀创作力量，祝你成就笔尖梦想。',
        },
        {
          title: '作者成长2',
          img: require('../../../../assets/images/index-about-2.png'),
          des:
            '完善的原创扶持和作者培养体系，优厚的作者福利，持续性挖掘优秀创作力量，祝你成就笔尖梦想。',
        },
        {
          title: '作者成长3',
          img: require('../../../../assets/images/index-about-3.png'),
          des:
            '完善的原创扶持和作者培养体系，优厚的作者福利，持续性挖掘优秀创作力量，祝你成就笔尖梦想。',
        },
      ],
    };
  },
};
</script>
