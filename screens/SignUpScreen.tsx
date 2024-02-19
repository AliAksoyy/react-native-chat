import {StyleSheet, View, Image} from 'react-native';
import React from 'react';
import Login from '../components/Login';

export default function SignUpScreen() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../assests/imgs/SignUp.png')}
      />
      <Login />
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
