import React, {useEffect, useState} from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
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
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {addItem, getHome, postData} from '../Redux/actionHome';
import Poppin from '../Component/Poppin';
import {PopUp, ModalInput} from '../Component/Modal';

export default function Home(props) {
  const dispatch = useDispatch();
  const [ModalVisible, setModalVisible] = useState(false);
  const [ModalInputVisible, setModalInputVisible] = useState(false);
  const [DataModal, setDataModal] = useState({});
  const [titleInput, setTitleInput] = useState('');
  const [bodyInput, setBodyInput] = useState('');
  const [searchShow, setSearchShow] = useState(false);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  //setsearch
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true); // or some other action
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false); // or some other action
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  //getdata
  useEffect(() => {
    dispatch(getHome());
  }, []);

  const DataReducerHome = useSelector(state => state.ReducerHome?.data);

  useEffect(() => {
    setFilteredDataSource(DataReducerHome);
  }, []);
  const searchFilterFunction = text => {
    // Check if searched text is not blank
    if (text.length > 1) {
      // Inserted text is not blank
      // Filter the masterDataSource and update FilteredDataSource
      const newData = DataReducerHome.filter(item => {
        // Applying filter for the inserted text in search bar
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(DataReducerHome);
      setSearch(text);
      console.log(filteredDataSource, 'INI COYYY');
    }
  };

  const submitAddData = () => {
    const idData = DataReducerHome.id + 1;
    const newData = {
      id: idData,
      title: titleInput,
      body: bodyInput,
    };
    dispatch(postData(newData));
    // dispatch(addItem(newData));
    setModalInputVisible(false);
  };

  const xButton = () => {
    return setFilteredDataSource(DataReducerHome), setSearch('');
  };

  return (
    <View style={styles.outerContainer}>
      <Header onPressRight={() => setSearchShow(!searchShow)} />
      {searchShow ? (
        <View style={styles.search}>
          <TextInput
            placeholder="Search by Title"
            onChangeText={text => searchFilterFunction(text)}
            value={search}
            style={{flex: 1}}
          />
          <TouchableOpacity onPress={xButton} style={{alignSelf: 'center'}}>
            <Poppin
              size={12}
              color="#B3B6B9"
              type="Medium"
              style={{borderBottomWidth: 0.5, borderColor: '#B3B6B9'}}>
              Clear
            </Poppin>
          </TouchableOpacity>
        </View>
      ) : (
        <View />
      )}
      <ScrollView style={styles.scroll}>
        <View style={styles.wrap}>
          {filteredDataSource?.map((e, i) => {
            console.log(filteredDataSource, 'INI MAPNYAAA');
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
      {isKeyboardVisible ? (
        <View />
      ) : (
        <>
          <TouchableOpacity
            activeOpacity={0.9}
            style={styles.addNew}
            onPress={() => setModalInputVisible(true)}>
            <Fontisto name="plus-a" size={40} color="#F8FDFF" />
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.9}
            style={styles.location}
            onPress={() => props.navigation.navigate('Location')}>
            <Ionicons name="location-sharp" size={40} color="#F8FDFF" />
          </TouchableOpacity>
        </>
      )}

      {/* MODAL */}
      <PopUp
        visible={ModalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
        data={DataModal}
        onClose={() => {
          setModalVisible(false);
        }}
      />
      <ModalInput
        visibleInput={ModalInputVisible}
        onRequestCloseInput={() => {
          setModalInputVisible(false);
        }}
        onChangeTextTitle={text => setTitleInput(text)}
        onChangeTextBody={text => setBodyInput(text)}
        onPress={submitAddData}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: '#F8FDFF',
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
  search: {
    width: widthPercentageToDP(97),
    height: heightPercentageToDP(7),
    borderColor: '#133E7E',
    borderBottomWidth: 7,
    borderLeftWidth: 7,
    borderRightWidth: 7,
    alignSelf: 'center',
    borderBottomLeftRadius: moderateScale(15),
    borderBottomRightRadius: moderateScale(15),
    paddingHorizontal: moderateScale(10),
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  addNew: {
    width: moderateScale(70),
    height: moderateScale(75),
    // borderRadius: moderateScale(30),
    borderTopRightRadius: moderateScale(50),
    backgroundColor: '#133E7E',
    position: 'absolute',
    zIndex: 50,
    bottom: moderateScale(5),
    left: moderateScale(5),
    alignItems: 'center',
    elevation: 5,
    justifyContent: 'center',
  },
  location: {
    width: moderateScale(70),
    height: moderateScale(75),
    // borderRadius: moderateScale(30),
    borderTopLeftRadius: moderateScale(50),
    backgroundColor: '#133E7E',
    position: 'absolute',
    zIndex: 50,
    bottom: moderateScale(5),
    right: moderateScale(5),
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
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
