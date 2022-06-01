<template>
  <base-chart :config="config" :data="data" ref="baseChart" type="PieChart" />
</template>
<script>
import BaseChart from './BaseChart.vue';

export default {
  components: { BaseChart },
  name: 'PieChart',
  props: {
    data: Array,
    series: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      config: this.$props,
    };
  },
  mounted() {
    const chart = this.$refs.baseChart.amChart;
    this.chart = chart;
  },
};
</script>
