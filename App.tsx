import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import LoginAdmin from './src/component/user/LoginAdmin';
import HairNavigation from './src/component/hair/HairNavigation';
import { NavigationContainer } from '@react-navigation/native';
function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{flex:1}}>
      <NavigationContainer>
         <HairNavigation/>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
