import {ScrollView, StyleSheet, Text, View, Dimensions} from 'react-native';
import React, {useState} from 'react';

export default function MessageContent() {
  const [message, setMessage] = useState({
    message: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, neque.Eaque expedita ab harum deserunt',
      'Aliquid exercitationem officialaborum impedit Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
      'A, neque.Eaque expedita ab harum deserunt! Aliquid exercitationem officialaborum impedit ',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, neque.Eaque expedita ab harum deserunt',
      'Aliquid exercitationem officialaborum impedit Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
      'A, neque.Eaque expedita ab harum deserunt! Aliquid exercitationem officialaborum impedit ',
    ],
  });

  const windowWidth = (Math.floor(Dimensions.get('window').width) * 2) / 3;

  const styles = StyleSheet.create({
    container: {flex: 1, margin: 25},

    messageContainer: {
      marginVertical: 10,
      padding: 15,
      borderRadius: 25,
      width: windowWidth,
    },
    messageContainerLeft: {alignSelf: 'flex-start', backgroundColor: '#e2dfdf'},
    messageContainerRight: {
      alignSelf: 'flex-end',
      backgroundColor: '#FF9134',
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
            <View>
              <View
                style={[
                  index % 2 === 0
                    ? styles.messageContainerLeft
                    : styles.messageContainerRight,
                  styles.messageContainer,
                ]}
                key={index}>
                <Text
                  style={[
                    index % 2 === 0 ? styles.messageLeft : styles.messageRight,
                    styles.message,
                  ]}>
                  {message}
                </Text>
              </View>
            </View>
          );
        })}
    </ScrollView>
  );
}
