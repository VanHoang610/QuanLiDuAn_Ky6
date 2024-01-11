import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const CustomerNotArrive = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.viewContainer}>
      <View style={styles.viewList}>
        <Image source={require('../../image/Rectangle.png')}/>
        <View style={{marginStart:20}}>
        <View style={styles.viewInformation}>
          <Text style={styles.textName}>Đoàn Thanh Hòa</Text>
          <Text style={styles.textPhone}>0983826756</Text>
        </View>
        <View style={styles.viewState}>
          <Text style={styles.textState}>Đã Tới</Text>
          <Text style={styles.textHour}>Giờ book: 16:00</Text>
        </View>
        </View>
      </View>
    </View>
  )
}

export default CustomerNotArrive

const styles = StyleSheet.create({
  textHour:{
    marginStart:35,
    color: "#585454",
    textAlign: "center",
    fontSize: 12,
    fontWeight: "400",
    width:'35%'
  },
  textState:{
    color: "#4A4949",
    fontSize: 14,
    fontWeight: "600",
    borderRadius:10,
    paddingHorizontal:35,
    paddingVertical:10,
    backgroundColor:'#DBE9DA'
  },
  textPhone:{
    color: "#585454",
    fontSize: 14,
    fontWeight: "400",
    marginStart:25
  },
  textName:{
    color: "#4A4949",
    fontSize: 16,
    fontWeight: "700",
  },
  viewState:{
    flexDirection:'row',
    alignItems:'center'
  },
  viewInformation:{
    flexDirection:'row',
    alignItems:'center', 
    marginBottom:15
  },
  viewList:{
    marginTop:28,
    height:120,
    backgroundColor:'#FFF',
    flexDirection:'row',
    alignItems:'center',
    paddingStart:10
  },
  viewContainer:{
    flex:1,
  }
})