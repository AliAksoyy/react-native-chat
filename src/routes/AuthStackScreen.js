import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUpScreen from '../screens/SignUpScreen';
import SignInScreen from '../screens/SignInScreen';
import MessageDetails from '../screens/MessageDetails';
import {useLoginContext} from '../context/LoginContext';
import TabStackScreen from './TabStackScreen';

const Stack = createNativeStackNavigator();

export default function AuthStackScreen() {
  const {login} = useLoginContext();
  return (
    <Stack.Navigator>
      {!login ? (
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
