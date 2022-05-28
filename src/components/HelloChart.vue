<template>
  <x-y-chart
    :data="data"
    :paddingRight="20"
    :series="[
      {
        type: 'LineSeries',
        dataFields: { dateX: 'date', valueY: 'value' },
      },
    ]"
    class="hello"
    ref="baseChart"
    type="XYChart"
  />
</template>

<script>
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_material from '@amcharts/amcharts4/themes/material';
import XYChart from '../amChart/XYChart.vue';

am4core.useTheme(am4themes_material);

export default {
  components: { XYChart },
  name: 'HelloChart',
  data() {
    /* 랜덤 방문자수 */
    let data = [];
    let visits = 10;
    for (let i = 1; i < 366; i++) {
      visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
      data.push({
        date: new Date(2018, 0, i),
        name: 'name' + i,
        value: visits,
      });
    }
    return {
      data,
    };
  },
  mounted() {
    // 최초 한 번
    let chart = this.$refs.baseChart.chart.amChart;

    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.minWidth = 35;

    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = 'date';
    series.dataFields.valueY = 'value';

    series.tooltipText = '{valueY.value}';
    chart.cursor = new am4charts.XYCursor();

    let scrollbarX = new am4charts.XYChartScrollbar();
    scrollbarX.series.push(series);
    chart.scrollbarX = scrollbarX;
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.hello {
  @include card-view;
  width: 100%;
  height: 500px;
}
</style>
