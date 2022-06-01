<template>
  <div>
    <pie-chart
      :data="pieData"
      :series="[
        {type: 'PieSeries' , dataFields: { value: 'litres', category: 'country' } }
      ]"
      ref="pieChart"
    />
    <x-y-chart
      :data="xyData"
      :series="[
        { type: 'LineSeries', dataFields: { dateX: 'date', valueY: 'value' } },
      ]"
      :xAxes="[{ type: 'DateAxis' }]"
      :yAxes="[
        {
          type: 'ValueAxis',
          renderer: { minWidth: 35 },
          tooltip: { disabled: true },
        },
      ]"
      ref="xyChart"
    />
  </div>
</template>
<script>
// ParentData(Initial) - ParentCreate - ChildCreate(Binding) - ChildMounted - ParentMounted
import PieChart from '../amChart/PieChart.vue';
import XYChart from '../amChart/XYChart.vue';

const createXYData = () => {
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
  return data;
};

const pieData = [
  {
    country: 'Lithuania',
    litres: 501.9,
  },
  {
    country: 'Czech Republic',
    litres: 301.9,
  },
  {
    country: 'Ireland',
    litres: 201.1,
  },
  {
    country: 'Germany',
    litres: 165.8,
  },
  {
    country: 'Australia',
    litres: 139.9,
  },
  {
    country: 'Austria',
    litres: 128.3,
  },
  {
    country: 'UK',
    litres: 99,
  },
  {
    country: 'Belgium',
    litres: 60,
  },
  {
    country: 'The Netherlands',
    litres: 50,
  },
];

export default {
  components: { PieChart, XYChart },
  name: 'ChartComponentTest',
  data() {
    console.log('Parent data initialize');
    return {
      pieData,
      xyData: createXYData(),
    };
  },
  created() {
    console.log('Parent created');
  },
  mounted() {
    console.log('Parent mounted');
  },
  updated() {
    console.log('Parent updated');
  },
};
</script>
