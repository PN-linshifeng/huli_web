<template>
  <div class="contract-us">
    <div class="title-bg hidden-xs-only">
      <h3>联系我们</h3>
    </div>
    <!-- 地图 -->
    <div class="map-view hidden-sm-and-up">
      <el-amap vid="amap" :plugin="plugin" class="amap-demo" :center="center" />
    </div>
    <div class="contract-layout">
      <div class="content">
        <!-- 基本信息 -->
        <div class="base-msg hidden-xs-only">
          <h3><span class="red-text">一</span> 联系方式</h3>
          <h4>广西狐狸文化传媒有限公司</h4>
          <p>地址：广西壮族自治区南宁市东盟财经广场1号楼601</p>
          <p>邮编：10085</p>
          <p>邮箱：hr@hulimedia.com</p>
          <el-divider />
        </div>
        <div class="base-msg hidden-sm-and-up">
          <h3><span class="red-text">一</span> 联系方式</h3>
          <h4>广西狐狸文化传媒有限公司</h4>
          <p><span>ADDRESS</span>广西壮族自治区南宁市东盟财经广场1号楼601</p>
          <p><span>PHONE</span>010-000000</p>
          <p><span>E-MAIL</span>hr@hulimedia.com</p>
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
    const self = this;
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
      ],
      center: [108.266119, 22.83916],
      lng: 0,
      lat: 0,
      loaded: false,
      plugin: [{
        timeout: 100, // 超过10秒后停止定位，默认：无穷大
        showMarker: true, // 定位成功后在定位到的位置显示点标记，默认：true
        showCircle: false, // 定位成功后用圆圈表示定位精度范围，默认：true
        panToLocation: true, // 定位成功后将定位到的位置作为地图中心点，默认：true
        extensions: 'all',
        pName: 'Geolocation',
        events: {
          init(o) {
            // o 是高德地图定位插件实例
            o.getCurrentPosition((status, result) => {
              console.log(result)
              if (result && result.position) {
                self.lng = result.position.lng;
                self.lat = result.position.lat;
                self.center = [self.lng, self.lat];
                self.loaded = true;
                self.$nextTick();
              }
            });
          }
        }
      }]
    }
  }
}
</script>
