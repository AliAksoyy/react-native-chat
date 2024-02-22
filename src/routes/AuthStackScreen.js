import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUpScreen from '../screens/SignUpScreen';
import SignInScreen from '../screens/SignInScreen';
import MessageDetails from '../screens/MessageDetails';
import {useLoginContext} from '../context/LoginContext';
import TabStackScreen from './TabStackScreen';
import {useSelector} from 'react-redux';
import Loading from '../components/Loading';

const Stack = createNativeStackNavigator();

export default function AuthStackScreen() {
  const {logined, loading} = useSelector(state => state.auth);

  if (loading) {
    return <Loading />;
  }

  return (
    <Stack.Navigator>
      {!logined ? (
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
