import {ScrollView, StyleSheet, Text, View, Dimensions} from 'react-native';
import React, {useState} from 'react';

export default function MessageContent() {
  const [message, setMessage] = useState({
    message: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, neque.Eaque expedita ab harum deserunt',
      'Aliquid exercitationem officialaborum impedit Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
      'A, neque.Eaque expedita ab harum deserunt! Aliquid exercitationem officialaborum impedit ',
    ],
  });

  const windowWidth = Math.floor(Dimensions.get('window').width) / 2;

 const styles = StyleSheet.create({
   container: {flex: 1, margin: 25},
   messageContainer: {
     backgroundColor: '#e2dfdf',
     marginVertical: 10,
     padding: 20,
     borderRadius: 25,
     width: windowWidth,
   },
   message: {
     textAlign: 'left',
     fontSize: 15,
     color: '#262626',
     fontWeight: '600',
   },
 });

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      {Object.values(message)
        .flat()
        .map((message, index) => {
          return (
            <View style={styles.messageContainer} key={index}>
              <Text style={styles.message}>{message}</Text>
            </View>
          );
        })}
    </ScrollView>
  );
}


