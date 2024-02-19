import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUpScreen from './src/screens/SignUpScreen';
import SignInScreen from './src/screens/SignInScreen';
import {RouteParamList} from './src/types/types';
import ContactScreen from './src/screens/ContactScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ChatsScreen from './src/screens/ChatsScreen';
import {LoginProvider, useLoginContext} from './src/context/LoginContext';

const Stack = createNativeStackNavigator<RouteParamList>();
const Tab = createBottomTabNavigator();

export default function App() {
  const {login} = useLoginContext();

  console.log(login);

  return (
    <LoginProvider>
      <NavigationContainer>
        {login ? (
          <Stack.Navigator>
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
          </Stack.Navigator>
        ) : (
          <Tab.Navigator>
            <Tab.Screen
              name="Contacts"
              component={ContactScreen}
              options={{headerShown: false}}
            />
            <Tab.Screen
              name="Chatss"
              component={ChatsScreen}
              options={{headerShown: false}}
            />
          </Tab.Navigator>
        )}
      </NavigationContainer>
    </LoginProvider>
  );
}
