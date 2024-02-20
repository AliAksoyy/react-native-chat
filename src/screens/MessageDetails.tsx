import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {MessageScreenProps} from '../types/types';
import MessageHeader from '../components/MessageHeader';

export default function MessageDetails({route}: MessageScreenProps) {
  const [user, setUser] = useState({});

  useEffect(() => {
    if (route.params.item) {
      setUser(route.params.item);
    }
  }, [route.params.item]);

  console.log(user);
  return (
    <View>
      <MessageHeader user={user} />
    </View>
  );
}

const styles = StyleSheet.create({});
