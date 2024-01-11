import { ChartData } from 'react-native-chart-kit/dist/HelperTypes';
import { LineChartData } from 'react-native-chart-kit/dist/line-chart/LineChart';
import { StackedBarChartData } from 'react-native-chart-kit/dist/StackedBarChart';

export const barCharData = {
  labels: ['2', '3', '4', '5', '6', '7', 'cn'],
  datasets: [
    {
      data: [20, 35, 20, 45, 25, 75, 85],
      colors: [(opacity = 1) => '#F0C789', (opacity = 1) => '#F0C789', (opacity = 1) => '#F0C789', (opacity = 1) => '#F0C789', (opacity = 1) => '#F0C789', (opacity = 1) => '#FC5C5C' , (opacity = 1) => '#FC5C5C'],
    },
  ],
};

export const lineChartData = {
  labels: ['2', '3', '4', '5', '6', '7', 'cn'],
  datasets: [
    {
      data: [28, 45, 60, 70, 30, 40, 23],
      color: () => 'green',
      strokeWidth: 10,
    },
    {
      data: [30, 45, 50, 100, 50],
      color: () => 'red',
    },
  ],
  legend: ['January', 'February'],
};

export const stackedBarChartData = {
  labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'],
  data: [
    [10, 20],
    [50, 20],
    [20, 20],
    [40, 20],
    [30, 20],
  ],
  barColors: ['red', 'yellow'],
  legend: ['January', 'February'],
};