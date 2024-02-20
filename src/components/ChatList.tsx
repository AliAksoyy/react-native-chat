import {
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {ParamListBase} from '@react-navigation/native';

interface ChatListProps {
  item: {
    id: number;
    name: string;
    uri: ImageSourcePropType;
    subText: string;
    messageCount: number;
    lastSeen?: string;
  };
  navigation: BottomTabNavigationProp<ParamListBase>;
}

export default function ChatList({navigation, item}: ChatListProps) {
  const imagePath = item.uri;
  return (
    <View style={styles.view}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Message', {item})}
        style={styles.container}>
        <View>
          <Image source={imagePath} />
        </View>
        <View style={styles.content}>
          <Text style={styles.contentText}>{item.name}</Text>
          <Text style={styles.contentSubText}>{item.subText}</Text>
        </View>
        <View style={styles.contentRight}>
          <Text style={styles.message}>{item.lastSeen}</Text>
          {Boolean(item.messageCount) && (
            <View style={styles.messageCountContainer}>
              <Text style={styles.messageCount}>{item.messageCount}</Text>
            </View>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    paddingVertical: 15,
  },
  container: {
    height: 50,
    paddingHorizontal: 20,
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  content: {flex: 1, paddingHorizontal: 10},
  contentText: {fontWeight: '600', color: '#000', fontSize: 14},
  contentSubText: {fontSize: 12, color: '#FF9134'},
  contentRight: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  message: {fontWeight: '600', color: '#0000003b', fontSize: 12},
  messageCountContainer: {
    width: 20,
    height: 20,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    backgroundColor: '#FF9134',
    marginTop: 3,
    borderRadius: 10,
  },
  messageCount: {textAlign: 'center', fontSize: 12, color: 'white'},
});
