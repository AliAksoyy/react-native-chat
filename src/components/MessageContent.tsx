import {ScrollView, StyleSheet, Text, View, Dimensions} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';

export default function MessageContent() {
  const [message, setMessage] = useState({
    message: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, neque.Eaque expedita ab harum deserunt',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
      'A, exercitationem officialaborum impedit ',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, neque.Eaque expedita ab harum deserunt',
      'Aliquid exercitationem officialaborum impedit Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
      'A, neque.Eaque expedita ab harum deserunt! ',
    ],
  });

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
      {Object.values(message)
        .flat()
        .map((message, index) => {
          return (
            <View key={index}>
              <LinearGradient
                colors={
                  index % 2 === 0
                    ? ['#e2dfdf', '#a11d1d'] // Sadece bir renk kullanmak istiyorsanız
                    : ['#a88568', '#FF9134'] // Sadece bir renk kullanmak istiyorsanız
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
