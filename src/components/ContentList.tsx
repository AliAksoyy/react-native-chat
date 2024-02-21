import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  ImageSourcePropType,
} from 'react-native';
import React from 'react';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {ParamListBase} from '@react-navigation/native';

interface ContentListProps {
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

export default function ContentList({navigation, item}: ContentListProps) {
  const imagePath = item.uri;

  return (
    <TouchableOpacity style={styles.container}>
      <View>
        <Image source={imagePath} />
      </View>
      <View style={styles.content}>
        <Text style={styles.contentText}>{item.name}</Text>
        <Text style={styles.contentSubText}>last seen recently</Text>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Message', {item});
          }}>
          <Text style={styles.message}>Message</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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
  contentSubText: {fontSize: 12, opacity: 0.55},
  message: {fontWeight: '600', color: '#FF9134', fontSize: 12},
});
