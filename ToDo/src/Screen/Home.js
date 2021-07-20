import React, {useEffect} from 'react';
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
import Header from '../Component/Header';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {useDispatch, useSelector} from 'react-redux';
import {getHome} from '../Redux/actionHome';
import Poppin from '../Component/Poppin';

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHome());
  }, []);

  const DataReducerHome = useSelector(state => state.ReducerHome?.data);
  console.log(DataReducerHome[0].title, 'DATA REDUCER HOME');
  return (
    <View style={styles.outerContainer}>
      <Header />
      <ScrollView style={styles.scroll}>
        <View style={styles.wrap}>
          {DataReducerHome.map((e, i) => {
            console.log(e.title, 'INI TESTT');
            return (
              <View key={i} style={styles.containerCard}>
                <View
                  style={{
                    backgroundColor:
                      i % 4 == 0
                        ? '#ff8a65'
                        : i % 3 == 0
                        ? '#ba68c8'
                        : '#37d67a',
                    flex: 1,
                    borderRadius: moderateScale(10),
                    padding: moderateScale(3),
                  }}>
                  <Poppin
                    style={styles.title}
                    type="Medium"
                    size={14}
                    numberOfLines={1}>
                    {e.title}
                  </Poppin>
                  <View style={styles.underline} />
                  <Poppin style={styles.body} size={11}>
                    {e.body}
                  </Poppin>
                </View>
              </View>
            );
          })}
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
  containerCard: {
    width: widthPercentageToDP(40),
    height: heightPercentageToDP(20),
    borderRadius: moderateScale(10),
    elevation: moderateScale(10),
    marginBottom: heightPercentageToDP(3),
  },
  underline: {
    borderWidth: 1,
  },
  title: {
    textTransform: 'capitalize',
  },
  body: {
    paddingTop: moderateScale(2),
  },
});
