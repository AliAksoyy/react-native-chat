import {StyleSheet, FlatList, View} from 'react-native';
import React from 'react';
import {ChatsScreenProps} from '../types/types';
import {data} from '../data/data';
import ContentHeader from '../components/ContentHeader';
import ChatList from '../components/ChatList';

export default function ChatsScreen({navigation}: ChatsScreenProps) {
  return (
    <View style={styles.container}>
      <ContentHeader title="Chats" />
      <View style={styles.content}>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <ChatList navigation={navigation} item={item} />
          )}
          keyExtractor={item => item.id.toString()}
          ItemSeparatorComponent={() => (
            <View style={{backgroundColor: '#F5F5F5', height: 2}} />
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
  content: {flex: 1},
});
