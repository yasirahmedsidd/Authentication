import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginOptionScreen from './screens/LoginOptionScreen';
import SigninScreen from './screens/SigninScreen';
import SignupScreen from './screens/SignupScreen';
import ProfileScreen from './screens/ProfileScreen';

import configureStore from './redux/store';
import {Provider} from 'react-redux';
const LoginStack = createStackNavigator();

const App = () => {
  return (
    <Provider store={configureStore()}>
      <NavigationContainer>
        <LoginStack.Navigator initialRouteName="Signup">
          <LoginStack.Screen
            name="LoginOptions"
            component={LoginOptionScreen}
          />
          <LoginStack.Screen name="Signin" component={SigninScreen} />
          <LoginStack.Screen name="Signup" component={SignupScreen} />
          <LoginStack.Screen name="Profile" component={ProfileScreen} />
        </LoginStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
