import { StyleSheet, Text, View, Image, FlatList, Touchable, TouchableOpacity, ScrollView } from 'react-native'
import Reac, { useState } from 'react'

const News = () => {
  const [dataNews, setDataNews] = useState(DataNews)
  const renderNews = (val) => {
    const { id, image, title, detail } = val.item;
    return (
      <View style={styles.newsContainer}>
        <Image style={{ width: '100%', height: 176 }} source={image} />
        <Text style={styles.textTitleNews}>{title}</Text>
        <Text style={styles.textDetailNews}>{detail}</Text>
      </View>
    )
  }
  return (
    <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Image source={require('../../../media/homeIcon.png')} />
          <Text style={styles.textTitle}>Tin tức</Text>
          <Image source={require('../../../media/bellIcon.png')} />
        </View>
        <View>
          <FlatList
            data={dataNews}
            renderItem={renderNews}
            keyExtractor={item => item.id}
            horizontal={false}
            scrollEnabled={false}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}>
          </FlatList>
        </View>
      </View>
    </ScrollView>
  )
}

export default News

const styles = StyleSheet.create({
  textDetailNews: {
    width: '90%',
    height: 50,
    marginStart: 10,
    color: '#585454',
    fontSize: 14,
    fontWeight: '500'
  },
  newsContainer: {
    width: '100%',
    marginBottom: 20
  },
  textTitleNews: {
    width: '90%',
    height: 50,
    marginStart: 10,
    color: '#000',
    fontSize: 16,
    fontWeight: '500',
    marginTop: 12
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

var DataNews = [
  {
    'id': 1,
    'image': require('../../../media/ImageNews.png'),
    'title': 'Diện mạo khỏe khoắn đầy nam tính cùng 4 kiểu tóc “Bứt phá” của Zero5',
    'detail': 'Với nét đẹ khỏe khoắn, mạnh mẽ, những kiểu tóc bứt phá mang lại làn gió tưới mới, đầy sức sống...'
  },
  {
    'id': 2,
    'image': require('../../../media/ImageNews.png'),
    'title': 'Diện mạo khỏe khoắn đầy nam tính cùng 4 kiểu tóc “Bứt phá” của Zero5',
    'detail': 'Với nét đẹ khỏe khoắn, mạnh mẽ, những kiểu tóc bứt phá mang lại làn gió tưới mới, đầy sức sống...'
  },
  {
    'id': 3,
    'image': require('../../../media/ImageNews.png'),
    'title': 'Diện mạo khỏe khoắn đầy nam tính cùng 4 kiểu tóc “Bứt phá” của Zero5',
    'detail': 'Với nét đẹ khỏe khoắn, mạnh mẽ, những kiểu tóc bứt phá mang lại làn gió tưới mới, đầy sức sống...'
  }
]