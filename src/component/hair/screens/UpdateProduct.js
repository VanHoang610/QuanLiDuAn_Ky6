import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

const UpdateProduct = (props) => {
  const navigation = props.navigation;
  const route = useRoute()
  const { dataProduct } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <TouchableOpacity onPress={() => { navigation.goBack() }}><Image source={require('../../../media/homeIcon.png')} /></TouchableOpacity>
        <Text style={styles.textTitle}>Sửa thông tin</Text>
        <Image source={require('../../../media/bellIcon.png')} />
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.viewAvatar}>
          <Image style={{ width: 126, height: 126 }} source={require('../../../media/imageProduct.png')}></Image>
          <TouchableOpacity style={styles.btnAddAvatar}>
            <Text style={styles.textUpdateIMG}>Sửa ảnh</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.viewInfo}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 37}}>
            <View><Text style={styles.textInfoProduct}>Mã sản phẩm</Text></View>
            <Text style={styles.textInfoProduct}>{dataProduct.idProduct}</Text>
          </View>
          <View>
            <Text style={styles.textInfoNameProduct}>{dataProduct.nameProduct}</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 27}}>
            <Text style={styles.textInfoProduct}>Khối lượng</Text>
            <Text style={styles.textInfoProduct}>{dataProduct.mass} ml</Text>
          </View>
        </View>
      </View>
      <View style={{ marginTop: 19}}>
        <Text style={styles.textTitleInfo}>Mô tả</Text>
        <View style={styles.viewInfoBorderProduct}>
          <TextInput style={[styles.textTitleInfo, {marginStart: 0}]}  placeholder='Mô tả sản phẩm'></TextInput>
        </View>
      </View>
      <View style={{ marginTop: 19}}>
        <Text style={styles.textTitleInfo}>Giá sản phẩm</Text>
        <View style={styles.viewInfoBorderProduct}>
          <TextInput style={[styles.textTitleInfo, {marginStart: 0}]} placeholder='Giá sản phẩm'></TextInput>
          <Text style={styles.textTitleInfo}>VND</Text>
        </View>
      </View>
      <View style={{ marginTop: 19}}>
        <Text style={styles.textTitleInfo}>Giá nhập</Text>
        <View style={styles.viewInfoBorderProduct}>
          <TextInput style={[styles.textTitleInfo, {marginStart: 0}]} placeholder='Giá nhập'></TextInput>
          <Text style={styles.textTitleInfo}>VND</Text>
        </View>
      </View>
      <View>
        <TouchableOpacity style={styles.btnConfirm}>
          <Text style={styles.textBtnConfirm}>Hoàn thành</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default UpdateProduct

const styles = StyleSheet.create({
  textBtnConfirm: {
    color: '#4A4949',
    fontSize: 19,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 10
  },
  btnConfirm:{
    width: '45.2%',
    height: 50,
    borderColor: '#B9F0B8',
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: '#B9F0B8',
    alignSelf: 'center',
    marginTop: 30
  },
  textTitleInfo:{
    color: '#4A4949',
    fontSize: 20,
    fontWeight: '400',
    marginStart: 23
  },
  viewInfoBorderProduct:{
    width: '89.7%',
    height: 59,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    backgroundColor: '#fff',
    marginTop: 11,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    paddingHorizontal: 10
  },
  textUpdateIMG:{
    color: '#4A4949',
    fontSize: 14,
    fontWeight: '700',
    textAlign: 'center'
  },
  textInfoNameProduct:{
    color: '#000',
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 21
  },
  textInfoProduct:{
    color: '#4A4949',
    fontSize: 15,
    fontWeight: '500',
    backgroundColor: 'pink',
    
  },
  viewInfo:{
    width: '62%',
    // backgroundColor: 'red',
    paddingHorizontal: 20
  },
  btnAddAvatar: {
    width: 77,
    height: 25,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#FF9393',
    backgroundColor: '#FF9393',
    marginTop: 10,
    alignItems: 'center'
},
  viewAvatar: {
    width: '38%',
    alignItems: 'center',
    paddingTop: 10,
    // backgroundColor: 'pink'
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
    backgroundColor: '#fff'
  }
})