import {StyleSheet, Image, View} from 'react-native';
import React from 'react';
import Login from '../components/Login';

export default function SignInScreen() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../assests/imgs/SignUp.png')}
      />
      <Login title={'Login'} innerText={'Sign Up Here'} forgotPassword={true} />
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
