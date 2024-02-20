import {StyleSheet, View, Image} from 'react-native';
import Login from '../components/Login';
import {SingUpScreenProps} from '../types/types';

export default function SignUpScreen({navigation}: SingUpScreenProps) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../assests/imgs/SignUp.png')}
      />
      <Login
        title={'Sign Up'}
        innerText={'Login Here'}
        forgotPassword={false}
        navigation={navigation}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    objectFit: 'cover',
  },
});
