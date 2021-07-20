import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {moderateScale} from 'react-native-size-matters';
import Poppin from './Poppin';

export default function Card({backgroundColor = '#37d67a'}) {
  const styles = StyleSheet.create({
    container: {
      width: widthPercentageToDP(40),
      height: heightPercentageToDP(20),
      backgroundColor: backgroundColor,
      padding: moderateScale(3),
      borderRadius: moderateScale(10),
      elevation: moderateScale(10),
      marginBottom: heightPercentageToDP(3),
    },
    underline: {
      borderWidth: 1,
    },
  });
  return (
    <View style={styles.container}>
      <Poppin style={styles.title} type="Medium">
        Title
      </Poppin>
      <View style={styles.underline} />
      <Poppin style={styles.body} size={14}>
        Body
      </Poppin>
    </View>
  );
}
