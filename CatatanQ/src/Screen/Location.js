import React, {useEffect, useState} from 'react';
import {LogBox, StyleSheet, TouchableOpacity, View} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import Poppin from '../Component/Poppin';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {moderateScale} from 'react-native-size-matters';
import RNLocation from 'react-native-location';

export default function Location(props) {
  const [ShowLocation, setShowLocation] = useState(false);
  const [onLatitude, setOnLatitude] = useState('');
  const [onLongitude, setOnLongitude] = useState('');

  useEffect(() => {
    LogBox.ignoreLogs(['Provider gps is temporarily unavailable.']);
    LogBox.ignoreLogs(['Unhandled']);
    LogBox.ignoreLogs(['location']);
  }, []);

  RNLocation.configure({
    distanceFilter: 5.0,
  });

  const getPermission = async () => {
    let permission = await RNLocation.checkPermission({
      ios: 'whenInUse', // or 'always'
      android: {
        detail: 'coarse', // or 'fine'
      },
    });
    let location;
    try {
      if (!permission) {
        const permission = await RNLocation.requestPermission({
          ios: 'whenInUse',
          android: {
            detail: 'coarse',
            rationale: {
              title: 'We need to access your location',
              message: 'We use your location to show where you are on the map',
              buttonPositive: 'OK',
              buttonNegative: 'Cancel',
            },
          },
        });
        location = await RNLocation.getLatestLocation({timeout: 100});
        setShowLocation(!ShowLocation);
      } else {
        location = await RNLocation.getLatestLocation({timeout: 100});
      }
      setOnLatitude(location.latitude);
      setOnLongitude(location.latitude);
      setShowLocation(!ShowLocation);
    } catch (e) {
      console.warn(e);
    }
  };
  return (
    <View style={styles.outerContainer}>
      <View style={styles.containerHeader}>
        <View style={styles.between}>
          <Poppin alignSelf="center" color="#F8FDFF" size={20} type="Bold">
            Location
          </Poppin>
        </View>
      </View>

      <View style={styles.containerBody}>
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.button}
          onPress={getPermission}>
          <Poppin type="SemiBold" color="#F8FDFF">
            {ShowLocation ? 'CLOSE' : 'GET LOCATION'}
          </Poppin>
        </TouchableOpacity>
        {ShowLocation ? (
          <View style={styles.mainBody}>
            <View style={styles.content}>
              <Poppin size={18} color="#133E7E">
                Latitude:
              </Poppin>
              <Poppin size={22} color="#133E7E">
                {onLatitude}
              </Poppin>
            </View>
            <View style={styles.content}>
              <Poppin size={18} color="#133E7E">
                Longitude:
              </Poppin>
              <Poppin size={22} color="#133E7E">
                {onLongitude}
              </Poppin>
            </View>
          </View>
        ) : (
          <View />
        )}
      </View>
      <TouchableOpacity
        activeOpacity={0.9}
        style={styles.back}
        onPress={() => props.navigation.goBack()}>
        <AntDesign name="home" size={40} color="#F8FDFF" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: '#F8FDFF',
  },
  containerHeader: {
    width: widthPercentageToDP(100),
    height: heightPercentageToDP(10),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#133E7E',
  },
  title: {
    flexDirection: 'row',
    width: widthPercentageToDP(100),
    justifyContent: 'center',
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
    marginBottom: moderateScale(25),
  },
  button: {
    width: widthPercentageToDP(40),
    height: heightPercentageToDP(8),
    backgroundColor: '#133E7E',
    borderRadius: moderateScale(8),
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainBody: {
    width: widthPercentageToDP(80),
    height: heightPercentageToDP(50),
    borderWidth: 1,
    borderColor: '#133E7E',
    borderRadius: moderateScale(8),
    marginTop: heightPercentageToDP(5),
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  back: {
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
});
