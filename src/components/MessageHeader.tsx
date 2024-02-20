import {StyleSheet, Text, TouchableOpacity, Image, View} from 'react-native';
import React from 'react';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function MessageHeader() {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.plus}>
        <FontAwesome6
          name="angle-left"
          size={27}
          style={{fontWeight: '800'}}
          color={'#A3A3A3'}
        />
      </TouchableOpacity>
      <View style={{flex: 1}}>
        <Image />
        <View>
          <Text></Text>
          <Text></Text>
        </View>
      </View>
      <View style={styles.right}>
        <TouchableOpacity style={styles.plus}>
          <FontAwesome name="video-camera" size={20} color={'#A3A3A3'} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.plus}>
          <FontAwesome name="phone" size={20} color={'#A3A3A3'} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: '#fff',
    borderBottomColor: '#eaeaea',
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  plus: {padding: 7, backgroundColor: '#fafafa'},
  text: {fontSize: 23, fontWeight: 'bold', color: '#000'},
  avatar: {position: 'relative'},
  right: {flexDirection: 'row', columnGap: 10},
});
