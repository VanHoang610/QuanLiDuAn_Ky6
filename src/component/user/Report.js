import {
  useWindowDimensions,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {BarChart} from 'react-native-chart-kit';

const Report = () => {
  const data = {
    labels: ['2', '3', '4', '5', '6', '7', '8'],
    datasets: [
      {
        data: [500, 200, 300, 400, 500, 600, 700],
      },
    ],
  };
  const {width} = useWindowDimensions();

  const hazz = () =>{
    const textContent = "Doanh thu  bằng tổng các giá trị các hóa đơn đã  thanh toán đã trừ hóa đơn bị hủy";

  // Tách các từ trong văn bản
  const words = textContent.split(' ');
    if (words.length >= 2) {
      return (
        <View style={styles.container}>
          <Text style={styles.boldText}>{words[0]} {words[1]}</Text>
          <Text>{words.slice(2).join(' ')}</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Text>{textContent}</Text>
        </View>
      );
    }
  }
  return (
    <View style={styles.backgroundContainer}>
      <View style={styles.containerHeader}>
        {/* <View style={styles.viewHeader}> */}
        <Image source={require('../../image/IconHome.png')} />
        <Text style={styles.textBookSchedule}>Thống Kê</Text>
        <Image source={require('../../image/IconNotification.png')} />
        {/* </View> */}
      </View>
      <View style={styles.containerSelect}>
        <TouchableOpacity style={styles.touchableOpacitySell}>
          <Text style={styles.textSell}>Bán Hàng</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableOpacitySell}>
          <Text style={styles.textSell}>Kho</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableOpacitySell}>
          <Text style={styles.textSell}>Kho SP</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containerRevenue}>
        <View style={styles.viewWeek}>
          <Text style={styles.textWeek}>Tuần</Text>
          <Text style={styles.textWeek}>Tuần 6</Text>
        </View>
        <View style={styles.viewRevenue}>
          <Text style={styles.textRevenue}>Doanh Thu</Text>
          <Text style={styles.numberRevenue}>10,000,000 VND</Text>
        </View>
        <BarChart
          data={data}
          width={width}
          height={200}
          // yAxisLabel=""
          chartConfig={{
            backgroundGradientFrom: '#FFFAFA',
            backgroundGradientTo: '#FFFAFA',
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
              fontWeight: 'bold',
            },
            fromZero: true,
            formatYLabel: value => `${value / 1}.000`,
            barPercentage: 0.5, // Tỷ lệ chiều rộng của các cột
          }}
          style={{
            marginVertical: 8,
            borderRadius: 16,
            marginHorizontal:15
          }}
        />
        <View style={styles.viewTitleRevenue}>
         {hazz()}
        </View>
      </View>
    </View>
  );
};

export default Report;

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    textAlign:'left'
  },
  boldText: {
    fontWeight: 'bold',
    color:'black'
  },
  viewTitleRevenue:{
    marginTop:20,
    marginStart:20,
    marginEnd:100, 
    flexDirection:'row'
  },
  containerRevenue: {
    backgroundColor: '#FFFAFA',
    borderTopEndRadius: 16,
    borderTopStartRadius: 16,
  },
  numberRevenue: {
    color: '#000',
    fontSize: 16,
    fontWeight: '700',
  },
  textRevenue: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
  },
  textWeek: {
    color: '#585454',
    fontSize: 16,
    fontWeight: '300',
  },
  viewRevenue: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginStart: 47,
    marginEnd: 28,
    marginTop: 33,
    marginBottom: 27,
  },
  viewWeek: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 28,
    marginTop: 15,
  },
  textSell: {
    color: '#4A4949',
    fontSize: 14,
    fontWeight: '600',
  },
  touchableOpacitySell: {
    height: 34,
    backgroundColor: '#B9F0B8',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    width: '26%',
  },
  containerSelect: {
    marginVertical: 24,
    marginHorizontal: 23,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textBookSchedule: {
    color: '#4B4848',
    fontSize: 18,
    fontWeight: '900',
  },
  containerHeader: {
    backgroundColor: '#DEF2EF',
    flexDirection: 'row',
    height: 54,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  backgroundContainer: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});
