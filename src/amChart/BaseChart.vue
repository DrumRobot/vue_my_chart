<template>
  <div ref="chartdiv"></div>
</template>
<script>
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';

export default {
  name: 'BaseChart',
  props: {
    data: Array,
    series: {
      type: Array,
      required: true,
    },
    type: String,
    config: Object,
  },
  watch: {
    data(data) {
      this.amChart.data = data;
    },
  },
  mounted() {
    let { config, type, ...props } = this.$props;
    config = {...config, ...props}
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
