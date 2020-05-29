<template>
  <div class="has-topber has-aside">
    <base-header />

    <div>
      <router-view class="view-page" />
    </div>

    <base-footer />
  </div>
</template>
<script>
import BaseHeader from '../components/Header/Index';
import BaseFooter from '../components/Footer/Index';

import './style.scss';

export default {
  name: 'App',
  components: {
    BaseHeader,
    BaseFooter,
  },
};
</script>
