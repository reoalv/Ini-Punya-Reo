import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Buttons from '../Component/Button';
import {setFavorite} from '../Favorite/actionFavorite';
import {getApi} from './actionHome';

export default function ScreenAPI() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getApi());
  }, []);

  const pressGetApi = () => {
    dispatch(getApi());
  };

  const pressAddFavorite = () => {
    dispatch(setFavorite(ReducerHome.quote));
  };

  const ReducerHome = useSelector(state => state.ReducerHome.data);
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>{ReducerHome.quote}</Text>
      </View>

      <View>
        <Buttons onPress={pressGetApi} content="Get Another Quote" />
        <Buttons onPress={pressAddFavorite} content="Add to Favorite" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 20,
  },
});
