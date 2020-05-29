<template>
  <el-dialog
    :visible.sync="confirmIsShow"
    width="21.5rem"
    :append-to-body="true"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    :show-close="false"
    class="writing-dialog"
    top="30vh"
  >
    <slot />
  </el-dialog>
</template>

<script>
import './dialogbox.scss';

export default {
  name: 'DialogBox',
  props: {
    confirmIsShow: {
      type: Boolean,
      default: false
    }
  }
}
</script>
