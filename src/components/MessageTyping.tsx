import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function MessageTyping() {
  return (
    <View style={styles.container}>
      <Text>MessageTyping</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {height: 80, paddingHorizontal: 25, backgroundColor: '#FAFAFA'},
});
