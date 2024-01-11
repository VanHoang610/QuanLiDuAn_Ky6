import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, FlatList } from 'react-native'
import React, { useState } from 'react'
var DataStylist = [
    {
        "id": 1,
        "nameSkinner": "Trọng Nghĩa",
        "imageSkiner": require('../../../media/avatar.png')
    },
    {
        "id": 2,
        "nameSkinner": "Văn Hoàng",
        "imageSkiner": require('../../../media/avatar.png')
    },
    {
        "id": 3,
        "nameSkinner": "Như Quân",
        "imageSkiner": require('../../../media/avatar.png')
    },
    {
        "id": 4,
        "nameSkinner": "Bá Sơn",
        "imageSkiner": require('../../../media/avatar.png')

    }
]
const AddBooking = (props) => {
    const [dataStylist, setDataStylist] = useState(DataStylist)
    const renderStylist = (val) => {
        const { nameSkinner, imageSkiner } = val.item;
        return (
            <View style={{ width: 70, height: 100, alignItems: 'center', marginHorizontal: 9 }}>
                <Image source={imageSkiner} style={{ width: 60, height: 60 }} />
                <Text style={{ color: '#000', fontSize: 12, fontWeight: '500', marginTop: 14 }}>{nameSkinner}</Text>
            </View>
        )
    }
    const navigation = props.navigation;
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <TouchableOpacity onPress={() => { navigation.goBack() }}><Image source={require('../../../media/homeIcon.png')} /></TouchableOpacity>
                <Text style={styles.textTitle}>Lịch đặt trước</Text>
                <Image source={require('../../../media/bellIcon.png')} />
            </View>
            <View>
                <Text style={styles.titleInfoCustomer}>Thông tin khách hàng</Text>
            </View>
            <View style={styles.viewInfoContainer}>
                <View style={styles.viewInfoCustomer}>
                    <TextInput
                        style={styles.textInfoCustomer}
                        placeholder='Số điện thoại'></TextInput>
                </View>
                <View style={[styles.viewInfoCustomer, { width: '45%' }]}>
                    <TextInput
                        style={styles.textInfoCustomer}
                        placeholder='Tên khách hàng'></TextInput>
                </View>
            </View>
            <View style={styles.viewLine}></View>
            <View style={styles.selectBookingContainer}>
                <View>
                    <Text style={styles.textTitleService}>1. Chọn dịch vụ</Text>
                </View>
                <TouchableOpacity style={styles.viewSelectServiceContainer}>
                    <Image source={require('../../../media/imageSelectService.png')} />
                    <Text style={styles.textSelectService}>Xem những dịch vụ hấp dẫn</Text>
                    <Image source={require('../../../media/imageSelectBooking.png')} />
                </TouchableOpacity>
                <View>
                    <Text style={[styles.textTitleService, { marginTop: 26 }]}>2. Chọn Stylist</Text>
                </View>
                <View style={styles.selectStylistContainer}>
                    <FlatList
                        data={dataStylist}
                        renderItem={renderStylist}
                        keyExtractor={item => item.id}
                        horizontal={true}
                        scrollEnabled={false}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}>
                    </FlatList>
                </View>
                <View>
                    <Text style={[styles.textTitleService, { marginTop: 14 }]}>3. Chọn giờ</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                    <TouchableOpacity style={styles.viewDayContainer}>
                        <View>
                            <Text style={styles.textViewDay}>9h00</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.viewDayContainer}>
                        <View>
                            <Text style={styles.textViewDay}>10h00</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.viewDayContainer}>
                        <View>
                            <Text style={styles.textViewDay}>11h00</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 6 }}>
                    <TouchableOpacity style={styles.viewDayContainer}>
                        <View>
                            <Text style={styles.textViewDay}>12h00</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.viewDayContainer}>
                        <View>
                            <Text style={styles.textViewDay}>13h00</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.viewDayContainer}>
                        <View>
                            <Text style={styles.textViewDay}>14h00</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 6 }}>
                    <TouchableOpacity style={styles.viewDayContainer}>
                        <View>
                            <Text style={styles.textViewDay}>15h00</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.viewDayContainer}>
                        <View>
                            <Text style={styles.textViewDay}>16h00</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.viewDayContainer}>
                        <View>
                            <Text style={styles.textViewDay}>17h00</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View>
                    <Text style={[styles.textTitleService, { marginTop: 14 }]}>4. Chọn sản phẩm</Text>
                </View>
                <TouchableOpacity style={styles.viewSelectServiceContainer}>
                    <Image source={require('../../../media/imageCart.png')} />
                    <Text style={styles.textSelectService}>Xem tất cả các sản phẩm</Text>
                    <Image source={require('../../../media/imageSelectBooking.png')} />
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={styles.buttonSuccessContainer}>
                    <Text style={styles.textButton}>Hoàn thành</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default AddBooking

const styles = StyleSheet.create({
    textButton:{
        color: '#4A4949',
        fontSize: 20,
        fontWeight: '800'
    },
    buttonSuccessContainer:{
        width: '66.9%',
        height: 41,
        borderColor: '#B9F0B8',
        borderRadius: 10,
        borderWidth: 1,
        backgroundColor: '#B9F0B8',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 24
    },
    textViewDay: {
        color: '#4A4949',
        fontSize: 16,
        fontWeight: '800'
    },
    viewDayContainer: {
        width: '31.3%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        borderColor: '#F4EFEF',
        borderWidth: 1,
        backgroundColor: '#F4EFEF'
    },
    selectStylistContainer: {
        marginTop: 13,
    },
    textSelectService: {
        color: '#95958B',
        fontSize: 15,
        fontWeight: '500'
    },
    viewSelectServiceContainer: {
        width: '100%',
        height: 39,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#D9D9D9',
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        marginTop: 26
    },
    selectBookingContainer: {
        marginHorizontal: 30,
        // backgroundColor: 'pink'
    },
    textTitleService: {
        color: '#4A4949',
        fontSize: 16,
        fontWeight: '800',
        marginTop: 10
    },
    viewLine: {
        width: '100%',
        color: '#000',
        borderColor: '#000',
        borderWidth: 0.5,
        marginTop: 15
    },
    textInfoCustomer: {
        color: '#585454',
        fontSize: 15,
        fontWeight: '400',
        paddingStart: 5,
    },
    viewInfoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        marginTop: 12,
        // backgroundColor: 'pink'
    },
    viewInfoCustomer: {
        width: '39%',
        height: 40,
        borderColor: '#D9D9D9',
        borderWidth: 1,
        borderRadius: 10,
        // backgroundColor: 'red',
        paddingTop: 2
    },
    titleInfoCustomer: {
        color: '#000',
        fontSize: 16,
        fontWeight: '400',
        marginTop: 19,
        marginStart: 30
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