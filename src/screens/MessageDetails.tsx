import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {MessageScreenProps} from '../types/types';
import MessageHeader from '../components/MessageHeader';

export default function MessageDetails({route}: MessageScreenProps) {
  console.log(route);
  return (
    <View>
      <MessageHeader />
    </View>
  );
}

const styles = StyleSheet.create({});
