import { StyleSheet, Text, View, Image, Touchable, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

const BillDetail = (props) => {
  const navigation = props.navigation;
  const route = useRoute()
  const { dataPay } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <TouchableOpacity onPress={() => { navigation.goBack() }}><Image source={require('../../../media/homeIcon.png')} /></TouchableOpacity>
        <Text style={styles.textTitle}>Hóa đơn chi tiết</Text>
        <Image source={require('../../../media/bellIcon.png')} />
      </View>
      <View>
        <View style={{ paddingHorizontal: 20, marginTop: 15 }}>
          <View style={styles.idContainer}>
            <View>
              <Text style={styles.textDetailBill}>Mã HD: {dataPay.id}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={styles.textDetailBill}>{dataPay.day} </Text>
              <Text style={styles.textDetailBill}> {dataPay.time}</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.textDetailBill}>Tên khách: {dataPay.nameCustomer}</Text>
            <Text style={styles.textDetailBill}>SDT: {dataPay.phone}</Text>
          </View>
          <View>
            <Text style={styles.textDetailBill}>Thợ chính: {dataPay.Employe}</Text>
          </View>
          <View>
            <Text style={styles.textDetailBill}>NV Thanh toán: {dataPay.EmployePay}</Text>
          </View>
          <View>
            <Text style={[styles.textDetailBill, { fontSize: 15, marginStart: 20 }]}>{dataPay.product}</Text>
          </View>
          <View style={styles.viewLinePay}></View>
          <View style={{ width: '90%', flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center', marginTop: 10 }}>
            <Text style={styles.textDetailBill}>Số lượng</Text>
            <Text style={styles.textDetailBill}>Giá</Text>
            <Text style={styles.textDetailBill}>Thành tiền</Text>
          </View>
          <View style={{ width: '90%', flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center', marginTop: 10 }}>
            <Text style={[styles.textDetailBill, { width: 70, textAlign: 'center' }]}>{dataPay.quantity}</Text>
            <Text style={[styles.textDetailBill, { width: 70, textAlign: 'center' }]}>{dataPay.price}</Text>
            <Text style={[styles.textDetailBill, { width: 70, textAlign: 'center' }]}>{dataPay.totalMonny} Đ</Text>
          </View>
          <View style={styles.viewLinePay}></View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 13 }}>
            <Text style={styles.textDetailBill}>Phải thanh toán</Text>
            <Text style={[styles.textDetailBill, { backgroundColor: 'pink' }]}>{dataPay.totalMonny} VNĐ</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, marginTop: 20 }}>
            <TouchableOpacity style={styles.btnDetailPay}>
              <Text style={styles.textbtnPay}>In</Text>
              <Image source={require('../../../media/printIcon.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate('PayingCash') }} style={styles.btnPay}>
              <Text style={styles.textbtnPay}>Thanh toán</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

export default BillDetail

const styles = StyleSheet.create({
  textbtnPay: {
    color: '#000',
    fontSize: 14,
    fontWeight: '600'
  },
  btnPay: {
    width: '40%',
    height: 37,
    borderColor: '#B9F0B8',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#B9F0B8',
    alignItems: 'center',
    paddingTop: 7,

  },
  btnDetailPay: {
    width: '40%',
    height: 37,
    borderColor: '#F4EFEF',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#F4EFEF',
    alignItems: 'center',
    paddingTop: 7,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30
  },
  viewLinePay: {
    width: '90%',
    borderColor: '#000',
    borderWidth: 0.5,
    alignSelf: 'center',
    marginTop: 15
  },
  textDetailBill: {
    color: '#000',
    fontWeight: '400',
    fontSize: 13,
    marginBottom: 9
  },
  idContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textTitle: {
    color: '#4B4848',
    fontSize: 18,
    fontWeight: '900',
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