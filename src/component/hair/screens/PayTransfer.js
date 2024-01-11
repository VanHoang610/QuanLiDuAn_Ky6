import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const PayTransfer = (props) => {
    const navigation = useNavigation();
    return (
        <View>
            <View>
                <Text style={styles.textDetailPay}>Chi tiết giao dịch</Text>
            </View>
            <View style={styles.detailPayContainer}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View>
                        <Text style={styles.textID}>1</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.textPayDetail}>16/07/2023 </Text>
                        <Text style={styles.textPayDetail}> 3:26 PM</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 17 }}>
                    <Text style={styles.textPayDetail}>SĐT Khách hàng</Text>
                    <Text style={styles.textPayDetail}>0987654321</Text>
                </View>
                <View style={styles.viewLinePay}></View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 13 }}>
                    <Text style={styles.textPayDetail}>Tên khách hàng</Text>
                    <Text style={styles.textPayDetail}>Đoàn Thanh Hòa</Text>
                </View>
                <View style={styles.viewLinePay}></View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 13 }}>
                    <Text style={styles.textPayDetail}>Tạm tính</Text>
                    <Text style={styles.textPayDetail}>10,000,000 VNĐ</Text>
                </View>
            </View>
            <View>
                <Image style={{ alignSelf: 'center', width: 248, height: 239, marginTop: 5 }} source={require('../../../media/imageQR.png')} />
            </View>
            <View>
                <TouchableOpacity onPress={() => { navigation.navigate('PayDetail') }} style={styles.btnConfirm}>
                    <Text style={styles.textConfirm}>Xác nhận</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default PayTransfer

const styles = StyleSheet.create({
    textConfirm: {
        color: '#4A4949',
        fontSize: 16,
        fontWeight: '700',
        marginTop: 5
    },
    btnConfirm: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#B9F0B8',
        backgroundColor: '#B9F0B8',
        alignSelf: 'center',
        alignItems: 'center',
        width: '85%',
        height: 35,
        marginTop: 24
    },
    viewLinePay: {
        width: '90%',
        borderColor: '#95958B',
        borderWidth: 0.5,
        alignSelf: 'center',
        marginTop: 15
    },
    detailPayContainer: {
        width: '90%',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#B9F0B8',
        backgroundColor: '#fff',
        alignSelf: 'center',
        marginTop: 20,
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    textPayDetail: {
        color: '#000',
        fontSize: 13,
        fontWeight: '400'
    },
    textID: {
        color: '#4A4949',
        fontSize: 14,
        fontWeight: '900'
    },
    textDetailPay: {
        marginTop: 20,
        marginStart: 11,
        color: '#4A4949',
        fontSize: 14,
        fontWeight: '900'
    },
    textPay: {
        marginTop: 16,
        marginStart: 9,
        color: '#000',
        fontSize: 16,
        fontWeight: '900',
        marginBottom: 16
    },
    tabViewContainer: {
        backgroundColor: '#fff',
        height: 45
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