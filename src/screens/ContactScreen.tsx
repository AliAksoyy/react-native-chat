import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View,
  FlatList,
} from 'react-native';
import React from 'react';
import {data} from '../data/data';
import ContentList from '../components/ContentList';
import {ContactsScreenProps} from '../types/types';

export default function ContactScreen({}: ContactsScreenProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.plus}>
          <Image source={require('../assests/imgs/plus.png')} />
        </TouchableOpacity>
        <Text style={styles.text}>Contacts</Text>
        <TouchableOpacity style={styles.avatar}>
          <Image source={require('../assests/profile/ProfileImage1.png')} />
          <View style={styles.div} />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <FlatList
          data={data}
          renderItem={({item}) => <ContentList item={item} />}
          keyExtractor={item => item.id.toString()}
          ItemSeparatorComponent={() => (
            <View style={{backgroundColor: '#F5F5F5', height: 2}} />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
  header: {
    height: 60,
    backgroundColor: '#fff',
    borderBottomColor: '#eaeaea',
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  plus: {padding: 7, backgroundColor: '#fafafa'},
  text: {fontSize: 23, fontWeight: 'bold', color: '#000'},
  avatar: {position: 'relative'},
  div: {
    width: 8,
    height: 8,
    backgroundColor: 'green',
    borderRadius: 4,
    position: 'absolute',
    right: 4,
    top: 2,
  },
  content: {flex: 1},
});
