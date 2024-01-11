import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, FlatList } from 'react-native'
import React, {useState} from 'react'
var DataProduct = [
    {
      "id": 1,
      "idProduct": "SP0011",
      "nameProduct": "Dầu gội Clear",
      "price": "130,000",
      "cost": "100,000",
      "quantity": "1000",
      "status": "Đủ hàng",
      "mass": "500",
      "imageProduct": require('../../../media/imageProduct.png')
    },
    {
      "id": 2,
      "idProduct": "SP200",
      "nameProduct": "Sáp vuốt tóc",
      "price": "90,000",
      "cost": "80,000",
      "quantity": "50",
      "status": "Thiếu hàng",
      "mass": "50",
      "imageProduct": require('../../../media/imageProduct.png')
    },
    {
      "id": 3,
      "idProduct": "SP03",
      "nameProduct": "Dầu xã Sunsilk",
      "price": "140,000",
      "cost": "110,000",
      "quantity": "100",
      "status": "Đủ hàng",
      "mass": "700",
      "imageProduct": require('../../../media/imageProduct.png')
    }
  ]
const BuyProduct = () => {
    const [dataProduct, setDataProduct] = useState(DataProduct)
    const renderProduct = (val) => {
        const {nameProduct, price, cost, imageProduct} = val.item;
        return(
            <View style={styles.viewProductContainer}>
                <View style={{width: 145, height: 142, alignSelf: 'center', marginTop: 13}}><Image style={{width: '100%', height: '100%' }} source={imageProduct}/></View>
                <View>
                    <Text style={{color: '#000', fontSize: 12, fontWeight: '400', paddingHorizontal: 20, marginTop: 15}}>{nameProduct}</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, marginTop: 10}}>
                    <Text style={{color: '#ED2929', fontSize: 12, fontWeight: '600'}}>{cost}</Text>
                    <Text style={{color: '#000', fontSize: 10, fontWeight: '400', textDecorationLine: 'line-through',}}>{price}</Text>
                </View>
                <TouchableOpacity style={styles.buttonSelectProductContainer}>
                    <Text>Chọn</Text>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <TouchableOpacity onPress={() => { navigation.goBack() }}><Image source={require('../../../media/homeIcon.png')} /></TouchableOpacity>
                <Text style={styles.textTitle}>Chọn sản phẩm</Text>
                <Image source={require('../../../media/bellIcon.png')} />
            </View>
            <View style={styles.viewSearchContainer}>
                <View style={{width: 30, height: '100%', alignItems: 'center', justifyContent: 'center'}}>
                    <Image source={require('../../../media/imageSearch.png')}/>
                </View>
                <View style={{ height: '100%', width: '100%'}}>
                    <TextInput
                        style={{paddingVertical: 2, paddingStart: 5, color: '#7B7979', fontSize: 12, fontWeight: '400'}}
                        placeholder='Nhập tên sản phẩm'></TextInput>
                </View>
            </View>
            <View style={{marginTop: 15}}>
                <FlatList
                    data={dataProduct}
                    renderItem={renderProduct}
                    keyExtractor={item => item.id}
                    horizontal={false}
                    numColumns={2}
                    scrollEnabled={false}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}/>
            </View>
            <View>
                <TouchableOpacity style={styles.buttonSelectProdut}>
                    <Text style={styles.textButton}>Chọn sản phẩm</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default BuyProduct

const styles = StyleSheet.create({
    textButton:{
        color: '#4A4949',
        fontSize: 16,
        fontWeight: '700'
    },
    buttonSelectProdut:{
        width: '44.4%',
        height: 45,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#B9F0B8',
        backgroundColor: '#B9F0B8',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 24
    },
    buttonSelectProductContainer: {
        borderColor: '#F4EFEF',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: '#F4EFEF',
        width: '50.5%',
        height: 23,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 13
    },
    viewProductContainer:{
        width: '50%',
        height: 259,
        borderColor: '#7B7979',
        borderWidth: 0.3,
        marginBottom: 1
        // backgroundColor: 'pink'
    },
    viewSearchContainer:{
        width: '51.9%',
        height: 30,
        borderColor: '#F5F5F5',
        borderWidth: 1,
        borderRadius: 8,
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 8,
        marginStart: 13
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
        paddingHorizontal: 20
    },
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff'
    }
})