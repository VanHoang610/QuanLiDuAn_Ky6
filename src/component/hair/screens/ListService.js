import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, Modal } from 'react-native'
import React, { useState } from 'react'
var DataService = [
    {
        "id": 1,
        "nameService": "Cắt tóc",
        "price": "80,000"
    },
    {
        "id": 2,
        "nameService": "Massage",
        "price": "50,000"
    },
    {
        "id": 3,
        "nameService": "Ráy tai",
        "price": "50,000"
    },
    {
        "id": 4,
        "nameService": "Combo",
        "price": "150,000"
    },
]
const ListService = (props) => {
    const navigation = props.navigation;
    const [showModalService, setShowModalService] = useState(false);
    const [showModalDeleteProduct, setShowModalDeleteProduct] = useState(false);
    const [selectedService, setSelectedService] = useState({});
    const [dataService, setDataService] = useState(DataService);
    const renderService = (val) => {
        const handleService = () => {
            setSelectedService(val.item);
            setShowModalService(true);
        }
        const { id, nameService, price } = val.item;
        return (
            <TouchableOpacity onPress={handleService}>
                <View style={styles.viewBoxServiceContainer}>

                    <View style={{ width: '40%', alignItems: 'center', marginTop: 6 }}>
                        <Image style={{ width: 100, height: 100 }} source={require('../../../media/imageService.png')} />
                    </View>
                    <View>
                        <Text style={[styles.textBoxService, { marginTop: 15, color: '#4A4949', fontSize: 18, fontWeight: '700' }]}>{nameService}</Text>
                        <Text style={styles.textBoxService}>Mã dịch vụ: {id}</Text>
                        <Text style={styles.textBoxService}>Giá: {price} VND</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <TouchableOpacity onPress={() => { navigation.goBack() }}><Image source={require('../../../media/homeIcon.png')} /></TouchableOpacity>
                <Text style={styles.textTitle}>DS Dịch vụ</Text>
                <Image source={require('../../../media/bellIcon.png')} />
            </View>
            <View style={styles.allServiceContainer}>
                <Text style={styles.textAllService}>Tất cả dịch vụ</Text>
                <Image style={{ width: 25, height: 25 }} source={require('../../../media/searchBookingIcon.png')} />
            </View>
            <View>
                <FlatList
                    data={dataService}
                    renderItem={renderService}
                    keyExtractor={item => item.id}
                    horizontal={false}
                    scrollEnabled={false}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}>
                </FlatList>
            </View>
            <View style={{ position: 'absolute', top: 680, start: 300 }}>
                <TouchableOpacity onPress={() => { navigation.navigate('AddService') }} style={styles.AddService}>
                    <Image style={{ alignSelf: 'center', marginTop: 22 }} source={require('../../../media/addEmployeeIcon.png')} />
                </TouchableOpacity>
            </View>
            <View >
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={showModalService}
                    onRequestClose={() => {
                        setSho(false);
                    }}>
                    <View style={styles.modalContainer}>
                        <View style={styles.viewModal}>
                            <View>
                                <TouchableOpacity onPress={() => { setShowModalService(false) }}>
                                    <Image style={{ width: 25, height: 25, marginStart: 20, marginTop: 20 }} source={require('../../../media/goBack.png')} />
                                </TouchableOpacity>
                            </View>
                            <View>
                                <Image style={{ width: 138, height: 138, alignSelf: 'center' }} source={require('../../../media/imageService.png')} />
                            </View>
                            <View>
                                <Text style={styles.textNameModal}>{selectedService.nameService}</Text>
                            </View>
                            <View style={styles.viewInfoProduct}>
                                <Text style={styles.textModel}>Mã dịch vụ</Text>
                                <Text style={styles.textModel}>{selectedService.id}</Text>
                            </View>
                            <View style={[styles.viewLineModal, { marginTop: 42 }]} />
                            <View style={styles.viewInfoProduct}>
                                <Text style={styles.textModel}>Giá dịch vụ</Text>
                                <Text style={styles.textModel}>{selectedService.price}</Text>
                            </View>
                            <View style={[styles.viewLineModal, { marginTop: 42 }]} />
                            <View style={styles.viewBtnContainer}>
                                <TouchableOpacity onPress={() => setShowModalDeleteProduct(true)} style={styles.btnContainer}>
                                    <Text style={styles.textBtn}>Xóa dịch vụ</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.btnContainer, { backgroundColor: '#B9F0B8', borderColor: '#F4EFEF' }]}>
                                    <Text style={styles.textBtn}>Sửa dịch vụ</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
            <View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={showModalDeleteProduct}
                    onRequestClose={() => {
                        setShowModalDeleteProduct(false);
                    }}>
                    <View style={styles.viewModalDeleteContainer}>
                        <View style={styles.viewModaDelete}>
                            <Text style={styles.textTitleModalDelete}>Nhấn xác nhận để Xóa dịch vụ</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <TouchableOpacity onPress={() => { setShowModalDeleteProduct(false) }} style={styles.btnModalDelete}>
                                    <Text style={styles.textModalDelete}>Hủy</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.btnModalDelete, { backgroundColor: '#B9F0B8', borderColor: '#B9F0B8', marginRight: 50 }]}>
                                    <Text style={styles.textModalDelete}>Xác nhận</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        </View>
    )
}

