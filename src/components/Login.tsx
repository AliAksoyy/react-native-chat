import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteParamList} from '../types/types';
import {useLoginContext} from '../context/LoginContext';
import {RouteProp} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {loginAction, registerAction} from '../features/authSlice/asynActions';
import {AppDispatch} from '../app/store';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

interface LoginProps {
  title: string;
  innerText: string;
  forgotPassword: boolean;
  navigation:
    | NativeStackNavigationProp<RouteParamList, 'SignUp'>
    | NativeStackNavigationProp<RouteParamList, 'SignIn'>;
  route?:
    | RouteProp<RouteParamList, 'SignIn'>
    | RouteProp<RouteParamList, 'SignUp'>;
}

interface ValueState {
  user: string;
  email: string;
  password: string;
}

const Login: React.FC<LoginProps> = ({
  navigation,
  title,
  innerText,
  forgotPassword,
  route,
}) => {
  const [value, setValue] = useState<ValueState>({
    user: '',
    email: '',
    password: '',
  });

  const dispatch = useDispatch<AppDispatch>();

  const {setLogin} = useLoginContext();

  const handlePress = () => {
    if (forgotPassword) {
      navigation.navigate('SignUp');
    } else {
      navigation.navigate('SignIn');
    }
  };
  const handleBtn = () => {
    if (forgotPassword) {
      dispatch(loginAction({value}));
    } else {
      dispatch(registerAction({value})).then(res => {
        if (res.error?.message === 'EMAIL_ALREADY_REGISTERED') {
          navigation.navigate('SignIn');
        }
      });
    }
  };

  const handleChange = (text: {
    user?: string;
    email?: string;
    password?: string;
  }) => {
    setValue({...value, ...text});
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View>
        <Text style={styles.head}>{title}</Text>

        <View>
          {forgotPassword || (
            <View>
              <FontAwesome5
                style={styles.userImage}
                name="user-alt"
                color="#cac5c2"
                size={20}
              />
              <TextInput
                style={styles.inputEmail}
                value={value.user}
                placeholder="Enter UserName"
                onChangeText={text => handleChange({user: text})}
              />
            </View>
          )}

          <View>
            <Image
              style={styles.emailImage}
              source={require('../assests/imgs/email.png')}
            />
            <TextInput
              style={styles.inputEmail}
              value={value.email}
              placeholder="Enter Mail"
              onChangeText={text => handleChange({email: text})}
            />
          </View>
          <View>
            <Image
              style={styles.passwordImage}
              source={require('../assests/imgs/password.png')}
            />
            <TextInput
              style={styles.inputPassword}
              value={value.password}
              placeholder="Enter Password"
              onChangeText={text => handleChange({password: text})}
              secureTextEntry={true}
            />
          </View>
          {forgotPassword && (
            <View>
              <TouchableOpacity>
                <Text
                  style={{
                    color: '#FF9134',
                    paddingTop: 3,
                    textAlign: 'right',
                  }}>
                  Forgot Password
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
        <View>
          <TouchableOpacity onPress={handleBtn} style={styles.btn}>
            <Text style={styles.btnText}>{title}</Text>
          </TouchableOpacity>
          <View style={styles.subBtn}>
            <Text style={styles.innerText}>Do you have an account </Text>
            <TouchableOpacity onPress={handlePress}>
              <Text style={styles.subText}>{innerText}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    backgroundColor: '#fff',
    height: '67.5%',
    bottom: 0,
    borderTopLeftRadius: 75,
    paddingHorizontal: 30,
    paddingVertical: 20,
    justifyContent: 'space-around',
  },
  head: {
    fontSize: 30,
    color: '#FF9134',
    fontWeight: '500',
    textAlign: 'center',
    marginVertical: 20,
  },
  userImage: {
    position: 'absolute',
    top: '20%',
    left: 10,
    zIndex: 1,
  },
  emailImage: {
    position: 'absolute',
    top: '20%',
    left: 10,
    borderWidth: 2,
    zIndex: 1,
  },
  passwordImage: {
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
  },
  inputPassword: {
    backgroundColor: '#eee',
    borderRadius: 10,
    paddingLeft: 45,
    fontSize: 17,
  },
  btn: {
    backgroundColor: '#FF9134',
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 15,
    marginBottom: 10,
  },
  subBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subText: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#FF9134',
    textAlign: 'center',
  },
  btnText: {textAlign: 'center', color: 'white', fontSize: 20},
  innerText: {textAlign: 'center', fontWeight: 'bold', fontSize: 14},
});
