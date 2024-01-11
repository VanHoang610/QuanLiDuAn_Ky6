import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Swiper from 'react-native-swiper';
var DataProduct = [
    {
        "id": 1,
        "idProduct": "SP0011",
        "nameProduct": "Dầu gội Clear",
        "price": "130,000",
        "cost": "100,000",
        "quantity": "1000",
        "status": "Đủ hàng",
        "mass": "500"
    },
    {
        "id": 2,
        "idProduct": "SP200",
        "nameProduct": "Sáp vuốt tóc",
        "price": "90,000",
        "cost": "80,000",
        "quantity": "50",
        "status": "Thiếu hàng",
        "mass": "50"
    },
    {
        "id": 3,
        "idProduct": "SP03",
        "nameProduct": "Dầu xã Sunsilk",
        "price": "140,000",
        "cost": "110,000",
        "quantity": "100",
        "status": "Đủ hàng",
        "mass": "700"
    }
]
const images = [
    { id: 1, uri: 'https://images.unsplash.com/photo-1682707072922-b7753db5d06b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80', label: 'Đặt lịch giữ chỗ chỉ 30 giây' },
    { id: 2, uri: 'https://images.unsplash.com/photo-1682536460259-b40cef108baa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80', label: 'Đặt lịch giữ chỗ chỉ 30 giây' },
    { id: 3, uri: 'https://images.unsplash.com/photo-1682595167681-888983414521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80', label: 'Đặt lịch giữ chỗ chỉ 30 giây' },
];

const Test = () => {
    const [dataProduct, setDataProduct] = useState(DataProduct)
    const renderProduct = (val) => {
        const handlePress = () => {
            setSelectedProduct(val.item);
            console.log(selectedProduct)
            setShow(true);
        }
        const { idProduct, nameProduct, price, quantity } = val.item;
        return (
            <View style={{ paddingHorizontal: 49 }}>
                <TouchableOpacity>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={[styles.textProduct, { fontSize: 18, fontWeight: '700' }]}>{nameProduct}</Text>
                        <Text style={styles.textProduct}>{idProduct}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>
                        <Text style={styles.textProduct}>Giá: {price} VNĐ</Text>
                        <Text style={styles.textProduct}>SL: {quantity} chai</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.viewLine} />
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <Swiper
                style={{ height: '100%', backgroundColor: '#fff' }}
                dotColor='#D9D9D9' //màu của chấm
                activeDotStyle={{ width: 15, height: 15, borderRadius: 45,  backgroundColor: '#A7F8A5'}} //màu của chấm hoạt động
                showsPagination={true} // hiển thị chấm
                dotStyle={styles.dot}
            >
                {images?.map((image) => (
                    <View key={image?.id} style={styles.slide}>
                        <Image source={{ uri: image?.uri }} style={styles.image} />
                        <View><Text>{image.label}</Text></View>
                    </View>
                ))}
            </Swiper>
            <View>
                <FlatList
                    data={dataProduct}
                    renderItem={renderProduct}
                    keyExtractor={item => item.id}
                    horizontal={true}
                    scrollEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}>
                </FlatList>
            </View>
        </View>
    )
}

export default Test

const styles = StyleSheet.create({
    dot:{
        width: 15,
        height: 15,
        borderRadius: 45,
        backgroundColor: '#D9D9D9'
    },
    container: {
        flex: 1,
    },
    slide: {
        width: '100%'
    },
    image: {
        width: '100%',
        height: '90%'
    },
})