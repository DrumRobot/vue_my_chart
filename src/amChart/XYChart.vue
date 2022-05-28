<template>
  <base-chart type="XYChart" ref="baseChart" />
</template>
<script>
// @hook:mounted="childMounted"
import am4charts from '@amcharts/amcharts4/charts';
import am4core from '@amcharts/amcharts4/core';
import am4themes_material from '@amcharts/amcharts4/themes/material';
import BaseChart from './BaseChart.vue';

am4core.useTheme(am4themes_material);

export default {
  components: { BaseChart },
  name: 'XYChart',
  props: {
    data: Array,
    series: {
      type: Array,
      required: true,
    },
    xAxis: Object,
    yAxis: Object,
  },
  mounted() {
    const chart = this.$refs.baseChart.amChart;
    this.chart = chart;
    chart.data = this.$props.data; // 부모에서 넘어온 초기값을 amChart에 삽입

    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.minWidth = 35;
  },
};
</script>
