import { Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
const PayDetail = (props) => {
    const navigation = props.navigation;
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <TouchableOpacity onPress={() => { navigation.goBack() }}><Image source={require('../../../media/homeIcon.png')} /></TouchableOpacity>
                <Text style={styles.textTitle}>Chi tiết giao dịch</Text>
                <Image source={require('../../../media/bellIcon.png')} />
            </View>
            <View style={styles.successPay}>
                <Image style={{alignSelf: 'center', marginTop: 44}}source={require('../../../media/circlePay.png')}/>
                <Image style={{position: 'absolute', top: 99, alignSelf: 'center'}} source={require('../../../media/yesPay.png')}/>
            </View>
            <View>
                <Text style={styles.textSuccessPay}>Thanh toán thành công</Text>
            </View>
            <View style={styles.timePayContainer}>
                <Text style={styles.textPay}>16/07/2023</Text>
                <Text style={styles.textPay}>3:26 PM</Text>
            </View>
            <View style={styles.detailPayContainer}>
                <View style={styles.detailPay}>
                    <Text style={styles.textPay}>Mã giao dịch</Text>
                    <Text style={styles.textPay}>TMT238074</Text>
                </View>
                <View style={styles.detailPay}>
                    <Text style={styles.textPay}>Loại giao dịch</Text>
                    <Text style={styles.textPay}>Chuyển khoản</Text>
                </View>
                <View style={styles.detailPay}>
                    <Text style={styles.textPay}>Phí giao dịch</Text>
                    <Text style={styles.textPay}>0 đồng</Text>
                </View>
                <View style={styles.detailPay}>
                    <Text style={styles.textPay}>Diễn giải</Text>
                    <Text style={styles.textPay}>Chuyển khoản qua MB bank</Text>
                </View>
                <View style={styles.detailPay}>
                    <Text style={[styles.textPay, {fontWeight: '600'}]}>Tổng tiền</Text>
                    <Text style={[styles.textPay, {fontWeight: '600', backgroundColor:'pink'}]}>10,000,000đ</Text>
                </View>
            </View>
        </View>
    )
}

export default PayDetail
const styles = StyleSheet.create({
    detailPay:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 18
    },
    detailPayContainer:{
        width: '90%',
        // backgroundColor: 'pink',
        alignSelf: 'center',
        marginTop: 27
    },
    textPay:{
        color: '#000',
        fontSize: 13,
        fontWeight: '400'
    },
    timePayContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '35%',
        alignSelf: 'center',
        marginTop: 9
    },
    textSuccessPay:{
        color: '#000',
        fontSize: 24,
        fontWeight: '900',
        marginTop: 32,
        textAlign: 'center'
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