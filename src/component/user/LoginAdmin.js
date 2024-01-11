import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import CheckBox from 'react-native-check-box';
import { useNavigation } from '@react-navigation/native';

const LoginAdmin = () => {
  const natigation = useNavigation();
  const [isCheck, setIsCheck] = useState(false);
  return (
    <View style={styles.backgroudLoginAdmin}>
      <View style={styles.imageLogo}>
        <Image source={require('../../image/logo1.png')} />
      </View>
      <View style={styles.ViewContainerInformation}>
        <View style={styles.viewEmail}>
          <TextInput
            placeholder="Tên Đăng Nhập/Email"
            style={styles.textInputEmail}
          />
        </View>
        <View style={styles.viewPassWord}>
          <TextInput placeholder="Mật Khẩu" style={styles.textInputEmail} />
        </View>
      </View>
      <View style={styles.viewRemember}>
        <CheckBox
          style={{ transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }] }}
          checkBoxColor={'blue'}
          isChecked={isCheck}
          onClick={() => {
            setIsCheck(!isCheck);
          }}
        />
        <Text style={styles.textRemember}>Ghi nhớ</Text>
      </View>
      <View style={styles.viewSigin}>
        <TouchableOpacity onPress={() => natigation.navigate('BookSchedule')} style={styles.touchableOpacitySigin}>
            <Text style={styles.textSigin}>Đăng Nhập</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginAdmin;

const styles = StyleSheet.create({
    textSigin:{
        color: "#DEEDEC",
        fontSize: 20,
        fontWeight: "800",
    },
    touchableOpacitySigin:{
        width:'41%',
        height:40,
        borderWidth:1,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#141B34',
    },
    viewSigin:{
        marginTop:49,
        alignItems:'center',
        
    },
  textRemember: {
    color: '#000',
    fontSize: 16,
    fontWeight: '400',
    marginStart: 18,
  },
  viewRemember: {
    flexDirection: 'row',
    marginTop: 25,
    marginStart: 40,
    alignItems: 'center',
  },
  textInputEmail: {
    color: '#95958B',
    fontSize: 20,
    fontWeight: '400',
  },
  ViewContainerInformation: {
    alignItems: 'center',
  },
  viewPassWord: {
    borderWidth: 1,
    width: '78%',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 39,
    backgroundColor: '#ECF8F7',
    height: 59,
    justifyContent: 'center',
  },
  viewEmail: {
    borderWidth: 1,
    width: '78%',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#ECF8F7',
    height: 59,
    justifyContent: 'center',
  },
  imageLogo: {
    alignItems: 'center',
  },
  backgroudLoginAdmin: {
    backgroundColor: '#FFF',
    flex: 1,
  },
});
