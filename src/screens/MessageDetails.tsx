import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {MessageScreenProps} from '../types/types';
import MessageHeader from '../components/MessageHeader';
import MessageContent from '../components/MessageContent';
import MessageTyping from '../components/MessageTyping';

export default function MessageDetails({
  navigation,
  route,
}: MessageScreenProps) {
  const [user, setUser] = useState<any>({});

  useEffect(() => {
    if (route.params.item) {
      setUser(route.params.item);
    }
  }, [route.params.item]);

  return (
    <View style={styles.container}>
      <MessageHeader navigation={navigation} user={user} />
      <MessageContent />
      <MessageTyping />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
});
