import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginOptionScreen from '../screens/LoginOptionScreen';
import SigninScreen from '../screens/SigninScreen';
import SignupScreen from '../screens/SignupScreen';
import ProfileScreen from '../screens/ProfileScreen';

import {connect} from 'react-redux';

const LoginStack = createStackNavigator();
const Nav = ({auth}) => {
  return (
    <NavigationContainer>
      {console.log(auth)}
      <LoginStack.Navigator initialRouteName="LoginOptions">
        {auth.token ? (
          <LoginStack.Screen name="Profile" component={ProfileScreen} />
        ) : (
          <>
            <LoginStack.Screen
              name="LoginOptions"
              component={LoginOptionScreen}
            />
            <LoginStack.Screen name="Signin" component={SigninScreen} />
            <LoginStack.Screen name="Signup" component={SignupScreen} />
          </>
        )}
      </LoginStack.Navigator>
    </NavigationContainer>
  );
};

const mapStateToProps = state => ({auth: state.auth});
export default connect(mapStateToProps)(Nav);
