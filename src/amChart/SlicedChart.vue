<template>
  <base-chart :config="this.$props" :data="data" ref="baseChart" type="SlicedChart" />
</template>
<script>
import BaseChart from './BaseChart.vue';

export default {
  components: { BaseChart },
  name: 'SlicedChart',
  props: {
    data: Array,
    series: {
      type: Array,
      required: true,
    },
  },
  mounted() {
    const chart = this.$refs.baseChart.amChart;
    this.chart = chart;
  },
  updated() {
    this.chart.data = this.$props.data;
  }
};
</script>
