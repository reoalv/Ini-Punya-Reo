import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

export default function App() {
  setTimeout(() => {
    SplashScreen.hide();
  }, 2000);

  return (
    <View>
      <Text>Test</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
