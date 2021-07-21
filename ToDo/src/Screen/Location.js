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
  }, []);

  RNLocation.configure({
    distanceFilter: 5.0,
  });

  const getPermission = async () => {
    // try {
    //   const granted = await PermissionsAndroid.request(
    //     PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    //     {
    //       title: 'Cool App Location Permission',
    //       message: 'Cool App needs access to your location ',
    //       buttonNeutral: 'Ask Me Later',
    //       buttonNegative: 'Cancel',
    //       buttonPositive: 'OK',
    //     },
    //   );
    //   if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    //     console.log('Now you can use geolocation!');
    //   } else {
    //     console.log('Location permission denied');
    //   }
    // } catch (err) {
    //   console.warn(err);
    // }

    console.log('here');
    let permission = await RNLocation.checkPermission({
      ios: 'whenInUse', // or 'always'
      android: {
        detail: 'coarse', // or 'fine'
      },
    });
    console.log(permission, 'PERMISSION');
    let location;
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
      console.log(permission, 'PERMISSION2');
      location = await RNLocation.getLatestLocation({timeout: 100});
      console.log(location.longitude, location.latitude);
      setShowLocation(!ShowLocation);
    } else {
      location = await RNLocation.getLatestLocation({timeout: 100});
      console.log(location.longitude, location.latitude);
    }
    console.log(location.longitude, location.latitude);
    setOnLatitude(location.latitude);
    setOnLongitude(location.latitude);
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
          onPress={getPermission}>
          <Poppin type="SemiBold">
            {ShowLocation ? 'CLOSE' : 'GET LOCATION'}
          </Poppin>
        </TouchableOpacity>
        {ShowLocation ? (
          <View style={styles.mainBody}>
            <View style={styles.content}>
              <Poppin size={18} color="#acb8c5">
                Latitude:
              </Poppin>
              <Poppin size={22} color="#acb8c5">
                {onLatitude}
              </Poppin>
            </View>
            <View style={styles.content}>
              <Poppin size={18} color="#acb8c5">
                Longitude:
              </Poppin>
              <Poppin size={22} color="#acb8c5">
                {onLongitude}
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
