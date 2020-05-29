<template>
  <header class="head-tag">
    <div class="tabs">
      <template v-for="k of data">
        <router-link v-if="k.path" :key="k.path" :to="k.path">{{ k.title }}</router-link>
        <h3 v-else :key="k.path" :class="k.active&&'router-link-active'">{{ k.title }}</h3>
      </template>
    </div>
    <slot />
  </header>
</template>
<script>
import './style.scss';
export default {
  props: {
    data: {
      required: true,
      type: Array,
    },
  },
};
</script>
