<template>
  <div class="contract-us">
    <div class="title-bg hidden-xs-only">
      <h3>联系我们</h3>
    </div>
    <!-- 地图 -->
    <div id="allmap" ref="allmap" class="hidden-sm-and-up" />
    <div class="container-full">
      <div class="container">
        <!-- 基本信息 -->
        <div class="base-msg">
          <h3><span class="red-text">一</span> 联系方式</h3>
          <h4>广西狐狸文化传媒有限公司</h4>
          <p>地址：广西壮族自治区南宁市东盟财经广场1号楼601</p>
          <p>邮编：10085</p>
          <p>邮箱：hr@hulimedia.com</p>
          <el-divider class="hidden-xs-only" />
        </div>
        <!-- 联系人信息 -->
        <el-row class="hidden-xs-only">
          <el-col v-for="(item, index) in contractMsg" :key="index" :span="12">
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
  },
  mounted() {
    this.map();
  },
  methods: {
    map() {
      const map = new window.BMap.Map(this.$refs.allmap) // 创建Map实例
      map.centerAndZoom(new window.BMap.Point(108.27255, 22.845113), 16) // 初始化地图,设置中心点坐标和地图级别
      map.addControl(new window.BMap.MapTypeControl({ // 添加地图类型控件
        mapTypes: [
          window.BMAP_NORMAL_MAP,
          window.BMAP_HYBRID_MAP
        ]
      }))
      const marker = new window.BMap.Marker(new window.BMap.Point(108.27255, 22.845113));
      map.addOverlay(marker);
      map.setCurrentCity('南宁') // 设置地图显示的城市 此项是必须设置的
      map.enableScrollWheelZoom(true)// 开启鼠标滚轮缩放
    }
  }
}
</script>
