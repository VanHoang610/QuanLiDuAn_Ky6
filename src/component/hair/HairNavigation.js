import React from 'react'
import { StyleSheet, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PayDetail from './screens/PayDetail';
import ListService from './screens/ListService';
import ListProduct from './screens/ListProduct';
import ListEmployee from './screens/ListEmployee';
import Booking from './screens/Booking';
import Chart from './screens/Chart';
import Bill from './screens/Bill';
import News from './screens/News';
import Menu from './screens/Menu';
import BillDetail from './screens/BillDetail';
import PayingCash from './screens/PayingCash';
import DetailEmployee from './screens/DetailEmployee';
import AddEmployee from './screens/AddEmployee';
import AddService from './screens/AddService';
import UpdateProduct from './screens/UpdateProduct';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const HairNavigation = () => {
    return (
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon:({focused, color, size}) => {
              let rn = route.name;
              if(focused){
                if(rn == 'Booking'){
                  return <Image source={require('../../media/bookingIcon.png')}/>
                }else if(rn == 'Chart'){
                  return <Image source={require('../../media/chartIcon.png')}/>
                }else if(rn == 'Bill'){
                  return <Image source={require('../../media/payingIcon.png')}/>
                }else if(rn == 'News'){
                    return <Image source={require('../../media/newIcon.png')}/>
                }else{
                  return <Image source={require('../../media/menuIcon.png')}/>
                }
              }else{
                if(rn == 'Booking'){
                    return <Image source={require('../../media/bookingIcon.png')}/>
                  }else if(rn == 'Chart'){
                    return <Image source={require('../../media/chartIcon.png')}/>
                  }else if(rn == 'Bill'){
                    return <Image source={require('../../media/payingIcon.png')}/>
                  }else if(rn == 'News'){
                      return <Image source={require('../../media/newIcon.png')}/>
                  }else{
                    return <Image source={require('../../media/menuIcon.png')}/>
                  }
              }
            }
          })}
          initialRouteName="Booking"
        >
          <Tab.Screen component={Booking} name="Booking" />
          <Tab.Screen component={Chart} name="Chart" />
          <Tab.Screen component={Bill} name="Bill" />
          <Tab.Screen component={News} name="News" />
          <Tab.Screen component={Menu} name="Menu" />
        </Tab.Navigator>
      );
}

const HairStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerShown: false, // Tắt hiển thị header ở mức này
      }}
      initialRouteName="HairNavigation"
    >
      <Stack.Screen name="HairNavigation" component={HairNavigation} />
      <Stack.Screen name="ListEmployee" component={ListEmployee} />
      <Stack.Screen name="ListProduct" component={ListProduct} />
      <Stack.Screen name="ListService" component={ListService} />
      <Stack.Screen name="BillDetail" component={BillDetail} />
      <Stack.Screen name="PayDetail" component={PayDetail} />
      <Stack.Screen name="PayingCash" component={PayingCash} />
      <Stack.Screen name="DetailEmployee" component={DetailEmployee} />
      <Stack.Screen name="AddEmployee" component={AddEmployee} />
      <Stack.Screen name="AddService" component={AddService} />
      <Stack.Screen name="UpdateProduct" component={UpdateProduct} />
    </Stack.Navigator>
  );
};

export default HairStack