import { Image, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'

const AddEmployee = (props) => {
    const navigation = props.navigation;
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <TouchableOpacity onPress={() => { navigation.goBack() }}><Image source={require('../../../media/homeIcon.png')} /></TouchableOpacity>
                <Text style={styles.textTitle}>Thêm nhân viên</Text>
                <Image source={require('../../../media/bellIcon.png')} />
            </View>
            <View style={styles.avartarContainer}>
                <View style={styles.viewAvatar}>
                    <Image style={{ width: 60, height: 60 }} source={require('../../../media/avatarUser.png')}></Image>
                    <TouchableOpacity style={styles.btnAddAvatar}>
                        <Text style={styles.textAddIMG}>Thêm ảnh</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.viewInfoID}>
                    <View style={styles.viewBorderID}>
                        <TextInput style={styles.textInput} placeholder='Mã nhân viên'></TextInput>
                    </View>
                    <View style={styles.viewBorderID}>
                        <TextInput style={styles.textInput} placeholder='Tên nhân viên'></TextInput>
                    </View>
                </View>
            </View>
            <View style={styles.viewBorderContainer}>
                <View style={styles.viewBorder}>
                    <TextInput style={styles.textInput} placeholder='Ngày sinh'></TextInput>
                </View>
                <View style={styles.viewBorder}>
                    <TextInput style={styles.textInput} placeholder='Tài khoản'></TextInput>
                </View>
            </View>
            <View style={styles.viewBorderContainer}>
                <View style={styles.viewBorder}>
                    <TextInput style={styles.textInput} placeholder='Giới tính'></TextInput>
                </View>
                <View style={styles.viewBorder}>
                    <TextInput style={styles.textInput} placeholder='Mật khẩu'></TextInput>
                </View>
            </View>
            <View style={styles.viewBorderContainer}>
                <View style={styles.viewBorder}>
                    <TextInput style={styles.textInput} placeholder='Số điện thoại'></TextInput>
                </View>
                <View style={styles.viewBorder}>
                    <TextInput style={styles.textInput} placeholder='Vai trò'></TextInput>
                </View>
            </View>
            <View style={styles.viewBorderContainer}>
                <View style={styles.viewBorder}>
                    <TextInput style={styles.textInput} placeholder='Email'></TextInput>
                </View>
                <View style={styles.viewBorder}>
                    <TextInput style={styles.textInput} placeholder='Lương cứng'></TextInput>
                </View>
            </View>
            <View style={styles.viewBorderContainer}>
                <View style={styles.viewBorder}>
                    <TextInput style={styles.textInput} placeholder='Địa chỉ'></TextInput>
                </View>
                <View style={styles.viewBorder}>
                    <TextInput style={styles.textInput} placeholder='Ngày vào làm'></TextInput>
                </View>
            </View>
            <View>
                <TouchableOpacity style={styles.btnConfirm}>
                    <Text style={styles.textBtnConfirm}>Xác nhận</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default AddEmployee

const styles = StyleSheet.create({
    textBtnConfirm: {
        color: '#4A4949',
        fontSize: 16,
        fontWeight: '700',
        textAlign: 'center',
        marginTop: 10
    },
    btnConfirm:{
        color: '#B9F0B8',
        height: 50,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#B9F0B8',
        backgroundColor: '#B9F0B8',
        alignSelf: 'center',
        width: '55%',
        marginTop: 34
    },
    viewBorder:{
        width: '42%',
        height: 40,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#D9D9D9',
        backgroundColor: '#fff',
    },
    viewBorderContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginBottom: 23
    },
    textAddIMG:{
        color: '#4A4949',
        fontSize: 14,
        fontWeight: '700',
        textAlign: 'center'
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
    textInput: {
        color: '#7B7979',
        fontSize: 16,
        fontWeight: '400',
    },
    viewInfoID: {
        width: '76%',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
        // backgroundColor: 'pink'
    },
    viewAvatar: {
        width: '24%',
        // backgroundColor: 'pink',
        alignItems: 'center',
        paddingTop: 10
    },
    viewBorderID: {
        width: '80%',
        height: 40,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#D9D9D9',
        backgroundColor: '#fff',
        justifyContent: 'center'
    },
    avartarContainer: {
        flexDirection: 'row',
        height: 120,
        marginBottom: 35
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