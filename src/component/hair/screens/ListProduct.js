import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, Modal, TextInput } from 'react-native'
import React, { useState } from 'react'
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
const ListProduct = (props) => {
  const navigation = props.navigation;
  const [selectedProduct, setSelectedProduct] = useState({});
  const [show, setShow] = useState(false);
  const [showModalDeleteProduct, setShowModalDeleteProduct] = useState(false);
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
        <TouchableOpacity onPress={handlePress}>
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
      <View style={styles.titleContainer}>
        <TouchableOpacity onPress={() => { navigation.goBack() }}><Image source={require('../../../media/homeIcon.png')} /></TouchableOpacity>
        <Text style={styles.textTitle}>DS Sản Phẩm</Text>
        <Image source={require('../../../media/bellIcon.png')} />
      </View>
      <View style={styles.allEmployeeContainer}>
        <Text style={styles.textAllBill}>Tất cả sản phẩm</Text>
        <Image style={{ width: 25, height: 25 }} source={require('../../../media/searchBookingIcon.png')} />
      </View>
      <View>
        <FlatList
          data={dataProduct}
          renderItem={renderProduct}
          keyExtractor={item => item.id}
          horizontal={false}
          scrollEnabled={false}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}>
        </FlatList>
      </View>
      <View >
        <Modal
          animationType="slide"
          transparent={true}
          visible={show}
          onRequestClose={() => {
            setShow(false);
          }}>
          <View style={styles.modalContainer}>
            <View style={styles.viewModal}>
              <View>
                <TouchableOpacity onPress={() => { setShow(false) }}>
                  <Image style={{ width: 25, height: 25, marginStart: 20, marginTop: 20 }} source={require('../../../media/goBack.png')} />
                </TouchableOpacity>
              </View>
              <View>
                <Image style={{ width: 138, height: 138, alignSelf: 'center' }} source={require('../../../media/imageProduct.png')} />
              </View>
              <View>
                <Text style={styles.textNameModal}>{selectedProduct.nameProduct}</Text>
              </View>
              <View style={[styles.viewLineModal, { marginTop: 42 }]} />
              <View style={styles.viewInfoProduct}>
                <Text style={styles.textModel}>Mã sản phẩm</Text>
                <Text style={styles.textModel}>{selectedProduct.idProduct}</Text>
              </View>
              <View style={styles.viewLineModal} />
              <View style={styles.viewInfoProduct}>
                <Text style={styles.textModel}>Giá sản phẩm</Text>
                <Text style={styles.textModel}>{selectedProduct.price}</Text>
              </View>
              <View style={styles.viewLineModal} />
              <View style={styles.viewInfoProduct}>
                <Text style={styles.textModel}>Giá nhập</Text>
                <Text style={styles.textModel}>{selectedProduct.cost}</Text>
              </View>
              <View style={styles.viewLineModal} />
              <View style={styles.viewInfoProduct}>
                <Text style={styles.textModel}>Số lượng</Text>
                <Text style={styles.textModel}>{selectedProduct.quantity}</Text>
              </View>
              <View style={styles.viewLineModal} />
              <View style={styles.viewInfoProduct}>
                <Text style={styles.textModel}>Trạng thái</Text>
                <Text style={styles.textModel}>{selectedProduct.status}</Text>
              </View>
              <View style={styles.viewBtnContainer}>
                <TouchableOpacity onPress={() => setShowModalDeleteProduct(true)} style={styles.btnContainer}>
                  <Text style={styles.textBtn}>Xóa sản phẩm</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { navigation.navigate('UpdateProduct', { dataProduct: selectedProduct }) }} style={[styles.btnContainer, { backgroundColor: '#F4EFEF', borderColor: '#F4EFEF' }]}>
                  <Text style={styles.textBtn}>Sửa sản phẩm</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity style={styles.btnAddContainer}>
                  <Text style={styles.textBtn}>Nhập thêm hàng</Text>
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
              <Text style={styles.textTitleModalDelete}>Nhấn xác nhận để Xóa sản phẩm</Text>
              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <TouchableOpacity onPress={() => {setShowModalDeleteProduct(false)}} style={styles.btnModalDelete}>
                  <Text style={styles.textModalDelete}>Hủy</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btnModalDelete, {backgroundColor: '#B9F0B8', borderColor: '#B9F0B8', marginRight: 50}]}>
                  <Text style={styles.textModalDelete}>Xác nhận</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </View >

  )
}

export default ListProduct

const styles = StyleSheet.create({
  textTitleModalDelete:{
    color: '#4A4949',
    fontSize: 19,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 28,
    marginBottom: 22
  },
  textModalDelete:{
    color: '#4B4949',
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 4
  },
  btnModalDelete:{
    width: '25%',
    height: 35,
    borderRadius: 10,
    borderColor: '#FF9393',
    backgroundColor: '#FF9393',
    marginStart: 50
  },
  viewModaDelete:{
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
  btnAddContainer: {
    width: '41%',
    height: 41,
    borderRadius: 10,
    borderColor: '#B9F0B8',
    borderWidth: 1,
    backgroundColor: '#B9F0B8',
    alignSelf: 'center',
    marginTop: 20
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
    marginTop: 24
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
    paddingHorizontal: 13
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
    marginTop: 3
  },
  viewModal: {
    height: '80%',
    backgroundColor: '#fff',
    borderRadius: 20
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  },
  viewLine: {
    borderColor: '#7B7979',
    backgroundColor: '#7B7979',
    borderWidth: 0.5,
    marginTop: 16,
    marginBottom: 24
  },
  textProduct: {
    color: '#000',
    fontSize: 16,
    fontWeight: '400'
  },
  textAllBill: {
    color: '#000',
    fontSize: 16,
    fontWeight: '500'
  },
  allEmployeeContainer: {
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