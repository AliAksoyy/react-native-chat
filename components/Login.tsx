import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Login() {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    backgroundColor: 'red',
    height: '60%',
    bottom: 0,
    borderTopLeftRadius: 75,
    paddingHorizontal: 30,
    paddingVertical: 50,
  },
});
