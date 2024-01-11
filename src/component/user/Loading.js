import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';

const Loading = () => {
  return (
    <View style={styles.backgroudLoading}>
        <View style={styles.viewLogo}>
          <Image source={require('../../image/logo1.png')} />
        </View>
        <View style={styles.viewImageLoading}>
          <View style={styles.imageLoading1}></View>
          <View style={styles.imageLoading2}></View>
        </View>
        <View style={styles.viewLoading}>
            <Text style={styles.textLoading}>
                Loading...
            </Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    textLoading:{
        textAlign: 'center',
        color: "#4A4949",
        fontSize: 14,
        fontWeight: "600",
    },
  viewLoading:{
        // backgroundColor:'red',
        marginTop:26,
        // justifyContent:'center',
        // alignContent:'center',
    },
  imageLoading2: {
    backgroundColor: '#DEF2EF',
    height: 20,
    width: '66%',
  },
  imageLoading1: {
    backgroundColor: '#A7F8A5',
    height: 20,
    width: '34%',
  },
  viewImageLoading: {
    flexDirection: 'row',
    justifyContent:'center',
    width:'75%',
    marginStart:44
  },
  viewLogo: {
    marginTop: 98,
    marginStart: 44,
  },
  backgroudLoading: {
    backgroundColor: '#FFF',
    flex: 1,
  },
});

export default Loading;
