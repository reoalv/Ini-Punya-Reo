import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Poppin from './src/Component/Poppin';

export default function App() {
  setTimeout(() => {
    SplashScreen.hide();
  }, 2000);

  return (
    <View>
      <Poppin>Test</Poppin>
    </View>
  );
}

const styles = StyleSheet.create({});
