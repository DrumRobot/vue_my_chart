<template>
  <div ref="chartdiv"></div>
</template>
<script>
import am4core from '@amcharts/amcharts4/core';
import am4charts from '@amcharts/amcharts4/charts';

export default {
  name: 'BaseChart',
  props: {
    data: Array,
    series: {
      type: Array,
      required: true,
    },
    type: String,
  },
  watch: {
    data(data) {
      this.amChart.data = data;
    },
  },
  mounted() {
    const { type, ...config } = this.$props;
    this.amChart = am4core.createFromConfig(
      config,
      this.$refs.chartdiv,
      am4charts[type]
    );
  },
  beforeDestroy() {
    this.amChart?.dispose();
  },
};
</script>
