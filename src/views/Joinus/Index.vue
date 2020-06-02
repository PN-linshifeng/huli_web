<template>
  <div class="join-us">
    <div class="hl-title-bg">
      <div class="content">
        <h3>加入我们</h3>
      </div>
    </div>
    <div class="container-full">
      <div class="container">
        <el-collapse v-model="activeName" accordion>
          <el-collapse-item v-for="(item, index) in joinMsg" :key="index" :name="`${index+1}`">
            <template slot="title">
              <h3 class="job-name">{{ item.objName }}</h3>
              <p class="creat-time">发布时间：{{ item.createdDate }}</p>
            </template>
            <div class="content-item">
              <h4>岗位职责</h4>
              <p v-for="(a, ai) in item.Responsibilities" :key="ai+index">{{ ai+1 }}.{{ a }}</p>
            </div>
            <div class="content-item">
              <h4>任职要求</h4>
              <p v-for="(b, bi) in item.claim" :key="bi+index">{{ bi+1 }}.{{ b }}</p>
            </div>
            <div class="content-item">
              <h4>简历可发至：<span class="yellow-text">{{ item.email }}</span></h4>
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
  </div>
</template>

<script>
import './style.scss';

export default {
  data() {
    return {
      activeName: '1',
      joinMsg: [
        {
          objName: '新媒体编辑',
          createdDate: '2020-04-29',
          Responsibilities: ['拓展新客户，维护老客户，开发客户渠道和资源，维护客户关系；', '拓展新客户，维护老客户，开发客户渠道和资源，维护客户关系；', '拓展新客户，维护老客户，开发客户渠道和资源，维护客户关系；', '拓展新客户，维护老客户，开发客户渠道和资源，维护客户关系；'],
          claim: ['拓展新客户，维护老客户，开发客户渠道和资源，维护客户关系；', '拓展新客户，维护老客户，开发客户渠道和资源，维护客户关系；', '拓展新客户，维护老客户，开发客户渠道和资源，维护客户关系；'],
          email: 'hr@hulimedia.com'
        },
        {
          objName: '签约编辑',
          createdDate: '2020-04-29',
          Responsibilities: ['拓展新客户，维护老客户，开发客户渠道和资源，维护客户关系；', '拓展新客户，维护老客户，开发客户渠道和资源，维护客户关系；', '拓展新客户，维护老客户，开发客户渠道和资源，维护客户关系；', '拓展新客户，维护老客户，开发客户渠道和资源，维护客户关系；'],
          claim: ['拓展新客户，维护老客户，开发客户渠道和资源，维护客户关系；', '拓展新客户，维护老客户，开发客户渠道和资源，维护客户关系；', '拓展新客户，维护老客户，开发客户渠道和资源，维护客户关系；'],
          email: 'hr@hulimedia.com'
        },
        {
          objName: '运营专员',
          createdDate: '2020-04-29',
          Responsibilities: ['拓展新客户，维护老客户，开发客户渠道和资源，维护客户关系；', '拓展新客户，维护老客户，开发客户渠道和资源，维护客户关系；', '拓展新客户，维护老客户，开发客户渠道和资源，维护客户关系；', '拓展新客户，维护老客户，开发客户渠道和资源，维护客户关系；'],
          claim: ['拓展新客户，维护老客户，开发客户渠道和资源，维护客户关系；', '拓展新客户，维护老客户，开发客户渠道和资源，维护客户关系；', '拓展新客户，维护老客户，开发客户渠道和资源，维护客户关系；'],
          email: 'hr@hulimedia.com'
        },
        {
          objName: '技术总监',
          createdDate: '2020-04-29',
          Responsibilities: ['拓展新客户，维护老客户，开发客户渠道和资源，维护客户关系；', '拓展新客户，维护老客户，开发客户渠道和资源，维护客户关系；', '拓展新客户，维护老客户，开发客户渠道和资源，维护客户关系；', '拓展新客户，维护老客户，开发客户渠道和资源，维护客户关系；'],
          claim: ['拓展新客户，维护老客户，开发客户渠道和资源，维护客户关系；', '拓展新客户，维护老客户，开发客户渠道和资源，维护客户关系；', '拓展新客户，维护老客户，开发客户渠道和资源，维护客户关系；'],
          email: 'hr@hulimedia.com'
        },
        {
          objName: '运营总监',
          createdDate: '2020-04-29',
          Responsibilities: ['拓展新客户，维护老客户，开发客户渠道和资源，维护客户关系；', '拓展新客户，维护老客户，开发客户渠道和资源，维护客户关系；', '拓展新客户，维护老客户，开发客户渠道和资源，维护客户关系；', '拓展新客户，维护老客户，开发客户渠道和资源，维护客户关系；'],
          claim: ['拓展新客户，维护老客户，开发客户渠道和资源，维护客户关系；', '拓展新客户，维护老客户，开发客户渠道和资源，维护客户关系；', '拓展新客户，维护老客户，开发客户渠道和资源，维护客户关系；'],
          email: 'hr@hulimedia.com'
        },
        {
          objName: 'iOS开发程序员',
          createdDate: '2020-04-29',
          Responsibilities: ['拓展新客户，维护老客户，开发客户渠道和资源，维护客户关系；', '拓展新客户，维护老客户，开发客户渠道和资源，维护客户关系；', '拓展新客户，维护老客户，开发客户渠道和资源，维护客户关系；', '拓展新客户，维护老客户，开发客户渠道和资源，维护客户关系；'],
          claim: ['拓展新客户，维护老客户，开发客户渠道和资源，维护客户关系；', '拓展新客户，维护老客户，开发客户渠道和资源，维护客户关系；', '拓展新客户，维护老客户，开发客户渠道和资源，维护客户关系；'],
          email: 'hr@hulimedia.com'
        }
      ]
    }
  }
}
</script>
