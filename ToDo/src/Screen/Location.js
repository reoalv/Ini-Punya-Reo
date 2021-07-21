import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import Poppin from '../Component/Poppin';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {moderateScale} from 'react-native-size-matters';

export default function Location(props) {
  const [ShowLocation, setShowLocation] = useState(false);

  const ShowLocationButton = () => {
    setShowLocation(!ShowLocation);
  };
  return (
    <View style={styles.outerContainer}>
      <View style={styles.containerHeader}>
        <View style={styles.between}>
          <TouchableOpacity
            onPress={() => props.navigation.goBack()}
            activeOpacity={0.4}
            style={styles.icon}>
            <AntDesign name="left" size={24} color="#acb8c5" />
          </TouchableOpacity>
          <Poppin alignSelf="center" color="#acb8c5" size={20} type="Bold">
            Location
          </Poppin>
          <View style={styles.right} />
        </View>
      </View>

      <View style={styles.containerBody}>
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.button}
          onPress={ShowLocationButton}>
          <Poppin type="SemiBold">
            {ShowLocation ? 'CLOSE' : 'GET LOCATION'}
          </Poppin>
        </TouchableOpacity>
        {ShowLocation ? (
          <View style={styles.mainBody}>
            <View style={styles.content}>
              <Poppin size={18} color="#acb8c5">
                Latitude:{' '}
              </Poppin>
              <Poppin size={22} color="#acb8c5">
                00000
              </Poppin>
            </View>
            <View style={styles.content}>
              <Poppin size={18} color="#acb8c5">
                Longitude:{' '}
              </Poppin>
              <Poppin size={22} color="#acb8c5">
                00000
              </Poppin>
            </View>
          </View>
        ) : (
          <View />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: '#283a4e',
  },
  containerHeader: {
    width: widthPercentageToDP(100),
    height: heightPercentageToDP(10),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#19222c',
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
  right: {
    width: widthPercentageToDP(15),
  },
  containerBody: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: widthPercentageToDP(40),
    height: heightPercentageToDP(8),
    backgroundColor: '#acb8c5',
    borderRadius: moderateScale(8),
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainBody: {
    width: widthPercentageToDP(80),
    height: heightPercentageToDP(50),
    borderWidth: 1,
    borderColor: '#acb8c5',
    borderRadius: moderateScale(8),
    marginTop: heightPercentageToDP(5),
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
