import { Image, StyleSheet, Text, View, FlatList, Touchable, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { useRoute } from '@react-navigation/native';
const DetailEmployee = (props) => {
    const route = useRoute();
    const {detailEmployee} = route.params;
    const navigation = props.navigation;
    const renderInfo = (val) => {
        const { idUser, posision, role, firtDay, salary, status } = val.item;
        return (
            <View style={{paddingHorizontal: 20, marginTop: 37}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={styles.textInfoUser}>Mã nhân viên</Text>
                    <Text style={styles.textInfoUser}>{idUser}</Text>
                </View>
                <View style={styles.viewLine}/>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={styles.textInfoUser}>Chức vụ</Text>
                    <Text style={styles.textInfoUser}>{posision}</Text>
                </View>
                <View style={styles.viewLine}/>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={styles.textInfoUser}>Vai trò</Text>
                    <Text style={styles.textInfoUser}>{role}</Text>
                </View>
                <View style={styles.viewLine}/>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={styles.textInfoUser}>Ngày vào làm</Text>
                    <Text style={styles.textInfoUser}>{firtDay}</Text>
                </View>
                <View style={styles.viewLine}/>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={styles.textInfoUser}>Lương cứng</Text>
                    <Text style={styles.textInfoUser}>{salary}</Text>
                </View>
                <View style={styles.viewLine}/>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={styles.textInfoUser}>Trạng thái</Text>
                    <Text style={styles.textInfoUser}>{status}</Text>
                </View>
                <View style={styles.viewLine}/>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
        <TouchableOpacity onPress={() => { navigation.goBack() }}><Image source={require('../../../media/homeIcon.png')} /></TouchableOpacity>
        <Text style={styles.textTitle}>Thông tin nhân viên</Text>
        <Image source={require('../../../media/bellIcon.png')} />
      </View>
            <View style={styles.infoEmployeeContainer}>
                <View style={{ width: '50%', alignItems: 'center' }}>
                    <Image source={require('../../../media/avatarEmployee.png')} />
                </View>
                <View style={styles.tableInfoContainer}>
                    <Text style={[styles.textInfo, { color: '#000', fontSize: 20 }]}>{detailEmployee.nameStylist}</Text>
                    <Text style={styles.textInfo}>Ngày sinh: {detailEmployee.birtDay}</Text>
                    <Text style={styles.textInfo}>Giới tính: {detailEmployee.sex}</Text>
                    <Text style={styles.textInfo}>SĐT: {detailEmployee.phone}</Text>
                    <Text style={styles.textInfo}>Email: {detailEmployee.email}</Text>
                    <Text style={styles.textInfo}>Địa chỉ: {detailEmployee.address}</Text>
                </View>
            </View>
            <View>
                 <View style={{paddingHorizontal: 20, marginTop: 37}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={styles.textInfoUser}>Mã nhân viên</Text>
                    <Text style={styles.textInfoUser}>{detailEmployee.idUser}</Text>
                </View>
                <View style={styles.viewLine}/>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={styles.textInfoUser}>Chức vụ</Text>
                    <Text style={styles.textInfoUser}>{detailEmployee.position}</Text>
                </View>
                <View style={styles.viewLine}/>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={styles.textInfoUser}>Vai trò</Text>
                    <Text style={styles.textInfoUser}>{detailEmployee.role}</Text>
                </View>
                <View style={styles.viewLine}/>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={styles.textInfoUser}>Ngày vào làm</Text>
                    <Text style={styles.textInfoUser}>{detailEmployee.firtsDay}</Text>
                </View>
                <View style={styles.viewLine}/>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={styles.textInfoUser}>Lương cứng</Text>
                    <Text style={styles.textInfoUser}>{detailEmployee.salary}</Text>
                </View>
                <View style={styles.viewLine}/>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={styles.textInfoUser}>Trạng thái</Text>
                    <Text style={styles.textInfoUser}>{detailEmployee.status}</Text>
                </View>
                <View style={styles.viewLine}/>
            </View>
            </View>
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.btnDelete}>
                    <Text style={styles.textBtn}>Xóa nhân viên</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnUpdate}>
                    <Text style={styles.textBtn}>Sửa nhân viên</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default DetailEmployee

const styles = StyleSheet.create({
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
    textBtn: {
        color: '#4A4949',
        fontSize: 16,
        fontWeight: '700',
        textAlign: 'center',
        marginTop: 6
    },
    btnContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 25,
    },
    btnUpdate:{
        width: '41%',
        height: 41,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#B9F0B8',
        backgroundColor: '#B9F0B8'
    },
    btnDelete:{
        width: '41%',
        height: 41,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#FF9393',
        backgroundColor: '#FF9393'
    },
    viewLine:{
        borderColor: '#7B7979',
        borderWidth: 0.5,
        marginTop: 17,
        marginBottom: 17
    },
    textInfoUser: {
        color: '#4A4949',
        fontSize: 15,
        fontWeight: '500'
    },
    tableInfoContainer: {
        width: '50%',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    textInfo: {
        color: '#4A4949',
        fontSize: 12,
        fontWeight: '400',
        marginBottom: 6
    },
    infoEmployeeContainer: {
        flexDirection: 'row',
        marginHorizontal: 20,
        marginTop: 28
    },
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff'
    }
})