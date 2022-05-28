<template>
  <base-chart
    :config="config"
    :data="data"
    :series="series"
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
    series: {
      type: Array,
      required: true,
    },
    xAxes: Object,
    yAxes: Object,
  },
  data() {
    return {
      config: {
        xAxes: [{ type: 'DateAxis' }],
        yAxes: [{
          type: 'ValueAxis',
          renderer: { minWidth: 35 },
          tooltip: { disabled: true },
        }],
      },
    };
  },
  mounted() {
    const chart = this.$refs.baseChart.amChart;
    this.chart = chart;
    chart.data = this.$props.data; // 부모에서 넘어온 초기값을 amChart에 삽입

  },
};
</script>
