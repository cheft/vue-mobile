<template>
  <div class="about">
    <div class="chart" ref="areachart"></div>
  </div>
</template>

<script>
  import renderAreaChart from '../utils/areachart';

  export default {
    mounted() {
      renderAreaChart(this.$refs.areachart);
    }
  };
</script>

<style scoped>
.chart {
  width: 100%;
  height: 380px;
}
</style>