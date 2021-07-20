import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
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
import {PopUp, ModalInput} from '../Component/Modal';

export default function Home() {
  const dispatch = useDispatch();
  const [ModalVisible, setModalVisible] = useState(false);
  const [ModalInputVisible, setModalInputVisible] = useState(false);
  const [DataModal, setDataModal] = useState({});

  useEffect(() => {
    dispatch(getHome());
  }, []);

  const DataReducerHome = useSelector(state => state.ReducerHome?.data);
  return (
    <View style={styles.outerContainer}>
      <Header />
      <ScrollView style={styles.scroll}>
        <View style={styles.wrap}>
          {DataReducerHome.map((e, i) => {
            console.log(e.title, 'INI TESTT');
            return (
              <TouchableOpacity
                onPress={() => {
                  setDataModal(e, i);
                  setModalVisible(true);
                }}
                activeOpacity={0.9}
                key={i}
                style={styles.containerCard}>
                <View
                  style={{
                    backgroundColor:
                      e.id % 3 == 0
                        ? '#ff8a65'
                        : e.id % 2 == 0
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
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.addNew}
        onPress={() => setModalInputVisible(true)}>
        <Fontisto name="plus-a" size={40} color="#19222c" />
      </TouchableOpacity>

      {/* MODAL */}
      <PopUp
        visible={ModalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
        data={DataModal}
      />
      <ModalInput
        visibleInput={ModalInputVisible}
        onRequestCloseInput={() => {
          setModalInputVisible(false);
        }}
      />
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
    zIndex: 50,
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
