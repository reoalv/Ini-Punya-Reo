import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ScreenAPI from './src/Home/ScreenAPI';
import Favorite from './src/Favorite/Favorite';
import {Entypo} from 'react-native-vector-icons/Entypo';
import ScreenCustom from './src/Home/ScreenCustom';
import {Provider} from 'react-redux';
import {store} from './src/Redux/Store';

export default function App() {
  useEffect(() => {
    LogBox.ignoreLogs(['Reanimated 2']);
  }, []);
  // const Stack = createStackNavigator();
  const BottomTab = createBottomTabNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <BottomTab.Navigator>
          <BottomTab.Screen
            name="TopTab"
            component={TopTab}
            options={{
              headerShown: false,
              // tabBarIcon: ({color, size}) => (
              //   <Entypo name="home" color={color} size={size} />
              // ),
              // tabBarLabel: 'Index',
            }}
          />
          <BottomTab.Screen
            name="Favorite"
            component={Favorite}
            options={{
              headerShown: false,
              //   tabBarIcon: ({color, size}) => (
              //     <Entypo name="home" color={color} size={size} />
              //   ),
              //   tabBarLabel: 'Favorite',
            }}
          />
        </BottomTab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const TopTab = () => {
  const TopTab = createMaterialTopTabNavigator();
  return (
    <>
      <TopTab.Navigator>
        <TopTab.Screen name="API" component={ScreenAPI} />
        <TopTab.Screen name="Custom" component={ScreenCustom} />
      </TopTab.Navigator>
    </>
  );
};
