import App from '../App.vue';
import HelloWorld from '../components/HelloWorld.vue';

export const routes = [
  {
    path: '/',
    component: App,
    children: [
      { path: '', component: HelloWorld },
      {
        path: '/chart',
        component: () => import('../components/HelloChart.vue'),
      },
      {
        path: '/pie',
        component: () => import('../components/ChartComponentTest.vue'),
      },
    ],
  },
];

export default routes;
