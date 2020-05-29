<template>
  <div class="step">
    <ul>
      <li
        v-for="(k,i) in data"
        :key="k.title"
        :style="{width:(1/(data.length))*100+'%'}"
        :class="active===data.length&&i===active-1?'is-success ok':active>i?'ok':active===i?'active':''"
      >
        <div class="txt">
          <span class="radius">
            {{ i+1 }}
            <i>/ {{ data.length }}</i>
          </span>
          <span>{{ k.title }}</span>
        </div>
        <div
          v-if="i===data.length-1?false:true"
          class="iconfont end"
          :class="active>i?'hulizu24831':'hulizu2483'"
        />
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
      required: true,
      default: function() {
        return [];
      },
    },
    active: {
      type: Number,
      required: true,
      default: 0,
    },
  },
};
</script>
