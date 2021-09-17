import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';

export default function Favorite() {
  const ReducerFavorite = useSelector(state => state.ReducerFavorite.data);
  return (
    <View style={styles.container}>
      {ReducerFavorite.map((item, index) => {
        return (
          <Text key={index} style={{marginBottom: item === null ? 0 : 10}}>
            {item === null ? <View /> : item}
          </Text>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    paddingHorizontal: 15,
    alignItems: 'center',
  },
});
