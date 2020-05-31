<template>
  <div class="hl-news-list">
    <ul>
      <li v-for="k in data" :key="k.title">
        <router-link :to="'/news/' + k.id" :title="k.title">
          <div class="img">
            <img :src="k.img" :alt="k.title" width="384" height="218" />
          </div>
          <div class="content">
            <h4>{{ k.title }}</h4>
            <p class="time">{{ k.time }}</p>
            <p class="description">
              {{ k.des }}
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import './style.scss';
export default {
  props: {
    data: {
      type: Array,
      default: function() {
        return [];
      },
    },
  },
};
</script>
