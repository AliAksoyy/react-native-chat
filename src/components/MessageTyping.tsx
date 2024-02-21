import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function MessageTyping() {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Type something"
        placeholderTextColor="#000"
      />
      <TouchableOpacity style={styles.btn}>
        <AntDesign name="arrowup" color="#FF9134" size={26} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    paddingHorizontal: 25,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',

    justifyContent: 'space-between',
  },
  input: {flex: 1, fontSize: 18, color: '262626'},
  btn: {padding: 7, backgroundColor: '#fafafa'},
});
