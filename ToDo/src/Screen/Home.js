import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {moderateScale} from 'react-native-size-matters';
import Card from '../Component/Card';
import Header from '../Component/Header';
import Fontisto from 'react-native-vector-icons/Fontisto';

export default function Home() {
  return (
    <View style={styles.outerContainer}>
      <Header />
      <ScrollView style={styles.scroll}>
        <View style={styles.wrap}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </View>
      </ScrollView>
      <TouchableOpacity activeOpacity={0.9} style={styles.addNew}>
        <Fontisto name="plus-a" size={40} color="#19222c" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: '#283a4e',
  },
  scroll: {
    flexGrow: 1,
  },
  wrap: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: widthPercentageToDP(7),
    paddingTop: heightPercentageToDP(3),
  },
  addNew: {
    width: moderateScale(60),
    height: moderateScale(60),
    borderRadius: moderateScale(30),
    backgroundColor: '#acb8c5',
    position: 'absolute',
    zIndex: 100,
    bottom: moderateScale(20),
    right: moderateScale(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
