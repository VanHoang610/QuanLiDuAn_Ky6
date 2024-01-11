import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'

const AddProduct = (props) => {
    const navigation = props.navigation;
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <TouchableOpacity onPress={() => { navigation.goBack() }}><Image source={require('../../../media/homeIcon.png')} /></TouchableOpacity>
                <Text style={styles.textTitle}>Thêm sản phẩm</Text>
                <Image source={require('../../../media/bellIcon.png')} />
            </View>
            <View style={styles.infoProductContainer}>
                <View style={styles.imageProductContainer}>
                    <Image style={{alignSelf: 'center', width: 126, height: 120, marginTop: 9}}source={require('../../../media/imageProduct.png')}></Image>
                    <View style={styles.buttonAddImageProduct}>
                        <Text style={styles.textAddImageProduct}>Thêm ảnh</Text>
                    </View>
                </View>
                <View style={styles.infoProduct}>
                    <View style={styles.viewInfoProduct}>
                        <TextInput
                            style={styles.textInfoProduct}
                            placeholder='Nhập mã sản phẩm'></TextInput>
                    </View>
                    <View style={[styles.viewInfoProduct, {marginTop: 11}]}>
                        <TextInput
                            style={styles.textInfoProduct}
                            placeholder='Nhập tên sản phẩm'></TextInput>
                    </View>
                    <View style={[styles.viewInfoProduct, {marginTop: 11}]}>
                        <TextInput
                            style={styles.textInfoProduct}
                            placeholder='Nhập đơn vị'></TextInput>
                    </View>
                </View>
            </View>
            <View>
                <Text style={styles.titleInfoProduct}>Mô tả</Text>
            </View>
            <View style={[styles.viewInfoProduct, {width: '89.7%', height: 59, marginTop: 11}]}>
                <TextInput 
                    style={[styles.textInfoProduct, {paddingTop: 15}]}
                    placeholder='Clear trị gàu ngứa'></TextInput>
            </View>

            <View>
                <Text style={[styles.titleInfoProduct, {marginTop: 20}]}>Thương hiệu</Text>
            </View>
            <View style={[styles.viewInfoProduct, {width: '89.7%', height: 59, marginTop: 11}]}>
                <TextInput 
                    style={[styles.textInfoProduct, {paddingTop: 15}]}
                    placeholder='Clear'></TextInput>
            </View>

            <View>
                <Text style={[styles.titleInfoProduct, {marginTop: 20}]}>Giá bán</Text>
            </View>
            <View style={[styles.viewInfoProduct, {width: '89.7%', height: 59, marginTop: 11}]}>
                <TextInput 
                    style={[styles.textInfoProduct, {paddingTop: 15}]}
                    placeholder='45.000đ'></TextInput>
            </View>
            <View >
                <TouchableOpacity style={styles.buttonSuccessContainer}>
                    <Text style={styles.textButtonSuccess}>Hoàn thành</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default AddProduct

const styles = StyleSheet.create({
    textButtonSuccess:{
        color: '#4A4949',
        fontSize: 16,
        fontWeight: '700',
    },
    buttonSuccessContainer:{
        width: '55%',
        height: 50,
        borderColor: '#B9F0B8',
        borderRadius: 10,
        borderWidth: 1,
        backgroundColor: '#B9F0B8',
        alignSelf: 'center',
        marginTop: 27,
        alignItems:'center',
        justifyContent:'center'
    },
    titleInfoProduct:{
        color: '#4A4949',
        fontSize: 20,
        fontWeight: '400',
        marginStart: 23
    },
    textInfoProduct: {
        color: '#7B7979',
        fontSize: 14,
        fontWeight: '400',
        paddingStart: 10
    },
    viewInfoProduct: {
        width: '52.5%',
        height: 46,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#D9D9D9',
        backgroundColor: '#fff',
        marginTop: 23,
        marginStart: 17
    },
    infoProduct: {
        width: '100%',
        // backgroundColor: 'pink'
    },
    textAddImageProduct: {
        color: '#4A4949',
        fontSize: 14,
        fontWeight: '700',
    },
    buttonAddImageProduct: {
        width: '73.8%',
        height: 32,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#FF9393',
        backgroundColor: '#FF9393',
        alignSelf: 'center',
        marginTop: 4,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageProductContainer:{
        width: '35%',
        // backgroundColor: 'pink',
    },
    infoProductContainer: {
        width: '100%',
        height: 200,
        // backgroundColor: 'pink',
        flexDirection: 'row',

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