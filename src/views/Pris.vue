<template>
  <div class="pris">
    <div class="chart" ref="kchart"></div>
  </div>
</template>

<script>
  import renderKChart from '../utils/kchart';

  export default {
    mounted() {
      renderKChart(this.$refs.kchart);
    }
  };
</script>

<style scoped>
.chart {
  width: 100%;
  height: 380px;
}
</style>
