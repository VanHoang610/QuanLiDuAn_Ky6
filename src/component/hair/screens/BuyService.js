import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, FlatList } from 'react-native'
import React, {useState} from 'react'
var DataService = [
    {
        "id": 1,
        "nameService": "Cắt tóc",
        "price": "80,000",
        "cost": "50,000",
        "imageService": require('../../../media/imageService.png')
    },
    {
        "id": 2,
        "nameService": "Massage",
        "price": "50,000",
        "cost": "40,000",
        "imageService": require('../../../media/imageService.png')
    },
    {
        "id": 3,
        "nameService": "Ráy tai",
        "price": "50,000",
        "cost": "40,000",
        "imageService": require('../../../media/imageService.png')
    },
    {
        "id": 4,
        "nameService": "Combo",
        "price": "150,000",
        "cost": "140,000",
        "imageService": require('../../../media/imageService.png')
    },
]
const BuyService = () => {
    const [dataService, setDataService] = useState(DataService)
    const renderServie = (val) => {
        const {nameService, price, cost, imageService} = val.item;
        return(
            <View style={styles.viewProductContainer}>
                <View style={{width: 145, height: 142, alignSelf: 'center', marginTop: 13}}><Image style={{width: '100%', height: '100%' }} source={imageService}/></View>
                <View>
                    <Text style={{color: '#000', fontSize: 12, fontWeight: '400', paddingHorizontal: 20, marginTop: 15}}>{nameService}</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, marginTop: 10}}>
                    <Text style={{color: '#ED2929', fontSize: 12, fontWeight: '600'}}>{cost}</Text>
                    <Text style={{color: '#000', fontSize: 10, fontWeight: '400', textDecorationLine: 'line-through',}}>{price}</Text>
                </View>
                <TouchableOpacity style={styles.buttonSelectProductContainer}>
                    <Text>Chọn</Text>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <TouchableOpacity onPress={() => { navigation.goBack() }}><Image source={require('../../../media/homeIcon.png')} /></TouchableOpacity>
                <Text style={styles.textTitle}>Chọn dịch vụ</Text>
                <Image source={require('../../../media/bellIcon.png')} />
            </View>
            <View style={styles.viewSearchContainer}>
                <View style={{width: 30, height: '100%', alignItems: 'center', justifyContent: 'center'}}>
                    <Image source={require('../../../media/imageSearch.png')}/>
                </View>
                <View style={{ height: '100%', width: '100%'}}>
                    <TextInput
                        style={{paddingVertical: 2, paddingStart: 5, color: '#7B7979', fontSize: 12, fontWeight: '400'}}
                        placeholder='Nhập tên dịch vụ'></TextInput>
                </View>
            </View>
            <View style={{marginTop: 15}}>
                <FlatList
                    data={dataService}
                    renderItem={renderServie}
                    keyExtractor={item => item.id}
                    horizontal={false}
                    numColumns={2}
                    scrollEnabled={false}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}/>
            </View>
            <View>
                <TouchableOpacity style={styles.buttonSelectProdut}>
                    <Text style={styles.textButton}>Chọn dịch vụ</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default BuyService

const styles = StyleSheet.create({
    textButton:{
        color: '#4A4949',
        fontSize: 16,
        fontWeight: '700'
    },
    buttonSelectProdut:{
        width: '44.4%',
        height: 45,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#B9F0B8',
        backgroundColor: '#B9F0B8',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 24
    },
    buttonSelectProductContainer: {
        borderColor: '#F4EFEF',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: '#F4EFEF',
        width: '50.5%',
        height: 23,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 13
    },
    viewProductContainer:{
        width: '50%',
        height: 259,
        borderColor: '#7B7979',
        borderWidth: 0.3,
        marginBottom: 1
        // backgroundColor: 'pink'
    },
    viewSearchContainer:{
        width: '51.9%',
        height: 30,
        borderColor: '#F5F5F5',
        borderWidth: 1,
        borderRadius: 8,
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 8,
        marginStart: 13
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