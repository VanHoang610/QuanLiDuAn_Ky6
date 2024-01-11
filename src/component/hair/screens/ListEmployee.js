import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
var DataEmployee = [
  {
    'id': 1,
    'nameStylist': "Phạm Trọng Nghĩa",
    'sex': "Nam",
    'phone': '0795515521',
    'birtDay': '23/05/2002',
    'email': 'trongnghia@gmail.com',
    'address': 'Hồ Chính Minh',
    'idUser': 'NV01',
    'position': 'Nhân Viên', //chức vụ
    'role': 'Stylist', //vai trò
    'firtsDay': '20/11/2022',
    'salary': '15,000,000',
    'status': 'Đi làm'
  },
  {
    "id": 2,
    'nameStylist': "Trương Minh Thi",
    'sex': "Nam",
    'phone': '0995214753',
    'birtDay': '02/05/1998',
    'email': 'minhthi@gmail.com',
    'address': 'Hòa Bình',
    'idUser': 'NV02',
    'position': 'Nhân Viên', //chức vụ
    'role': 'Stylist', //vai trò
    'firtsDay': '20/01/2020',
    'salary': '16,000,000',
    'status': 'Nghỉ làm'
  },
  {
    "id": 3,
    'nameStylist': "Nguyễn Bá Sơn",
    'sex': "Nam",
    'phone': '099955221',
    'birtDay': '04/08/2003',
    'email': 'bason@gmail.com',
    'address': 'Nghệ An',
    'idUser': 'NV03',
    'position': 'Nhân Viên', //chức vụ
    'role': 'Stylist', //vai trò
    'firtsDay': '20/12/2023',
    'salary': '12,000,000',
    'status': 'Nghỉ làm'
  }
]
var DataSkinner = [
  {
    'id': 1,
    'nameSkinner': "Đoàn Thanh Hòa",
    'sex': "Nam",
    'phone': '098765321',
    'birtDay': '11/01/1996',
    'email': 'thanhhoan@gmail.com',
    'address': 'Dak Lak',
    'idUser': 'NV01',
    'position': 'Nhân Viên', //chức vụ
    'role': 'Skinner', //vai trò
    'firtsDay': '20/11/2022',
    'salary': '12,000,000',
    'status': 'Đi làm'
  },
  {
    "id": 2,
    'nameSkinner': "Lê Văn Hoàng",
    'sex': "Nam",
    'phone': '0776616818',
    'birtDay': '06/10/2001',
    'email': 'vanhoang@gmail.com',
    'address': 'Xuân Sơn',
    'idUser': 'NV02',
    'position': 'Nhân Viên', //chức vụ
    'role': 'Skinner', //vai trò
    'firtsDay': '20/01/2021',
    'salary': '15,000,000',
    'status': 'Đi làm'
  },
  {
    "id": 3,
    'nameSkinner': "Võ Như Quân",
    'sex': "Nam",
    'phone': '0772616818',
    'birtDay': '04/04/2001',
    'email': 'nhuquan@gmail.com',
    'address': 'Xuân Sơn',
    'idUser': 'NV03',
    'position': 'Nhân Viên', //chức vụ
    'role': 'Skinner', //vai trò
    'firtsDay': '20/12/2022',
    'salary': '12,000,000',
    'status': 'Nghỉ làm'
  }
]
const ListEmployee = (props) => {
  const navigation = props.navigation;
  const [dataEmployee, setDataEmployee] = useState(DataEmployee)
  const [dataSkinner, setDataSkinner] = useState(DataSkinner)
  const renderEmployee = (val) => {
    const { nameStylist } = val.item;
    const handleDetailStylist = () => {
      navigation.navigate('DetailEmployee', {detailEmployee: val.item})
    }
    return (
      <View>
        <View>
          <TouchableOpacity onPress={handleDetailStylist}>
            <Text style={styles.textList}>{nameStylist}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.viewLine}></View>
      </View>
    )
  }
  const renderSkinner = (val) => {
    const { nameSkinner } = val.item;
    return (
      <View>
        <View>
          <TouchableOpacity>
            <Text style={styles.textList}>{nameSkinner}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.viewLine}></View>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <TouchableOpacity onPress={() => { navigation.goBack() }}><Image source={require('../../../media/homeIcon.png')} /></TouchableOpacity>
        <Text style={styles.textTitle}>DS Nhân Viên</Text>
        <Image source={require('../../../media/bellIcon.png')} />
      </View>
      <View style={styles.allEmployeeContainer}>
        <Text style={styles.textAllBill}>Tất cả nhân viên</Text>
        <Image style={{ width: 25, height: 25 }} source={require('../../../media/searchBookingIcon.png')} />
      </View>
      <View style={styles.viewFunction}>
        <Text style={styles.textFunction}>Stylist</Text>
      </View>
      <View>
        <FlatList
          data={dataEmployee}
          renderItem={renderEmployee}
          keyExtractor={item => item.id}
          horizontal={false}
          scrollEnabled={false}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}>
        </FlatList>
      </View>
      <View style={[styles.viewFunction, { marginTop: 0 }]}>
        <Text style={styles.textFunction}>Skinner</Text>
      </View>
      <View>
        <FlatList
          data={dataSkinner}
          renderItem={renderSkinner}
          keyExtractor={item => item.id}
          horizontal={false}
          scrollEnabled={false}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}>
        </FlatList>
      </View>
      <View style={{ position: 'absolute', top: 680, start: 300 }}>
        <TouchableOpacity onPress={() => { navigation.navigate('AddEmployee') }} style={styles.viewAddEmployee}>
          <Image style={{ alignSelf: 'center', marginTop: 20 }} source={require('../../../media/addEmployeeIcon.png')} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ListEmployee

const styles = StyleSheet.create({
  viewAddEmployee: {
    borderRadius: 50,
    width: 60,
    height: 60,
    backgroundColor: '#B9F0B8'
  },
  viewLine: {
    borderWidth: 0.3,
    borderColor: '#7B7979',
    marginTop: 11
  },
  textList: {
    color: '#000',
    fontSize: 18,
    fontWeight: '600',
    marginStart: 36,
    marginTop: 10
  },
  textFunction: {
    color: '#4A4949',
    fontSize: 16,
    fontWeight: '700',
    marginStart: 13,
    marginTop: 8
  },
  viewFunction: {
    width: '100%',
    height: 40,
    backgroundColor: '#B9F0B8',
    marginTop: 17
  },
  textAllBill: {
    color: '#000',
    fontSize: 16,
    fontWeight: '500'
  },
  allEmployeeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 21
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