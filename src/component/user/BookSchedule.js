import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  useState,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import CustomerNotArrive from './CustomerNotArrive';
import CustomerService from './CustomerService';
import CustomerWaiting from './CustomerWaiting';
import { Badge } from 'react-native-elements';

const renderScene = SceneMap({
  CustomerNotArrive: CustomerNotArrive,
  CustomerWaiting: CustomerWaiting,
  CustomerService: CustomerService,
});


// const renderLabel = ({ route, focused, color }) => (
//     <Text style={{ color: focused ? 'blue' : 'black' }}>{route.title}</Text>
//   );
// const renderTabBar = props => (
//   <TabBar
//     {...props}
//     style={{backgroundColor: '#FFF'}} // Màu nền của TabBar
//     labelStyle={{
//       color: '#4A4949',
//       textAlign: 'center',
//       fontWeight: '700',
//       fontSize: 12,
//     }} // Màu của tiêu đề tab
    
//     indicatorStyle={{backgroundColor: '#B9F0B8', height: 5}}
//       // renderLabel={renderLabel}
//   />
// );


const BadgeTabBar = (props) => {
  const { navigationState, position } = props;

  return (
    <TabBar
      {...props}
      style={{ backgroundColor: '#FFF' }}
      labelStyle={{
        color: '#4A4949',
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 12,
      }}
      indicatorStyle={{ backgroundColor: '#B9F0B8', height: 5 }}
      renderLabel={({ route, focused, color }) => (
        <View>
          <Text style={{ color: focused ? 'blue' : 'black' }}>
            {route.title}
          </Text>
          {!!route.badgeCount && (
        <Badge
          status="error"
          value={route.badgeCount.toString()}
          containerStyle={{ position: 'absolute', top: -5, right: -15 }}
        />
      )}
        </View>
      )}
    />
  );
};


const BookSchedule = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'CustomerNotArrive', title: 'Khách\nchưa tới', badgeCount: 3},
    {key: 'CustomerWaiting', title: 'Khách\nđang chờ', badgeCount: 0},
    {key: 'CustomerService', title: 'Khách\nđang phụ vụ', badgeCount: 3},
  ]);
  return (
    <View style={styles.backgroundContainer}>
      <View style={styles.containerHeader}>
        {/* <View style={styles.viewHeader}> */}
          <Image source={require('../../image/IconHome.png')} />
          <Text style={styles.textBookSchedule}>Lịch Đặt</Text>
          <Image source={require('../../image/IconNotification.png')} />
        {/* </View> */}
      </View>
      <View style={styles.containerSearch}>
        <View style={styles.viewSearch}>
          <Image source={require('../../image/IconSearch.png')}/>
          <TextInput placeholder='Tìm kiếm' style={styles.textInputSearch}/>
        </View>
        <View style={styles.viewAddBook}>
          <TouchableOpacity style={styles.touchableOpacityAddBook}>
            <Text style={styles.textAddBook}>Thêm Booking</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
        renderTabBar={BadgeTabBar}
      />
    </View>
  );
};

export default BookSchedule;

const styles = StyleSheet.create({
  textInputSearch:{
    color: "#7B7979",
    fontSize: 14,
    fontWeight: "400",
    marginHorizontal:10
  },
  textAddBook:{
    color: "#4A4949",
    fontSize: 14,
    fontWeight: "700",
  },
  touchableOpacityAddBook:{
    height:45,
    backgroundColor:"#B9F0B8",
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
    paddingHorizontal:14
  },
  viewSearch:{
    flexDirection:'row',
    height:40,
    backgroundColor:"#FFF",
    borderRadius:8,
    // marginHorizontal:12,
    // marginVertical:20,
    alignItems:'center', 
    width:'54%',
    paddingHorizontal:10

  },
  backgroundContainer:{
    flex:1,
  },
  containerSearch:{
    marginHorizontal:12,
    marginVertical:20,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'

  },
  textBookSchedule:{
    color: "#4B4848",
    fontSize: 18,
    fontWeight: "900",
  },
  containerHeader:{
    backgroundColor:"#DEF2EF",
    flexDirection:'row',
    height:54,
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:20
  }
});
