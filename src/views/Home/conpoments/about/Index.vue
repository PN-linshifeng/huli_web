<template>
  <div class="container margin-block hl-index-about">
    <h3 class="hl-hd-block">{{ title }}</h3>
    <div class="info">
      <p>{{ des }}</p>
    </div>
    <div class="items">
      <ul>
        <li v-for="k in data" :key="k.title">
          <div class="box">
            <div class="img">
              <img :src="k.img" :alt="k.title" />
            </div>
            <h4>{{ k.title }}</h4>
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
  props: {
    title: {
      type: String,
      default: '',
    },
    des: {
      type: String,
      default: '',
    },
    data: {
      type: Array,
      default: function a() {
        return [];
      },
    },
  },
};
</script>
