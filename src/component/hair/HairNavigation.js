import {View, Text, Image} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LoginAdmin from '../user/LoginAdmin';
import BookSchedule from '../user/BookSchedule';
import Report from '../user/Report';
import Pay from '../user/Pay';
import News from '../user/News';
import Purpose from '../user/Purpose';
import BarChartDemo from '../user/BarChartDemo';
import CustomerNotArrive from '../user/CustomerNotArrive';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    const screenOptions = ({route}) =>({
        // headerShown:false,
        tabBarIcon:({focused, color, size}) => {
            let tn = route.name;
            if(focused){
                if(tn === "Lịch Đặt"){
                    return <Image style={{tintColor:'#269F8C'}} source={require('../../image/IconBook.png')}/>
                }else if(tn === "Thông Kê"){
                    return <Image style={{tintColor:'#269F8C'}} source={require('../../image/chart.png')}/>
                }else if(tn === "Thanh Toán"){
                    return <Image style={{tintColor:'#269F8C'}} source={require('../../image/IconPay.png')}/>
                }else if(tn === "Tin Tức"){
                    return <Image style={{tintColor:'#269F8C'}} source={require('../../image/newspaper.png')}/>
                }else if(tn === "Chức Năng"){
                    return <Image style={{tintColor:'#269F8C'}} source={require('../../image/bars.png')}/>
                }
            }else{
                if(tn === "Lịch Đặt"){
                    return <Image style={{tintColor:'#7B7979'}} source={require('../../image/IconBook.png')}/>
                }else if(tn === "Thông Kê"){
                    return <Image style={{tintColor:'#7B7979'}} source={require('../../image/chart.png')}/>
                }else if(tn === "Thanh Toán"){
                    return <Image style={{tintColor:'#7B7979'}} source={require('../../image/IconPay.png')}/>
                }else if(tn === "Tin Tức"){
                    return <Image style={{tintColor:'#7B7979'}} source={require('../../image/newspaper.png')}/>
                }else if(tn === "Chức Năng"){
                    return <Image style={{tintColor:'#7B7979'}} source={require('../../image/bars.png')}/>
                }
            }
        }
    })
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Lịch Đặt" component={BookSchedule} options={{headerShown: false}}/>
      <Tab.Screen name="Thông Kê" component={Report} options={{headerShown: false}}/>
      <Tab.Screen name="Thanh Toán" component={Pay} options={{headerShown: false}}/>
      <Tab.Screen name="Tin Tức" component={News} options={{headerShown: false}}/>
      <Tab.Screen name="Chức Năng" component={Purpose} options={{headerShown: false}}/>
    </Tab.Navigator>
  );
};

const HairNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="TabNavigation">
      <Stack.Screen
        name="LoginAdmin"
        component={LoginAdmin}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BookSchedule"
        component={BookSchedule}
        options={{headerShown: false}}
      />
      <Stack.Screen
      name="TabNavigation"
      component={TabNavigation}
      options={{headerShown: false}}/>
      <Stack.Screen
      name="CustomerNotArrive"
      component={CustomerNotArrive}
      options={{headerShown: false}}/>
    </Stack.Navigator>
  );
};

export default HairNavigation;
