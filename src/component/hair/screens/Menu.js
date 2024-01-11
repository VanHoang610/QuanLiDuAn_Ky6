import { Image, StyleSheet, Text, Touchable, TouchableOpacity, View, FlatList, ToastAndroid, Modal, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useIsFocused } from '@react-navigation/native'
var DataFunction = [
    {
        "id": 1,
        "nameTransaction": "Danh sách Nhân viên"
    },
    {
        "id": 2,
        "nameTransaction": "Danh sách Dịch vụ"
    },
    {
        "id": 3,
        "nameTransaction": "Danh sách Sản phẩm"
    },
    {
        "id": 4,
        "nameTransaction": "Mẫu tóc"
    },
    {
        "id": 5,
        "nameTransaction": "Quy định chung"
    },
    {
        "id": 6,
        "nameTransaction": "Các chi phí dịch vụ"
    },
]
var DataFunctionOther = [
    {
        "id": 1,
        "nameTransaction": "Đổi mật khẩu"
    },
    {
        "id": 2,
        "nameTransaction": "Lấy OTP xác nhận"
    },
    {
        "id": 3,
        "nameTransaction": "Đăng xuất"
    }
]
const Menu = (props) => {
    const navigation = props.navigation;
    const [show, setShow] = useState(false)
    const [dataFunction, setDataFunction] = useState(DataFunction)
    const [dataFunctionOther, setDataFunctionOther] = useState(DataFunctionOther)
    const renderFunction = (val) => {
        const { id, nameTransaction } = val.item;
        const handlePress = () => {
            if (id === 1) {
                navigation.navigate('ListEmployee')
            } else if (id === 2) {
                navigation.navigate('ListService')
            } else if (id === 3) {
                navigation.navigate('ListProduct')
            } else {
                ToastAndroid.show('Chức năng chưa được phát triển', ToastAndroid.SHORT);
            }
        };

        return (
            <View>
                <View>
                    <TouchableOpacity onPress={handlePress}>
                        <Text style={styles.textList}>{nameTransaction}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.viewLine}></View>
            </View>
        )
    }

    const renderFunctionOther = (val) => {
        const { id, nameTransaction } = val.item;
        const handlePress = () => {
            if (id === 1) {
                setShow(true);
            } else {
                ToastAndroid.show('Chức năng chưa được phát triển', ToastAndroid.SHORT);
            }
        };
        return (
            <View>
                <View>
                    <TouchableOpacity onPress={handlePress}>
                        <Text style={styles.textList}>{nameTransaction}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.viewLine}></View>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.infoContainer}>
                <Image style={{ width: 60, height: 60, marginRight: 9 }} source={require('../../../media/avatar.png')}></Image>
                <View>
                    <Text style={{ color: '#000', fontSize: 20, fontWeight: '400' }}>Đoàn Thanh Hòa</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ color: '#4A4949', fontWeight: '400' }}>Rank: </Text>
                        <Text style={{ color: '#4A4949', fontWeight: '400' }}>Admin</Text>
                    </View>
                </View>
            </View>
            <View style={styles.functionContainer}>
                <Text style={styles.textFunction}>Chức năng chung</Text>
            </View>
            <View>
                <FlatList
                    data={dataFunction}
                    renderItem={renderFunction}
                    keyExtractor={item => item.id}
                    horizontal={false}
                    scrollEnabled={false}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}>
                </FlatList>
            </View>
            <View style={styles.functionContainer}>
                <Text style={styles.textFunction}>Chức năng khác</Text>
            </View>
            <View>
                <FlatList
                    data={dataFunctionOther}
                    renderItem={renderFunctionOther}
                    keyExtractor={item => item.id}
                    horizontal={false}
                    scrollEnabled={false}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}>
                </FlatList>
            </View>
            <View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={show}
                    onRequestClose={() => {
                        setShow(false);
                    }}>
                    <View style={styles.modalContainer}>
                        <View style={styles.viewModal}>
                            <View style={styles.titleContainer}>
                                <TouchableOpacity onPress={() => { setShow(false) }}><Image source={require('../../../media/homeIcon.png')} /></TouchableOpacity>
                                <Text style={styles.textTitle}>Đổi mật khẩu</Text>
                                <Image source={require('../../../media/bellIcon.png')} />
                            </View>
                            <View style={styles.viewUpdatePass}>
                                <TextInput style={styles.textPass} placeholder='Nhập mật khẩu cũ'></TextInput>
                            </View>
                            <View style={styles.viewUpdatePass}>
                                <TextInput style={styles.textPass} placeholder='Nhập mật khẩu mới'></TextInput>
                            </View>
                            <View style={styles.viewUpdatePass}>
                                <TextInput style={styles.textPass} placeholder='Nhập lại mật khẩu'></TextInput>
                            </View>
                            <View>
                                <TouchableOpacity style={styles.btnConfirm}>
                                    <Text style={styles.textConfirm}>Xác nhận</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        </View>
    )
}

export default Menu
const styles = StyleSheet.create({
    viewModal: {
        height: '65%',
        backgroundColor: '#E8E8E8',
        borderRadius: 20
      },
      textConfirm: {
        color: '#4A4949',
        fontSize: 16,
        fontWeight: '700',
        textAlign: 'center',
        marginTop: 12
      },
      btnConfirm: {
        width: '55%',
        borderColor: '#B9F0B8',
        borderWidth: 1,
        borderRadius: 10,
        height: 50,
        backgroundColor: '#B9F0B8',
        alignSelf: 'center'
      },
      textPass: {
        color: '#7B7979',
        fontSize: 16,
        fontWeight: '400',
      },
      viewUpdatePass: {
        width: '81%',
        height: 52,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ECF8F7',
        backgroundColor: '#ECF8F7',
        alignSelf: 'center',
        paddingStart: 21,
        marginBottom: 37
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
        paddingRight: 20,
        marginBottom: 42
      },
      modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        paddingTop: 100,
      },
    textList: {
        color: '#000',
        fontSize: 16,
        fontWeight: '400',
        marginStart: 36,
        marginTop: 10
    },
    viewLine: {
        borderWidth: 0.3,
        borderColor: '#7B7979',
        marginTop: 11
    },
    textFunction: {
        color: '#000',
        fontSize: 16,
        fontWeight: '400',
        marginVertical: 8,
        marginHorizontal: 13
    },
    functionContainer: {
        width: '100%',
        height: 40,
        backgroundColor: '#B9F0B8',
        marginTop: 17
    },
    infoContainer: {
        width: '90%',
        // backgroundColor: 'pink',
        alignSelf: 'center',
        marginTop: 24,
        flexDirection: 'row',

    },
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#F5F5F5'
    }
})