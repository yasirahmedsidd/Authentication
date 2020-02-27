import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginOptionScreen from './screens/LoginOptionScreen';
import SigninScreen from './screens/SigninScreen';
import SignupScreen from './screens/SignupScreen';

const LoginStack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <LoginStack.Navigator>
        <LoginStack.Screen name="LoginOptions" component={LoginOptionScreen} />
        <LoginStack.Screen name="Signin" component={SigninScreen} />
        <LoginStack.Screen name="Signup" component={SignupScreen} />
      </LoginStack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
