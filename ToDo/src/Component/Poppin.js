import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

export default function Poppin({
  children,
  type = 'Regular',
  color = 'black',
  size = 16,
  alignSelf,
  style,
  numberOfLines = 5,
}) {
  const styles = StyleSheet.create({
    textStyle: {
      fontFamily: `Poppins-${type}`,
      color: color,
      fontSize: moderateScale(size),
      alignSelf: alignSelf,
      ...style,
    },
  });
  return (
    <Text numberOfLines={numberOfLines} style={styles.textStyle}>
      {children}
    </Text>
  );
}
