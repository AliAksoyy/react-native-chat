import {
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';

interface ChatListProps {
  item: {
    id: number;
    name: string;
    uri: ImageSourcePropType;
    subText: string;
    messageCount: number;
    lastSeen?: string;
  };
}

export default function ChatList({item}: ChatListProps) {
  const imagePath = item.uri;
  return (
    <View style={styles.view}>
      <TouchableOpacity style={styles.container}>
        <View>
          <Image source={imagePath} />
        </View>
        <View style={styles.content}>
          <Text style={styles.contentText}>{item.name}</Text>
          <Text style={styles.contentSubText}>{item.subText}</Text>
        </View>
        <View style={styles.contentRight}>
          <Text style={styles.message}>{item.lastSeen}</Text>
          <View style={styles.messageCountContainer}>
            <Text style={styles.messageCount}>{item.messageCount}</Text>
          </View>
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
    alignSelf: 'flex-end',
    padding: 4,
    width: 5,
    height: 11,
    backgroundColor: '#FF9134',
  },
  messageCount: {color: 'white'},
});
