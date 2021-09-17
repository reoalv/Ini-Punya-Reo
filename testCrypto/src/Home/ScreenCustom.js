import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';
import {useDispatch} from 'react-redux';
import Buttons from '../Component/Button';
import {setFavorite} from '../Favorite/actionFavorite';

export default function ScreenCustom() {
  const [Quote, setQuote] = useState('');

  const dispatch = useDispatch();

  const pressAddFavorite = () => {
    dispatch(setFavorite(Quote));
  };
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        placeholder="Type Quote"
        style={styles.input}
        onChangeText={text => setQuote(text)}
        value={Quote}
      />
      <Buttons onPress={pressAddFavorite} content="Add To Favorite" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
