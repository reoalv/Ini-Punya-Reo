import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import Poppin from './Poppin';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {moderateScale} from 'react-native-size-matters';

export default function Header({onPress}) {
  return (
    <View style={styles.container}>
      <View style={styles.between}>
        <View style={styles.left} />
        <Poppin alignSelf="center" color="#acb8c5" size={20} type="Bold">
          CatatanQ
        </Poppin>
        <TouchableOpacity
          onPress={onPress}
          activeOpacity={0.4}
          style={styles.icon}>
          <Ionicons name="location" size={24} color="#acb8c5" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: widthPercentageToDP(100),
    height: heightPercentageToDP(10),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#19222c',
  },
  between: {
    flexDirection: 'row',
    width: widthPercentageToDP(100),
    justifyContent: 'space-between',
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    width: widthPercentageToDP(15),
  },
  left: {
    width: widthPercentageToDP(15),
  },
});
