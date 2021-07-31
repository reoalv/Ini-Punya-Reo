import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import Poppin from './Poppin';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {moderateScale} from 'react-native-size-matters';

export default function Header({onPressRight}) {
  return (
    <View style={styles.container}>
      <View style={styles.between}>
        <View style={styles.left} />
        <Poppin alignSelf="center" color="#F8FDFF" size={28} type="Bold">
          CatatanQ
        </Poppin>
        <TouchableOpacity
          onPress={onPressRight}
          activeOpacity={0.4}
          style={styles.icon}>
          <Ionicons
            style={{transform: [{rotateY: '180deg'}]}}
            name="search"
            size={28}
            color="#F8FDFF"
          />
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
    backgroundColor: '#133E7E',
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
