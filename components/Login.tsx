import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

export default function Login() {
  return (
    <View style={styles.container}>
      <Text style={styles.head}>Sign Up</Text>
      <View style={styles.form}>
        <TextInput style={styles.inputEmail} value="s" />
        <TextInput style={styles.inputPassword} value="s" />
      </View>
      <View>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Sign Up</Text>
        </TouchableOpacity>
        <Text style={styles.innerText}>Do you have an account Login Here</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    backgroundColor: '#fff',
    height: '65%',
    bottom: 0,
    borderTopLeftRadius: 75,
    paddingHorizontal: 30,
    paddingVertical: 20,
    justifyContent: 'space-around',
  },
  head: {
    fontSize: 30,
    color: '#FF9134',
    fontWeight: '500',
    textAlign: 'center',
  },
  form: {
    marginVertical: 30,
    justifyContent: 'space-between',
  },
  inputEmail: {
    backgroundColor: '#eee',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    fontSize: 17,
  },
  inputPassword: {
    backgroundColor: '#eee',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 17,
  },
  btn: {
    backgroundColor: '#FF9134',
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 30,
    marginBottom: 10,
  },
  btnText: {textAlign: 'center', color: 'white', fontSize: 20},
  innerText: {textAlign: 'center', fontWeight: 'bold', fontSize: 14},
});
