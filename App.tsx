import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import HairNavigation from './src/component/hair/HairNavigation'
import Test from './src/component/hair/screens/Test';
import PayingCash from './src/component/hair/screens/PayingCash';
import PayTransfer from './src/component/hair/screens/PayTransfer';
import PayDetail from './src/component/hair/screens/PayDetail';

function App(): React.JSX.Element {
  return (
    <NavigationContainer >
     <Test/>
    </NavigationContainer>
  );
}

export default App;
