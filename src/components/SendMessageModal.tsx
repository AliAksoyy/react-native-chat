import {
  StyleSheet,
  Text,
  View,
  Modal,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface SendMessageState {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SendMessageModal({
  modalVisible,
  setModalVisible,
}: SendMessageState) {
  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Start new chat</Text>
          <View style={{width: '100%'}}>
            <Image
              style={styles.emailImage}
              source={require('../assests/imgs/email.png')}
            />
            <TextInput
              value={'alberto@gmail.com'}
              style={styles.inputEmail}
              placeholder="Enter Mail"
            />
          </View>
          <TouchableOpacity
            onPress={() => setModalVisible(!modalVisible)}
            style={styles.btn}>
            <Text style={styles.btnText}>Message</Text>
            <MaterialIcons name="send" color="#FF9134" size={24} />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    backgroundColor: 'white',
    width: 300,
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 10,
  },
  emailImage: {
    position: 'absolute',
    top: '20%',
    left: 10,
    borderWidth: 2,
    zIndex: 1,
  },
  inputEmail: {
    backgroundColor: '#eee',
    borderRadius: 10,
    paddingLeft: 45,
    marginBottom: 20,
    fontSize: 17,
    width: '100%',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  modalText: {
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1a1919',
  },
  btn: {flexDirection: 'row', alignItems: 'center'},
  btnText: {color: '#FF9134', marginRight: 7, fontWeight: '400', fontSize: 17},
});
