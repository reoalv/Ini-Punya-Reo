import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/Screen/Home';
import Location from './src/Screen/Location';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './src/Redux/Store';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              options={{headerShown: false}}
              name="Home"
              component={Home}
            />
            <Stack.Screen
              options={{headerShown: false}}
              name="Location"
              component={Location}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
