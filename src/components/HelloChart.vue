<template>
  <x-y-chart
    :cursor="{ type: 'XYCursor' }"
    :data="data"
    :paddingRight="20"
    :scrollbarX="{
      type: 'XYChartScrollbar',
    }"
    :series="[
      {
        type: 'LineSeries',
        dataFields: { dateX: 'date', valueY: 'value' },
        tooltipText: '{valueY.value}',
      },
    ]"
    :xAxes="[{ type: 'DateAxis', 'renderer.grid.template.location': 0 }]"
    :yAxes="[
      {
        type: 'ValueAxis',
        renderer: { minWidth: 35 },
        tooltip: { disabled: true },
      },
    ]"
    class="hello"
    ref="xyChart"
  />
</template>

<script>
import * as am4core from '@amcharts/amcharts4/core';
import am4themes_material from '@amcharts/amcharts4/themes/material';
import { XYChart } from 'vue-amchart4';

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
