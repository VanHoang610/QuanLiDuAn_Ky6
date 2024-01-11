import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useState } from 'react'

const Bill = (props) => {
  const navigation = props.navigation;
  const [dataPay, setDataPay] = useState(DataPay)
  const renderPay = (val) => {
    const handleDetailPay = () => {
      navigation.navigate('BillDetail', {dataPay: val.item})
    }
    const { id, phone, product, totalMonny } = val.item;
    return (
      <View style={{ marginTop: 20 }}>
        <View style={{ paddingHorizontal: 48 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.textPayData}>ID: {id}</Text>
            <Text style={styles.textPayData}>{phone}</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.textPayData}>Đã sử dụng:</Text>
            <Text style={styles.textPayData}>{product}</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.textPayData}>Tổng tiền:</Text>
            <Text style={styles.textPayData}>{totalMonny}</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, marginTop: 20 }}>
          <TouchableOpacity onPress={handleDetailPay} style={styles.btnDetailPay}>
            <Text style={styles.textbtnPay}>Chi tiết</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { navigation.navigate('PayingCash') }} style={styles.btnPay}>
            <Text style={styles.textbtnPay}>Thanh toán</Text>
          </TouchableOpacity>
          <Image source={require('../../../media/imageDetailPay.png')} />
        </View>
        <View style={styles.viewLinePay}></View>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <TouchableOpacity onPress={() => { navigation.goBack() }}><Image source={require('../../../media/homeIcon.png')} /></TouchableOpacity>
        <Text style={styles.textTitle}>Hóa đơn</Text>
        <Image source={require('../../../media/bellIcon.png')} />
      </View>
      <View style={styles.payContainer}>
        <Text style={styles.textPay}>Thanh toán hóa đơn</Text>
        <Image style={{ width: 25, height: 25 }} source={require('../../../media/searchBookingIcon.png')} />
      </View>
      <View>
        <FlatList
          data={dataPay}
          renderItem={renderPay}
          keyExtractor={item => item.id}
          horizontal={false}
          scrollEnabled={false}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}>
        </FlatList>
      </View>
    </View>
  )
}

export default Bill

const styles = StyleSheet.create({
  viewLinePay: {
    width: '90%',
    borderColor: '#000',
    borderWidth: 0.5,
    alignSelf: 'center',
    marginTop: 15
  },
  textbtnPay: {
    color: '#000',
    fontSize: 14,
    fontWeight: '600'
  },
  btnPay: {
    width: '37%',
    height: 37,
    borderColor: '#B9F0B8',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#B9F0B8',
    alignItems: 'center',
    paddingTop: 7
  },
  btnDetailPay: {
    width: '37%',
    height: 37,
    borderColor: '#F4EFEF',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#F4EFEF',
    alignItems: 'center',
    paddingTop: 7
  },
  textPayData: {
    color: '#000',
    fontSize: 13,
    fontWeight: '400'
  },
  textPay: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600'
  },
  payContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginTop: 20
  },
  textTitle: {
    color: '#4B4848',
    fontSize: 18,
    fontWeight: '900'
  },
  titleContainer: {
    backgroundColor: '#DEF2EF',
    width: '100%',
    height: 54,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingStart: 20,
    paddingRight: 20
  },
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F5F5F5'
  }
})

var DataPay = [
  {
    'id': 1,
    'phone': '0987654321',
    'product': '2 dịch vụ và 2 sản phẩm',
    'totalMonny': '450,000',
    'day': '16/07/2023',
    'time': '3:26',
    'nameCustomer': 'Đoàn Thanh Hòa',
    'Employe': 'Bá Sơn',
    'EmployePay': 'Lê Văn Hoàng',
    'price': '200',
    'quantity': '2'
  },
  {
    'id': 2,
    'phone': '0776616818',
    'product': '2 dịch vụ',
    'totalMonny': '100,000',
    'day': '16/07/2023',
    'time': '3:26',
    'nameCustomer': 'Đoàn Thanh Hòa',
    'Employe': 'Bá Sơn',
    'EmployePay': 'Lê Văn Hoàng',
    'quantity': '2',
    'price': '200'
  },
  {
    'id': 3,
    'phone': '0987654321',
    'product': '2 sản phẩm',
    'totalMonny': '120,000',
    'day': '16/07/2023',
    'time': '3:26',
    'nameCustomer': 'Đoàn Thanh Hòa',
    'Employe': 'Bá Sơn',
    'EmployePay': 'Lê Văn Hoàng',
    'price': '200',
    'quantity': '2'
  }
]