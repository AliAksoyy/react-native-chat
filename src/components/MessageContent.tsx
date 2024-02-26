import {ScrollView, StyleSheet, Text, View, Dimensions} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';

export default function MessageContent() {
  const [messageList, setMessageList] = useState([]);

  const windowWidth = (Math.floor(Dimensions.get('window').width) * 2) / 3;

  const styles = StyleSheet.create({
    container: {flex: 1, marginHorizontal: 25, marginTop: 15},

    messageContainer: {
      marginVertical: 10,
      padding: 15,
      borderRadius: 25,
      width: windowWidth,
    },
    messageContainerLeft: {alignSelf: 'flex-start'},
    messageContainerRight: {
      alignSelf: 'flex-end',
    },
    message: {
      textAlign: 'left',
      fontSize: 15,

      fontWeight: '500',
    },
    messageRight: {
      color: '#fff',
    },
    messageLeft: {color: '#3a3737'},
  });

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      {messageList.map((message, index) => {
        return (
          <View key={index}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={
                index % 2 === 0
                  ? ['#ece8e8', '#dbd8d8']
                  : ['#f5ad72', '#FF9134']
              }
              style={[
                index % 2 === 0
                  ? styles.messageContainerLeft
                  : styles.messageContainerRight,
                styles.messageContainer,
              ]}>
              <Text
                style={[
                  index % 2 === 0 ? styles.messageLeft : styles.messageRight,
                  styles.message,
                ]}>
                {message}
              </Text>
            </LinearGradient>
          </View>
        );
      })}
    </ScrollView>
  );
}
