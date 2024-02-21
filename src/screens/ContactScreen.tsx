import {StyleSheet, View, FlatList} from 'react-native';
import React from 'react';
import {data} from '../data/data';
import ContentList from '../components/ContentList';
import {ContactsScreenProps} from '../types/types';
import ContentHeader from '../components/ContentHeader';

export default function ContactScreen({navigation}: ContactsScreenProps) {
  return (
    <View style={styles.container}>
      <ContentHeader title="Contacts" />
      <View style={styles.content}>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <ContentList navigation={navigation} item={item} />
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
