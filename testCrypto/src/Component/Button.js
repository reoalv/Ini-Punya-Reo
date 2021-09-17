import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export default function Buttons(props) {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.container}>
      <Text>{props.content}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 50,
    backgroundColor: '#7EFFD4',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
});
