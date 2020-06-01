<template>
  <div class="container-full hl-index-new">
    <div class="container">
      <h3 class="hl-hd-block">{{ title }}</h3>
      <div class="content">
        <newList :data="data" />
      </div>
      <div class="footer">
        <router-link to="/news">更多动态</router-link>
      </div>
    </div>
  </div>
</template>
<script>
import newList from '@/components/News/List.vue';
import './style.scss';

export default {
  components: { newList },
  props: {
    title: {
      type: String,
      default: '',
    },
    data: {
      type: Array,
      default: function() {
        return [];
      },
    },
  },
};
</script>
