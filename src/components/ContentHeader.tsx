import React from 'react';
import {StyleSheet, Text, TouchableOpacity, Image, View} from 'react-native';

interface ContentHeaderProps {
  title: string;
  handleOpenModal: () => void;
}

const ContentHeader: React.FC<ContentHeaderProps> = ({
  handleOpenModal,
  title,
}) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={handleOpenModal} style={styles.plus}>
        <Image source={require('../assests/imgs/plus.png')} />
      </TouchableOpacity>
      <Text style={styles.text}>{title}</Text>
      <TouchableOpacity style={styles.avatar}>
        <Image source={require('../assests/profile/ProfileImage1.png')} />
        <View style={styles.div} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default ContentHeader;
