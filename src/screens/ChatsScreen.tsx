import {StyleSheet, FlatList, View, Modal, Pressable, Text} from 'react-native';
import React, {useState} from 'react';
import {ChatsScreenProps} from '../types/types';
import {data} from '../data/data';
import ContentHeader from '../components/ContentHeader';
import ChatList from '../components/ChatList';
import SendMessageModal from '../components/SendMessageModal';

export default function ChatsScreen({navigation}: ChatsScreenProps) {
  const [modalVisible, setModalVisible] = useState(false);
  const handleOpenModal = () => {
    setModalVisible(true);
  };
  return (
    <View style={styles.container}>
      <ContentHeader handleOpenModal={handleOpenModal} title="Chats" />
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
      <SendMessageModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
  content: {flex: 1},
});
