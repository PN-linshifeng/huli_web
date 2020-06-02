<template>
  <div class="contract-us">
    <div class="hl-title-bg">
      <div class="content">
        <h3>联系我们</h3>
      </div>
    </div>
    <div class="container-full">
      <div class="container">
        <!-- 基本信息 -->
        <div class="base-msg">
          <h3><span class="red-text">一</span> 联系方式</h3>
          <h4>广西狐狸文化传媒有限公司</h4>
          <p>地址：广西壮族自治区南宁市东盟财经广场1号楼601</p>
          <p>邮编：10085</p>
          <p>邮箱：hr@hulimedia.com</p>
        </div>
        <el-divider />
        <!-- 联系人信息 -->
        <el-row>
          <el-col v-for="(item, index) in contractMsg" :key="index" :sm="12">
            <div class="constract-icon">
              <img :src="item.icon" alt="" />
            </div>
            <div class="person-info">
              <h4>{{ item.objName }}</h4>
              <p><span>联系人：</span>{{ item.name }}</p>
              <p><span>电话：</span>{{ item.tel }}</p>
              <p><span>Email: </span>{{ item.Email }}</p>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import './style.scss';

export default {
  data() {
    return {
      contractMsg: [
        {
          objName: '人事招聘',
          icon: require('../../assets/images/contractus_0.png'),
          name: '某先生',
          tel: '14523335666',
          Email: 'hr@hulimedia.com'
        },
        {
          objName: '技术支持',
          icon: require('../../assets/images/contractus_1.png'),
          name: '某先生',
          tel: '14523335666',
          Email: 'hr@hulimedia.com'
        },
        {
          objName: '商务合作',
          icon: require('../../assets/images/contractus_2.png'),
          name: '某先生',
          tel: '14523335666',
          Email: 'hr@hulimedia.com'
        },
        {
          objName: '作者投稿',
          icon: require('../../assets/images/contractus_3.png'),
          name: '某先生',
          tel: '14523335666',
          Email: 'hr@hulimedia.com'
        }
      ]
    }
  }
}
</script>
