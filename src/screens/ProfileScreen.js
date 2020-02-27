import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import UserApi from '../apis/UserApi';
import LoadingScreen from './LoadingScreen';
const ProfileScreen = () => {
  const navigation = useNavigation();

  const [farms, setFarms] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    fetchFarms();
    return () => {
      setFarms([]);
    };
  }, []);
  const fetchFarms = async () => {
    setIsLoading(true);
    UserApi.get('/farmhouses')
      .then(res => {
        setFarms(res.data);
        setIsLoading(false);
      })
      .catch(err => {
        setError(err);
        setIsLoading(false);
      });
  };
  const reload = async () => {
    setFarms([]);
    setError(null);
    await fetchFarms();
  };
  if (!isLoading && !error) {
    return (
      <View>
        <Text>ProfileScreen</Text>
        <Button
          title="Log out"
          onPress={() => navigation.navigate('LoginOptions')}
        />
        <Button title="Reload" onPress={reload} />
        <View>
          <Text>{JSON.stringify(farms)}</Text>
          <Text>{JSON.stringify(error)}</Text>
          <Text>{JSON.stringify(isLoading)}</Text>
        </View>
      </View>
    );
  } else {
    return <LoadingScreen error={error} />;
  }
};

export default ProfileScreen;

const styles = StyleSheet.create({});
