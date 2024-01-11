import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'

const AddService = (props) => {
    const navigation = props.navigation;
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <TouchableOpacity onPress={() => { navigation.goBack() }}><Image source={require('../../../media/homeIcon.png')} /></TouchableOpacity>
                <Text style={styles.textTitle}>Thêm dịch vụ</Text>
                <Image source={require('../../../media/bellIcon.png')} />
            </View>
            <View>
                <Image style={{width: 120, height: 120, alignSelf: 'center'}} source={require('../../../media/imageService.png')}/>
            </View>
            <View style={styles.btnAddImageContainer}>
                <TouchableOpacity>
                    <Text style={styles.textAddIMG}>Thêm ảnh</Text>
                </TouchableOpacity>
            </View>
            <View style={{marginStart: 23, marginTop: 20}}>
                <Text style={styles.textAddService}>Mã dịch vụ</Text>
                <View style={styles.viewBorderBox}>
                    <TextInput style={styles.textInputAdd} placeholder='Nhập mã dịch vụ...'></TextInput>
                </View>
            </View>
            <View style={{marginStart: 23, marginTop: 20}}>
                <Text style={styles.textAddService}>Tên dịch vụ</Text>
                <View style={styles.viewBorderBox}>
                    <TextInput style={styles.textInputAdd} placeholder='Nhập tên dịch vụ...'></TextInput>
                </View>
            </View>
            <View style={{marginStart: 23, marginTop: 20}}>
                <Text style={styles.textAddService}>Giá dịch vụ</Text>
                <View style={styles.viewBorderBox}>
                    <TextInput style={styles.textInputAdd} placeholder='Nhập giá dịch vụ...'></TextInput>
                </View>
            </View>
            <View>
                <TouchableOpacity style={styles.btnConfirmContainer}>
                    <Text style={styles.textConfirm}>Hoàn thành</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default AddService

const styles = StyleSheet.create({
    textConfirm:{
        color: '#4A4949',
        fontSize: 16,
        fontWeight: '700',
    },
    btnConfirmContainer:{
        borderColor: '#B9F0B8',
        borderRadius: 10,
        borderWidth: 1,
        width: '55%',
        height: 50,
        backgroundColor: '#B9F0B8',
        alignSelf: 'center',
        marginTop: 42,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textInputAdd:{
        color: '#7B7979',
        fontSize: 14,
        fontWeight: '400',
        paddingTop: 12,
        paddingStart: 10
    },
    textAddService:{
        color: '#4A4949',
        fontSize: 18,
        fontWeight: '400',
        marginBottom: 11
    },
    viewBorderBox:{
        width: '89.7%',
        height: 59,
        borderColor: '#D9D9D9',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#fff'
    },
    btnAddImageContainer: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#FF9393',
        backgroundColor: '#FF9393',
        width: 100,
        height: 25,
        alignSelf: 'center',
        alignItems: 'center'
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
        backgroundColor: '#fff'
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