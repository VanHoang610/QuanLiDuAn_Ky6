import {View, Text, useWindowDimensions} from 'react-native';
import {BarChart} from 'react-native-chart-kit';
import {barCharData} from './data';

const BarChartDemo = ()=>{
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
          {
            data: [100,200.000, 300.000, 400.000, 500.000, 600.00,],
          },
        ],
      };
    const {width} = useWindowDimensions();
   return (
    <View>
      <BarChart
        data={data}
        width={width}
        height={200}
        // yAxisLabel=""
        chartConfig={{
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffffff',
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          fromZero: true,
          formatYLabel: (value) => `${value / 1}.000`,
        }}
        style={{
          marginVertical: 48,
          borderRadius: 16,
        //   marginEnd:10
        }}
      />
    </View>
   )
}

export default BarChartDemo;