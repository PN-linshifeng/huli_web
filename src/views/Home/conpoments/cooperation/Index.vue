<template>
  <div class="container-full hl-cooperation">
    <div class="container">
      <h3 class="hl-hd-block">{{ title }}</h3>
      <div class="content">
        <ul>
          <li v-for="k in data" :key="k.title">
            <img :src="k.img" :alt="k.title" />
          </li>
        </ul>
      </div>
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
    data: {
      type: Array,
      default: function() {
        return [];
      },
    },
  },
};
</script>
