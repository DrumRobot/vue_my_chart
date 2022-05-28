<template>
  <base-chart :data="data" :series="series" ref="baseChart" type="PieChart" />
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
};
</script>
