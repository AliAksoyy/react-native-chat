import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  ImageSourcePropType,
  ScrollView,
} from 'react-native';
import React from 'react';

interface ContentListProps {
  item: {
    id: number;
    name: string;
    uri: ImageSourcePropType;
  };
}

export default function ContentList({item}: ContentListProps) {
  const imagePath = item.uri;

  return (
    <ScrollView>
      <TouchableOpacity style={styles.container}>
        <View>
          <Image source={imagePath} />
        </View>
        <View style={styles.content}>
          <Text style={styles.contentText}>{item.name}</Text>
          <Text style={styles.contentSubText}>last seen recently</Text>
        </View>
        <View>
          <TouchableOpacity>
            <Text style={styles.message}>Message</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </ScrollView>
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
