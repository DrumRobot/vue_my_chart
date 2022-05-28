<template>
  <base-chart :series="series" ref="baseChart" type="PieChart" />
</template>
<script>
import am4core from '@amcharts/amcharts4/core';
import am4themes_material from '@amcharts/amcharts4/themes/material';
import BaseChart from './BaseChart.vue';

am4core.useTheme(am4themes_material);

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
};
</script>