export default ListService

const styles = StyleSheet.create({
    textTitleModalDelete: {
        color: '#4A4949',
        fontSize: 19,
        fontWeight: '700',
        textAlign: 'center',
        marginTop: 28,
        marginBottom: 22
    },
    textModalDelete: {
        color: '#4B4949',
        fontSize: 18,
        fontWeight: '700',
        textAlign: 'center',
        marginTop: 4
    },
    btnModalDelete: {
        width: '25%',
        height: 35,
        borderRadius: 10,
        borderColor: '#FF9393',
        backgroundColor: '#FF9393',
        marginStart: 50
    },
    viewModaDelete: {
        width: '90%',
        height: 128,
        borderColor: '#F4EFEF',
        borderRadius: 15,
        borderWidth: 1,
        backgroundColor: '#F4EFEF',
        alignSelf: 'center',
        marginTop: 300
    },
    viewModalDeleteContainer: {
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
    },
    textBtn: {
        color: '#4A4949',
        fontSize: 14,
        fontWeight: '700',
        textAlign: 'center',
        marginTop: 8
    },
    btnContainer: {
        width: '37.7%',
        height: 41,
        borderRadius: 10,
        borderColor: '#FF9393',
        borderWidth: 1,
        backgroundColor: '#FF9393',
    },
    viewBtnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 41,
        marginTop: 55
    },
    textModel: {
        color: '#4A4949',
        fontSize: 15,
        fontWeight: '500',
        marginTop: 27
    },
    viewInfoProduct: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 13,
    },
    viewLineModal: {
        borderWidth: 0.5,
        borderColor: '#7B7979',
        marginTop: 32
    },
    textNameModal: {
        color: '#4A4949',
        fontSize: 20,
        fontWeight: '400',
        textAlign: 'center',
        marginTop: 3,
    },
    viewModal: {
        height: '100%',
        borderRadius: 20,
        backgroundColor:'#fff'
    },
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
    },
    AddService: {
        borderRadius: 50,
        width: 60,
        height: 60,
        backgroundColor: '#B9F0B8'
    },
    textBoxService: {
        color: '#000',
        fontSize: 14,
        fontWeight: '400',
        marginTop: 6,
        marginStart: 10
    },
    viewBoxServiceContainer: {
        width: '88%',
        height: 113,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#F4EFEF',
        backgroundColor: '#F4EFEF',
        flexDirection: 'row',
        alignSelf: 'center',
        marginBottom: 15
    },
    textAllService: {
        color: '#000',
        fontSize: 16,
        fontWeight: '500'
    },
    allServiceContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginTop: 21,
        marginBottom: 40
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