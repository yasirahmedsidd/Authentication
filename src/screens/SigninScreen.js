import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  Dimensions,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
const SigninScreen = () => {
  const navigation = useNavigation();
  navigation.setOptions({
    headerShown: false,
  });
  return (
    <View style={{backgroundColor: '#000', flex: 1, paddingTop: 100}}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />

      <View style={{alignItems: 'center'}}>
        <Text style={{color: '#fff', fontSize: 24}}>
          Sign Into your Account
        </Text>
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View>
          <Text style={{color: '#fff', fontSize: 14, padding: 20}}>
            Username
          </Text>
          <TextInput
            style={{
              width: Dimensions.get('window').width - 100,
              height: 50,
              backgroundColor: '#000',
              borderWidth: 1,
              borderColor: '#fff',
              marginBottom: 10,
              borderRadius: 25,
              color: '#fff',
              paddingHorizontal: 15,
              fontSize: 18,
            }}
          />
        </View>

        <View>
          <Text style={{color: '#fff', fontSize: 14, padding: 20}}>
            Password
          </Text>
          <TextInput
            style={{
              width: Dimensions.get('window').width - 100,
              height: 50,
              backgroundColor: '#000',
              borderWidth: 1,
              borderColor: '#fff',
              marginBottom: 10,
              borderRadius: 25,
              color: '#fff',
              paddingHorizontal: 15,
              fontSize: 18,
            }}
          />
        </View>
        <View style={{marginTop: 20}}>
          <TouchableOpacity
            style={{
              width: Dimensions.get('window').width / 4,
              height: 50,
              borderWidth: 1,
              borderColor: '#fff',
              borderRadius: 25,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => navigation.navigate('Profile')}>
            <Text style={{color: '#fff'}}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SigninScreen;

const styles = StyleSheet.create({});
