import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View,
  ImageSourcePropType,
} from 'react-native';
import React from 'react';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
interface User {
  id: number;
  name: string;
  uri: ImageSourcePropType;
  subText: string;
  messageCount: number;
  lastSeen?: string;
}

interface MessageHeaderProps {
  user: User; // User tipine göre belirleyin
}
export default function MessageHeader({user}: MessageHeaderProps) {
  const imagePath = user.uri;
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
      <View style={{...styles.middle, flex: 1}}>
        <Image source={imagePath} />
        <View>
          <Text style={styles.text}>{user.name}</Text>
          <Text style={styles.subText}>{user.lastSeen}</Text>
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
  middle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: 30,
    alignItems: 'center',
    columnGap: 20,
  },
  text: {fontSize: 16, fontWeight: 'bold', color: '#111111'},
  subText: {fontSize: 12, color: '#FF9134'},
  right: {flexDirection: 'row', columnGap: 10},
});
