import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Button,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
const LoginOptionScreen = () => {
  const navigation = useNavigation();
  navigation.setOptions({
    headerShown: false,
  });
  return (
    <View
      style={{
        // height: Dimensions.get('window').height,
        backgroundColor: 'black',
        flex: 1,
        alignItems: 'center',
      }}>
      <Text style={{color: '#fff', fontSize: 24, padding: 50}}>
        LoginOptionScreen
      </Text>
      <View style={{position: 'absolute', bottom: 50}}>
        <TouchableOpacity
          style={{
            width: Dimensions.get('window').width - 100,
            height: 50,
            borderWidth: 1,
            borderColor: '#fff',
            borderRadius: 25,
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 10,
          }}
          onPress={() => navigation.navigate('Signin')}>
          <Text style={{color: '#fff'}}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: Dimensions.get('window').width - 100,
            height: 50,
            borderWidth: 1,
            borderColor: '#fff',
            borderRadius: 25,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => navigation.navigate('Signup')}>
          <Text style={{color: '#fff'}}>Create an Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginOptionScreen;

const styles = StyleSheet.create({});
