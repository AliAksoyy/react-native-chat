import React, {useState, useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUpScreen from '../screens/SignUpScreen';
import SignInScreen from '../screens/SignInScreen';
import MessageDetails from '../screens/MessageDetails';
import TabStackScreen from './TabStackScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loading from '../components/Loading';

const Stack = createNativeStackNavigator();

export default function AuthStackScreen() {
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getToken = async () => {
      try {
        setLoading(true);
        const token = await AsyncStorage.getItem('token');
        setToken(token);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getToken();
  }, []);

  console.log(token);

  if (loading) {
    return <Loading />;
  }
  return (
    <Stack.Navigator>
      {!token ? (
        <>
          <Stack.Screen
            name="SignUp"
            component={SignUpScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SignIn"
            component={SignInScreen}
            options={{headerShown: false}}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="BottomTab"
            component={TabStackScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Message"
            component={MessageDetails}
            options={{headerShown: false}}
          />
        </>
      )}
    </Stack.Navigator>
  );
}
