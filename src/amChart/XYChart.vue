<template>
  <base-chart
    :config="this.$props"
    :data="data"
    ref="baseChart"
    type="XYChart"
  />
</template>
<script>
import BaseChart from './BaseChart.vue';

export default {
  components: { BaseChart },
  name: 'XYChart',
  props: {
    data: Array,
    scrollbarX: Object,
    scrollbarY: Object,
    series: {
      type: Array,
      required: true,
    },
    xAxes: Array,
    yAxes: Array,
  },
  mounted() {
    const chart = this.$refs.baseChart.amChart;
    this.chart = chart;
  },
};
</script>
