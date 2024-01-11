import { StyleSheet, Text, View, TouchableOpacity, Image, useWindowDimensions } from 'react-native'
import React from 'react'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import PayCash from './PayCash';
import PayTransfer from './PayTransfer';

const renderScene = SceneMap({
    first: PayCash,
    second: PayTransfer,
});

const renderTabBar = (props) => (
    <TabBar
        {...props}
        indicatorStyle={{ backgroundColor: '#B9F0B8', borderWidth: 3, borderColor: '#B9F0B8' }} //gạch chân
        style={styles.tabViewContainer}
        labelStyle={{ fontWeight: 'bold' }}
        activeColor="#000" // Màu chữ khi tab được chọn
        inactiveColor="#4B4848" // Màu chữ khi tab không được chọn
    />
);
const PayingCash = () => {
    const layout = useWindowDimensions(); // lấy thông tin kích thước của ứng dụng
    const [index, setIndex] = React.useState(0); //State địa chỉ cho tab hiện tại đang được chọn trong TabView.
    const [routes] = React.useState([
        { key: 'first', title: 'Tiền mặt' },
        { key: 'second', title: 'Chuyển khoản' },
    ]); // chứa các tab

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <TouchableOpacity onPress={() => { navigation.goBack() }}><Image source={require('../../../media/homeIcon.png')} /></TouchableOpacity>
                <Text style={styles.textTitle}>Thanh Toán</Text>
                <Image source={require('../../../media/bellIcon.png')} />
            </View>
            <View>
                <Text style={styles.textPay}>Hình thức thanh toán</Text>
            </View>
            <TabView
                navigationState={{ index, routes }} // index là tab hiện tại, routes là danh sách các tab
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}
                renderTabBar={renderTabBar}
            />
        </View>

    );
}

export default PayingCash

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