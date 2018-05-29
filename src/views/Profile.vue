<template>
  <div class="profile">
    <h4 id="title" class="title" style="color:#87888a;text-align: center;">请绘制您的图形密码</h4>
    <a id="updatePassword" style="position: absolute;right: 5px;top: 5px;color:#fff;font-size: 10px;display:none;">重置密码</a>
    <canvas id="canvas"></canvas>
  </div>
</template>

<script>
  import H5lock from '../utils/h5lock';

  export default {
    mounted() {
      new H5lock({
        chooseType: 3
      }).init();
    }
  };
</script>

<style scoped>
.profile {
  padding: 15px;
}

#canvas {
  background: rgba(0, 0, 0, 0) !important;
}
</style>

