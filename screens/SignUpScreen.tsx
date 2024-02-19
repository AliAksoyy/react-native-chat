import {StyleSheet, View, Image} from 'react-native';
import React from 'react';
import Login from '../components/Login';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../App';

export default function SignUpScreen({}: NativeStackScreenProps<
  RootStackParams,
  'SignUp'
>) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../assests/imgs/SignUp.png')}
      />
      <Login
        title={'Sign Up'}
        innerText={'Login Here'}
        forgotPassword={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    objectFit: 'cover',
  },
});
