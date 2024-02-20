import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {MessageScreenProps} from '../types/types';
import MessageHeader from '../components/MessageHeader';

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
    <View>
      <MessageHeader navigation={navigation} user={user} />
    </View>
  );
}

const styles = StyleSheet.create({});
